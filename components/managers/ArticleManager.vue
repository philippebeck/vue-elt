<template>
  <CardElt>
    <template #header>
      <h2 id="article">
        <i class="fa-regular fa-newspaper fa-lg"
          aria-hidden="true">
        </i>
        {{ val.ARTICLE_MANAGER }}
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
              :info="val.INFO_UP_NAME"/>
          </template>

          <template #cell-text="slotProps">
            <BtnElt :href="`/article/${articles[slotProps.index].id}`"
              class="btn-cyan"
              :title="val.TITLE_UPDATE + articles[slotProps.index].name">

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
              :info="val.INFO_UP_IMAGE"/>
          </template>

          <template #cell-alt="slotProps">
            <FieldElt type="textarea"
              v-model:value="getArticles()[slotProps.index].alt"
              @keyup.enter="updateArticle(articles[slotProps.index].id)"
              :info="val.INFO_UP_ALT"/>
          </template>

          <template #cell-cat="slotProps">
            <FieldElt type="select"
              :list="val.CATS_ARTICLE"
              v-model:value="getArticles()[slotProps.index].cat"
              @keyup.enter="updateArticle(articles[slotProps.index].id)"
              :info="val.INFO_UP_CATEGORY"/>
          </template>

          <template #cell-likes="slotProps">
            <ListElt :id="'likes-' + articles[slotProps.index].id"
              :dynamic="true"
              :items="articles[slotProps.index].likes"/>
          </template>

          <template #cell-createdAt="slotProps">
            <p>
              {{ new Date(articles[slotProps.index].createdAt).toLocaleString() }}
            </p>

            <BtnElt type="button"
              @click="deleteArticle(articles[slotProps.index].id)" 
              class="btn-red"
              :title="val.TITLE_DELETE + articles[slotProps.index].name">

              <template #btn>
                <i class="fa-solid fa-trash-arrow-up fa-lg fa-fw"></i>
              </template>
            </BtnElt>
          </template>

          <template #cell-updatedAt="slotProps">
            <p>
              {{ new Date(articles[slotProps.index].updatedAt).toLocaleString() }}
            </p>

            <BtnElt type="button"
              @click="updateArticle(articles[slotProps.index].id)" 
              class="btn-sky"
              :title="val.TITLE_UPDATE + articles[slotProps.index].name">

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
    "val",
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
     * ? UPDATE ARTICLE
     * Update an article based on its ID.
     *
     * @param {number} id - The ID of the article.
     */
    updateArticle(id) {
      const article = this.articles.find(a => a.id === id);

      const { CHECK_STRING, TEXT_MIN, TEXT_MAX, API_URL, TOKEN, ALERT_UPDATED } = this.val;
      const { name, text, image, alt, likes, cat } = article;

      if ( article &&
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
