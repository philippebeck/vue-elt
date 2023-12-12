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
        const URL = this.constants.API_URL + "/auth/recaptcha";

        postData(URL, { response: response })
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
        const URL   = this.constants.API_URL + "/auth/pass";
        const data  = new FormData();

        data.append("email", this.email);
        data.append("subject", this.constants.FORGOT_SUBJECT);
        data.append("html", this.constants.FORGOT_TEXT);

        postData(URL, data)
          .then(() => {
            alert(data.get("subject") + this.constants.ALERT_SENDED);
            this.$router.push("/login");
          })
          .catch(err => { setError(err) });
      }
    }
  }
}
</script>
