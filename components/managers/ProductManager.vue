<template>
  <CardElt>
    <template #header>
      <h2 id="product">
        <i class="fa-regular fa-rectangle-list fa-lg"
          aria-hidden="true">
        </i>
        {{ constants.PRODUCT_MANAGER }}
      </h2>
    </template>

    <template #body>
      <form enctype="multipart/form-data">
        <TableElt :items="products">
          <template #head>{{ constants.HEAD_UP }}</template>

          <template #cell-id="slotProps">
            <a :href="`/product/${products[slotProps.index].id}`">
              <b>{{ products[slotProps.index].id }}</b>
            </a>
          </template>

          <template #cell-name="slotProps">
            <FieldElt v-model:value="getProducts()[slotProps.index].name"
              @keyup.enter="updateProduct(products[slotProps.index].id)"
              :info="constants.INFO_UP_NAME"/>
          </template>

          <template #cell-description="slotProps">
            <BtnElt :href="`/product/edit/${products[slotProps.index].id}`"
              class="btn-cyan"
              :title="constants.TITLE_UPDATE + products[slotProps.index].name">

              <template #btn>
                <i class="fa-regular fa-edit fa-lg"></i>
              </template>
            </BtnElt>
          </template>

          <template #cell-image="slotProps">
            <MediaElt :src="'/img/thumbnails/products/' + products[slotProps.index].image"
              :alt="products[slotProps.index].alt"
              :title="products[slotProps.index].name">
            </MediaElt>

            <FieldElt :id="products[slotProps.index].id"
              type="file"
              :info="constants.INFO_UP_IMAGE"/>
          </template>

          <template #cell-alt="slotProps">
            <FieldElt type="textarea"
              v-model:value="getProducts()[slotProps.index].alt"
              @keyup.enter="updateProduct(products[slotProps.index].id)"
              :info="constants.INFO_UP_ALT"/>
          </template>

          <template #cell-price="slotProps">
            <FieldElt type="number"
              v-model:value="getProducts()[slotProps.index].price"
              @keyup.enter="updateProduct(products[slotProps.index].id)"
              :info="constants.INFO_UP_PRICE"
              :min="constants.PRICE_MIN"
              :max="constants.PRICE_MAX"/>
          </template>

          <template #cell-options="slotProps">
            <FieldElt type="textarea"
              v-model:value="getProducts()[slotProps.index].options"
              @keyup.enter="updateProduct(products[slotProps.index].id)"
              :info="constants.INFO_UP_OPTIONS"
              :min="constants.TEXT_MIN"
              :max="constants.TEXT_MAX"/>
          </template>

          <template #cell-cat="slotProps">
            <FieldElt type="select"
              :list="constants.CATS_PRODUCT"
              v-model:value="getProducts()[slotProps.index].cat"
              @keyup.enter="updateProduct(products[slotProps.index].id)"
              :info="constants.INFO_UP_CATEGORY"/>
          </template>

          <template #body="slotProps">
            <BtnElt type="button"
              @click="updateProduct(products[slotProps.index].id)" 
              class="btn-sky"
              :title="constants.TITLE_UPDATE + products[slotProps.index].name">

              <template #btn>
                <i class="fa-solid fa-cloud-arrow-up fa-lg fa-fw"></i>
              </template>
            </BtnElt>

            <BtnElt type="button"
              @click="deleteProduct(products[slotProps.index].id)" 
              class="btn-red"
              :title="constants.TITLE_UPDATE + products[slotProps.index].name">

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
import MediaElt from "../elements/MediaElt"
import TableElt from "../elements/TableElt"

export default {
  name: "ProductManager",
  components: {
    BtnElt,
    CardElt,
    FieldElt,
    MediaElt,
    TableElt
  },

  props: [
    "constants", 
    "products"
  ],

  methods: {
    /**
     * ? GET PRODUCTS
     * Get the products.
     *
     * @return {Array} An array of products.
     */
    getProducts() {
      return this.products;
    },

    /**
     * ? GET PRODUCT
     * Returns a FormData object with the specified product data.
     *
     * @param {string} id - The ID of the input element for the product image.
     * @param {object} product - The product object containing the data.
     * @return {FormData} - A FormData object with the product data.
     */
    getProduct(id, product) {
      const data  = new FormData();
      const image = document.getElementById(id).files[0] ?? product.image;

      data.append("name", product.name);
      data.append("description", product.description);
      data.append("image", image);
      data.append("alt", product.alt);
      data.append("price", product.price);
      data.append("options", product.options);
      data.append("cat", product.cat);

      return data;
    },

    /**
     * ? CHECK PRODUCT
     * Checks the product details and updates the product if the details are valid.
     *
     * @param {number} id - The ID of the product.
     * @param {Object} product - The product object containing the details of the product.
     */
    checkProduct(id, product) {
      const PRICE_MAX   = this.constants.PRICE_MAX;
      const PRICE_MIN   = this.constants.PRICE_MIN;
      const PRICE_MSG   = this.constants.CHECK_NUMBER;
      const STRING_MSG  = this.constants.CHECK_STRING;
      const TEXT_MAX    = this.constants.TEXT_MAX;
      const TEXT_MIN    = this.constants.TEXT_MIN;

      if (checkRange(product.name, STRING_MSG) && 
          checkRange(product.description, STRING_MSG, TEXT_MIN, TEXT_MAX) && 
          checkRange(product.alt, STRING_MSG) && 
          checkRange(product.price, PRICE_MSG, PRICE_MIN, PRICE_MAX) && 
          checkRange(product.options, STRING_MSG, TEXT_MIN, TEXT_MAX)) {

        const URL = this.constants.API_URL + "/products/" + id;

        putData(URL, this.getProduct(id, product), this.constants.TOKEN)
          .then(() => { alert(product.name + this.constants.ALERT_UPDATED) })
          .catch(err => { setError(err) });
      }
    },

    /**
     * ? UPDATE PRODUCT
     * Updates a product based on the provided id.
     *
     * @param {number} id - The id of the product to be updated.
     */
    updateProduct(id) {
      for (let product of this.products) {
        if (product.id === id) this.checkProduct(id, product);
      }
    },

    /**
     * ? DELETE PRODUCT
     * Deletes a product from the system.
     *
     * @param {number} id - The ID of the product to delete.
     */
    deleteProduct(id) {
      const NAME = getItemName(id, this.products);

      if (confirm(`${this.constants.TITLE_DELETE} ${NAME} ?`) === true) {
        const URL = this.constants.API_URL + "/products/" + id;

        deleteData(URL, this.constants.TOKEN)
          .then(() => {
            alert(NAME + this.constants.ALERT_DELETED);
            this.$router.go();
          })
          .catch(err => { setError(err) });
      }
    }
  }
}
</script>
