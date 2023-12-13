<template>
  <CardElt>
    <template #header>
      <h2 id="product">
        <i class="fa-regular fa-rectangle-list fa-lg"
          aria-hidden="true">
        </i>
        {{ val.PRODUCT_MANAGER }}
      </h2>
    </template>

    <template #body>
      <form enctype="multipart/form-data">
        <TableElt :items="products">
          <template #head>{{ val.HEAD_UP }}</template>

          <template #cell-id="slotProps">
            <a :href="`/product/${products[slotProps.index].id}`">
              <b>{{ products[slotProps.index].id }}</b>
            </a>
          </template>

          <template #cell-name="slotProps">
            <FieldElt v-model:value="getProducts()[slotProps.index].name"
              @keyup.enter="updateProduct(products[slotProps.index].id)"
              :info="val.INFO_UP_NAME"/>
          </template>

          <template #cell-description="slotProps">
            <BtnElt :href="`/product/${products[slotProps.index].id}`"
              class="btn-cyan"
              :title="val.TITLE_UPDATE + products[slotProps.index].name">

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
              :info="val.INFO_UP_IMAGE"/>
          </template>

          <template #cell-alt="slotProps">
            <FieldElt type="textarea"
              v-model:value="getProducts()[slotProps.index].alt"
              @keyup.enter="updateProduct(products[slotProps.index].id)"
              :info="val.INFO_UP_ALT"/>
          </template>

          <template #cell-price="slotProps">
            <FieldElt type="number"
              v-model:value="getProducts()[slotProps.index].price"
              @keyup.enter="updateProduct(products[slotProps.index].id)"
              :info="val.INFO_UP_PRICE"
              :min="val.PRICE_MIN"
              :max="val.PRICE_MAX"/>
          </template>

          <template #cell-options="slotProps">
            <FieldElt type="textarea"
              v-model:value="getProducts()[slotProps.index].options"
              @keyup.enter="updateProduct(products[slotProps.index].id)"
              :info="val.INFO_UP_OPTIONS"
              :min="val.TEXT_MIN"
              :max="val.TEXT_MAX"/>
          </template>

          <template #cell-cat="slotProps">
            <FieldElt type="select"
              :list="val.CATS_PRODUCT"
              v-model:value="getProducts()[slotProps.index].cat"
              @keyup.enter="updateProduct(products[slotProps.index].id)"
              :info="val.INFO_UP_CATEGORY"/>
          </template>

          <template #body="slotProps">
            <BtnElt type="button"
              @click="updateProduct(products[slotProps.index].id)" 
              class="btn-sky"
              :title="val.TITLE_UPDATE + products[slotProps.index].name">

              <template #btn>
                <i class="fa-solid fa-cloud-arrow-up fa-lg fa-fw"></i>
              </template>
            </BtnElt>

            <BtnElt type="button"
              @click="deleteProduct(products[slotProps.index].id)" 
              class="btn-red"
              :title="val.TITLE_UPDATE + products[slotProps.index].name">

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
  props: ["val", "products"],

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
     * ? UPDATE PRODUCT
     * Updates a product based on the provided id.
     *
     * @param {number} id - The id of the product to be updated.
     */
    updateProduct(id) {
      const { CHECK_STRING, TEXT_MAX, TEXT_MIN, CHECK_NUMBER, PRICE_MIN, PRICE_MAX, ALERT_UPDATED, API_URL, TOKEN } = this.val;
      const product = this.products.find(p => p.id === id);
      let { name, description, image, alt, price, options, cat } = product;

      if (product &&
        checkRange(name, CHECK_STRING) &&
        checkRange(description, CHECK_STRING, TEXT_MIN, TEXT_MAX) &&
        checkRange(alt, CHECK_STRING) &&
        checkRange(price, CHECK_NUMBER, PRICE_MIN, PRICE_MAX) &&
        checkRange(options, CHECK_STRING, TEXT_MIN, TEXT_MAX) ) {

        const URL   = `${API_URL}/products/${id}`;
        const img   = document.getElementById(id)?.files[0] ?? image;
        const data  = new FormData();

        data.append("name", name);
        data.append("description", description);
        data.append("image", img);
        data.append("alt", alt);
        data.append("price", price);
        data.append("options", options);
        data.append("cat", cat);

        putData(URL, data, TOKEN)
          .then(() => { alert(name + ALERT_UPDATED) })
          .catch(setError);
      }
    },

    /**
     * ? DELETE PRODUCT
     * Deletes a product from the system.
     *
     * @param {number} id - The ID of the product to delete.
     */
    deleteProduct(id) {
      const { TITLE_DELETE, API_URL, TOKEN, ALERT_DELETED } = this.val;
      const NAME = getItemName(id, this.products);

      if (confirm(`${TITLE_DELETE} ${NAME} ?`) === true) {
        const URL = `${API_URL}/products/${id}`;

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
