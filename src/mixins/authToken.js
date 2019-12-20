import store from "@/store";

const getAuthorizationToken = () =>
  `Bearer ${store.state.BEARER_TOKEN}` || null;

export default getAuthorizationToken;
