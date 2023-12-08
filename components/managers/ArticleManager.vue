<template>
  <CardElt>
    <template #header>
      <h2 id="article">
        <i class="fa-regular fa-newspaper fa-lg"
          aria-hidden="true">
        </i>
        {{ constants.ARTICLE_MANAGER }}
      </h2>
    </template>

    <template #body>
      <form enctype="multipart/form-data">
        <TableElt :items="articles">

          <template #cell-id="slotProps">
            <a :href="`/article/${articles[slotProps.index].id}`">
              <b>{{ articles[slotProps.index].id }}</b>
            </a>
          </template>

          <template #cell-name="slotProps">
            <FieldElt v-model:value="getArticles()[slotProps.index].name"
              @keyup.enter="updateArticle(articles[slotProps.index].id)"
              :info="constants.INFO_UP_NAME"/>
          </template>

          <template #cell-text="slotProps">
            <BtnElt :href="`/article/edit/${articles[slotProps.index].id}`"
              class="btn-cyan"
              :title="constants.TITLE_UPDATE + articles[slotProps.index].name">

              <template #btn>
                <i class="fa-regular fa-edit fa-lg"></i>
              </template>
            </BtnElt>
          </template>

          <template #cell-image="slotProps">
            <MediaElt :src="'/img/thumbnails/articles/' + articles[slotProps.index].image"
              :alt="articles[slotProps.index].alt"
              :title="articles[slotProps.index].name"/>

            <FieldElt :id="articles[slotProps.index].id"
              type="file"
              :info="constants.INFO_UP_IMAGE"/>
          </template>

          <template #cell-alt="slotProps">
            <FieldElt type="textarea"
              v-model:value="getArticles()[slotProps.index].alt"
              @keyup.enter="updateArticle(articles[slotProps.index].id)"
              :info="constants.INFO_UP_ALT"/>
          </template>

          <template #cell-cat="slotProps">
            <FieldElt type="select"
              :list="constants.CATS_ARTICLE"
              v-model:value="getArticles()[slotProps.index].cat"
              @keyup.enter="updateArticle(articles[slotProps.index].id)"
              :info="constants.INFO_UP_CATEGORY"/>
          </template>

          <template #cell-likes="slotProps">
            <ListElt :id="'likes-' + articles[slotProps.index].id"
              :dynamic="true"
              :items="articles[slotProps.index].likes"/>
          </template>

          <template #cell-created="slotProps">
            <p>
              {{ new Date(articles[slotProps.index].created).toLocaleString() }}
            </p>

            <BtnElt type="button"
              @click="deleteArticle(articles[slotProps.index].id)" 
              class="btn-red"
              :title="constants.TITLE_DELETE + articles[slotProps.index].name">

              <template #btn>
                <i class="fa-solid fa-trash-arrow-up fa-lg fa-fw"></i>
              </template>
            </BtnElt>
          </template>

          <template #cell-updated="slotProps">
            <p>
              {{ new Date(articles[slotProps.index].updated).toLocaleString() }}
            </p>

            <BtnElt type="button"
              @click="updateArticle(articles[slotProps.index].id)" 
              class="btn-sky"
              :title="constants.TITLE_UPDATE + articles[slotProps.index].name">

              <template #btn>
                <i class="fa-solid fa-cloud-arrow-up fa-lg fa-fw"></i>
              </template>
            </BtnElt>
          </template>
        </TableElt>
      </form>
    </template>
  </CardElt>
</template>

<script>
import { checkRange, deleteData, getItemName, putData, setError } from "servidio"

import BtnElt from "../elements/BtnElt"
import CardElt from "../elements/CardElt"
import FieldElt from "../elements/FieldElt"
import ListElt from "../elements/ListElt"
import MediaElt from "../elements/MediaElt"
import TableElt from "../elements/TableElt"

export default {
  name: "ArticleManager",
  components: {
    BtnElt,
    CardElt,
    FieldElt,
    ListElt,
    MediaElt,
    TableElt
  },

  props: [
    "articles", 
    "constants",
    "users"
  ],

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
     * ? GET ARTICLE
     * Generates a FormData object with the provided article information and optional image.
     *
     * @param {string} id - The ID of the file input element for the article image.
     * @param {object} article - An object containing the article information.
     * @return {FormData} - The FormData object with the article data.
     */
    getArticle(id, article) {
      let data  = new FormData();
      let image = document.getElementById(id).files[0] ?? article.image;

      data.append("name", article.name);
      data.append("text", article.text);
      data.append("image", image);
      data.append("alt", article.alt);
      data.append("likes", article.likes);
      data.append("cat", article.cat);
      data.append("updated", Date.now());

      return data;
    },

    /**
     * ? CHECK ARTICLE
     * Checks the validity of an article and updates it if valid.
     *
     * @param {number} id - The ID of the article.
     * @param {object} article - The article object containing the name, text, and alt fields.
     */
    checkArticle(id, article) {
      const MSG = this.constants.CHECK_STRING;
      const MIN = this.constants.TEXT_MIN;
      const MAX = this.constants.TEXT_MAX;

      if (checkRange(article.name, MSG) && 
          checkRange(article.text, MSG, MIN, MAX) && 
          checkRange(article.alt, MSG)) {

        const URL = this.constants.API_URL + "/articles/" + id;

        putData(URL, this.getArticle(id, article), this.constants.TOKEN)
          .then(() => {
            alert(article.name + this.constants.ALERT_UPDATED);
          })
          .catch(err => { setError(err) });
      }
    },

    /**
     * ? UPDATE ARTICLE
     * Update an article based on its ID.
     *
     * @param {number} id - The ID of the article.
     */
    updateArticle(id) {
      for (let article of this.articles) {
        if (article.id === id) { this.checkArticle(id, article) }
      }
    },

    /**
     * ? DELETE ARTICLE
     * Deletes an article with the given ID.
     *
     * @param {number} id - The ID of the article to be deleted.
     */
    deleteArticle(id) {
      let name = getItemName(id, this.articles);

      if (confirm(`${this.constants.TITLE_DELETE} ${name} ?`) === true) {
        const URL = this.constants.API_URL + "/articles/" + id;

        deleteData(URL, this.constants.TOKEN)
          .then(() => {
            alert(name + this.constants.ALERT_DELETED);
            this.$router.go();
          })
          .catch(err => { setError(err) });
      }
    }
  }
}
</script>
