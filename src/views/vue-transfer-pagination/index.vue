<template>
  <div class="transfer-views">
    <vue-transfer-pagination
      ref="vueTransferPagination"
      v-model="tables"
      :data="allDataSourceTables"
      target-order="push"
      :filter-method="filterMethod"
      :titles="['源表', '已选择']"
      filterable
      filter-placeholder="请输入表名过滤"
    />
  </div>
</template>
<script lang="ts">
// import VueTransferPagination from "vue-transfer-pagination";
import { defineComponent, ref } from "@vue/composition-api";
import { TransferData } from "element-ui/types/transfer";
import VueTransferPagination from "@/components/vue-transfer-pagination/index";
export default defineComponent({
  components: {
    VueTransferPagination,
  },
  setup() {
    const vueTransferPagination = ref();
    setTimeout(() => {
      vueTransferPagination.value.init([1, 2, 3]);
      console.log(tables.value);
    }, 1000);
    const tables = ref();
    const allDataSourceTables = ref<TransferData[]>([]);
    while (allDataSourceTables.value.length < 1000) {
      const index = allDataSourceTables.value.length;
      allDataSourceTables.value.push({
        label: index + "",
        key: index,
        disabled: false,
      });
    }
    const filterMethod = (query: string, item: TransferData) => {
      return item.label.includes(query);
    };
    return {
      tables,
      allDataSourceTables,
      filterMethod,
      vueTransferPagination,
    };
  },
});
</script>
<style lang="scss">
.transfer-views {
  width: 1500px;
}
</style>
