<template>
    <div class="app-admin-wrap layout-horizontal-bar">
      <Sidebar />
      <Topbar />
      <div class="main-content-wrap d-flex flex-column">
        <div class="main-content">
          <Breadcrumbs />
          <div class="separator-breadcrumb border-top"></div>
          <div class="row mb-4">
            <div class="col-md-12">
              <div class="row mb-4">
                <div class="col-lg-4 col-xl-4 mt-3" v-for="category in filteredcategory" :key="category._id">
                  <div class="card">
                    <div class="card-body">
                      <div class="user-profile mb-4">
                        <div class="ul-widget-card__user-info  mt-4">
                          <i class="i-Posterous text-success text-25 font-weight-500"></i>  
                        </div>
                        <div class="ul-widget-card--line text-center mt-2">
                          <button class="btn btn-outline-gray-700 ul-btn-raised--v2 m-1"
                              type="button" @click="preview(category._id)"> {{ category.category_name.toUpperCase() }}</button>
                        </div>
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
    </div>
  </template>
    
  <script>
  import Topbar from "@/components/partials/Topbar.vue";
  import Footer from "@/components/partials/Footer.vue";
  import Sidebar from "@/components/partials/Sidebar";
  import Breadcrumbs from "@/components/partials/Breadcrumbs";
  import TokenService from "@/services/token.service";
  import {ALL_CATEGORIES_QUERY } from '@/graphql';
  export default {
    name: "Categories",
    components: { Sidebar, Topbar, Footer, Breadcrumbs},
    data() {
      return {
              categories: [],
          }
      },
    methods: {
      preview(category) {
        TokenService.setCategory(category);
        this.$router.push("/category-products");
    },
    },
    async created(){    
      await this.$apollo.query({
            query: ALL_CATEGORIES_QUERY
            }).then(response => {
                this.categories = response.data.categories
            })           
    },
    computed: {
      filteredcategory: function() {
          return this.categories.filter(function(u) {
            return !u._id.includes('641080c58e4d970eaaff90c5')
        })
      }
    },
  
  }
  </script>
    