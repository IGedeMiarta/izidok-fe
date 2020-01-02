import store from "@/store";

const getAuthorizationToken = () =>
  store.state.BEARER_TOKEN ? `Bearer ${store.state.BEARER_TOKEN}` : null;

export default getAuthorizationToken;
