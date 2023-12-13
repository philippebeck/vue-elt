<template>
  <form>
    <FieldElt type="email"
      v-model:value="email"
      :info="val.INFO_EMAIL"
      required>
      <template #legend>{{ val.LEGEND_EMAIL }}</template>
      <template #label>{{ val.LABEL_EMAIL }}</template>
    </FieldElt>

    <vue-recaptcha :sitekey="val.RECAPTCHA_KEY"
      @verify="onVerify">
      <BtnElt type="button"
        class="btn-orange"
        :content="val.CONTENT_SEND"
        :title="val.TITLE_FORGOT">
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
  props: ["val"],

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
      const { CHECK_EMAIL, REGEX_EMAIL, API_URL } = this.val;

      if (checkRegex(this.email, CHECK_EMAIL, REGEX_EMAIL)) {
        const URL = `${API_URL}/auth/recaptcha`;

        postData(URL, { response })
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
      const { CONFIRM_FORGOT, API_URL, FORGOT_SUBJECT, FORGOT_TEXT, ALERT_SENDED } = this.val;

      if (confirm(CONFIRM_FORGOT) === true) {
        const URL   = `${API_URL}/auth/pass`;
        const data  = new FormData();

        data.append("email", this.email);
        data.append("subject", FORGOT_SUBJECT);
        data.append("html", FORGOT_TEXT);

        postData(URL, data)
          .then(() => {
            alert(FORGOT_SUBJECT + ALERT_SENDED);
            this.$router.push("/login");
          })
          .catch(err => { setError(err) });
      }
    }
  }
}
</script>
