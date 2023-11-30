<template>
  <!-- Add Country Modal -->
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
          <h5 class="modal-title" id="verifyModalContent_title">ADD COUNTRY</h5>
          <button
            class="btn btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <Form @submit="addCountry" :validation-schema="schema" class="user">
          <div class="modal-body">
            <div class="form-group">
              <label class="col-form-label" for="country_name"
                >Country Name:</label
              >
              <Field name="country_name" class="form-control" type="text" />
              <ErrorMessage name="country_name" class="text-danger p-3" />
            </div>
            <div class="form-group">
              <label class="col-form-label" for="country_code"
                >Country Code:</label
              >
              <Field name="country_code" class="form-control" type="text" />
              <ErrorMessage name="country_code" class="text-danger p-3" />
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
            EDIT COUNTRY
          </h5>
          <button
            class="btn btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <Form @submit="editCountry" :validation-schema="schema" class="user">
          <div class="modal-body">
            <div class="form-group">
              <label class="col-form-label" for="country_name"
                >Country Name:</label
              >
              <Field
                name="country_name"
                class="form-control"
                v-model="country_name"
                type="text"
              />
              <ErrorMessage name="country_name" class="text-danger p-3" />
            </div>

            <div class="form-group">
              <label class="col-form-label" for="country_code"
                >Country Code:</label
              >
              <Field
                name="country_code"
                class="form-control"
                v-model="country_code"
                type="text"
              />
              <ErrorMessage name="country_code" class="text-danger p-3" />
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
          class="btn btn-info text-white ul-btn-raised--v2 m-1 text-white float-end"
          type="button"
          data-bs-toggle="modal"
          data-target="#verifyModalContent"
          data-whatever="@mdo"
        >
          <i class="nav-icon i-add text-white fw-bold"></i> ADD COUNTRY
        </button>
        <Breadcrumbs />
        <div class="separator-breadcrumb border-top"></div>
        <div class="row mb-4">
          <div class="col-md-12">
            <table class="table" id="country_table">
              <thead class="table">
                <tr class="bg-primary text-white">
                  <th scope="col">#</th>
                  <th scope="col">Country</th>
                  <th scope="col">code</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(country, index) in countries"
                  v-bind:key="country._id"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ country.country_name }}</td>
                  <td>{{ country.country_code }}</td>
                  <td>
                    <a class="text-info me-2" @click="openEditCountry(country)"
                      ><i class="nav-icon i-Pen-2 fw-bold"></i
                    ></a>
                    <a
                      class="text-danger me-2"
                      @click="deleteCountry(country.country_id)"
                      ><i class="nav-icon i-Close-Window fw-bold"></i
                    ></a>
                  </td>
                </tr>
              </tbody>
            </table>
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
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import {
  ALL_COUNTRIES_QUERY,
  ADD_COUNTRY_MUTATION,
  EDIT_COUNTRY_MUTATION,
  DELETE_COUNTRY_MUTATION,
} from "@/graphql";
export default {
  name: "Country",
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
      country_name: yup.string().required("Country name is required!"),
    });
    return {
      countries: [],
      country_name: "",
      country_code: "",
      country_id: "",
      schema,
    };
  },
  apollo: {
    // fetch all countries
    countries: {
      query: ALL_COUNTRIES_QUERY,
    },
  },
  methods: {
    addCountry(country) {
      const input = {
        country_code: country.country_code,
        country_name: country.country_name,
      };
      console.log(input);
      this.$apollo
        .mutate({
          mutation: ADD_COUNTRY_MUTATION,
          variables: {
            input,
          },
        })
        .then((response) => {
          $("#verifyModalContent").modal("hide");
          this.$swal({
            title: "Country added sucessfully",
            position: "top-end",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
          this.$apollo.queries.countries.refetch();
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
    openEditCountry(country) {
      this.country_name = country.country_name;
      this.country_code = country.country_code;
      this.country_id = country.country_id;
      $("#editModalContent").modal("show");
    },
    editCountry(country) {
      this.$apollo
        .mutate({
          mutation: EDIT_COUNTRY_MUTATION,
          variables: {
            updateCountryId: parseInt(this.country_id),
            input: {
              country_code: country.country_code,
              country_name: country.country_name,
            },
          },
        })
        .then((response) => {
          $("#editModalContent").modal("hide");
          this.$swal({
            title: "Country updated sucessfully",
            position: "top-end",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
          this.$apollo.queries.countries.refetch();
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
    deleteCountry(country_id) {
      console.log(country_id);
      this.$swal({
        title: "Delete the Country?",
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
              mutation: DELETE_COUNTRY_MUTATION,
              variables: {
                deleteCountryId: parseInt(country_id),
              },
            })
            .then((response) => {
              this.$swal({
                title: "Country deleated sucessfully",
                position: "top-end",
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
              });
              this.$apollo.queries.countries.refetch();
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

    async statusChange() {
      this.countries = [];
      $("#country_table").DataTable().destroy();
      await this.$apollo
        .query({
          query: ALL_COUNTRIES_QUERY,
        })
        .then((response) => {
          this.countries = response.data.countries;
        });
      setTimeout(function () {
        $("#country_table").DataTable({
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
