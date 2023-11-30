import { createApp, provide, h } from "vue";
import App from "./App.vue";
import router from "./router";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";
import { setContext } from "apollo-link-context";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

/* import jQuery/$ for plugins */
import jQuery from "jquery";
window.jQuery = jQuery;
window.$ = jQuery;
//css
require("@/assets/css/themes/lite-purple.min.css");
require("@/assets/css/plugins/perfect-scrollbar.min.css");
require("@/assets/css/plugins/smart.wizard/smart_wizard.min.css");
require("@/assets/fontawesome/css/fontawesome.css");
require("@/assets/fontawesome/css/brands.css");
require("@/assets/fontawesome/css/solid.css");

//js
require("@/assets/js/plugins/jquery-3.3.1.min.js");
require("@/assets/js/plugins/bootstrap.bundle.min.js");
require("@/assets/js/plugins/perfect-scrollbar.min.js");
require("@/assets/js/scripts/script.min.js");
require("@/assets/js/plugins/bootstrap.js");

require("@/assets/js/scripts/sidebar-horizontal.script.js");

// require js
require("@/assets/js/app.min.js");
require("@/assets/js/app.js");
//require("@/assets/js/app.js.map");

require("@/assets/js/plugins/calendar/datepicker.min.js");
require("@/assets/js/plugins/calendar/fullcalendar.min.js");
require("@/assets/js/plugins/calendar/jquery-ui.min.js");

require("@/assets/js/scripts/sidebar.compact.script.min.js");
require("@/assets/js/scripts/customizer.script.min.js");
//wizard
require("@/assets/js/plugins/jquery.smartWizard.min.js");
require("@/assets/js/scripts/smart.wizard.script.min.js");
// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  /* uri: "https://core.tandasafoundation.org/api", */
  uri: "http://localhost:8000/api",
});

// Cache implementation
const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  // get the authentication token from localstorage if it exists
  const token = localStorage.getItem("token");

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : null,
    },
  };
});
// Create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

createApp({
  render: () => h(App),
})
  .use(router)
  .use(apolloProvider)
  .use(VueSweetalert2)
  .mount("#app");
