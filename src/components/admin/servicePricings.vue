<template>
  <!-- Add Request Modal -->
  <div class="modal fade" id="verifyModalContent" tabindex="-1" role="dialog" aria-labelledby="verifyModalContent"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="verifyModalContent_title">
            Add Service Pricing
          </h5>
          <button class="btn btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <Form @submit="addServicePricing" :validation-schema="schema" class="user">
          <div class="modal-body">
            <div class="form-group">
              <label for="service_id" class="form-control-label">Service</label>
              <Field name="service_id" class="form-control form-control-lg" v-model="service_id" as="select">
                <option value="">-- service--</option>
                <option v-for="service in services" :value="service.service_id" :key="service.service_id">
                  {{ service.service_name }}
                </option>
              </Field>
              <ErrorMessage name="service_id" class="text-danger py-3 text-sm" />
            </div>
            <div class="form-group">
              <label class="col-form-label" for="price">Price:</label>
              <Field name="price" class="form-control" id="price" type="number" step="0.01" />
            </div>
            <div class="form-group">
              <label class="col-form-label" for="duration">Duration:</label>
              <Field name="duration" class="form-control" id="duration" />
            </div>
            <!-- <div class="form-group">
              <label for="user_id" class="form-control-label">Service Provider</label>
              <Field name="user_id" class="form-control form-control-lg" v-model="user_id" as="select">
                <option value="">-- Provider--</option>
                <option v-for="service in services" :value="service.service_id" :key="service.service_id">
                  {{ service.service_name }}</option>
              </Field>
              <ErrorMessage name="user_id" class="text-danger py-3 text-sm" />
            </div> -->
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">
              Close
            </button>
            <button class="btn btn-primary" type="Submit">Submit</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
  <!-- Edit Request Modal -->
  <div class="modal fade" id="editModalContent" tabindex="-1" role="dialog" aria-labelledby="editModalContent"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editModalContent_title">
            Edit Service Pricing
          </h5>
          <button class="btn btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <Form @submit="editServicePricing" :validation-schema="schema" class="user">
          <div class="modal-body">
            <div class="form-group">
              <label for="service_id" class="form-control-label">Service</label>
              <Field name="service_id" class="form-control form-control-lg" v-model="service_id" as="select">
                <option value="">-- service--</option>
                <option v-for="service in services" :value="service.service_id" :key="service.service_id">
                  {{ service.service_name }}</option>
              </Field>
              <ErrorMessage name="service_id" class="text-danger py-3 text-sm" />
            </div>
            <div class="form-group">
              <label class="col-form-label" for="price">Price:</label>
              <Field name="price" class="form-control" v-model="price" id="price" type="number" step="0.01" />
            </div>
            <div class="form-group">
              <label class="col-form-label" for="duration">Duration:</label>
              <Field name="duration" class="form-control" v-model="duration" id="duration" />
            </div>
            <!-- <div class="form-group">
              <label for="user_id" class="form-control-label">Service Provider</label>
              <Field name="user_id" class="form-control form-control-lg" v-model="user_id" as="select">
                <option value="">-- Provider--</option>
                <option v-for="supplier in userUserGroups" :value="supplier.user_id" :key="supplier.user_id">
                  {{ supplier.first_name + " " + supplier.last_name }}
                </option>

                <option v-for="supplier in userUserGroups" :value="supplier.user_id.user_id"
                  :key="supplier.user_id.user_id">
                  {{ supplier.user_id.first_name.toUpperCase() + " " + supplier.user_id.last_name.toUpperCase() }}
                </option>
              </Field>
              <ErrorMessage name="user_id" class="text-danger py-3 text-sm" />
            </div> -->
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-bs-dismiss="modal"> Close</button>
            <button class="btn btn-primary" type="Submit">Submit</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
  <div class="app-admin-wrap layout-horizontal-bar">
    <Sidebar />
    <Topbar />
    <div class="main-content-wrap d-flex flex-column">
      <div class="main-content">
        <button class="btn btn-info text-white ul-btn-raised--v2 m-1 float-end" type="button" data-bs-toggle="modal"
          data-target="#verifyModalContent" data-whatever="@mdo">
          <i class="nav-icon i-add text-primary text-white fw-bold"></i> Add
          Service Pricing
        </button>
        <Breadcrumbs />
        <div class="separator-breadcrumb border-top"></div>
        <div class="row mb-4">
          <div class="col-xl-8 col-md-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="ul-widget__head">
                  <div class="ul-widget__head-label">
                    <h3 class="ul-widget__head-title">SERVICE PRICING FOR {{ vendor.first_name.toUpperCase() +
                      " " + vendor.last_name.toUpperCase() }} </h3>
                  </div>
                  <div class="ul-widget__head-toolbar">
                    <ul class="nav nav-tabs nav-tabs-line nav-tabs-bold ul-widget-nav-tabs-line" role="tablist">
                      <li class="nav-item"><a class="nav-link active show" data-bs-toggle="tab"
                          href="#ul-widget5-tab1-content" @click="back()" aria-selected="true">BACK</a></li>
                    </ul>
                  </div>
                </div>






                
                <div class="ul-widget__body" v-for="(pricing, index) in servicePricings"
                :key="pricing.pricing_id">
                  <div class="tab-content">
                    <div class="tab-pane active show">
                      <div class="ul-widget5">
                        <div class="ul-widget5__item" v-for="(pricing, index) in servicePricings"
                          :key="pricing.pricing_id">
                          <div class="ul-widget5__content">
                            <div class="ul-widget5__pic"><img src="../../assets/images/service.png" alt="Third slide" />
                            </div>

                            <div class="ul-widget5__section">
                              <a class="ul-widget4__title" href="#">{{ pricing.service.service_name }}</a>
                              <p class="ul-widget5__desc">
                                {{ pricing.service.description }}
                              </p>
                              <div class="ul-widget5__info">
                                <span>Vendor:</span><span class="text-primary">{{ pricing.user.first_name.toUpperCase() +
                                  " " + pricing.user.last_name.toUpperCase() }}</span>
                                <span class="text-primary"><a class="text-success me-2" href="#"
                                    @click="openEditPayment(pricing)"><i class="nav-icon i-Pen-2 fw-bold"></i> </a></span>
                                <span><a class="text-danger me-2" href="#"
                                    @click="deleteServicePricing(pricing.pricing_id)"><i
                                      class="nav-icon i-Close-Window fw-bold"></i></a></span>
                              </div>
                            </div>
                          </div>
                          <div class="ul-widget5__content">
                            <div class="ul-widget5__stats"><span class="ul-widget5__number">Ksh. {{ pricing.price
                            }}</span><span class="ul-widget5__sales text-mute">Price</span></div>
                            <div class="ul-widget5__stats"><span class="ul-widget5__number">{{ pricing.duration }}
                                Minutes</span><span class="ul-widget5__sales text-mute">Duration</span></div>
                          </div>
                        </div>
                        <div v-if="servicePricings.length == 0" class="row">
                          <div class="user-profile mb-4">
                            <div class="ul-widget-card__user-info">
                              <img class="profile-picture avatar-lg mb-2 mt-2"
                                src="https://cdn.pixabay.com/photo/2015/10/31/12/00/question-1015308_1280.jpg" alt="" />

                            </div>
                            <div class="ul-widget-card--line text-center mt-2">
                              <a type="button" data-bs-toggle="modal" data-target="#verifyModalContent"
                                data-whatever="@mdo">
                                No pricing yet please add!</a>
                            </div>
                          </div>
                        </div>
                      </div>
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
</template>

<script>
import Topbar from "@/components/partials/Topbar.vue";
import Footer from "@/components/partials/Footer.vue";
import Sidebar from "@/components/partials/Sidebar";
import Breadcrumbs from "@/components/partials/Breadcrumbs";
import TokenService from "@/services/token.service";

import { EDIT_SERVICE_PRICING_MUTATION, DELETE_SERVICE_PRICING_MUTATION, ADD_SERVICE_PRICING_MUTATION, ALL_SERVICE_PRICINGS_QUERY, ALL_SERVICES_QUERY, CATEGORY_USERS_QUERY, } from "@/graphql";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "ServiceInterest",
  components: { Sidebar, Topbar, Footer, Breadcrumbs, Form, Field, ErrorMessage, },
  data() {
    const schema = yup.object().shape({
      duration: yup.string().required("Service duration is required!"),
      service_id: yup.string().required("Service name is required!"),
      price: yup.string().required("Price is required!"),
      /*  user_id: yup.string().required("Service provider required!"), */
    });
    return {
      servicePricings: [],
      services: [],
      userUserGroups: [],
      service_id: "",
      pricing_id: "",
      price: "",
      duration: "",
      vendor: TokenService.getVendor(),
      schema,
    };
  },
  apollo: {
    services: {
      query: ALL_SERVICES_QUERY,
    },
    userUserGroups: {
      query: CATEGORY_USERS_QUERY,
      variables: {
        groupId: 2,
      },
    },
    userUserGroups: {
      query: CATEGORY_USERS_QUERY,
      variables: {
        groupId: "3",
      },
    },
  },
  methods: {
    addServicePricing(pricing) {
      this.$apollo
        .mutate({
          mutation: ADD_SERVICE_PRICING_MUTATION,
          variables: {
            input: {
              duration: parseInt(pricing.duration),
              user_id: parseInt(this.vendor.user_id),
              service_id: parseInt(pricing.service_id),
              price: parseFloat(pricing.price),
            },
          },
        })
        .then((response) => {
          // redirect user
          $("#verifyModalContent").modal("hide");
          this.$swal({
            title: "Service Pricing added sucessfully",
            position: "top-end",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
          this.$apollo.queries.servicePricings.refetch();
        })
        .catch((error) => {
          this.$swal({
            title: error.message,
            position: "top-end",
            icon: "warning",
            showConfirmButton: false,
            timer: 3000,
          });
        });
    },
    deleteServicePricing(pricing_id) {
      this.$swal({
        title: "Do you want to Delete the Service Pricing?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$apollo
            .mutate({
              mutation: DELETE_SERVICE_PRICING_MUTATION,
              variables: {
                pricingId: parseInt(pricing_id),
              }
            })
            .then((response) => {
              this.$swal({
                title: "Service Pricing deleted sucessfully",
                position: "top-end",
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
              });
              this.$apollo.queries.servicePricings.refetch();
            })
            .catch((error) => {
              this.$swal({
                title: error.message,
                position: "top-end",
                icon: "warning",
                showConfirmButton: false,
                timer: 3000,
              });
            });
        }
      });
    },
    openEditPayment(pricing) {
      this.pricing_id = pricing.pricing_id;
      this.service_id = pricing.service_id;
      this.price = pricing.price;
      this.duration = pricing.duration;
      $("#editModalContent").modal("show");
    },
    editServicePricing(pricing) {
      this.$apollo
        .mutate({
          mutation: EDIT_SERVICE_PRICING_MUTATION,
          variables: {
            pricingId: parseInt(this.pricing_id),
            input: {
              duration: parseInt(pricing.duration),
              user_id: parseInt(this.vendor.user_id),
              service_id: parseInt(pricing.service_id),
              price: parseFloat(pricing.price),
            },
          },
        })
        .then((response) => {
          $("#editModalContent").modal("hide");
          this.$swal({
            title: "Service Pricing updated sucessfully",
            position: "top-end",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
          this.$apollo.queries.servicePricings.refetch();
        })
        .catch((error) => {
          this.$swal({
            title: error.message,
            position: "top-end",
            icon: "warning",
            showConfirmButton: false,
            timer: 3000,
          });
        });
    },
    back() {
            TokenService.removeVendor();
            this.$router.push("/vendors");
        },
    async statusChange() {
      this.servicePricings = [];
      await this.$apollo
        .query({
          query: ALL_SERVICE_PRICINGS_QUERY,
          variables: {
            filter: {
              user_id: this.vendor.user_id,
            }
          },
        })
        .then((response) => {
          this.servicePricings = response.data.servicePricings;
        });
    },
  },
  async created() {
    this.statusChange();
  },
};
</script>
