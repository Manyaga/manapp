<template>
  <!-- Add Interest CategoryModal -->
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
            ADD INTEREST CATEGORY
          </h5>
          <button
            class="btn btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <Form @submit="addCategory" :validation-schema="schema" class="user">
          <div class="modal-body">
            <div class="form-group">
              <label class="col-form-label" for="name"
                >Interest Category:</label
              >
              <Field name="name" class="form-control" type="text" />
              <ErrorMessage name="name" class="text-danger p-3" />
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
  <!-- Edit Interest CategoryModal -->
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
            EDIT INTEREST CATEGORY
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
              <label class="col-form-label" for="name"
                >Interest Category:</label
              >
              <Field
                name="name"
                class="form-control"
                v-model="name"
                @input="remark = $event.target.value.toUpperCase()"
                type="text"
              />
              <ErrorMessage name="name" class="text-danger p-3" />
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
          <i class="nav-icon i-add text-white fw-bold"></i> ADD INTEREST
          CATEGORY
        </button>
        <Breadcrumbs />
        <div class="separator-breadcrumb border-top"></div>
        <div class="row mb-4">
          <div class="col-md-12">
            <table class="table" id="category_table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Avatar</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(category, index) in interestCategories"
                  v-bind:key="category._id"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ category.name.toUpperCase() }}</td>
                  <td>
                    <img
                      class="rounded-circle m-0 avatar-sm-table"
                      src="../../assets/images/faces/1.jpg"
                      alt=""
                    />
                  </td>
                  <td>
                    <a
                      class="text-info me-2"
                      @click="openEditCategory(category)"
                      ><i class="nav-icon i-Pen-2 fw-bold"></i
                    ></a>
                    <a
                      class="text-danger me-2"
                      @click="deleteCategory(category.category_id)"
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
  ALL_INTEREST_CATEGORIES_QUERY,
  ADD_INTEREST_CATEGORY_MUTATION,
  EDIT_INTEREST_CATEGORY_MUTATION,
  DELETE_INTEREST_CATEGORY_MUTATION,
} from "@/graphql";
export default {
  name: "Category",
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
      name: yup.string().required("Interest Categoryname is required!"),
    });
    return {
      interestCategories: [],
      category: "",
      category_id: "",
      category_id: "",
      name: "",
      schema,
    };
  },
  apollo: {
    // fetch all countries
    interestCategories: {
      query: ALL_INTEREST_CATEGORIES_QUERY,
    },
  },
  methods: {
    addCategory(category) {
      this.$apollo
        .mutate({
          mutation: ADD_INTEREST_CATEGORY_MUTATION,
          variables: {
            input: {
              name: category.name,
            },
          },
        })
        .then((response) => {
          $("#verifyModalContent").modal("hide");
          this.$swal({
            title: "Interest Category added sucessfully",
            position: "top-end",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
          this.$apollo.queries.interestCategories.refetch();
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
    openEditCategory(category) {
      this.name = category.name;
      this.category_id = category.category_id;
      $("#editModalContent").modal("show");
    },
    editCountry(category) {
      console.log(category);
      this.$apollo
        .mutate({
          mutation: EDIT_INTEREST_CATEGORY_MUTATION,
          variables: {
            categoryId: parseInt(this.category_id),
            input: {
              name: category.name,
            },
          },
        })
        .then((response) => {
          $("#editModalContent").modal("hide");
          this.$swal({
            title: "Interest Category updated sucessfully",
            position: "top-end",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
          this.$apollo.queries.interestCategories.refetch();
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
    deleteCategory(category_id) {
      this.$swal({
        title: "Delete the Category?",
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
              mutation: DELETE_INTEREST_CATEGORY_MUTATION,
              variables: {
                categoryId: parseInt(category_id),
              },
            })
            .then((response) => {
              this.$swal({
                title: "Interest Category deleated sucessfully",
                position: "top-end",
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
              });
              this.$apollo.queries.interestCategories.refetch();
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
      this.interestCategories = [];
      $("#category_table").DataTable().destroy();
      await this.$apollo
        .query({
          query: ALL_INTEREST_CATEGORIES_QUERY,
        })
        .then((response) => {
          this.interestCategories = response.data.interestCategories;
        });
      setTimeout(function () {
        $("#category_table").DataTable({
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
