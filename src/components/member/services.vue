<template>
  <div class="app-admin-wrap layout-horizontal-bar">
    <Sidebar />
    <Topbar />
    <div class="main-content-wrap d-flex flex-column">
      <div class="main-content">
        <Breadcrumbs />
        <div class="separator-breadcrumb border-top"></div>

        <div class="row mb-4">
          <div class="col-md-4" @click="pricings(service)"  v-for="(service, index) in services" :key="service.service_id">
            <div class="card card-profile-1 mb-4">
              <div class="card-body text-center">
                <div class="ul-widget5__pic"><img :src="service.icon" alt="" /></div>
                <h5 class="mt-3 text-primary mb-3">{{ service.service_name.toUpperCase() }}</h5>
                <p>{{ service.description.toUpperCase() }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-grow-1"></div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/partials/Topbar.vue";
import Footer from "@/components/partials/Footer.vue";
import Sidebar from "@/components/partials/Sidebar";
import Breadcrumbs from "@/components/partials/Breadcrumbs";
import TokenService from "@/services/token.service";
import {
  ALL_SERVICES_QUERY} from "@/graphql";
export default {
  name: "Service",
  components: { Sidebar, Topbar, Footer, Breadcrumbs },
  data() {
    return {
      services: [],
    };
  },
  apollo: {
    services: {
      query: ALL_SERVICES_QUERY,
    },
  },
  methods: {
    async statusChange() {
      this.services = [];
      await this.$apollo
        .query({
          query: ALL_SERVICES_QUERY,
        })
        .then((response) => {
          this.services = response.data.services;
        });
    },
    pricings(pricing) {
      TokenService.setPricing(pricing);
      this.$router.push("/service-vendors");
    },
  },
  async created() {
    await this.statusChange();
  },
};
</script>
