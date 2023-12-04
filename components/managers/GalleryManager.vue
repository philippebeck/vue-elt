<template>
  <CardElt>
    <template #header>
      <h2 id="gallery">
        <i class="fa-regular fa-images fa-lg"
          aria-hidden="true">
        </i>
        {{ constants.GALLERY_MANAGER }}
      </h2>
    </template>

    <template #body>
      <form>
        <TableElt :items="galleries">
          <template #head>{{ constants.HEAD_UP }}</template>

          <template #cell-id="slotProps">
            <a :href="`/gallery/${galleries[slotProps.index].id}`">
              <b>{{ galleries[slotProps.index].id }}</b>
            </a>
          </template>

          <template #cell-name="slotProps">
            <FieldElt v-model:value="getGalleries()[slotProps.index].name"
              @keyup.enter="updateGallery(galleries[slotProps.index].id)"
              :info="constants.INFO_UP_NAME"/>
          </template>

          <template #cell-author="slotProps">
            <FieldElt v-model:value="getGalleries()[slotProps.index].author"
              @keyup.enter="updateGallery(galleries[slotProps.index].id)"
              :info="constants.INFO_UP_NAME"/>
          </template>

          <template #body="slotProps">
            <BtnElt type="button"
              @click="updateGallery(galleries[slotProps.index].id)" 
              class="btn-sky"
              :title="constants.TITLE_GALLERY_UPDATE + galleries[slotProps.index].id">

              <template #btn>
                <i class="fa-solid fa-cloud-arrow-up fa-lg fa-fw"></i>
              </template>
            </BtnElt>

            <BtnElt type="button"
              @click="deleteGallery(galleries[slotProps.index].id)" 
              class="btn-red"
              :title="constants.TITLE_DELETE_GALLERY + galleries[slotProps.index].id">

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
import { deleteData, getItemName, putData, setError } from "servidio"

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

  props: [
    "galleries", 
    "constants"
  ],

  methods: {
    /**
     * GET ALL GALLERYS
     * @returns
     */
    getGalleries() {
      return this.galleries;
    },

    /**
     * UPDATE GALLERY
     * @param {string} id 
     */
    updateGallery(id) {
      for (let gallery of this.galleries) {
        if (gallery.id === id) {

          let data = new FormData();
          data.append("name", gallery.name);
          data.append("author", gallery.author);

          const URL = this.constants.API_URL + "/galleries/" + id;

          putData(URL, data, this.constants.TOKEN)
            .then(() => {
              alert(gallery.name + this.constants.ALERT_UPDATED);
            })
            .catch(err => { setError(err) });
        }
      }
    },

    /**
     * DELETE GALLERY
     * @param {string} id 
     */
    deleteGallery(id) {
      let name = getItemName(id, this.galleries);

      if (confirm(`${this.constants.TITLE_DELETE} ${name} ?`) === true) {
        const URL = this.constants.API_URL + "/galleries/" + id;

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
