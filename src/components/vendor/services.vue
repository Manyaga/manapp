<template>
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
          <h5 class="modal-title" id="verifyModalContent_title">Add Service</h5>
          <button
            class="btn btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <Form @submit="addService" :validation-schema="schema" class="user">
          <div class="modal-body">
            <div class="form-group">
              <label class="col-form-label" for="service_name"
                >Service Name:</label
              >
              <Field
                name="service_name"
                class="form-control"
                id="service_name"
                type="text"
              />
              <ErrorMessage name="service_name" class="text-danger p-3" />
            </div>
            <div class="form-group">
              <label class="col-form-label" for="description"
                >Description:</label
              >
              <Field name="description" class="form-control" type="text" />
              <ErrorMessage name="description" class="text-danger p-3" />
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
  <!-- Edit Country Modal -->
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
          <h5 class="modal-title" id="verifyModalContent_title">
            Edit Service
          </h5>
          <button
            class="btn btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <Form @submit="editService" :validation-schema="schema" class="user">
          <div class="modal-body">
            <div class="form-group">
              <label class="col-form-label" for="service_name"
                >Service Name:</label
              >
              <Field
                name="service_name"
                class="form-control"
                v-model="service_name"
                type="text"
              />
              <ErrorMessage name="service_name" class="text-danger p-3" />
            </div>
            <div class="form-group">
              <label class="col-form-label" for="description"
                >Description:</label
              >
              <Field
                name="description"
                class="form-control"
                v-model="description"
                type="text"
              />
              <ErrorMessage name="description" class="text-danger p-3" />
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
          class="btn btn-primary text-white ul-btn-raised--v2 m-1 float-end"
          type="button"
          data-bs-toggle="modal"
          data-target="#verifyModalContent"
          data-whatever="@mdo"
        >
          <i class="nav-icon i-add text-primary text-white fw-bold"></i> ADD
          SERVICE
        </button>
        <Breadcrumbs />
        <div class="separator-breadcrumb border-top"></div>

        <div class="row mb-4">
          <div
            class="col-md-6"
            v-for="(service, index) in services"
            :key="service.service_id"
          >
            <div class="card card-ecommerce-3 o-hidden mb-4">
              <div class="d-flex flex-column flex-sm-row">
                <div>
                  <img
                    class="card-img-left"
                    src="../../assets/images/fashion.png"
                    alt=""
                  />
                </div>
                <div class="flex-grow-1 p-4">
                  <h5 class="m-0">{{ service.service_name.toUpperCase() }}</h5>
                  <p class="text-muted mt-3">
                    {{ service.description }}
                  </p>
                  <div class="actions">
                    <button
                      class="btn btn-primary ul-btn-raised--v2 m-1"
                      @click="openEditService(service)"
                      type="button"
                    >
                      EDIT
                    </button>
                    <button
                      class="btn btn-danger ul-btn-raised--v2 m-1 float-end"
                      @click="deleteService(service.service_id)"
                      type="button"
                    >
                      DELETE
                    </button>
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

import {
  ALL_SERVICES_QUERY,
  ADD_SERVICE_MUTATION,
  DELETE_SERVICE_MUTATION,
  EDIT_SERVICE_MUTATION,
} from "@/graphql";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Service",
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
      service_name: yup.string().required("Service name is required!"),
      description: yup.string().required("Service Description is required!"),
    });
    return {
      services: [],
      service_name: "",
      service_id: "",
      description: "",
      schema,
    };
  },
  apollo: {
    // fetch all services
    services: {
      query: ALL_SERVICES_QUERY,
    },
  },
  methods: {
    addService(service) {
      this.$apollo
        .mutate({
          mutation: ADD_SERVICE_MUTATION,
          variables: {
            input: {
              service_name: service.service_name,
              description: service.description,
            },
          },
        })
        .then((response) => {
          // redirect user
          $("#verifyModalContent").modal("hide");
          this.$swal({
            title: "Service added sucessfully",
            position: "top-end",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
          this.$apollo.queries.services.refetch();
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
    deleteService(service_id) {
      this.$swal({
        title: "Do you want to delete the service?",
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
              mutation: DELETE_SERVICE_MUTATION,
              variables: {
                serviceId: parseInt(service_id),
              },
            })
            .then((response) => {
              this.$swal({
                title: "Service deleted sucessfully",
                position: "top-end",
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
              });
              this.$apollo.queries.services.refetch();
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
    openEditService(service) {
      this.service_name = service.service_name;
      this.description = service.description;
      this.service_id = service.service_id;
      $("#editModalContent").modal("show");
    },
    editService(service) {
      this.$apollo
        .mutate({
          mutation: EDIT_SERVICE_MUTATION,
          // serviceId: parseInt(this.service_id),
          variables: {
            serviceId: parseInt(this.service_id),
            input: {
              description: service.description,
              service_name: service.service_name,
            },
          },
        })
        .then((response) => {
          $("#editModalContent").modal("hide");
          this.$swal({
            title: "Service updated sucessfully",
            position: "top-end",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
          this.$apollo.queries.services.refetch();
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
      this.services = [];
      await this.$apollo
        .query({
          query: ALL_SERVICES_QUERY,
        })
        .then((response) => {
          this.services = response.data.services;
        });
    },
  },
  async created() {
    await this.statusChange();
  },
};
</script>
