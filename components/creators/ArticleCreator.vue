<template>
  <CardElt>
    <template #header>
      <h2 id="create-article">
        <i class="fa-regular fa-pen-to-square fa-lg"
          aria-hidden="true">
        </i>
        {{ val.ARTICLE_CREATOR }}
      </h2>
    </template>

    <template #body>
      <form enctype="multipart/form-data">
        <ListElt :items="val.ARTICLE_FORM">

          <template #item-1>
            <FieldElt v-model:value="name"
              @keyup.enter="createArticle()"
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
            <label for="text">
              {{ val.LEGEND_TEXT }}
            </label>

            <Editor id="text"
              :api-key="val.TINY_KEY"
              v-model="text"
              @keyup.enter="createArticle()"
              :init="{
                toolbar:
                  'undo redo outdent indent align lineheight | \
                  bold italic underline strikethrough backcolor | \
                  blocks fontfamily fontsize'
              }"/>
          </template>

          <template #item-3>
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
          </template>

          <template #item-4>
            <FieldElt type="textarea"
              v-model:value="alt"
              @keyup.enter="createArticle()"
              :info="val.INFO_ALT">

              <template #legend>
                {{ val.LEGEND_ALT }}
              </template>
              <template #label>
                {{ val.LABEL_ALT }}
              </template>
            </FieldElt>
          </template>

          <template #item-5>
            <FieldElt type="select"
              :list="val.CATS_ARTICLE"
              v-model:value="cat"
              @keyup.enter="createArticle()"
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
        <br>

        <BtnElt type="button"
          @click="createArticle()" 
          class="btn-green"
          :content="val.CONTENT_CREATE"
          :title="val.ARTICLE_CREATOR">

          <template #btn>
            <i class="fa-solid fa-square-plus fa-lg"></i>
          </template>
        </BtnElt>
      </form>
    </template>
  </CardElt>
</template>

<script>
import { checkRange, postData, setError } from "servidio"

import BtnElt from "../elements/BtnElt"
import CardElt from "../elements/CardElt"
import FieldElt from "../elements/FieldElt"
import ListElt from "../elements/ListElt"
import Editor from "@tinymce/tinymce-vue"

export default {
  name: "ArticleCreator",
  components: {
    BtnElt,
    CardElt,
    FieldElt,
    ListElt,
    Editor
  },

  props: ["val"],
  data() {
    return {
      name: "",
      text:"",
      image: "",
      alt: "",
      cat: ""
    }
  },

  methods: {
    /**
     * ? CREATE ARTICLE
     * Creates an article by sending a POST request 
     * to the server with the provided data.
     */
    createArticle() {
      const MSG = this.val.CHECK_STRING;
      const MIN = this.val.TEXT_MIN;
      const MAX = this.val.TEXT_MAX;

      if (checkRange(this.name, MSG) && 
          checkRange(this.text, MSG, MIN, MAX) && 
          checkRange(this.alt, MSG)) {

        if (this.cat === "") this.cat = this.val.CAT_ARTICLE;
        let image = document.getElementById("image").files[0];

        if (image !== undefined) {
          const URL   = this.val.API_URL + "/articles";
          const data  = new FormData();

          data.append("name", this.name);
          data.append("text", this.text);
          data.append("image", image);
          data.append("alt", this.alt);
          data.append("cat", this.cat);

          postData(URL, data, this.val.TOKEN)
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
}
</script>