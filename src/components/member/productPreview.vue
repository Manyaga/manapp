<template>
        <div class="app-admin-wrap layout-horizontal-bar">
        <Sidebar />
          <Topbar />
          <div class="main-content-wrap d-flex flex-column">
            <div class="main-content">
                <Breadcrumbs />
                      <div class="separator-breadcrumb border-top"></div>
                      <!-- content goes here-->
                      <section class="ul-product-detail">
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="ul-product-detail__image"><img src="../../assets/images/products/speaker-1.jpg" alt="alt" /></div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="ul-product-detail__brand-name mb-2">
                                                    <h5 class="heading">{{ product.product_name.toUpperCase() }}</h5><span class="text-mute">CATEGORY:  {{ product.category.category_name }}</span>
                                                </div>
                                                <div class="ul-product-detail__price-and-rating d-flex align-items-baseline">
                                                    <h3 class="font-weight-700 text-primary mb-0 me-2">${{product.unitPrice}}</h3><!-- <span class="text-mute font-weight-800 me-2">
                                                        <del>$1,150</del></span><small class="text-success font-weight-700">50% off</small> -->
                                                </div>            
                                                <div class="ul-product-detail__features mt-3">
                                                    <h6 class="font-weight-700">Features:</h6>
                                                    <ul class="m-0 p-0">
                                                        <li><i class="i-Right1 text-primary text-15 align-middle font-weight-700"></i><span class="align-middle">This Refurbished product is tested</span></li>
                                                    </ul>
                                                </div>
                                                <div class="ul-product-detail__quantity d-flex align-items-center">
                                                <Form @submit="addDonationRequest" :validation-schema="schema" class="user">
                                                    <div class="row row-xs"> 
                                                    <div class="form-group col-md-6">
                                                        <label class="col-form-label" for="amount">Amount:</label>
                                                        <Field name="amount" class="form-control" id="amount" v-model="amount" disabled step='0.01' type="number" placeholder="Amount" />
                                                        <ErrorMessage name="amount" class="text-danger p-3" />
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label class="col-form-label" for="quantity">Quantity:</label>
                                                        <Field name="quantity" class="form-control" id="quantity" @change="onQuantityChange($event)" v-model="quantity" type="number" placeholder="Quantity" />
                                                        <ErrorMessage name="quantity" class="text-danger p-3" />
                                                    </div>
                                                    <div class="form-group col-md-12">
                                                        <label class="col-form-label" for="shippingAddress">Shipping Address:</label>
                                                        <Field name="shippingAddress" class="form-control" id="shippingAddress" type="text" placeholder="Address"/>
                                                        <ErrorMessage name="shippingAddress" class="text-danger p-3" />
                                                    </div>   
                                                    <div class="form-group col-md-12">
                                                    <button class="btn btn-primary mt-2 m-1 float-end" type="Submit"><i class="i-Full-Cart text-15"></i> </button>
                                                    </div>
                                                    </div>
                                                </Form>
                                                </div>
                                            </div>
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
      import { USER_QUERY, ADD_DONATIONREQUEST_MUTATION,  } from '@/graphql';
      import { Form, Field, ErrorMessage } from "vee-validate"
      import * as yup from "yup"
      export default {
        name: "Product",
        components: { Sidebar, Topbar, Footer, Breadcrumbs, Form, Field, ErrorMessage },
        data () {
          const schema = yup.object().shape({
            amount: yup
            .string()
            .required("Amount is required!"),
            quantity: yup
            .string()
            .required("Quantity is required!"),
            shippingAddress: yup
            .string()
            .required("Address is required!"),
            });
            return {
              product: TokenService.getProduct(),
              schema,
              amount: 0,
            }
        },
        apollo: {
        currentuser: {
            query: USER_QUERY
            },
        },
        methods: {
            preview() { 
                this.$router.push("/product-cart");
            },
            onQuantityChange(event) {
                this.amount = (event.target.value * this.product.unitPrice).toFixed(2);
                },
            addDonationRequest(donation) {
            console.log(donation.quantity)
            this.$apollo
                .mutate({
                mutation: ADD_DONATIONREQUEST_MUTATION,
                variables: {
                    amount: donation.amount,
                    quantity: donation.quantity,
                    memberId: this.currentuser._id,
                    productId: this.product._id,
                    categoryId: this.product.category._id,
                    shippingAddress: donation.shippingAddress,
                }
                })
                .then(response => {
                // redirect user
                $('#verifyModalContent').modal('hide')
                    this.$swal({
                        title: 'Donation Request added to cart',
                        position: 'top-end',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.$router.push("/product-cart");
                }).catch((error) => {
                    this.$swal({
                        title: error.message,
                        position: "top-end",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 3000,
                    });
                })
            },
        },
        async created(){         
        },
      
      }
      </script>
     