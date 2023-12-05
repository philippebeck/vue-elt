<template>
  <CardElt>
    <template #header>
      <h2 id="image">
        <i class="fa-regular fa-images fa-lg"
          aria-hidden="true">
        </i>
        {{ constants.IMAGE_MANAGER }}
      </h2>
    </template>

    <template #body>
      <form>
        <TableElt v-for="table in getItemsByGallery(images)"
          :items="table"
          :key="table"
          :title="table[0].gallery_id"
          :id="table[0].gallery_id">

          <template #title>
            <h3 class="sky">{{ table[0].Gallery.name }}</h3>
          </template>

          <template #head>{{ constants.HEAD_UP }}</template>

          <template #cell-id="slotProps">
            <b>{{ table[slotProps.index].id }}</b>
          </template>

          <template #cell-name="slotProps">
            <MediaElt :src="'/img/thumbnails/galleries/' + table[slotProps.index].name"
              :alt="table[slotProps.index].description"
              :title="table[slotProps.index].name"/>

            <FieldElt :id="table[slotProps.index].id"
              type="file"
              :info="constants.INFO_UP_IMAGE"/>
          </template>

          <template #cell-description="slotProps">
            <FieldElt v-model:value="table[slotProps.index].description"
              @keyup.enter="updateImage(table[slotProps.index].id)"
              :info="constants.INFO_UP_DESCRIPTION"/>
          </template>

          <template #cell-Galleries="slotProps">
            <FieldElt type="select"
              :list="getGalleries"
              v-model:value="table[slotProps.index].Gallery.name"
              :content="table[slotProps.index].Gallery.name"
              @keyup.enter="updateImage(table[slotProps.index].id)"
              :info="constants.INFO_UP_GALLERY"/>
          </template>

          <template #body="slotProps">
            <BtnElt type="button"
              @click="updateImage(table[slotProps.index].id)" 
              class="btn-sky"
              :title="constants.TITLE_IMAGE_UPDATE + table[slotProps.index].id">

              <template #btn>
                <i class="fa-solid fa-cloud-arrow-up fa-lg fa-fw"></i>
              </template>
            </BtnElt>

            <BtnElt type="button"
              @click="deleteImage(table[slotProps.index].id)" 
              class="btn-red"
              :title="constants.TITLE_DELETE_IMAGE + table[slotProps.index].id">

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
import { deleteData, putData, setError } from "servidio"

import BtnElt from "../elements/BtnElt"
import CardElt from "../elements/CardElt"
import FieldElt from "../elements/FieldElt"
import MediaElt from "../elements/MediaElt"
import TableElt from "../elements/TableElt"

export default {
  name: "ImageManager",
  components: {
    BtnElt,
    CardElt,
    FieldElt,
    MediaElt,
    TableElt
  },

  props: [
    "galleries", 
    "images", 
    "constants"
  ],

  computed: {
    /**
     * GET GALLERIES
     * @returns
     */
    getGalleries() {
      const galleries = [];

      for (let i = 0; i < this.galleries.length; i++) {
        galleries.push({
          content: this.galleries[i].name,
          value: this.galleries[i].id
        })
      }

      return galleries; 
    }
  },

  methods: {
    /**
     * GET ALL IMAGES
     * @returns
     */
    getImages() {
      return this.images;
    },

    /**
     * SORT ITEMS BY GALLERY
     * @param {array} items 
     */
    getItemsByGallery(items) {
      const itemsByGallery = {};

      for (let item of items) {

        if (!itemsByGallery[item.Gallery.name]) {
          itemsByGallery[item.Gallery.name] = [];
        }

        itemsByGallery[item.Gallery.name]
          .push(item)
        itemsByGallery[item.Gallery.name]
          .sort((a, b) => (a.name > b.name) ? 1 : -1);
      }

      return itemsByGallery;
    },

    /**
     * UPDATE IMAGE
     * @param {string} id 
     */
    updateImage(id) {
      for (let image of this.images) {
        if (image.id === id) {

          let data = new FormData();
          let img = document.getElementById(id).files[0] ?? image.name;

          data.append("name", image.name);
          data.append("image", img);
          data.append("description", image.description);
          data.append("gallery_id", image.gallery_id);

          const URL = this.constants.API_URL + "/images/" + id;

          putData(URL, data, this.constants.TOKEN)
            .then(() => {
              alert(this.constants.ALERT_IMAGE + id + this.constants.ALERT_UPDATED);
            })
            .catch(err => { setError(err) });
        }
      }
    },

    /**
     * DELETE IMAGE
     * @param {string} id 
     */
    deleteImage(id) {
      if (confirm(`${this.constants.TITLE_DELETE_IMAGE}${id} ?`) === true) {
        const URL = this.constants.API_URL + "/images/" + id;

        deleteData(URL, this.constants.TOKEN)
          .then(() => {
            alert(this.constants.ALERT_IMAGE + id + this.constants.ALERT_DELETED);
            this.$router.go();
          })
          .catch(err => { setError(err) });
      }
    }
  }
}
</script>
