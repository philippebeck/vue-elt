<template>
  <CardElt>
    <template #header>
      <h2 id="user">
        <i class="fa-solid fa-users-gear fa-lg"
          aria-hidden="true">
        </i>
        {{ constants.USER_MANAGER }}
      </h2>
    </template>

    <template #body>
      <form enctype="multipart/form-data">
        <TableElt :items="users">

          <template #cell-id="slotProps">
            <b>{{ users[slotProps.index].id }}</b>
          </template>

          <template #cell-name="slotProps">
            <FieldElt v-model:value="getUsers()[slotProps.index].name"
              @keyup.enter="updateUser(users[slotProps.index].id)"
              :info="constants.INFO_UP_NAME"/>
          </template>

          <template #cell-email="slotProps">
            <FieldElt type="email"
              v-model:value="getUsers()[slotProps.index].email"
              @keyup.enter="updateUser(users[slotProps.index].id)"
              :info="constants.INFO_UP_EMAIL"/>
          </template>

          <template #cell-image="slotProps">
            <MediaElt :src="'/img/thumbnails/users/' + users[slotProps.index].image"
              :alt="users[slotProps.index].name"
              :title="users[slotProps.index].image"/>

            <FieldElt :id="users[slotProps.index].id"
              type="file"
              :info="constants.INFO_UP_IMAGE"/>
          </template>

          <template #cell-role="slotProps">
            <FieldElt type="select"
              :list="constants.ROLES_USER"
              v-model:value="getUsers()[slotProps.index].role"
              @keyup.enter="updateUser(users[slotProps.index].id)"
              :info="constants.INFO_UP_ROLE"/>
          </template>

          <template #cell-created="slotProps">
            <p>
              {{ new Date(getUsers()[slotProps.index].created).toLocaleString() }}
            </p>

            <BtnElt type="button"
              @click="deleteUser(users[slotProps.index].id)" 
              class="btn-red"
              :title="constants.TITLE_DELETE + users[slotProps.index].name">

              <template #btn>
                <i class="fa-solid fa-trash-arrow-up fa-lg fa-fw"></i>
              </template>
            </BtnElt>
          </template>

          <template #cell-updated="slotProps">
            <p>
              {{ new Date(getUsers()[slotProps.index].updated).toLocaleString() }}
            </p>

            <BtnElt type="button"
              @click="updateUser(users[slotProps.index].id)" 
              class="btn-sky"
              :title="constants.TITLE_UPDATE + users[slotProps.index].name">

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
  name: "UserManager",
  components: {
    BtnElt,
    CardElt,
    FieldElt,
    MediaElt,
    TableElt
  },

  props: [
    "constants", 
    "users"
  ],

  methods: {
    /**
     * GET ALL USERS
     * @returns
     */
    getUsers() {
      return this.users;
    },

    /**
     * GET USER
     * @param {string} id 
     * @param {object} user 
     */
    getUser(id, user) {
      let data  = new FormData();
      let image = document.getElementById(id).files[0] ?? user.image;

      data.append("name", user.name);
      data.append("email", user.email);
      data.append("image", image);
      data.append("role", user.role);
      data.append("updated", Date.now());

      return data;
    },

    /**
     * CHECK USER
     * @param {string} id 
     * @param {object} user 
     */
    checkUser(id, user) {
      let stringMsg = this.constants.CHECK_STRING;
      let emailMsg  = this.constants.CHECK_EMAIL;
      let regex     = this.constants.REGEX_EMAIL;

      if (checkRange(user.name, stringMsg) && 
          checkRegex(user.email, emailMsg, regex)) {

        const URL = this.constants.API_URL + "/users/" + id;

        putData(URL, this.getUser(id, user), this.constants.TOKEN)
          .then(() => {
            alert(user.name + this.constants.ALERT_UPDATED);
          })
          .catch(err => { setError(err) });
        }
    },

    /**
     * UPDATE USER
     * @param {string} id 
     */
    updateUser(id) {
      for (let user of this.users) {
        if (user.id === id) { this.checkUser(id, user) }
      }
    },

    /**
     * DELETE USER
     * @param {string} id 
     */
    deleteUser(id) {
      let name = getItemName(id, this.users);

      if (confirm(`${this.constants.TITLE_DELETE} ${name} ?`) === true) {
        const URL = this.constants.API_URL + "/users/" + id;

        deleteData(URL, this.constants.TOKEN)
          .then(() => {
            alert(name + this.constants.ALERT_DELETED);
            this.$router.go();
          })
          .catch(err => { setError(err) });
      }
    }
  }
}
</script>
