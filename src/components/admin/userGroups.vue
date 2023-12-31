<template>
  <!-- Add Group Modal -->
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
          <h5 class="modal-title" id="verifyModalContent_title">Add Group</h5>
          <button
            class="btn btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <Form @submit="addUserGroup" :validation-schema="schema" class="user">
          <div class="modal-body">
            <div class="form-group">
              <label class="col-form-label" for="group_name">Group Name:</label>
              <Field
                name="group_name"
                class="form-control"
                id="group_name"
                type="text"
              />
              <ErrorMessage name="group_name" class="text-danger p-3" />
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
  <!-- Edit Group Modal -->
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
            Edit Group {{ group_name }}
          </h5>
          <button
            class="btn btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <Form @submit="editUserGroup" :validation-schema="schema" class="user">
          <div class="modal-body">
            <div class="form-group">
              <label class="col-form-label" for="group_name">Group Name:</label>
              <Field
                name="group_name"
                class="form-control"
                v-model="group_name"
                type="text"
              />
              <ErrorMessage name="group_name" class="text-danger p-3" />
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
          <i class="nav-icon i-add text-white fw-bold"></i> ADD USER GROUP
        </button>

        <Breadcrumbs />
        <div class="separator-breadcrumb border-top"></div>
        <div class="row mb-4">
          <div class="col-md-12">
            <table class="table" id="group_table">
              <thead class="table">
                <tr class="bg-primary text-white">
                  <th scope="col">#</th>
                  <th scope="col">Group</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(group, index) in userGroups"
                  v-bind:key="group.group_id"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ group.group_name.toUpperCase() }}</td>
                  <td>
                    <a class="text-info me-2" @click="openEditUserGroup(group)"
                      ><i class="nav-icon i-Pen-2 fw-bold"></i
                    ></a>
                    <a
                      class="text-danger me-2"
                      @click="deleteUserGroup(group.group_id)"
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
  ALL_USER_GROUPS_QUERY,
  ADD_USER_GROUP_MUTATION,
  DELETE_USER_GROUP_MUTATION,
  EDIT_USER_GROUP_MUTATION,
} from "@/graphql";
export default {
  name: "Usergroup",
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
      group_name: yup.string().required("User Group name is required!"),
    });
    return {
      userGroups: [],
      group_name: "",
      group_id: "",
      schema,
    };
  },
  apollo: {
    // fetch all userGroups
    userGroups: {
      query: ALL_USER_GROUPS_QUERY,
    },
  },
  methods: {
    addUserGroup(group) {
      this.$apollo
        .mutate({
          mutation: ADD_USER_GROUP_MUTATION,
          variables: {
            input: {
              group_name: group.group_name,
            },
          },
        })
        .then((response) => {
          // redirect user
          $("#verifyModalContent").modal("hide");
          this.$swal({
            title: "User group added sucessfully",
            position: "top-end",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
          this.$apollo.queries.userGroups.refetch();
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
    openEditUserGroup(group) {
      this.group_name = group.group_name;
      this.group_id = group.group_id;
      $("#editModalContent").modal("show");
    },
    editUserGroup(group) {
      console.log(group);
      this.$apollo
        .mutate({
          mutation: EDIT_USER_GROUP_MUTATION,
          variables: {
            groupId: parseInt(this.group_id),
            input: {
              group_name: group.group_name,
            },
          },
        })
        .then((response) => {
          $("#editModalContent").modal("hide");
          this.$swal({
            title: "User group updated sucessfully",
            position: "top-end",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
          this.$apollo.queries.userGroups.refetch();
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
    deleteUserGroup(group_id) {
      console.log(grou);
      this.$swal({
        title: "Delete the user group?",
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
              mutation: DELETE_USER_GROUP_MUTATION,
              variables: {
                groupId: parseInt(group_id),
              },
            })
            .then((response) => {
              this.$swal({
                title: "User group deleted sucessfully",
                position: "top-end",
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
              });
              this.$apollo.queries.userGroups.refetch();
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
      this.userGroups = [];
      $("#group_table").DataTable().destroy();
      await this.$apollo
        .query({
          query: ALL_USER_GROUPS_QUERY,
        })
        .then((response) => {
          this.userGroups = response.data.userGroups;
        });
      setTimeout(function () {
        $("#group_table").DataTable({
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
