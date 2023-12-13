<template>
  <CardElt>
    <template #header>
      <h2 id="gallery">
        <i class="fa-regular fa-images fa-lg"
          aria-hidden="true">
        </i>
        {{ val.GALLERY_MANAGER }}
      </h2>
    </template>

    <template #body>
      <form>
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
import { checkRange, deleteData, getItemName, putData, setError } from "servidio"

import BtnElt from "../elements/BtnElt"
import CardElt from "../elements/CardElt"
import FieldElt from "../elements/FieldElt"
import TableElt from "../elements/TableElt"

export default {
  name: "GalleryManager",
  components: {
    BtnElt,
    CardElt,
    FieldElt,
    TableElt
  },
  props: ["galleries", "val"],

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
