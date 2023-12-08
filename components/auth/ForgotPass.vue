<template>
  <form>
    <FieldElt type="email"
      v-model:value="email"
      :info="constants.INFO_EMAIL"
      required>

      <template #legend>
        {{ constants.LEGEND_EMAIL }}
      </template>
      <template #label>
        {{ constants.LABEL_EMAIL }}
      </template>
    </FieldElt>

    <vue-recaptcha :sitekey="constants.RECAPTCHA_KEY"
      @verify="onVerify">
      <BtnElt type="button"
        class="btn-orange"
        :content="constants.CONTENT_SEND"
        :title="constants.TITLE_FORGOT">

        <template #btn>
          <i class="fa-regular fa-paper-plane fa-lg"></i>
        </template>
      </BtnElt>
    </vue-recaptcha>
  </form>
</template>

<script>
import { checkRegex, postData, setError } from "servidio"

import BtnElt from "../elements/BtnElt"
import FieldElt from "../elements/FieldElt"
import { VueRecaptcha } from "vue-recaptcha"

export default {
  name: "ForgotPass",
  components: { 
    BtnElt,
    FieldElt,
    VueRecaptcha 
  },

  props: ["constants"],
  data() {
    return {
      email: ""
    }
  },

  methods: {
    /**
     * ? ON VERIFY
     * Checks the validity of the given response 
     * and sends new password if successful
     *
     * @param {any} response - The response to verify.
     */
    onVerify(response) {
      const MSG    = this.constants.CHECK_EMAIL;
      const REGEX  = this.constants.REGEX_EMAIL;

      if (checkRegex(this.email, MSG, REGEX)) {

        postData(this.constants.API_URL + "/auth/recaptcha", { response: response })
          .then(result => {
            if (result.success) {
              this.forgotPass();

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
     * ? FORGOT PASS
     * Executes the forgot password functionality.
     */
    forgotPass() {
      if (confirm(this.constants.CONFIRM_FORGOT) === true) {
        let message = new FormData();

        message.append("email", this.email);
        message.append("subject", this.constants.FORGOT_SUBJECT);
        message.append("html", this.constants.FORGOT_TEXT);

        postData(this.constants.API_URL + "/auth/pass", message)
          .then(() => {
            alert(message.get("subject") + this.constants.ALERT_SENDED);
            this.$router.push("/login");
          })
          .catch(err => { setError(err) });
      }
    }
  }
}
</script>
