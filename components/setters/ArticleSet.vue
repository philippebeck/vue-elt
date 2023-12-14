<template>
  <CardElt id="article-set">
    <template #header>
      <h2>
        <i class="fa-regular fa-newspaper fa-lg"></i>
        {{ val.ARTICLE_MANAGER }}
      </h2>
    </template>

    <template #body>
      <form enctype="multipart/form-data">
        <ListElt :items="val.ARTICLE_FORM">

          <template #item-1>
            <FieldElt v-model:value="name" 
              @keyup.enter="createArticle()"
              :info="val.INFO_NAME">
              <template #legend>{{ val.LEGEND_NAME }}</template>
              <template #label>{{ val.LABEL_NAME }}</template>
            </FieldElt>
          </template>

          <template #item-2>
            <label for="text">{{ val.LEGEND_TEXT }}</label>
            <Editor id="text"
              :api-key="val.TINY_KEY"
              v-model="text"
              @keyup.enter="createArticle()"
              :init="{ toolbar:
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
              <template #legend>{{ val.LEGEND_IMAGE }}</template>
              <template #label>{{ val.LABEL_IMAGE }}</template>
            </FieldElt>
          </template>

          <template #item-4>
            <FieldElt type="textarea"
              v-model:value="alt"
              @keyup.enter="createArticle()"
              :info="val.INFO_ALT">
              <template #legend>{{ val.LEGEND_ALT }}</template>
              <template #label>{{ val.LABEL_ALT }}</template>
            </FieldElt>
          </template>

          <template #item-5>
            <FieldElt type="select"
              :list="val.CATS_ARTICLE"
              v-model:value="cat"
              @keyup.enter="createArticle()"
              :info="val.INFO_CATEGORY">
              <template #legend>{{ val.LEGEND_CATEGORY }}</template>
              <template #label>{{ val.LABEL_CATEGORY }}</template>
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
import { checkRange, deleteData, getItemName, postData, putData, setError } from "servidio"

import BtnElt from "../elements/BtnElt"
import CardElt from "../elements/CardElt"
import FieldElt from "../elements/FieldElt"
import ListElt from "../elements/ListElt"

import Editor from "@tinymce/tinymce-vue"

export default {
  name: "ArticleSet",
  components: {
    BtnElt,
    CardElt,
    FieldElt,
    ListElt,
    Editor
  },
  props: ["articles", "val", "users"],

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
     * ? GET ATICLES
     * Get the articles.
     *
     * @return {Array} The articles.
     */
    getArticles() {
      return this.articles;
    },

    /**
     * ? CREATE ARTICLE
     * Creates an article by sending a POST request 
     * to the server with the provided data.
     */
    createArticle() {
      const { CHECK_STRING, TEXT_MIN, TEXT_MAX, CAT_ARTICLE, API_URL, TOKEN, ALERT_CREATED, ALERT_IMG } = this.val;

      if (checkRange(this.name, CHECK_STRING) && 
          checkRange(this.text, CHECK_STRING, TEXT_MIN, TEXT_MAX) && 
          checkRange(this.alt, CHECK_STRING)) {

        if (this.cat === "") this.cat = CAT_ARTICLE;
        const img = document.getElementById("image")?.files[0];

        if (img !== undefined) {
          const URL   = `${API_URL}/articles`;
          const data  = new FormData();

          data.append("name", this.name);
          data.append("text", this.text);
          data.append("image", img);
          data.append("alt", this.alt);
          data.append("cat", this.cat);

          postData(URL, data, TOKEN)
            .then(() => {
              alert(this.name + ALERT_CREATED);
              this.$router.go();
            })
            .catch(err => { setError(err) });

        } else {
          alert(ALERT_IMG);
        }
      }
    },

    /**
     * ? UPDATE ARTICLE
     * Update an article based on its ID.
     *
     * @param {number} id - The ID of the article.
     */
    updateArticle(id) {
      const article = this.articles.find(a => a.id === id);

      const { CHECK_STRING, TEXT_MIN, TEXT_MAX, API_URL, TOKEN, ALERT_UPDATED } = this.val;
      const { name, text, image, alt, likes, cat } = article;

      if (article &&
        checkRange(name, CHECK_STRING) &&
        checkRange(text, CHECK_STRING, TEXT_MIN, TEXT_MAX) &&
        checkRange(alt, CHECK_STRING) ) {

        const URL   = `${API_URL}/articles/${id}`
        const img   = document.getElementById(id)?.files?.[0] ?? image;
        const data  = new FormData();

        data.append("name", name);
        data.append("text", text);
        data.append("image", img);
        data.append("alt", alt);
        data.append("likes", JSON.stringify(likes));
        data.append("cat", cat);

        putData(URL, data, TOKEN)
          .then(() => { alert(name + ALERT_UPDATED) })
          .catch(err => { setError(err) });
      }
    },

    /**
     * ? DELETE ARTICLE
     * Deletes an article with the given ID.
     *
     * @param {number} id - The ID of the article to be deleted.
     */
    deleteArticle(id) {
      const NAME = getItemName(id, this.articles);
      const { TITLE_DELETE, API_URL, TOKEN, ALERT_DELETED } = this.val;

      if (confirm(`${TITLE_DELETE} ${NAME} ?`) === true) {
        const URL = `${API_URL}/articles/${id}`

        deleteData(URL, TOKEN)
          .then(() => {
            alert(NAME + ALERT_DELETED);
            this.$router.go();
          })
          .catch(err => { setError(err) });
      }
    }
  }
}
</script>
