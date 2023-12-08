<template>
  <form>
    <FieldElt id="email"
      type="email"
      v-model:value="email"
      :info="constants.INFO_EMAIL">

      <template #legend>
        {{ constants.LEGEND_EMAIL }}
      </template>
      <template #label>
        {{ constants.LABEL_EMAIL }}
      </template>
    </FieldElt>

    <FieldElt id="pass"
      type="password"
      v-model:value="pass"
      :info="constants.INFO_PASSWORD">

      <template #legend>
        {{ constants.LEGEND_PASSWORD }}
      </template>
      <template #label>
        {{ constants.LABEL_PASSWORD }}
      </template>
    </FieldElt>

    <vue-recaptcha :sitekey="constants.RECAPTCHA_KEY"
      @verify="onVerify">
      <BtnElt type="button"
        class="btn-green"
        :content="constants.CONTENT_ENTER"
        :title="constants.TITLE_SIGNIN">

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

  props: ["constants"],
  data() {
    return {
      email: "",
      pass: ""
    }
  },

  methods: {
    /**
     * Checks the validity of the given response 
     * and performs signin if successful
     *
     * @param {any} response - The response to verify.
     */
    onVerify(response) {
      const EMAIL_MSG   = this.constants.CHECK_EMAIL;
      const EMAIL_REGEX = this.constants.REGEX_EMAIL;
      const PASS_MSG    = this.constants.CHECK_PASS;
      const PASS_REGEX  = this.constants.REGEX_PASS;

      if (checkRegex(this.email, EMAIL_MSG, EMAIL_REGEX) && 
          checkRegex(this.pass, PASS_MSG, PASS_REGEX)) {

        postData(this.constants.API_URL + "/auth/recaptcha", { response: response })
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
      let auth = new FormData();
      auth.append("email", this.email);
      auth.append("pass", this.pass);

      postData(this.constants.API_URL + "/auth", auth)
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
