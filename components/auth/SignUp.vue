<template>
  <form enctype="multipart/form-data">

    <FieldElt v-model:value="name"
      :info="val.INFO_NAME"
      :min="2">

      <template #legend>
        {{ val.LEGEND_NAME }}
      </template>
      <template #label>
        {{ val.LABEL_NAME }}
      </template>
    </FieldElt>

    <FieldElt type="email"
      v-model:value="email"
      :info="val.INFO_EMAIL">

      <template #legend>
        {{ val.LEGEND_EMAIL }}
      </template>
      <template #label>
        {{ val.LABEL_EMAIL }}
      </template>
    </FieldElt>

    <FieldElt id="image"
      type="file"
      v-model:value="image"
      :info="val.INFO_IMAGE">

      <template #legend>
        {{ val.LEGEND_IMAGE }}
      </template>
      <template #label>
        {{ val.LABEL_IMAGE }}
      </template>
    </FieldElt>

    <FieldElt type="password"
      v-model:value="pass"
      :info="val.INFO_PASSWORD">

      <template #legend>
        {{ val.LEGEND_PASSWORD }}
      </template>
      <template #label>
        {{ val.LABEL_PASSWORD }}
      </template>
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
      const EMAIL_MSG    = this.val.CHECK_EMAIL;
      const EMAIL_REGEX  = this.val.REGEX_EMAIL;
      const NAME_MSG     = this.val.CHECK_STRING;
      const PASS_MSG     = this.val.CHECK_PASS;
      const PASS_REGEX   = this.val.REGEX_PASS;

      if (checkRange(this.name, NAME_MSG) && 
          checkRegex(this.email, EMAIL_MSG, EMAIL_REGEX) && 
          checkRegex(this.pass, PASS_MSG, PASS_REGEX)) {

        const URL = this.val.API_URL + "/auth/recaptcha";

        postData(URL, { response: response })
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
      let image = document.getElementById("image").files[0];

      if (image !== undefined) {
        const URL = this.val.API_URL + "/users";
        const data = new FormData();

        data.append("name", this.name);
        data.append("email", this.email);
        data.append("image", image);
        data.append("pass", this.pass);
        data.append("role", "user");

        postData(URL, data)
          .then(() => {
            alert(this.name + this.val.ALERT_CREATED);
            this.$router.go();
          })
          .catch(err => { setError(err) });

      } else {
        alert(this.val.ALERT_IMG);
      }
    }
  }
}
</script>