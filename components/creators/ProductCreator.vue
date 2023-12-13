<template>
  <CardElt>
    <template #header>
      <h2 id="create-product">
        <i class="fa-regular fa-lightbulb fa-lg"
          aria-hidden="true">
        </i>
        {{ val.PRODUCT_CREATOR }}
      </h2>
    </template>

    <template #body>
      <form method="post"
        enctype="multipart/form-data">
        <ListElt :items="val.PRODUCT_FORM">

          <template #item-1>
            <FieldElt v-model:value="name"
              @keyup.enter="createProduct()"
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
            <label for="description">
              {{ val.LEGEND_DESCRIPTION }}
            </label>

            <Editor id="description"
              :api-key="val.TINY_KEY"
              v-model="description"
              @keyup.enter="createProduct()"
              :init="{
                toolbar:
                  'undo redo outdent indent align lineheight | \
                  bold italic underline strikethrough backcolor | \
                  blocks fontfamily fontsize'
              }"/>
          </template>

          <template #item-3>
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

          <template #item-4>
            <FieldElt type="textarea"
              v-model:value="alt"
              :info="val.INFO_ALT">

              <template #legend>
                {{ val.LEGEND_ALT }}
              </template>
              <template #label>
                {{ val.LABEL_ALT }}
              </template>
            </FieldElt>
          </template>

          <template #item-5>
            <FieldElt type="number"
              v-model:value="price"
              @keyup.enter="createProduct()"
              :info="val.INFO_PRICE"
              :min="val.PRICE_MIN"
              :max="val.PRICE_MAX">

              <template #legend>
                {{ val.LEGEND_PRICE }}
              </template>
              <template #label>
                {{ val.LABEL_PRICE }}
              </template>
            </FieldElt>
          </template>

          <template #item-6>
            <FieldElt type="textarea"
              v-model:value="options"
              @keyup.enter="createProduct()"
              :info="val.INFO_OPTIONS"
              :max="100">

              <template #legend>
                {{ val.LEGEND_OPTIONS }}
              </template>
              <template #label>
                {{ val.LABEL_OPTIONS }}
              </template>
            </FieldElt>
          </template>

          <template #item-7>
            <FieldElt type="select"
              :list="val.CATS_PRODUCT"
              v-model:value="cat"
              @keyup.enter="createProduct()"
              :info="val.INFO_CATEGORY">

              <template #legend>
                {{ val.LEGEND_CATEGORY }}
              </template>
              <template #label>
                {{ val.LABEL_CATEGORY }}
              </template>
            </FieldElt>
          </template>
        </ListElt>

        <BtnElt type="button"
          @click="createProduct()" 
          class="btn-green"
          :content="val.CONTENT_CREATE"
          :title="val.PRODUCT_CREATOR">

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
import Editor from "@tinymce/tinymce-vue"

export default {
  name: "ProductCreator",
  components: {
    BtnElt,
    CardElt,
    FieldElt,
    ListElt,
    Editor
  },
  props: ["val"],
  data() {
    return {
      name: "",
      description:"",
      image: "",
      alt: "",
      price: null,
      options: "",
      cat: ""
    }
  },

  methods: {
    /**
     * ? CREATE PRODUCT
     * Create a product by sending a POST request 
     * to the server with the provided data.
     */
    createProduct() {
      const { CHECK_STRING, TEXT_MIN, TEXT_MAX, CAT_PRODUCT, API_URL, TOKEN, ALERT_CREATED, ALERT_IMG } = this.val;

      if (checkRange(this.name, CHECK_STRING) && 
          checkRange(this.description, CHECK_STRING, TEXT_MIN, TEXT_MAX) && 
          checkRange(this.alt, CHECK_STRING)) {

        if (this.cat === "") this.cat = CAT_PRODUCT;
        const img = document.getElementById("image")?.files[0];

        if (img !== undefined) {
          const URL   = `${API_URL}/products`;
          const data  = new FormData();

          data.append("name", this.name);
          data.append("description", this.description);
          data.append("image", img);
          data.append("alt", this.alt);
          data.append("price", this.price);
          data.append("options", this.options);
          data.append("cat", this.cat);

          postData(URL, data, TOKEN)
            .then(() => {
              alert(this.name + ALERT_CREATED);
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