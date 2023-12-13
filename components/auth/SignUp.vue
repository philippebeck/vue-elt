<template>
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
</template>

<script>
import { checkRange, checkRegex, postData, setError } from "servidio"

import BtnElt from "../elements/BtnElt"
import FieldElt from "../elements/FieldElt"
import { VueRecaptcha } from "vue-recaptcha";

export default {
  name: "SignUp",
  components: {  
    BtnElt,
    FieldElt,
    VueRecaptcha 
  },
  props: ["val"],

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
    }
  }
}
</script>