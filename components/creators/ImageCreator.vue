<template>
  <CardElt>
  <template #header>
    <h2 id="create-image">
      <i class="fa-regular fa-image fa-lg"
        aria-hidden="true">
      </i>
      {{ constants.IMAGE_CREATOR }}
    </h2>
  </template>

  <template #body>
    <form enctype="multipart/form-data">
      <ListElt :items="constants.IMAGE_FORM">

        <template #item-1>
          <FieldElt id="image" 
            type="file"
            v-model:value="image"
            :info="constants.INFO_IMAGE">

            <template #legend>
              {{ constants.LEGEND_IMAGE }}
            </template>
            <template #label>
              {{ constants.LABEL_IMAGE }}
            </template>
          </FieldElt>
        </template>

        <template #item-2>
          <FieldElt v-model:value="description"
            @keyup.enter="createImage()"
            :info="constants.INFO_DESCRIPTION"
            :max="constants.TEXT_MAX">

            <template #legend>
              {{ constants.LEGEND_DESCRIPTION }}
            </template>
            <template #label>
              {{ constants.LABEL_DESCRIPTION }}
            </template>
          </FieldElt>
        </template>
      </ListElt>

      <BtnElt type="button"
        @click="createImage()" 
        class="btn-green"
        :content="constants.CONTENT_CREATE"
        :title="constants.IMAGE_CREATOR">

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

  props: ["constants"],
  data() {
    return {
      description: "",
      gallery: ""
    }
  },

  methods: {
    /**
     * CREATE IMAGE
     */
    createImage() {
      const MAX = this.constants.TEXT_MAX;
      const MIN = this.constants.STRING_MIN;
      const MSG = this.constants.CHECK_STRING;

      if (checkRange(this.description, MSG, MIN, MAX)) {
        let image = document.getElementById("image").files[0];

        if (image !== undefined) {

          let data = new FormData();
          data.append("image", image);
          data.append("description", this.description);
          data.append("gallery", this.$route.params.id);

          postData(this.constants.API_URL + "/images", data, this.constants.TOKEN)
            .then(() => {
              alert(image + this.constants.ALERT_CREATED);
              this.$router.go();
            })
            .catch(err => { setError(err) });

        } else {
          alert(this.constants.ALERT_IMG);
        }
      }
    }
  }
}
</script>
