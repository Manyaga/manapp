<template>
  <div class="app-admin-wrap layout-horizontal-bar">
    <Sidebar />
    <Topbar />
    <div class="main-content-wrap d-flex flex-column">
      <div class="main-content">
        <Breadcrumbs />
        <div class="separator-breadcrumb border-top"></div>
        <div class="row mb-4">
          <div class="col-lg-4 col-xl-4 mt-3" @click="sub_category(category)" v-for="category in interestCategories" :key="category.category_id">
            <div class="card">
              <div class="card-body">
                <div class="user-profile mb-4">
                  <div class="ul-widget-card__user-info">
                    <img class="profile-picture avatar-lg mb-2" src="../../assets/images/interest.png" alt="" />
                    <p class="m-0 text-17">{{ category.name.toUpperCase() }}</p>
                  </div>
                </div>
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

import { ALL_INTEREST_CATEGORIES_QUERY,} from "@/graphql";
export default {
  name: "Category",
  components: { Sidebar, Topbar, Footer, Breadcrumbs,},
  data() {
    return {
      interestCategories: [],
    };
  },
  apollo: {
    // fetch all countries
    interestCategories: {
      query: ALL_INTEREST_CATEGORIES_QUERY,
    },
  },
  methods: {
    sub_category(interest) {
      TokenService.setInterest(interest);
      this.$router.push("/member-interest-subcategories");
    },
    async statusChange() {
      this.interestCategories = [];
      await this.$apollo
        .query({
          query: ALL_INTEREST_CATEGORIES_QUERY,
        })
        .then((response) => {
          this.interestCategories = response.data.interestCategories;
        });
    },
  },
  async created() {
    await this.statusChange();
  },
};
</script>
