<template>
  <CardElt>
  <template #header>
    <h2 id="create-gallery">
      <i class="fa-regular fa-images fa-lg"
        aria-hidden="true">
      </i>
      {{ val.GALLERY_CREATOR }}
    </h2>
  </template>

  <template #body>
    <form>
      <ListElt :items="val.GALLERY_FORM">

        <template #item-1>
          <FieldElt v-model:value="name"
            @keyup.enter="createGallery()"
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
          <FieldElt type="author"
            v-model:value="author"
            @keyup.enter="createGallery()"
            :info="val.INFO_AUTHOR"
            :min="val.URL_MIN"
            :max="val.URL_MAX">

            <template #legend>
              {{ val.LEGEND_AUTHOR }}
            </template>
            <template #label>
              {{ val.LABEL_AUTHOR }}
            </template>
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
  </template>
</CardElt>
</template>

<script>
import { checkRange, postData, setError } from "servidio"

import BtnElt from "../elements/BtnElt"
import CardElt from "../elements/CardElt"
import FieldElt from "../elements/FieldElt"
import ListElt from "../elements/ListElt"

export default {
name: "GalleryCreator",
components: {
  BtnElt,
  CardElt,
  FieldElt,
  ListElt
},

props: ["val"],
data() {
  return {
    name: "",
    author: ""
  }
},

methods: {
  /**
   * ? CREATE GALLERY
   * Creates a galleryby sending a POST request 
   * to the server with the provided data.
   */
  createGallery() {
    const MSG = this.val.CHECK_STRING;

    if (checkRange(this.name, MSG) &&
        checkRange(this.author, MSG)) {

      const URL   = this.val.API_URL + "/galleries";
      const data  = new FormData();

      data.append("name", this.name);
      data.append("author", this.author);

      postData(URL, data, this.val.TOKEN)
        .then(() => {
          alert(this.name + this.val.ALERT_CREATED);
          this.$router.go();
        })
        .catch(err => { setError(err) });
    }
  }
}
}
</script>
