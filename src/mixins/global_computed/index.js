import { mapState } from "vuex";

const GLOBAL_COMPUTED = {
  ...mapState({
    url_api: "URL_API"
  })
};

export default GLOBAL_COMPUTED;
