<template>
  <CardElt>
    <template #header>
      <h2 id="image">
        <i class="fa-regular fa-images fa-lg"
          aria-hidden="true">
        </i>
        {{ val.IMAGE_MANAGER }}
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

          <template #head>{{ val.HEAD_UP }}</template>

          <template #cell-id="slotProps">
            <b>{{ table[slotProps.index].id }}</b>
          </template>

          <template #cell-name="slotProps">
            <MediaElt :src="'/img/thumbnails/galleries/' + table[slotProps.index].name"
              :alt="table[slotProps.index].description"
              :title="table[slotProps.index].name"/>

            <FieldElt :id="table[slotProps.index].id"
              type="file"
              :info="val.INFO_UP_IMAGE"/>
          </template>

          <template #cell-description="slotProps">
            <FieldElt type="textarea"
              v-model:value="table[slotProps.index].description"
              @keyup.enter="updateImage(table[slotProps.index].id)"
              :info="val.INFO_UP_DESCRIPTION"/>
          </template>

          <template #cell-Gallery="slotProps">
            <FieldElt type="select"
              :list="getGalleries"
              v-model:value="table[slotProps.index].Gallery.name"
              :content="table[slotProps.index].Gallery.name"
              @keyup.enter="updateImage(table[slotProps.index].id)"
              :info="val.INFO_UP_GALLERY"/>
          </template>

          <template #body="slotProps">
            <BtnElt type="button"
              @click="updateImage(table[slotProps.index].id)" 
              class="btn-sky"
              :title="val.TITLE_IMAGE_UPDATE + table[slotProps.index].id">

              <template #btn>
                <i class="fa-solid fa-cloud-arrow-up fa-lg fa-fw"></i>
              </template>
            </BtnElt>

            <BtnElt type="button"
              @click="deleteImage(table[slotProps.index].id)" 
              class="btn-red"
              :title="val.TITLE_DELETE_IMAGE + table[slotProps.index].id">

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
import { checkRange, deleteData, putData, setError } from "servidio"

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
    "val"
  ],

  computed: {
    /**
     * ? GET GALLERIES
     * Retrieves the galleries from the state 
     * and transforms them into an array of objects
     * with the content and value properties.
     *
     * @return {Array} An array of objects with the content & value properties.
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
     * ? GET IMAGES
     * Retrieves the images.
     *
     * @return {Array} The array of images.
     */
    getImages() {
      return this.images;
    },

    /**
     * ? GET ITEMS BY GALLERY
     * Generates a dictionary of items grouped by their gallery name.
     *
     * @param {Array} items - The array of items to be grouped.
     * @return {Object} - The dictionary of items grouped by gallery name.
     */
    getItemsByGallery(items) {
      const itemsByGallery = {};

      for (const item of items) {
        const galleryName = item.Gallery.name;

        if (!itemsByGallery[galleryName]) itemsByGallery[galleryName] = [];

        itemsByGallery[galleryName].push(item);
      }

      for (const gallery in itemsByGallery) {
        itemsByGallery[gallery].sort((a, b) => (a.name > b.name) ? 1 : -1);
      }

      return itemsByGallery;
    },

    /**
     * ? UPDATE IMAGE
     * Updates an image.
     *
     * @param {number} id - The ID of the image to be updated.
     */
    updateImage(id) {
      const image = this.images.find(i => i.id === id);

      const { CHECK_STRING, TEXT_MIN, TEXT_MAX, API_URL, TOKEN, ALERT_IMAGE, ALERT_UPDATED } = this.val;
      const { name, description, gallery_id } = image;

      if (image &&
        checkRange(name, CHECK_STRING) &&
        checkRange(description, CHECK_STRING, TEXT_MIN, TEXT_MAX) ) {

        const URL   = `${API_URL}/images/${id}`
        const img   = document.getElementById(id)?.files[0] ?? name;
        const data  = new FormData();

        data.append("name", name);
        data.append("image", img);
        data.append("description", description);
        data.append("gallery_id", gallery_id);

        putData(URL, data, TOKEN)
          .then(() => { alert(ALERT_IMAGE + id + ALERT_UPDATED) })
          .catch(err => { setError(err) });
      }
    },

    /**
     * ? DELETE IMAGE
     * Deletes an image from the server based on the provided ID.
     *
     * @param {number} id - The ID of the image to be deleted.
     */
    deleteImage(id) {
      const { TITLE_DELETE_IMAGE, API_URL, TOKEN, ALERT_IMAGE, ALERT_DELETED } = this.val;

      if (confirm(`${TITLE_DELETE_IMAGE} ${id} ?`) === true) {
        const URL = `${API_URL}/images/${id}`

        deleteData(URL, TOKEN)
          .then(() => {
            alert(ALERT_IMAGE + id + ALERT_DELETED);
            this.$router.go();
          })
          .catch(err => { setError(err) });
      }
    }
  }
}
</script>
