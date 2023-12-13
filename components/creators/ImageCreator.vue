<template>
  <CardElt>
  <template #header>
    <h2 id="create-image">
      <i class="fa-regular fa-image fa-lg"
        aria-hidden="true">
      </i>
      {{ val.IMAGE_CREATOR }}
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

            <template #legend>
              {{ val.LEGEND_IMAGE }}
            </template>
            <template #label>
              {{ val.LABEL_IMAGE }}
            </template>
          </FieldElt>
        </template>

        <template #item-2>
          <FieldElt v-model:value="description"
            @keyup.enter="createImage()"
            :info="val.INFO_DESCRIPTION"
            :max="val.TEXT_MAX">

            <template #legend>
              {{ val.LEGEND_DESCRIPTION }}
            </template>
            <template #label>
              {{ val.LABEL_DESCRIPTION }}
            </template>
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
  name: "ImageCreator",
  components: {
    BtnElt,
    CardElt,
    FieldElt,
    ListElt
  },
  props: ["val"],
  data() {
    return {
      description: "",
      gallery: ""
    }
  },

  methods: {
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
          data.append("gallery_id", this.$route.params.id);

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
    }
  }
}
</script>
