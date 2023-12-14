<template>
  <CardElt id="gallery-set">
    <template #header>
      <h2>
        <i class="fa-regular fa-images fa-lg"></i>
        {{ val.GALLERY_MANAGER }}
      </h2>
    </template>

    <template #body>
      <form>
        <ListElt :items="val.GALLERY_FORM">

          <template #item-1>
            <FieldElt v-model:value="name"
              @keyup.enter="createGallery()"
              :info="val.INFO_NAME">
              <template #legend>{{ val.LEGEND_NAME }}</template>
              <template #label>{{ val.LABEL_NAME }}</template>
            </FieldElt>
          </template>

          <template #item-2>
            <FieldElt type="author"
              v-model:value="author"
              @keyup.enter="createGallery()"
              :info="val.INFO_AUTHOR"
              :min="val.URL_MIN"
              :max="val.URL_MAX">
              <template #legend>{{ val.LEGEND_AUTHOR }}</template>
              <template #label>{{ val.LABEL_AUTHOR }}</template>
            </FieldElt>
          </template>
        </ListElt>

        <BtnElt type="button"
          @click="createGallery()" 
          class="btn-green"
          :content="val.CONTENT_CREATE"
          :title="val.GALLERY_CREATOR">
          <template #btn>
            <i class="fa-solid fa-square-plus fa-lg"></i>
          </template>
        </BtnElt>
      </form>

      <form v-if="galleries.length > 0">
        <TableElt :items="galleries">
          <template #head>{{ val.HEAD_UP }}</template>

          <template #cell-id="slotProps">
            <a :href="`/gallery/${galleries[slotProps.index].id}`">
              <b>{{ galleries[slotProps.index].id }}</b>
            </a>
          </template>

          <template #cell-name="slotProps">
            <FieldElt v-model:value="getGalleries()[slotProps.index].name"
              @keyup.enter="updateGallery(galleries[slotProps.index].id)"
              :info="val.INFO_UP_NAME"/>
          </template>

          <template #cell-author="slotProps">
            <FieldElt v-model:value="getGalleries()[slotProps.index].author"
              @keyup.enter="updateGallery(galleries[slotProps.index].id)"
              :info="val.INFO_UP_NAME"/>
          </template>

          <template #body="slotProps">
            <BtnElt type="button"
              @click="updateGallery(galleries[slotProps.index].id)" 
              class="btn-sky"
              :title="val.TITLE_GALLERY_UPDATE + galleries[slotProps.index].id">
              <template #btn>
                <i class="fa-solid fa-cloud-arrow-up fa-lg fa-fw"></i>
              </template>
            </BtnElt>
            <BtnElt type="button"
              @click="deleteGallery(galleries[slotProps.index].id)" 
              class="btn-red"
              :title="val.TITLE_DELETE_GALLERY + galleries[slotProps.index].id">
              <template #btn>
                <i class="fa-solid fa-trash-arrow-up fa-lg fa-fw"></i>
              </template>
            </BtnElt>
          </template>
        </TableElt>
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
import TableElt from "../elements/TableElt"

export default {
  name: "GallerySet",
  components: {
    BtnElt,
    CardElt,
    FieldElt,
    ListElt,
    TableElt
  },
  props: ["galleries", "val"],

  data() {
    return {
      name: "",
      author: ""
    }
  },

  methods: {
    /**
     * ? GET GALLERIES
     * Retrieves the galleries.
     *
     * @return {Array} The list of galleries.
     */
    getGalleries() {
      return this.galleries;
    },

    /**
     * ? CREATE GALLERY
     * Creates a galleryby sending a POST request 
     * to the server with the provided data.
     */
    createGallery() {
      const { CHECK_STRING, API_URL, TOKEN, ALERT_CREATED } = this.val;

      if (checkRange(this.name, CHECK_STRING) &&
          checkRange(this.author, CHECK_STRING)) {

        const URL   = `${API_URL}/galleries`;
        const data  = new FormData();

        data.append("name", this.name);
        data.append("author", this.author);

        postData(URL, data, TOKEN)
          .then(() => {
            alert(this.name + ALERT_CREATED);
            this.$router.go();
          })
          .catch(err => { setError(err) });
      }
    },

    /**
     * ? UPDATE GALLERY
     * Update the gallery with the given ID.
     *
     * @param {number} id - The ID of the gallery to update.
     */
    updateGallery(id) {
      const { CHECK_STRING, API_URL, TOKEN, ALERT_UPDATED } = this.val;
      const gallery = this.galleries.find(g => g.id === id);
      let { name, author } = gallery;

      if (gallery &&
        checkRange(name, CHECK_STRING) &&
        checkRange(author, CHECK_STRING)) {

        const URL   = `${API_URL}/galleries/${id}`;
        const data  = new FormData();

        data.append("name", name);
        data.append("author", author);

        putData(URL, data, TOKEN)
          .then(() => { alert(name + ALERT_UPDATED) })
          .catch(err => { setError(err) });
      }
    },

    /**
     * ? DELETE GALLERY
     * Deletes a gallery with the specified ID.
     *
     * @param {number} id - The ID of the gallery to be deleted.
     */
    deleteGallery(id) {
      const NAME = getItemName(id, this.galleries);
      const { TITLE_DELETE, API_URL, TOKEN, ALERT_DELETED } = this.val;

      if (confirm(`${TITLE_DELETE} ${NAME} ?`) === true) {
        const URL = `${API_URL}/galleries/${id}`

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
