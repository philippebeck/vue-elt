<template>
  <CardElt>
    <template #header>
      <h2>
        <i class="fa-solid fa-gifts fa-lg"></i>
        {{ val.ORDER_MANAGER }}
      </h2>
    </template>

    <template #body>
      <form>
        <TableElt :items="orders">

          <template #cell-id="slotProps">
            <b>{{ orders[slotProps.index].id }}</b>
          </template>

          <template #cell-products="slotProps">
            <ul :id="'products-' + orders[slotProps.index].id">
              <li v-for="(item, index) in orders[slotProps.index].products"
                :key="index">
                <a :href="`/product/${item.id}`">
                  <ul :title="val.TITLE_GO + item.name">
                    <li>
                      <b>{{ item.name }}</b>
                    </li>
                    <li>
                      <i>({{ item.option }})</i>
                    </li>
                    <li class="black">
                      {{ item.quantity }}x {{ item.price }}€
                    </li>
                  </ul>
                </a>
              </li>
            </ul>
          </template>

          <template #cell-total="slotProps">
            <b>{{ orders[slotProps.index].total }} €</b>
          </template>

          <template #cell-payment="slotProps">
            <b>{{ orders[slotProps.index].payment }}</b>
          </template>

          <template #cell-status="slotProps">
            <FieldElt type="select"
              :list="val.CATS_ORDER"
              v-model:value="getOrders()[slotProps.index].status"
              @keyup.enter="updateStatus(orders[slotProps.index].id)"
              :info="val.INFO_UP_STATUS"/>
          </template>

          <template #cell-user="slotProps">
            <b>{{ orders[slotProps.index].user.split('-')[0] }}</b>
            ({{ orders[slotProps.index].user.split('-')[1] }})
          </template>

          <template #cell-createdAt="slotProps">
            <p>{{ new Date(orders[slotProps.index].createdAt).toLocaleString() }}</p>
            <BtnElt type="button"
              @click="deleteOrder(orders[slotProps.index].id)" 
              class="btn-red"
              :title="val.TITLE_DELETE_ORDER + orders[slotProps.index].id">
              <template #btn>
                <i class="fa-solid fa-trash-arrow-up fa-lg fa-fw"></i>
              </template>
            </BtnElt>
          </template>

          <template #cell-updatedAt="slotProps">
            <p>{{ new Date(orders[slotProps.index].updatedAt).toLocaleString() }}</p>
            <BtnElt type="button"
              @click="updateStatus(orders[slotProps.index].id)" 
              class="btn-green"
              :title="val.TITLE_UPDATE_ORDER + orders[slotProps.index].id">
              <template #btn>
                <i class="fa-regular fa-calendar-check fa-lg fa-fw"></i>
              </template>
            </BtnElt>
          </template>
        </TableElt>
      </form>
    </template>
  </CardElt>
</template>

<script>
import { deleteData, putData, setError } from "servidio"

import BtnElt from "../elements/BtnElt"
import CardElt from "../elements/CardElt"
import FieldElt from "../elements/FieldElt"
import TableElt from "../elements/TableElt"

export default {
  name: "OrderSet",
  components: { BtnElt, CardElt, FieldElt, TableElt },
  props: ["orders", "token", "val"],

  methods: {
    /**
     * ? GET ORDERS
     * * Get the list of orders.
     * @return {Array} The list of orders.
     */
    getOrders() {
      return this.orders;
    },

    /**
     * ? UPDATE STATUS
     * * Updates the status of an order.
     * @param {number} id - The ID of the order to update.
     */
    updateStatus(id) {
      const { ALERT_ORDER, ALERT_UPDATED, API_URL } = this.val;

      const order = this.orders.find(o => o.id === id);

      if (order) {
        const URL   = `${API_URL}/orders/${id}`
        const data  = new FormData();

        data.append("status", order.status);

        putData(URL, data, this.token)
          .then(() => {
            alert(ALERT_ORDER + id + ALERT_UPDATED);
            this.$router.go();
          })
          .catch(err => setError(err));
      }
    },

    /**
     * ? DELETE ORDER
     * * Deletes an order from the API.
     * @param {number} id - the ID of the order to delete
     */
    deleteOrder(id) {
      const { TITLE_DELETE_ORDER, API_URL, ALERT_ORDER, ALERT_DELETED } = this.val;

      if (confirm(`${TITLE_DELETE_ORDER} ${id} ?`)) {
        const URL = `${API_URL}/orders/${id}`

        deleteData(URL, this.token)
          .then(() => {
            alert(ALERT_ORDER + id + ALERT_DELETED);
            this.$router.go();
          })
          .catch(err => setError(err));
      }
    }
  }
}
</script>
