<template> 
       <div class="app-admin-wrap layout-horizontal-bar">
        <Sidebar />
          <Topbar />
          <div class="main-content-wrap d-flex flex-column">
            <div class="main-content">
                <Breadcrumbs />
                      <div class="separator-breadcrumb border-top"></div>
                      <!-- content goes here-->
                    <section class="product-cart">
                        <div class="row list-grid">
                            <div class="list-item col-lg-3 col-xl-3 mt-3"  v-for="product in products" :key="product._id">
                                <div class="card o-hidden mb-4 d-flex flex-column" @click="preview(product)">
                                    <div class="list-thumb d-flex"><img alt="" src="../../assets/images/products/speaker-1.jpg" /></div>
                                    <div class="flex-grow-1 d-bock">
                                        <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center"><a class="w-40 w-sm-100" href="">
                                                <div class="item-title">
                                                     {{ product.product_name.toUpperCase() }}
                                                </div>
                                            </a>
                                           
                                            <p class="m-0 text-muted text-small w-15 w-sm-100">CATEGORY:  {{ product.category.category_name }}</p>
                                            <p class="m-0 text-muted text-small w-15 w-sm-100">Price: {{product.unitPrice}}
                                                <!-- <del class="text-secondary">$54.00</del> -->
                                            </p>
                                            <p class="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges"><span class="badge bg-success">{{product.availabelQuantity}} Available</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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
      import { PRODUCT_BY_CATEGORY_QUERY  } from '@/graphql';
      export default {
        name: "Products",
        components: { Sidebar, Topbar, Footer, Breadcrumbs},
        data () {
            return {
              categoryID: TokenService.getCategory(),
              products: [],
            }
        },
        methods: {
            preview(product) {                
                TokenService.setProduct(product);
                this.$router.push("/product-preview");
            },
        },
        async created(){    
            this.$apollo.query({
                query: PRODUCT_BY_CATEGORY_QUERY,
                variables: {
                    categoryId: this.categoryID
                }
                }).then(response => {
                    this.products = response.data.productByCategory
                }).catch((error) => {
            
                })         
        },
      
      }
      </script>
     