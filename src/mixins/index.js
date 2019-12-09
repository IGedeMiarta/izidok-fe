import GLOBAL_METHODS from "./global_methods";
import GLOBAL_COMPUTED from "./global_computed";

import { apiRequest } from "./global_mounted";

const INDEX_MIXINS = {
  mounted() {
    apiRequest();
  },
  methods: {
    ...GLOBAL_METHODS
  },
  computed: {
    ...GLOBAL_COMPUTED
  }
};

export default INDEX_MIXINS;
