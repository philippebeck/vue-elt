<template>
  <CardElt id="project-set">
    <template #header>
      <h2>
        <i class="fa-regular fa-pen-to-square fa-lg"></i>
        {{ val.PROJECT_MANAGER }}
      </h2>
    </template>

    <template #body>
      <form enctype="multipart/form-data">
        <ListElt :items="val.PROJECT_FORM">

          <template #item-1>
            <FieldElt id="name"
              v-model:value="name" 
              @keyup.enter="createProject()"
              :info="val.INFO_NAME">
              <template #legend>{{ val.LEGEND_NAME }}</template>
              <template #label>{{ val.LABEL_NAME }}</template>
            </FieldElt>
          </template>

          <template #item-2>
            <label for="description">{{ val.LEGEND_TEXT }}</label>
            <Editor id="description"
              :api-key="val.TINY_KEY"
              v-model="description"
              @keyup.enter="createProject()"
              :init="val.TINY_INIT"/>
          </template>

          <template #item-3>
            <FieldElt id="image" 
              type="file"
              v-model:value="image"
              :info="val.INFO_IMAGE">
              <template #legend>{{ val.LEGEND_IMAGE }}</template>
              <template #label>{{ val.LABEL_IMAGE }}</template>
            </FieldElt>
          </template>

          <template #item-4>
            <FieldElt id="alt"
              type="descriptionarea"
              v-model:value="alt"
              @keyup.enter="createProject()"
              :info="val.INFO_ALT">
              <template #legend>{{ val.LEGEND_ALT }}</template>
              <template #label>{{ val.LABEL_ALT }}</template>
            </FieldElt>
          </template>

          <template #item-5>
              <FieldElt id="url"
                v-model:value="url"
                @keyup.enter="updateProject()"
                :info="val.INFO_URL">
                <template #legend>{{ val.LEGEND_URL }}</template>
                <template #label>{{ val.LABEL_URL }}</template>
              </FieldElt>
            </template>

          <template #item-6>
            <FieldElt id="cat"
              type="select"
              :list="val.CATS_PROJECT"
              v-model:value="cat"
              @keyup.enter="createProject()"
              :info="val.INFO_CAT">
              <template #legend>{{ val.LEGEND_CAT }}</template>
              <template #label>{{ val.LABEL_CAT }}</template>
            </FieldElt>
          </template>
        </ListElt>
        <br>

        <BtnElt type="button"
          @click="createProject()" 
          class="btn-green"
          :content="val.CONTENT_CREATE"
          :title="val.TITLE_PROJECT">
          <template #btn>
            <i class="fa-solid fa-square-plus fa-lg"></i>
          </template>
        </BtnElt>
      </form>
    </template>
  </CardElt>
</template>

<script>
import { checkRange, checkRegex, deleteData, postData, putData, setError } from "servidio"

import BtnElt from "../elements/BtnElt"
import CardElt from "../elements/CardElt"
import FieldElt from "../elements/FieldElt"
import ListElt from "../elements/ListElt"
import Editor from "@tinymce/tinymce-vue"

export default {
  name: "ProjectSet",
  components: { BtnElt, CardElt, FieldElt, ListElt, Editor },
  props: ["token", "val"],
  data() {
    return {
      name: "",
      description:"",
      image: "",
      alt: "",
      url: "",
      cat: ""
    }
  },

  methods: {
    /**
     * ? CREATE PROJECT
     * * Creates an project by sending a POST request to the server with the provided data.
     */
    createProject() {
      const { ALERT_CREATED, ALERT_IMG, API_URL, CAT_PROJECT, CHECK_STRING, CHECK_URL, REGEX_URL, TEXT_MIN, TEXT_MAX } = this.val;

      if (this.url.startsWith("http")) this.url = this.url.split('//')[1];
      if (this.cat === "") this.cat = CAT_PROJECT;

      const IS_NAME_CHECKED = checkRange(this.name, CHECK_STRING);
      const IS_DESC_CHECKED = checkRange(this.description, CHECK_STRING, TEXT_MIN, TEXT_MAX);
      const IS_ALT_CHECKED  = checkRange(this.alt, CHECK_STRING);

      const IS_URL_CHECKED = this.url ? checkRegex(this.url, CHECK_URL, REGEX_URL) : true;

      if (IS_NAME_CHECKED && IS_DESC_CHECKED && IS_ALT_CHECKED && IS_URL_CHECKED) {
        const img = document.getElementById("image")?.files[0];

        if (img !== undefined) {
          const URL   = `${API_URL}/projects`;
          const data  = new FormData();

          data.append("name", this.name);
          data.append("description", this.description);
          data.append("image", img);
          data.append("alt", this.alt);
          data.append("url", this.url);
          data.append("cat", this.cat);

          postData(URL, data, this.token)
            .then(() => {
              alert(this.name + ALERT_CREATED);
              this.$router.go();
            })
            .catch(err => setError(err));

        } else {
          alert(ALERT_IMG);
        }
      }
    },

    /**
     * ? UPDATE PROJECT
     * * Updates the project with the provided data.
     */
    updateProject() {
      const { API_URL, ALERT_UPDATED, CHECK_STRING, REGEX_URL, TEXT_MAX, TEXT_MIN } = this.val;
      let { id, name, description, image, alt, url, cat } = this.project;

      const IS_NAME_CHECKED = checkRange(name, CHECK_STRING);
      const IS_DESC_CHECKED = checkRange(description, CHECK_STRING, TEXT_MIN, TEXT_MAX);
      const IS_ALT_CHECKED  = checkRange(alt, CHECK_STRING);
      const IS_URL_CHECKED  = url ? checkRegex(url, CHECK_STRING, REGEX_URL) : true;

      if (IS_NAME_CHECKED && IS_DESC_CHECKED && IS_ALT_CHECKED && IS_URL_CHECKED) {
        const URL   = `${API_URL}/projects/${id}`;
        const data  = new FormData();
        const img   = document.getElementById("image")?.files[0] ?? image;

        data.append("name", name);
        data.append("description", description);
        data.append("image", img);
        data.append("alt", alt);
        data.append("url", url);
        data.append("cat", cat);

        putData(URL, data, this.token)
          .then(() => {
            alert(name + ALERT_UPDATED);
            this.$router.push("/blog");
          })
          .catch(err => setError(err));
      }
    },

    /**
     * ? DELETE PROJECT
     * * Deletes an project with the given ID.
     */
    deleteProject() {
      const { TITLE_DELETE, API_URL, ALERT_DELETED } = this.val;
      let { id, name } = this.project;

      if (confirm(`${TITLE_DELETE} ${name} ?`)) {
        const URL = `${API_URL}/projects/${id}`

        deleteData(URL, this.token)
          .then(() => {
            alert(name + ALERT_DELETED);
            this.$router.push("/blog");
          })
          .catch(err => setError(err));
      }
    }
  }
}
</script>
