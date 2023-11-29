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
        <Breadcrumbs />
        <div class="separator-breadcrumb border-top"></div>
        <div class="row mb-2">
          <div class="col-md-12">
            <button
              class="btn btn-light text-white ul-btn-raised--v2 m-1 float-end"
              type="button"
              data-bs-toggle="modal"
              data-target="#verifyModalContent"
              data-whatever="@mdo"
            >
              <i class="nav-icon i-add text-primary text-white fw-bold"></i> ADD
              SERVICE
            </button>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="table-responsive">
              <table class="table text-center" id="service_table">
                <thead>
                  <tr class="bg-primary text-white">
                    <th scope="col">#</th>
                    <th scope="col">Service Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(service, index) in services"
                    :key="service.service_id"
                  >
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ service.service_name }}</td>
                    <td>{{ service.description }}</td>
                    <td>
                      <a
                        class="text-success me-2"
                        @click="openEditService(service)"
                        ><i class="nav-icon i-Pen-2 fw-bold"></i
                      ></a>
                      <a
                        class="text-danger me-2 float-end"
                        @click="deleteService(service.service_id)"
                        ><i class="nav-icon i-Close-Window fw-bold"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
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
      $("#service_table").DataTable().destroy();
      await this.$apollo
        .query({
          query: ALL_SERVICES_QUERY,
        })
        .then((response) => {
          this.services = response.data.services;
        });
      setTimeout(function () {
        $("#service_table").DataTable({
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
    await this.statusChange();
  },
};
</script>
