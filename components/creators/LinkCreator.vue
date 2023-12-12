<template>
  <CardElt>
    <template #header>
      <h2 id="create-link">
        <i class="fa-solid fa-link fa-lg"
          aria-hidden="true">
        </i>
        {{ constants.LINK_CREATOR }}
      </h2>
    </template>

    <template #body>
      <form>
        <ListElt :items="constants.LINK_FORM">

          <template #item-1>
            <FieldElt v-model:value="name"
              @keyup.enter="createLink()"
              :info="constants.INFO_NAME">

              <template #legend>
                {{ constants.LEGEND_NAME }}
              </template>
              <template #label>
                {{ constants.LABEL_NAME }}
              </template>
            </FieldElt>
          </template>

          <template #item-2>
            <FieldElt type="url"
              v-model:value="url"
              @keyup.enter="createLink()"
              :info="constants.INFO_URL"
              :min="constants.URL_MIN"
              :max="constants.URL_MAX">

              <template #legend>
                {{ constants.LEGEND_URL }}
              </template>
              <template #label>
                {{ constants.LABEL_URL }}
              </template>
            </FieldElt>
          </template>
          
          <template #item-3>
            <FieldElt type="select"
              :list="constants.CATS_LINK"
              v-model:value="cat"
              @keyup.enter="createLink()"
              :info="constants.INFO_CATEGORY">

              <template #legend>
                {{ constants.LEGEND_CATEGORY }}
              </template>
              <template #label>
                {{ constants.LABEL_CATEGORY }}
              </template>
            </FieldElt>
          </template>
        </ListElt>

        <BtnElt type="button"
          @click="createLink()" 
          class="btn-green"
          :content="constants.CONTENT_CREATE"
          :title="constants.LINK_CREATOR">

          <template #btn>
            <i class="fa-solid fa-square-plus fa-lg"></i>
          </template>
        </BtnElt>
      </form>
    </template>
  </CardElt>
</template>

<script>
import { checkRange, checkRegex, postData, setError } from "servidio"

import BtnElt from "../elements/BtnElt"
import CardElt from "../elements/CardElt"
import FieldElt from "../elements/FieldElt"
import ListElt from "../elements/ListElt"

export default {
  name: "LinkCreator",
  components: {
    BtnElt,
    CardElt,
    FieldElt,
    ListElt
  },

  props: ["constants"],
  data() {
    return {
      name: "",
      url: "",
      cat: ""
    }
  },

  methods: {
    /**
     * ? CREATE LINK
     * Creates a link by sending a POST request 
     * to the server with the provided data.
     */
    createLink() {
      const NAME_MSG = this.constants.CHECK_STRING;
      const URL_MSG  = this.constants.CHECK_URL;
      const REGEX    = this.constants.REGEX_URL;

      if (this.url.startsWith("http")) this.url = this.url.split('//')[1];
      if (this.cat === "") this.cat = this.constants.CAT_LINK;

      if (checkRange(this.name, NAME_MSG) && 
          checkRegex(`https://${this.url}`, URL_MSG, REGEX)) {

        const URL   = this.constants.API_URL + "/links";
        const data  = new FormData();

        data.append("name", this.name);
        data.append("url", this.url);
        data.append("cat", this.cat);

        postData(URL, data, this.constants.TOKEN)
          .then(() => {
            alert(this.name + this.constants.ALERT_CREATED);
            this.$router.go();
          })
          .catch(err => { setError(err) });
      }
    }
  }
}
</script>
