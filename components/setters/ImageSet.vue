<template>
  <CardElt id="image-set">
    <template #header>
      <h2>
        <i class="fa-regular fa-images fa-lg"></i>
        {{ val.IMAGE_MANAGER }}
      </h2>
    </template>

    <template #body>
      <form enctype="multipart/form-data">
        <ListElt :items="val.IMAGE_FORM">

          <template #item-1>
            <FieldElt id="image" 
              type="file"
              v-model:value="image"
              :info="val.INFO_IMAGE">
              <template #legend>{{ val.LEGEND_IMAGE }}</template>
              <template #label>{{ val.LABEL_IMAGE }}</template>
            </FieldElt>
          </template>

          <template #item-2>
            <FieldElt v-model:value="description"
              @keyup.enter="createImage()"
              :info="val.INFO_DESCRIPTION"
              :max="val.TEXT_MAX">
              <template #legend>{{ val.LEGEND_DESCRIPTION }}</template>
              <template #label>{{ val.LABEL_DESCRIPTION }}</template>
            </FieldElt>
          </template>
        </ListElt>

        <BtnElt type="button"
          @click="createImage()"
          class="btn-green"
          :content="val.CONTENT_CREATE"
          :title="val.IMAGE_CREATOR">
          <template #btn>
            <i class="fa-solid fa-square-plus fa-lg"></i>
          </template>
        </BtnElt>
      </form>

      <form v-if="images.length > 0">
        <TableElt :items="images">
          <template #head>{{ val.HEAD_UP }}</template>

          <template #cell-id="slotProps">
            <b>{{ images[slotProps.index].id }}</b>
          </template>

          <template #cell-name="slotProps">
            <MediaElt :src="'/img/thumbnails/galleries/' + images[slotProps.index].name"
              :alt="images[slotProps.index].description"
              :title="images[slotProps.index].name"/>
            <FieldElt :id="images[slotProps.index].id"
              type="file"
              :info="val.INFO_UP_IMAGE"/>
          </template>

          <template #cell-description="slotProps">
            <FieldElt type="textarea"
              v-model:value="getImages()[slotProps.index].description"
              @keyup.enter="updateImage(images[slotProps.index].id)"
              :info="val.INFO_UP_DESCRIPTION"/>
          </template>

          <template #cell-Gallery="slotProps">
            <FieldElt type="select"
              :list="getGalleries"
              v-model:value="getImages()[slotProps.index].Gallery.name"
              :content="images[slotProps.index].Gallery.name"
              @keyup.enter="updateImage(images[slotProps.index].id)"
              :info="val.INFO_UP_GALLERY"/>
          </template>

          <template #body="slotProps">
            <BtnElt type="button"
              @click="updateImage(images[slotProps.index].id)" 
              class="btn-sky"
              :title="val.TITLE_IMAGE_UPDATE + images[slotProps.index].id">
              <template #btn>
                <i class="fa-solid fa-cloud-arrow-up fa-lg fa-fw"></i>
              </template>
            </BtnElt>
            <BtnElt type="button"
              @click="deleteImage(images[slotProps.index].id)" 
              class="btn-red"
              :title="val.TITLE_DELETE_IMAGE + images[slotProps.index].id">
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
import { checkRange, deleteData, putData, postData, setError } from "servidio"

import BtnElt from "../elements/BtnElt"
import CardElt from "../elements/CardElt"
import FieldElt from "../elements/FieldElt"
import ListElt from "../elements/ListElt"
import MediaElt from "../elements/MediaElt"
import TableElt from "../elements/TableElt"

export default {
  name: "ImageSet",
  components: {
    BtnElt,
    CardElt,
    FieldElt,
    ListElt,
    MediaElt,
    TableElt
  },
  props: ["galleries", "images", "val"],

  data() {
    return {
      description: "",
      gallery: ""
    }
  },

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
     * ? CREATE IMAGE
     * Create an image by sending a POST request 
     * to the server with the provided data.
     */
    createImage() {
      const { CHECK_STRING, STRING_MIN, TEXT_MAX, API_URL, TOKEN, ALERT_CREATED, ALERT_IMG } = this.val;

      if (checkRange(this.description, CHECK_STRING, STRING_MIN, TEXT_MAX)) {
        const img = document.getElementById("image")?.files[0];

        if (img !== undefined) {
          const URL   = API_URL + "/images";
          const data  = new FormData();

          data.append("image", img);
          data.append("description", this.description);
          data.append("galleryId", this.$route.params.id);

          postData(URL, data, TOKEN)
            .then(() => {
              alert(img + ALERT_CREATED);
              this.$router.go();
            })
            .catch(err => { setError(err) });

        } else {
          alert(ALERT_IMG);
        }
      }
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
      const { name, description, galleryId } = image;

      if (image &&
        checkRange(name, CHECK_STRING) &&
        checkRange(description, CHECK_STRING, TEXT_MIN, TEXT_MAX) ) {

        const URL   = `${API_URL}/images/${id}`
        const img   = document.getElementById(id)?.files[0] ?? name;
        const data  = new FormData();

        data.append("name", name);
        data.append("image", img);
        data.append("description", description);
        data.append("galleryId", galleryId);

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
