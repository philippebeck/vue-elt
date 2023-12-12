<template>
    <CardElt>
    <template #header>
      <h2 id="link">
        <i class="fa-solid fa-link fa-lg"
          aria-hidden="true">
        </i>
        {{ constants.LINK_MANAGER }}
      </h2>
    </template>

    <template #body>
      <form>
        <TableElt :title="table[0].cat"
          :items="table"
          v-for="table in getItemsByCategory(links)"
          :key="table"
          :id="table[0].cat">

          <template #title>
            <i :class="`fa-brands fa-${table[0].cat.toLowerCase()} fa-5x sky`"></i>
          </template>

          <template #head>{{ constants.HEAD_UP }}</template>

          <template #cell-id="slotProps">
            <b>{{ slotProps.item.id }}</b>
          </template>

          <template #cell-name="slotProps">
            <FieldElt v-model:value="table[slotProps.index].name"
              @keyup.enter="updateLink(table[slotProps.index].id)"
              :info="constants.INFO_UP_NAME"/>
          </template>

          <template #cell-url="slotProps">
            <FieldElt type="url"
              v-model:value="table[slotProps.index].url"
              @keyup.enter="updateLink(table[slotProps.index].id)"
              :info="constants.INFO_UP_URL"
              :max="parseInt('100')"/>
          </template>

          <template #cell-cat="slotProps">
            <FieldElt type="select"
              :list="constants.CATS_LINK"
              v-model:value="table[slotProps.index].cat"
              @keyup.enter="updateLink(table[slotProps.index].id)"
              :info="constants.INFO_UP_CATEGORY"/>
          </template>

          <template #body="slotProps">
            <BtnElt type="button"
              @click="updateLink(table[slotProps.index].id)" 
              class="btn-sky"
              :title="'Update ' + table[slotProps.index].name">
              <template #btn>
                <i class="fa-solid fa-cloud-arrow-up fa-lg fa-fw"></i>
              </template>
            </BtnElt>

            <BtnElt type="button"
              @click="deleteLink(table[slotProps.index].id)" 
              class="btn-red"
              :title="'Delete ' + table[slotProps.index].name">
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
import { checkRange, checkRegex, deleteData, getItemName, getItemsByCat, putData, setError } from "servidio"

import BtnElt from "../elements/BtnElt"
import CardElt from "../elements/CardElt"
import FieldElt from "../elements/FieldElt"
import TableElt from "../elements/TableElt"

export default {
  name: "LinkManager",
  components: {
    BtnElt,
    CardElt,
    FieldElt,
    TableElt
  },

  props: [
    "constants", 
    "links"
  ],

  methods: {
    /**
     * ? GET LINKS
     * Retrieves the links from the current instance.
     *
     * @return {Array} The array of links.
     */
    getLinks() {
      return this.links;
    },

    /**
     * ? GET ITEMS BY CATEGORY
     * Retrieves items by category.
     *
     * @param {Array} items - The array of items.
     * @return {Array} The filtered array of items.
     */
    getItemsByCategory(items) {
      return getItemsByCat(items);
    },

    /**
     * ? GET LINK
     * A function to get a link.
     *
     * @param {Object} link - The link object.
     * @return {FormData} The FormData object containing the link data.
     */
    getLink(link) {
      let data = new FormData();

      data.append("name", link.name);
      data.append("url", link.url);
      data.append("cat", link.cat);

      return data;
    },

    /**
     * ? CHECK LINK
     * Check the link and update it if it meets the required criteria.
     *
     * @param {object} link - The link object to be checked and updated.
     */
    checkLink(link) {
      if (link.url.startsWith("http")) { link.url = link.url.split('//')[1] }

      const NAME_MSG  = this.constants.CHECK_STRING;
      const REGEX     = this.constants.REGEX_URL;
      const URL_MSG   = this.constants.CHECK_URL;

      if (checkRange(link.name, NAME_MSG) && 
          checkRegex(`https://${link.url}`, URL_MSG, REGEX)) {

        const URL = this.constants.API_URL + "/links/" + link.id;

        putData(URL, this.getLink(link), this.constants.TOKEN)
          .then(() => {
            alert(link.name + this.constants.ALERT_UPDATED);
          })
          .catch(err => { setError(err) });
      }
    },

    /**
     * ? UPDATE LINK
     * Updates a link based on its ID.
     *
     * @param {number} id - The ID of the link to update.
     */
    updateLink(id) {
      for (let link of this.links) {
        if (link.id === id) this.checkLink(link);
      }
    },

    /**
     * ? DELETE LINK
     * Deletes a link based on its ID.
     *
     * @param {number} id - The ID of the link to be deleted.
     */
    deleteLink(id) {
      const NAME = getItemName(id, this.links);

      if (confirm(`${this.constants.TITLE_DELETE} ${NAME} ?`) === true) {
        const URL = this.constants.API_URL + "/links/" + id;

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
