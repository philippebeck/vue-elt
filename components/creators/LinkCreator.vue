<template>
  <CardElt>
    <template #header>
      <h2 id="create-link">
        <i class="fa-solid fa-link fa-lg"
          aria-hidden="true">
        </i>
        {{ val.LINK_CREATOR }}
      </h2>
    </template>

    <template #body>
      <form>
        <ListElt :items="val.LINK_FORM">

          <template #item-1>
            <FieldElt v-model:value="name"
              @keyup.enter="createLink()"
              :info="val.INFO_NAME">

              <template #legend>
                {{ val.LEGEND_NAME }}
              </template>
              <template #label>
                {{ val.LABEL_NAME }}
              </template>
            </FieldElt>
          </template>

          <template #item-2>
            <FieldElt type="url"
              v-model:value="url"
              @keyup.enter="createLink()"
              :info="val.INFO_URL"
              :min="val.URL_MIN"
              :max="val.URL_MAX">

              <template #legend>
                {{ val.LEGEND_URL }}
              </template>
              <template #label>
                {{ val.LABEL_URL }}
              </template>
            </FieldElt>
          </template>
          
          <template #item-3>
            <FieldElt type="select"
              :list="val.CATS_LINK"
              v-model:value="cat"
              @keyup.enter="createLink()"
              :info="val.INFO_CATEGORY">

              <template #legend>
                {{ val.LEGEND_CATEGORY }}
              </template>
              <template #label>
                {{ val.LABEL_CATEGORY }}
              </template>
            </FieldElt>
          </template>
        </ListElt>

        <BtnElt type="button"
          @click="createLink()" 
          class="btn-green"
          :content="val.CONTENT_CREATE"
          :title="val.LINK_CREATOR">

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

  props: ["val"],
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
      const NAME_MSG = this.val.CHECK_STRING;
      const URL_MSG  = this.val.CHECK_URL;
      const REGEX    = this.val.REGEX_URL;

      if (this.url.startsWith("http")) this.url = this.url.split('//')[1];
      if (this.cat === "") this.cat = this.val.CAT_LINK;

      if (checkRange(this.name, NAME_MSG) && 
          checkRegex(`https://${this.url}`, URL_MSG, REGEX)) {

        const URL   = this.val.API_URL + "/links";
        const data  = new FormData();

        data.append("name", this.name);
        data.append("url", this.url);
        data.append("cat", this.cat);

        postData(URL, data, this.val.TOKEN)
          .then(() => {
            alert(this.name + this.val.ALERT_CREATED);
            this.$router.go();
          })
          .catch(err => { setError(err) });
      }
    }
  }
}
</script>
