<template>
  <CardElt id="user-set">
    <template #header>
      <h2>
        <i class="fa-solid fa-users-gear fa-lg"></i>
        {{ val.USER_MANAGER }}
      </h2>
    </template>

    <template #body>
      <form enctype="multipart/form-data">
        <TableElt :items="users">

          <template #cell-id="slotProps">
            <b>{{ users[slotProps.index].id }}</b>
          </template>

          <template #cell-name="slotProps">
            <FieldElt :id="`name-${users[slotProps.index].id}`"
              v-model:value="getUsers()[slotProps.index].name"
              @keyup.enter="updateUser(users[slotProps.index].id)"
              :info="val.INFO_UP_NAME">
              <template #legend>{{ val.LEGEND_NAME }}</template>
              <template #label>{{ val.LABEL_NAME }}</template>
            </FieldElt>
          </template>

          <template #cell-email="slotProps">
            <FieldElt :id="`email-${users[slotProps.index].id}`"
              type="email"
              v-model:value="getUsers()[slotProps.index].email"
              @keyup.enter="updateUser(users[slotProps.index].id)"
              :info="val.INFO_UP_EMAIL">
              <template #legend>{{ val.LEGEND_EMAIL }}</template>
              <template #label>{{ val.LABEL_EMAIL }}</template>
            </FieldElt>
          </template>

          <template #cell-image="slotProps">
            <MediaElt :src="'/img/thumbnails/users/' + users[slotProps.index].image"
              :alt="users[slotProps.index].name"
              :title="users[slotProps.index].image"/>

            <FieldElt :id="`image-${users[slotProps.index].id}`"
              type="file"
              :info="val.INFO_UP_IMAGE">
              <template #legend>{{ val.LEGEND_IMAGE }}</template>
              <template #label>{{ val.LABEL_IMAGE }}</template>
            </FieldElt>
          </template>

          <template #cell-role="slotProps">
            <FieldElt :id="`role-${users[slotProps.index].id}`"
              type="select"
              :list="val.ROLES_USER"
              v-model:value="getUsers()[slotProps.index].role"
              @keyup.enter="updateUser(users[slotProps.index].id)"
              :info="val.INFO_UP_ROLE">
              <template #legend>{{ val.LEGEND_ROLE }}</template>
              <template #label>{{ val.LABEL_ROLE }}</template>
            </FieldElt>
          </template>

          <template #cell-createdAt="slotProps">
            <p>{{ new Date(getUsers()[slotProps.index].createdAt).toLocaleString() }}</p>

            <BtnElt type="button"
              @click="deleteUser(users[slotProps.index].id)" 
              class="btn-red"
              :title="val.TITLE_DELETE + users[slotProps.index].name">
              <template #btn>
                <i class="fa-solid fa-trash-arrow-up fa-lg fa-fw"></i>
              </template>
            </BtnElt>
          </template>

          <template #cell-updatedAt="slotProps">
            <p>{{ new Date(getUsers()[slotProps.index].updatedAt).toLocaleString() }}</p>

            <BtnElt type="button"
              @click="updateUser(users[slotProps.index].id)" 
              class="btn-sky"
              :title="val.TITLE_UPDATE + users[slotProps.index].name">
              <template #btn>
                <i class="fa-solid fa-cloud-arrow-up fa-lg fa-fw"></i>
              </template>
            </BtnElt>
          </template>
        </TableElt>
      </form>
    </template>
  </CardElt>
</template>

<script>
import { checkRange, checkRegex, deleteData, getItemName, putData, setError } from "servidio"

import BtnElt from "../elements/BtnElt"
import CardElt from "../elements/CardElt"
import FieldElt from "../elements/FieldElt"
import MediaElt from "../elements/MediaElt"
import TableElt from "../elements/TableElt"

export default {
  name: "UserSet",
  components: { BtnElt, CardElt, FieldElt, MediaElt, TableElt },
  props: ["token", "users", "val"],
  data() {
    return {
      name: "",
      email: "",
      image:"",
      pass: ""
    }
  },

  methods: {
    /**
     * ? GET USERS
     * * Get the users.
     * @return {Array} An array of user objects.
     */
    getUsers() {
      return this.users;
    },

    /**
     * ? UPDATE USER
     * * Update a user by their ID.
     * @param {number} id - The ID of the user to update.
     */
    updateUser(id) {
      const { ALERT_UPDATED, API_URL, CHECK_EMAIL, CHECK_STRING, REGEX_EMAIL } = this.val;

      const user = this.users.find(u => u.id === id);
      let { name, email, image, role } = user;

      if (user && checkRange(name, CHECK_STRING) && checkRegex(email, CHECK_EMAIL, REGEX_EMAIL)) {
        const URL   = `${API_URL}/users/${id}`;
        const img   = document.getElementById(`image-${id}`)?.files[0] ?? image;
        const data  = new FormData();

        data.append("name", name);
        data.append("email", email);
        data.append("image", img);
        data.append("role", role);

        putData(URL, data, this.token)
          .then(() => alert(name + ALERT_UPDATED))
          .catch(setError);
      }
    },

    /**
     * ? DELETE USER
     * * Delete a user by their ID.
     * @param {number} id - The ID of the user to be deleted.
     */
    deleteUser(id) {
      const { TITLE_DELETE, API_URL, ALERT_DELETED } = this.val;
      const NAME = getItemName(id, this.users);

      if (confirm(`${TITLE_DELETE} ${NAME} ?`) === true) {
        const URL = `${API_URL}/users/${id}`;

        deleteData(URL, this.token)
          .then(() => {
            alert(NAME + ALERT_DELETED);
            this.$router.go();
          })
          .catch(err => { setError(err) });
      }
    }
  }
}
</script>
