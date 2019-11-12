import GLOBAL_METHODS from "./global_methods";
import GLOBAL_COMPUTED from "./global_computed";

const INDEX_MIXINS = {
  methods: {
    ...GLOBAL_METHODS
  },
  computed: {
    ...GLOBAL_COMPUTED
  }
};

export default INDEX_MIXINS;
