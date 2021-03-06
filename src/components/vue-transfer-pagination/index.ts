import { VueConstructorPlugin } from "@/types/index";
import { VueConstructor } from "vue";
import VueTransferPagination from "./index.vue";

(VueTransferPagination as VueConstructorPlugin<undefined>).install = (
  Vue: VueConstructor
) => {
  Vue.component(VueTransferPagination.name, VueTransferPagination);
};
export default VueTransferPagination;
