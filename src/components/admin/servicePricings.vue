<template>
  <!-- Add Request Modal -->
  <div
    class="modal fade"
    id="verifyModalContent"
    tabindex="-1"
    role="dialog"
    aria-labelledby="verifyModalContent"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="verifyModalContent_title">
            Add Service Pricing
          </h5>
          <button
            class="btn btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <Form
          @submit="addServicePricing"
          :validation-schema="schema"
          class="user"
        >
          <div class="modal-body">
            <div class="form-group">
              <label for="service_id" class="form-control-label">Service</label>
              <Field
                name="service_id"
                class="form-control form-control-lg"
                v-model="service_id"
                as="select"
              >
                <option value="">-- service--</option>
                <option
                  v-for="service in services"
                  :value="service.service_id"
                  :key="service.service_id"
                >
                  {{ service.service_name }}
                </option>
              </Field>
              <ErrorMessage
                name="service_id"
                class="text-danger py-3 text-sm"
              />
            </div>
            <div class="form-group">
              <label class="col-form-label" for="price">Price:</label>
              <Field
                name="price"
                class="form-control"
                id="price"
                type="number"
                step="0.01"
              />
            </div>
            <div class="form-group">
              <label class="col-form-label" for="duration">Duration:</label>
              <Field name="duration" class="form-control" id="duration" />
            </div>
            <div class="form-group">
              <label for="user_id" class="form-control-label"
                >Service Provider</label
              >
              <Field
                name="user_id"
                class="form-control form-control-lg"
                v-model="user_id"
                as="select"
              >
                <option value="">-- Provider--</option>
                <option
                  v-for="supplier in userUserGroups"
                  :value="supplier.id"
                  :key="supplier.id"
                >
                  {{
                    supplier.user_id.first_name +
                    " " +
                    supplier.user_id.last_name
                  }}
                </option>
              </Field>
              <ErrorMessage name="user_id" class="text-danger py-3 text-sm" />
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button class="btn btn-primary" type="Submit">Submit</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
  <!-- Edit Request Modal -->
  <div
    class="modal fade"
    id="editModalContent"
    tabindex="-1"
    role="dialog"
    aria-labelledby="editModalContent"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editModalContent_title">
            Edit Service Pricing
          </h5>
          <button
            class="btn btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <Form
          @submit="editServicePricing"
          :validation-schema="schema"
          class="user"
        >
          <div class="modal-body">
            <div class="form-group">
              <label for="service_id" class="form-control-label">Service</label>
              <Field
                name="service_id"
                class="form-control form-control-lg"
                v-model="service_id"
                as="select"
              >
                <option value="">-- service--</option>
                <option
                  v-for="service in services"
                  :value="service.service_id"
                  :key="service.service_id"
                >
                  {{ service.service_name }}
                </option>
              </Field>
              <ErrorMessage
                name="service_id"
                class="text-danger py-3 text-sm"
              />
            </div>
            <div class="form-group">
              <label class="col-form-label" for="price">Price:</label>
              <Field
                name="price"
                class="form-control"
                v-model="price"
                id="price"
                type="number"
                step="0.01"
              />
            </div>
            <div class="form-group">
              <label class="col-form-label" for="duration">Duration:</label>
              <Field
                name="duration"
                class="form-control"
                v-model="duration"
                id="duration"
                type="time"
              />
            </div>
            <div class="form-group">
              <label for="user_id" class="form-control-label"
                >Service Provider</label
              >
              <Field
                name="user_id"
                class="form-control form-control-lg"
                v-model="user_id"
                as="select"
              >
                <option value="">-- Provider--</option>
                <option
                  v-for="supplier in userUserGroups"
                  :value="supplier.user_id"
                  :key="supplier.user_id"
                >
                  {{ supplier.first_name + " " + supplier.last_name }}
                  =======
                </option>

                <option
                  v-for="supplier in userUserGroups"
                  :value="supplier.user_id.user_id"
                  :key="supplier.user_id.user_id"
                >
                  {{
                    supplier.user_id.first_name.toUpperCase() +
                    " " +
                    supplier.user_id.last_name.toUpperCase()
                  }}
                  >>>>>>> d32df05ebaf070bfb1a6cb28c738f10f656e7fd7
                </option>
              </Field>
              <ErrorMessage name="user_id" class="text-danger py-3 text-sm" />
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-dismiss="modal"
            >
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
        <button
          class="btn btn-info text-white ul-btn-raised--v2 m-1 float-end"
          type="button"
          data-bs-toggle="modal"
          data-target="#verifyModalContent"
          data-whatever="@mdo"
        >
          <i class="nav-icon i-add text-primary text-white fw-bold"></i> Add
          Service Pricing
        </button>
        <Breadcrumbs />
        <div class="separator-breadcrumb border-top"></div>
        <div class="row mb-4">
          <!-- <div class="col-md-12">
            <div class="table-responsive">
              <table class="table text-center" id="service_pricing_table">
                <thead>
                  <tr class="bg-primary text-white">
                    <th scope="col">#</th>
                    <th scope="col">Service</th>
                    <th scope="col">Price</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Provider</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(pricing, index) in servicePricings"
                    :key="pricing.pricing_id"
                  >
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ pricing.service.service_name }}</td>
                    <td>{{ pricing.price }}</td>
                    <td>{{ pricing.duration }}</td>
                    <td>{{ pricing.user_id.first_name }}</td>
                    <td>
                      {{
                        pricing.user_id.first_name.toUpperCase() +
                        " " +
                        pricing.user_id.last_name.toUpperCase()
                      }}
                    </td>
                    <td>
                      <a
                        class="text-success me-2"
                        @click="openEditServicePricing(pricing)"
                        ><i class="nav-icon i-Pen-2 fw-bold"></i
                      ></a>
                      <a
                        class="text-danger me-2 float-end"
                        @click="deleteServicePricing(pricing.pricing_id)"
                        ><i class="nav-icon i-Close-Window fw-bold"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> -->
          <div class="col-xl-12 col-md-12 mb-4">
            <div class="card">
              <div class="card-body">
                <div class="ul-widget__head">
                  <div class="ul-widget__head-label">
                    <h3 class="ul-widget__head-title">Best Service Pricing</h3>
                  </div>
                  <div class="ul-widget__head-toolbar">
                    <ul
                      class="nav nav-tabs nav-tabs-line nav-tabs-bold ul-widget-nav-tabs-line"
                      role="tablist"
                    >
                      <li class="nav-item">
                        <a
                          class="nav-link active show"
                          data-bs-toggle="tab"
                          href="#ul-widget5-tab1-content"
                          role="tab"
                          aria-selected="true"
                          >Latest</a
                        >
                      </li>
                      <!-- <li class="nav-item">
                        <a
                          class="nav-link"
                          data-bs-toggle="tab"
                          href="#ul-widget5-tab2-content"
                          role="tab"
                          aria-selected="false"
                          >Month</a
                        >
                      </li> -->
                    </ul>
                  </div>
                </div>






                
                <div class="ul-widget__body" v-for="(pricing, index) in servicePricings"
                :key="pricing.pricing_id">
                  <div class="tab-content">
                    <div
                      class="tab-pane active show"
                      id="ul-widget5-tab1-content"
                    >
                      <div class="ul-widget5">
                        <div class="ul-widget5__item">
                          <div class="ul-widget5__content">
                            <div class="ul-widget5__pic">
                              <img
                                src="../../assets/images/products/iphone-1.jpg"
                                alt="Third slide"
                              />
                            </div>

                            <div class="ul-widget5__section">
                              <a class="ul-widget4__title" href="#"
                                >{{ pricing.service.service_name }}</a
                              >
                              <p class="ul-widget5__desc">
                                {{ pricing.service.description }}
                              </p>
                              <div class="ul-widget5__info">
                                <span>Service Provider:</span
                                ><span class="text-primary">  {{ pricing.user.first_name }} {{ pricing.user.last_name }}</span
                                >
                                <!-- <span>Name:</span
                            ><span class="text-primary">{{ pricing.user_id.first_name }}</span> -->
                              </div>
                            </div>
                          </div>
                          <div class="ul-widget5__content">
                            <div class="ul-widget5__stats">
                              <span class="ul-widget5__number"> $ {{ pricing.price }}</span
                              ><span class="ul-widget5__sales text-mute"
                                >Price</span
                              >
                            </div>
                            <div class="ul-widget5__stats">
                              <span class="ul-widget5__number">{{ pricing.duration }} Hours</span
                              ><span class="ul-widget5__sales text-mute"
                                >Duration</span
                              >
                            </div>
                          </div>
                        </div>
                        <!-- <div class="ul-widget5__item">
                          <div class="ul-widget5__content">
                            <div class="ul-widget5__pic">
                              <img
                                src="../../assets/images/products/speaker-1.jpg"
                                alt="Third slide"
                              />
                            </div>
                            <div class="ul-widget5__section">
                              <a class="ul-widget4__title" href="#"
                                >Great Logo Designn</a
                              >
                              <p class="ul-widget5__desc">
                                UI lib admin themes.
                              </p>
                              <div class="ul-widget5__info">
                                <span>Author:</span
                                ><span class="text-primary">Jon Snow</span
                                ><span>Released:</span
                                ><span class="text-primary">23.08.17</span>
                              </div>
                            </div>
                          </div>
                          <div class="ul-widget5__content">
                            <div class="ul-widget5__stats">
                              <span class="ul-widget5__number">29,200</span
                              ><span class="ul-widget5__sales text-mute"
                                >sales</span
                              >
                            </div>
                            <div class="ul-widget5__stats">
                              <span class="ul-widget5__number">4500</span
                              ><span class="ul-widget5__sales text-mute"
                                >votes</span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="ul-widget5__item">
                          <div class="ul-widget5__content">
                            <div class="ul-widget5__pic">
                              <img
                                src="../../assets/images/products/watch-1.jpg"
                                alt="Third slide"
                              />
                            </div>
                            <div class="ul-widget5__section">
                              <a class="ul-widget4__title" href="#"
                                >Great Logo Designn</a
                              >
                              <p class="ul-widget5__desc">
                                UI lib admin themes.
                              </p>
                              <div class="ul-widget5__info">
                                <span>Author:</span
                                ><span class="text-primary">Jon Snow</span
                                ><span>Released:</span
                                ><span class="text-primary">23.08.17</span>
                              </div>
                            </div>
                          </div>
                          <div class="ul-widget5__content">
                            <div class="ul-widget5__stats">
                              <span class="ul-widget5__number">23,200</span
                              ><span class="ul-widget5__sales text-mute"
                                >sales</span
                              >
                            </div>
                            <div class="ul-widget5__stats">
                              <span class="ul-widget5__number">2046</span
                              ><span class="ul-widget5__sales text-mute"
                                >votes</span
                              >
                            </div>
                          </div>
                        </div> -->
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
import "datatables.net-dt/js/dataTables.dataTables";
import "@/assets/css/dataTables.bootstrap4.min.css";
import "@/assets/css/buttons.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import "@/assets/datatables/jquery.dataTables.min.js";
import "@/assets/datatables/dataTables.bootstrap4.min.js";
import "@/assets/datatables/dataTables.buttons.min.js";
import "@/assets/datatables/buttons.html5.min.js";
import "@/assets/datatables/buttons.print.min.js";
import "@/assets/datatables/jszip.min.js";
import {
  EDIT_SERVICE_PRICING_MUTATION,
  DELETE_SERVICE_PRICING_MUTATION,
  ADD_SERVICE_PRICING_MUTATION,
  ALL_SERVICE_PRICINGS_QUERY,
  ALL_SERVICES_QUERY,
  USERS_BY_GROUP_QUERY,
  CATEGORY_USERS_QUERY,
} from "@/graphql";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "ServiceInterest",
  components: {
    Sidebar,
    Topbar,
    Footer,
    Breadcrumbs,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      duration: yup.string().required("Service duration is required!"),
      service_id: yup.string().required("Service name is required!"),
      price: yup.string().required("Price is required!"),
      user_id: yup.string().required("Service provider required!"),
    });
    return {
      servicePricings: [],
      services: [],
      userUserGroups: [],
      service_id: "",
      pricing_id: "",
      price: "",
      duration: "",
      user_id: "",
      schema,
    };
  },
  apollo: {
    servicePricings: {
      query: ALL_SERVICE_PRICINGS_QUERY,
    },
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
              user_id: parseInt(pricing.user_id),
              service_id: pricing.service_id,
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
              pricingId: pricing_id,
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
      this.user_id = pricing.user_id;
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
            pricingId: this.pricing_id,
            input: {
              duration: pricing.duration,
              user_id: pricing.user_id,
              service_id: pricing.service_id,
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
    async statusChange() {
      this.servicePricings = [];
      $("#service_pricing_table").DataTable().destroy();
      await this.$apollo
        .query({
          query: ALL_SERVICE_PRICINGS_QUERY,
        })
        .then((response) => {
          this.servicePricings = response.data.servicePricings;
        });
      setTimeout(function () {
        $("#service_pricing_table").DataTable({
          destroy: true,
          pageLength: 5,
          lengthChange: true,
          processing: true,
          paging: true,
          info: false,
          dom: "Bfrtip",
          buttons: [
            {
              extend: "csv",
              text: '<i class="fa-solid fa-file-pdf"></i>',
              className: "btn btn-sm btn-outline-success mb-3 text-success",
            },
            {
              extend: "pdf",
              text: '<i class="fa fa-file-pdf"></i>',
              className: "btn btn-sm btn-outline-danger mb-3 text-danger",
            },
            {
              extend: "print",
              text: '<i class="fa fa-print"></i>',
              className: "btn btn-sm btn-outline-secondary mb-3 text-secondary",
            },
          ],
        });
      }, 300);
    },
  },
  async created() {
    this.statusChange();
  },
};
</script>
