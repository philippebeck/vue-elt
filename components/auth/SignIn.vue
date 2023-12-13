<template>
  <form>
    <FieldElt id="email"
      type="email"
      v-model:value="email"
      :info="val.INFO_EMAIL">
      <template #legend>{{ val.LEGEND_EMAIL }}</template>
      <template #label>{{ val.LABEL_EMAIL }}</template>
    </FieldElt>

    <FieldElt id="pass"
      type="password"
      v-model:value="pass"
      :info="val.INFO_PASSWORD">
      <template #legend>{{ val.LEGEND_PASSWORD }}</template>
      <template #label>{{ val.LABEL_PASSWORD }}</template>
    </FieldElt>

    <vue-recaptcha :sitekey="val.RECAPTCHA_KEY"
      @verify="onVerify">
      <BtnElt type="button"
        class="btn-green"
        :content="val.CONTENT_ENTER"
        :title="val.TITLE_SIGNIN">
        <template #btn>
          <i class="fa-solid fa-door-open fa-lg"></i>
        </template>
      </BtnElt>
    </vue-recaptcha>
  </form>
</template>

<script>
import { checkRegex, postData, setError } from "servidio"

import BtnElt from "../elements/BtnElt"
import FieldElt from "../elements/FieldElt"
import { VueRecaptcha } from "vue-recaptcha";

export default {
  name: "SignIn",
  components: {  
    BtnElt,
    FieldElt,
    VueRecaptcha 
  },
  props: ["val"],

  data() {
    return {
      email: "",
      pass: ""
    }
  },

  methods: {
    /**
     * ? ON VERIFY
     * Checks the validity of the given response 
     * and performs signin if successful
     *
     * @param {any} response - The response to verify.
     */
    onVerify(response) {
      const { CHECK_EMAIL, REGEX_EMAIL, CHECK_PASS, REGEX_PASS, API_URL } = this.val;

      if (checkRegex(this.email, CHECK_EMAIL, REGEX_EMAIL) && 
          checkRegex(this.pass, CHECK_PASS, REGEX_PASS)) {

        const URL = `${API_URL}/auth/recaptcha`;

        postData(URL, { response: response })
          .then(result => {
            if (result.success) {
              this.signIn();

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
     * ? SIGN IN
     * Signs in the user.
     */
    signIn() {
      const URL   = `${this.val.API_URL}/auth`;
      const data  = new FormData();

      data.append("email", this.email);
      data.append("pass", this.pass);

      postData(URL, data)
        .then((res) => {
          localStorage.setItem("userToken", JSON.stringify(res.token));
          localStorage.setItem("userId", JSON.stringify(res.userId));

          this.$router.go();
        })
        .catch(err => { setError(err) });
    }
  }
}
</script>
