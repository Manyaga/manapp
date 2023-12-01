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
            Add Service Interest
          </h5>
          <button
            class="btn btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <Form
          @submit="addServiceInterest"
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
              <label for="subcategory_id" class="form-control-label"
                >Interest Subcategory</label
              >
              <Field
                name="subcategory_id"
                class="form-control form-control-lg"
                v-model="subcategory_id"
                as="select"
              >
                <option value="">-- Interest Subcategory--</option>
                <option
                  v-for="sub_category in interestSubcategories"
                  :value="sub_category.subcategory_id"
                  :key="sub_category.subcategory_id"
                >
                  {{ sub_category.name }}
                </option>
              </Field>
              <ErrorMessage
                name="subcategory_id"
                class="text-danger py-3 text-sm"
              />
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
            Edit Service Interest
          </h5>
          <button
            class="btn btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <Form
          @submit="editServiceInterest"
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
              <label for="subcategory_id" class="form-control-label"
                >Interest Subcategory</label
              >
              <Field
                name="subcategory_id"
                class="form-control form-control-lg"
                v-model="subcategory_id"
                as="select"
              >
                <option value="">-- Interest Subcategory--</option>
                <option
                  v-for="sub_category in interestSubcategories"
                  :value="sub_category.sub_category_id"
                  :key="sub_category.sub_category_id"
                >
                  {{ sub_category.name }}
                </option>
              </Field>
              <ErrorMessage
                name="subcategory_id"
                class="text-danger py-3 text-sm"
              />
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
          <i class="nav-icon i-add text-primary text-white fw-bold"></i> ADD
          PRODUCT
        </button>
        <Breadcrumbs />
        <div class="separator-breadcrumb border-top"></div>
        <!-- content goes here-->
        <section class="product-cart">
          <div class="row list-grid">
            <div
              class="list-item col-lg-3 col-xl-3 mt-3"
              v-for="product in products"
              :key="product._id"
            >
              <div class="card o-hidden mb-4 d-flex flex-column">
                <div class="list-thumb d-flex">
                  <img
                    alt=""
                    src="../../assets/images/products/speaker-1.jpg"
                  />
                </div>
                <div class="flex-grow-1 d-bock">
                  <div
                    class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center"
                  >
                    <a class="w-40 w-sm-100" href="">
                      <div class="item-title">
                        Product Name: {{ product.product_name }}
                      </div>
                    </a>

                    <p class="m-0 text-muted text-small w-15 w-sm-100">
                      Quantity {{ product.quantity }}
                    </p>
                    <p class="m-0 text-muted text-small w-15 w-sm-100">
                      Price: {{ product.unitPrice }}
                      <!-- <del class="text-secondary">$54.00</del> -->
                    </p>
                    <!-- <p class="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges"><span class="badge bg-info">20% off</span></p> -->
                    <div>
                      <button
                        class="btn btn-outline-gray-700 ul-btn-raised--v2 m-1"
                        type="button"
                        @click="openEditPayment(product)"
                      >
                        EDIT
                      </button>
                      <button
                        class="btn btn-outline-danger ul-btn-raised--v2 m-1 float-end"
                        type="button"
                        @click="deleteServiceInterest(product._id)"
                      >
                        DELETE
                      </button>
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
  EDIT_SERVICE_INTEREST_MUTATION,
  DELETE_SERVICE_INTEREST_MUTATION,
  ADD_SERVICE_INTEREST_MUTATION,
  ALL_SERVICE_INTERESTS_QUERY,
  ALL_INTEREST_SUBCATEGORIES_QUERY,
  ALL_SERVICES_QUERY,
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
      subcategory_id: yup
        .string()
        .required("Interest subcategory name is required!"),
      service_id: yup.string().required("Service name is required!"),
    });
    return {
      serviceInterests: [],
      services: [],
      interestSubcategories: [],
      service_id: "",
      subcategory_id: "",
      schema,
    };
  },
  apollo: {
    serviceInterests: {
      query: ALL_SERVICE_INTERESTS_QUERY,
    },
    services: {
      query: ALL_SERVICES_QUERY,
    },
    interestSubcategories: {
      query: ALL_INTEREST_SUBCATEGORIES_QUERY,
    },
  },
  methods: {
    addServiceInterest(interest) {
      this.$apollo
        .mutate({
          mutation: ADD_SERVICE_INTEREST_MUTATION,
          variables: {
            input: {
              service_id: parseInt(interest.service_id),
              subcategory_id: parseInt(interest.subcategory_id),
            },
          },
        })
        .then((response) => {
          // redirect user
          $("#verifyModalContent").modal("hide");
          this.$swal({
            title: "Service Interest added sucessfully",
            position: "top-end",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
          this.$apollo.queries.serviceInterests.refetch();
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
    deleteServiceInterest(service_interest_id) {
      this.$swal({
        title: "Do you want to Delete the Service Interest?",
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
              mutation: DELETE_SERVICE_INTEREST_MUTATION,
              serviceInterestId: service_interest_id,
            })
            .then((response) => {
              this.$swal({
                title: "Service Interest deleted sucessfully",
                position: "top-end",
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
              });
              this.$apollo.queries.serviceInterests.refetch();
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
    openEditPayment(interest) {
      this.service_interest_id = interest.service_interest_id;
      this.subcategory_id = interest.subcategory.subcategory_id;
      this.service_id = interest.service.service_id;
      $("#editModalContent").modal("show");
    },
    editServiceInterest(interest) {
      this.$apollo
        .mutate({
          mutation: EDIT_SERVICE_INTEREST_MUTATION,
          variables: {
            serviceInterestId: this.service_interest_id,
            input: {
              subcategory_id: interest.subcategory_id,
              service_id: interest.service_id,
            },
          },
        })
        .then((response) => {
          $("#editModalContent").modal("hide");
          this.$swal({
            title: "Service Interest updated sucessfully",
            position: "top-end",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
          this.$apollo.queries.serviceInterests.refetch();
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
  },
};
</script>
