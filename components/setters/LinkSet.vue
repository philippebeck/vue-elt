<template>
  <CardElt>
  <template #header>
    <h2>
      <i class="fa-solid fa-link fa-lg"></i>
      {{ val.LINK_MANAGER }}
    </h2>
  </template>

  <template #body>
    <form>
      <ListElt :items="val.LINK_FORM">

        <template #item-1>
          <FieldElt v-model:value="name"
            @keyup.enter="createLink()"
            :info="val.INFO_NAME">
            <template #legend>{{ val.LEGEND_NAME }}</template>
            <template #label>{{ val.LABEL_NAME }}</template>
          </FieldElt>
        </template>

        <template #item-2>
          <FieldElt type="url"
            v-model:value="url"
            @keyup.enter="createLink()"
            :info="val.INFO_URL"
            :min="val.URL_MIN"
            :max="val.URL_MAX">
            <template #legend>{{ val.LEGEND_URL }}</template>
            <template #label>{{ val.LABEL_URL }}</template>
          </FieldElt>
        </template>

        <template #item-3>
          <FieldElt type="select"
            :list="val.CATS_LINK"
            v-model:value="cat"
            @keyup.enter="createLink()"
            :info="val.INFO_CATEGORY">
            <template #legend>{{ val.LEGEND_CATEGORY }}</template>
            <template #label>{{ val.LABEL_CATEGORY }}</template>
          </FieldElt>
        </template>
        </ListElt>

        <BtnElt type="button"
        @click="createLink()" 
        class="btn-green"
        :content="val.CONTENT_CREATE"
        :title="val.LINK_CREATOR">
        <template #btn>
          <i class="fa-solid fa-square-plus fa-lg"></i>
        </template>
        </BtnElt>

      <TableElt :title="table[0].cat"
        :items="table"
        v-for="table in getItemsByCategory(links)"
        :key="table"
        :id="table[0].cat">

        <template #title>
          <i :class="`fa-brands fa-${table[0].cat.toLowerCase()} fa-5x sky`"></i>
        </template>

        <template #head>{{ val.HEAD_UP }}</template>

        <template #cell-id="slotProps">
          <b>{{ slotProps.item.id }}</b>
        </template>

        <template #cell-name="slotProps">
          <FieldElt v-model:value="table[slotProps.index].name"
            @keyup.enter="updateLink(table[slotProps.index].id)"
            :info="val.INFO_UP_NAME"/>
        </template>

        <template #cell-url="slotProps">
          <FieldElt type="url"
            v-model:value="table[slotProps.index].url"
            @keyup.enter="updateLink(table[slotProps.index].id)"
            :info="val.INFO_UP_URL"
            :max="parseInt('100')"/>
        </template>

        <template #cell-cat="slotProps">
          <FieldElt type="select"
            :list="val.CATS_LINK"
            v-model:value="table[slotProps.index].cat"
            @keyup.enter="updateLink(table[slotProps.index].id)"
            :info="val.INFO_UP_CATEGORY"/>
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
import { checkRange, checkRegex, deleteData, getItemName, getItemsByCat, postData, putData, setError } from "servidio"

import BtnElt from "../elements/BtnElt"
import CardElt from "../elements/CardElt"
import FieldElt from "../elements/FieldElt"
import ListElt from "../elements/ListElt"
import TableElt from "../elements/TableElt"

export default {
  name: "LinkSet",
  components: {
    BtnElt,
    CardElt,
    FieldElt,
    ListElt,
    TableElt
  },
  props: ["val", "links"],

  data() {
    return {
      name: "",
      url: "",
      cat: ""
    }
  },

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
     * ? CREATE LINK
     * Creates a link by sending a POST request 
     * to the server with the provided data.
     */
    createLink() {
      const { CHECK_STRING, CHECK_URL, REGEX_URL, CAT_LINK, API_URL, TOKEN, ALERT_CREATED } = this.val;

      if (this.url.startsWith("http")) this.url = this.url.split('//')[1];

      if (checkRange(this.name, CHECK_STRING) && 
          checkRegex(`https://${this.url}`, CHECK_URL, REGEX_URL)) {

        if (this.cat === "") this.cat = CAT_LINK;

        const URL   = `${API_URL}/links`;
        const data  = new FormData();

        data.append("name", this.name);
        data.append("url", this.url);
        data.append("cat", this.cat);

        postData(URL, data, TOKEN)
          .then(() => {
            alert(this.name + ALERT_CREATED);
            this.$router.go();
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
      const { CHECK_STRING, REGEX_URL, CHECK_URL, API_URL, TOKEN, ALERT_UPDATED } = this.val;
      const link = this.links.find(l => l.id === id);
      let { name, url, cat } = link;

      if (link &&
        checkRange(name, CHECK_STRING) &&
        checkRegex(url, CHECK_URL, REGEX_URL)) {

        const URL   = `${API_URL}/links/${id}`;
        const data  = new FormData();

        if (url.startsWith("http")) url = url.split('//')[1];

        data.append("name", name);
        data.append("url", url);
        data.append("cat", cat);

        putData(URL, data, TOKEN)
          .then(() => { alert(`${name} ${ALERT_UPDATED}`) })
          .catch(setError);
      }
    },

    /**
     * ? DELETE LINK
     * Deletes a link based on its ID.
     *
     * @param {number} id - The ID of the link to be deleted.
     */
    deleteLink(id) {
      const { TITLE_DELETE, API_URL, TOKEN, ALERT_DELETED } = this.val;
      const NAME = getItemName(id, this.links);

      if (confirm(`${TITLE_DELETE} ${NAME} ?`) === true) {
        const URL = `${API_URL}/links/${id}`;

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
