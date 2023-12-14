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

        <FieldElt v-model:value="name"
          :info="val.INFO_NAME"
          :min="2">
          <template #legend>{{ val.LEGEND_NAME }}</template>
          <template #label>{{ val.LABEL_NAME }}</template>
        </FieldElt>

        <FieldElt type="email"
          v-model:value="email"
          :info="val.INFO_EMAIL">
          <template #legend>{{ val.LEGEND_EMAIL }}</template>
          <template #label>{{ val.LABEL_EMAIL }}</template>
        </FieldElt>

        <FieldElt id="image"
          type="file"
          v-model:value="image"
          :info="val.INFO_IMAGE">
          <template #legend>{{ val.LEGEND_IMAGE }}</template>
          <template #label>{{ val.LABEL_IMAGE }}</template>
        </FieldElt>

        <FieldElt type="password"
          v-model:value="pass"
          :info="val.INFO_PASSWORD">
          <template #legend>{{ val.LEGEND_PASSWORD }}</template>
          <template #label>{{ val.LABEL_PASSWORD }}</template>
        </FieldElt>

        <vue-recaptcha :sitekey="val.RECAPTCHA_KEY"
          @verify="onVerify">
          <BtnElt type="button"
            class="btn-blue"
            :content="val.CONTENT_SIGNUP"
            :title="val.TITLE_SIGNUP">
            <template #btn>
              <i class="fa-solid fa-user-plus fa-lg"></i>
            </template>
          </BtnElt>
        </vue-recaptcha>
      </form>

      <form v-if="type === 'profile'" enctype="multipart/form-data">
        <TableElt :items="users">

          <template #cell-id="slotProps">
            <b>{{ users[slotProps.index].id }}</b>
          </template>

          <template #cell-name="slotProps">
            <FieldElt v-model:value="getUsers()[slotProps.index].name"
              @keyup.enter="updateUser(users[slotProps.index].id)"
              :info="val.INFO_UP_NAME"/>
          </template>

          <template #cell-email="slotProps">
            <FieldElt type="email"
              v-model:value="getUsers()[slotProps.index].email"
              @keyup.enter="updateUser(users[slotProps.index].id)"
              :info="val.INFO_UP_EMAIL"/>
          </template>

          <template #cell-image="slotProps">
            <MediaElt :src="'/img/thumbnails/users/' + users[slotProps.index].image"
              :alt="users[slotProps.index].name"
              :title="users[slotProps.index].image"/>
            <FieldElt :id="users[slotProps.index].id"
              type="file"
              :info="val.INFO_UP_IMAGE"/>
          </template>

          <template #cell-role="slotProps">
            <FieldElt type="select"
              :list="val.ROLES_USER"
              v-model:value="getUsers()[slotProps.index].role"
              @keyup.enter="updateUser(users[slotProps.index].id)"
              :info="val.INFO_UP_ROLE"/>
          </template>

          <template #cell-created="slotProps">
            <p>{{ new Date(getUsers()[slotProps.index].created).toLocaleString() }}</p>
            <BtnElt type="button"
              @click="deleteUser(users[slotProps.index].id)" 
              class="btn-red"
              :title="val.TITLE_DELETE + users[slotProps.index].name">
              <template #btn>
                <i class="fa-solid fa-trash-arrow-up fa-lg fa-fw"></i>
              </template>
            </BtnElt>
          </template>

          <template #cell-updated="slotProps">
            <p>{{ new Date(getUsers()[slotProps.index].updated).toLocaleString() }}</p>
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
import { checkRange, checkRegex, deleteData, getItemName, postData, putData, setError } from "servidio"

import BtnElt from "../elements/BtnElt"
import CardElt from "../elements/CardElt"
import FieldElt from "../elements/FieldElt"
import MediaElt from "../elements/MediaElt"
import TableElt from "../elements/TableElt"
import { VueRecaptcha } from "vue-recaptcha";

export default {
  name: "UserSet",
  components: {
    BtnElt ,
    CardElt,
    FieldElt,
    MediaElt,
    TableElt,
    VueRecaptcha 
  },
  props: ["type", "val", "users"],

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
     * Get the users.
     *
     * @return {Array} An array of user objects.
     */
    getUsers() {
      return this.users;
    },

    /**
     * ? ON VERIFY
     * Checks the validity of the given response 
     * and performs signup if successful
     *
     * @param {any} response - The response to verify.
     */
    onVerify(response) {
      const { CHECK_STRING, CHECK_EMAIL, REGEX_EMAIL, CHECK_PASS, REGEX_PASS, API_URL } = this.val;

      if (checkRange(this.name, CHECK_STRING) && 
          checkRegex(this.email, CHECK_EMAIL, REGEX_EMAIL) && 
          checkRegex(this.pass, CHECK_PASS, REGEX_PASS)) {

        const URL = `${API_URL}/auth/recaptcha`;

        postData(URL, { response })
          .then(result => {
            if (result.success) {
              this.createUser();

            } else {
              alert("Failed captcha verification");
            }
          })
          .catch(err => { 
            setError(err);
            this.$router.go();
          });
      }
    },

    /**
     * ? CREATE USER
     * Creates a new user.
     */
    createUser() {
      const { API_URL, ALERT_CREATED, ALERT_IMG } = this.val;
      const img = document.getElementById("image")?.files[0];

      if (img !== undefined) {
        const URL   = `${API_URL}/users`;
        const data  = new FormData();

        data.append("name", this.name);
        data.append("email", this.email);
        data.append("image", img);
        data.append("pass", this.pass);
        data.append("role", "user");

        postData(URL, data)
          .then(() => {
            alert(this.name + ALERT_CREATED);
            this.$router.go();
          })
          .catch(err => { setError(err) });

      } else {
        alert(ALERT_IMG);
      }
    },

    /**
     * ? UPDATE USER
     * Update a user by their ID.
     *
     * @param {number} id - The ID of the user to update.
     */
    updateUser(id) {
      const { CHECK_STRING, CHECK_EMAIL, REGEX_EMAIL, API_URL, TOKEN, ALERT_UPDATED } = this.val;
      const user = this.users.find(u => u.id === id);
      let { name, email, image, role } = user;

      if (user && 
        checkRange(name, CHECK_STRING) && 
        checkRegex(email, CHECK_EMAIL, REGEX_EMAIL)) {

        const URL   = `${API_URL}/users/${id}`;
        const img   = document.getElementById(id)?.files[0] ?? image;
        const data  = new FormData();

        data.append("name", name);
        data.append("email", email);
        data.append("image", img);
        data.append("role", role);

        putData(URL, data, TOKEN)
          .then(() => alert(name + ALERT_UPDATED))
          .catch(setError);
      }
    },

    /**
     * ? DELETE USER
     * Delete a user by their ID.
     *
     * @param {number} id - The ID of the user to be deleted.
     */
    deleteUser(id) {
      const { TITLE_DELETE, API_URL, TOKEN, ALERT_DELETED } = this.val;
      const NAME = getItemName(id, this.users);

      if (confirm(`${TITLE_DELETE} ${NAME} ?`) === true) {
        const URL = `${API_URL}/users/${id}`;

        deleteData(URL, TOKEN)
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
