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
  <div class="app-admin-wrap layout-horizontal-bar">
    <Sidebar />
    <Topbar />
    <div class="main-content-wrap d-flex flex-column">
      <div class="main-content">
        <Breadcrumbs />
        <div class="separator-breadcrumb border-top"></div>
        <div class="row mb-4">
          <div class="col-xl-12 col-md-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="ul-widget__head pb-20">
                  <div class="ul-widget__head-label">
                    <h3 class="ul-widget__head-title">PRICING FOR {{ service.service_name.toUpperCase()}} </h3>
                  </div>
                  <div class="ul-widget__head-toolbar">
                    <i class="nav-icon me-2 i-left text-primary" @click="back()"></i>
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

import { ADD_SERVICE_PRICING_MUTATION, ALL_SERVICE_PRICINGS_QUERY, ALL_SERVICES_QUERY, CATEGORY_USERS_QUERY } from "@/graphql";
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
      service_id: "",
      pricing_id: "",
      price: "",
      duration: "",
      service: TokenService.getPricing(),
      user: [],
      schema,
    };
  },
  apollo: {
    services: {
      query: ALL_SERVICES_QUERY,
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
    back() {
            TokenService.removePricing();
            this.$router.push("/member-services");
        },
    async statusChange() {
      this.servicePricings = [];
      await this.$apollo
        .query({
          query: ALL_SERVICE_PRICINGS_QUERY,
          variables: {
            filter: {
              service_id: this.service.service_id,
              user_id: parseInt(this.user.user_id),
            }
          },
        })
        .then((response) => {
          this.servicePricings = response.data.servicePricings;
        });
    },
  },
  async created() {
    this.user = TokenService.getUser();
    this.statusChange();
  },
};
</script>
