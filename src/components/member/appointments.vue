<template>
  <!-- Edit Appointment Modal -->
  <div class="modal fade" id="editModalContent" tabindex="-1" role="dialog" aria-labelledby="editModalContent"
    aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editModalContent_title">
            EDIT APPOINTMENT
          </h5>
          <button class="btn btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <Form @submit="editAppointment" class="user">
          <div class="modal-body">
            <div class="row">
              <div class="form-group col-md-6">
                <label class="col-form-label" for="service_user">Service User</label>
                <Field name="service_user" class="form-control form-control-lg" v-model="service_user" as="select">
                  <option value="">-- Service User--</option>
                  <option v-for="user in userUserGroups" :value="user.id" :key="user.id">
                    {{ user.user_id.first_name }}
                  </option>
                </Field>
                <ErrorMessage name="service_user" class="text-danger py-3 text-sm" />
              </div>
              <div class="form-group col-md-6">
                <label class="col-form-label" for="service_id">Service</label>
                <Field name="service_id" class="form-control form-control-lg" v-model="service_id" as="select">
                  <option value="">-- Service--</option>
                  <option v-for="service in services" :value="service.service_id" :key="service.service_id">
                    {{ service.service_name }}
                  </option>
                </Field>
                <ErrorMessage name="service_id" class="text-danger py-3 text-sm" />
              </div>
              <div class="form-group col-md-6">
                <label class="col-form-label" for="appointment_status">Appointment Status:</label>
                <Field name="appointment_status" class="form-control" v-model="appointment_status" type="text" />
                <ErrorMessage name="appointment_status" class="text-danger p-3" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">
              Close
            </button>
            <button class="btn btn-primary" type="Submit">Update</button>
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
        <router-link :to="{ path: '/member-services' }"
          class="btn btn-info text-white ul-btn-raised--v2 m-1 text-white float-end">
          <i class="nav-icon i-add text-white fw-bold"></i> BOOK APPOINTMENT
        </router-link>
        <Breadcrumbs />
        <div class="separator-breadcrumb border-top"></div>
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card o-hidden mb-4">
              <div class="card-body">
                <div class="ul-widget__head">
                  <div class="ul-widget__head-label">
                    <h3 class="ul-widget__head-title">
                      MY APPOINTMENTS
                    </h3>
                  </div>
                  <div class="ul-widget__head-toolbar">
                    <ul class="nav nav-tabs profile-nav" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link active show" data-bs-toggle="tab" role="tab" aria-selected="true"
                          @click="statusChange('1')">Active</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false"
                          @click="statusChange('2')">Completed</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false"
                          @click="statusChange('0')">Pending</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="tab-content">
                  <div v-if="appointments.length > 0" class="table-responsive">
                    <table class="table align-items-center mb-5" id="appointment-table" style="width: 100%">
                      <thead>
                        <tr class="bg-primary text-white">
                          <th scope="col">#</th>
                          <th scope="col"></th>
                          <th scope="col">Sevice</th>
                          <th scope="col">Description</th>
                          <th scope="col">Provider</th>
                          <th scope="col">Price</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(appointment, index) in appointments" v-bind:key="appointment.appointment_id">
                          <td>{{ index + 1 }}</td>
                          <td><span><div class="ul-widget_user-card">
                                    <div class="ul-widget4__img"><img id="userDropdown" :src="appointment.service_id.icon" alt="" /></div>
                                  </div></span></td>
                          <td>
                            {{
                              appointment.service_id.service_name.toUpperCase()
                            }}
                          </td>
                          <td>
                            {{
                              appointment.service_id.description.toUpperCase()
                            }}
                          </td>
                          <td> {{ appointment.vendor_id.first_name.toUpperCase() + " " + appointment.vendor_id.last_name.toUpperCase() }}
                          </td>
                          <td>
                            Ksh {{ appointment.price.toFixed(2) }}
                          </td>
                          <td>
                            <a class="text-info me-2" @click="openEditAppointment(appointment)"><i
                                class="nav-icon i-Pen-2 fw-bold"></i></a>
                            <a class="text-danger me-2" @click="
                              deleteAppointment(appointment.appointment_id)
                              "><i class="nav-icon i-Close-Window fw-bold"></i></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div v-if="appointments.length == 0" class="card">
                    <div class="card-body">
                      <div class="user-profile mb-4">
                        <div class="ul-widget-card__user-info">
                          <img class="profile-picture avatar-lg mb-2 mt-2" src="../../assets/images/booking.png" alt="" />
                        </div>
                        <div class="ul-widget-card--line text-center mt-2">
                          <a type="button"> No appointment with this status!</a>
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
import TokenService from "@/services/token.service";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import {
  ALL_APPOINTMENTS_QUERY,
  ALL_COUNTRIES_QUERY,
  ADD_APPOINTMENT_MUTATION,
  EDIT_APPOINTMENT_MUTATION,
  DELETE_APPOINTMENT_MUTATION,
  ALL_USERS_QUERY,
  ALL_SERVICES_QUERY,
  CATEGORY_USERS_QUERY,
} from "@/graphql";
export default {
  name: "Appointment",
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
      service_name: yup.string().required("Appointment name is required!"),
      country_id: yup
        .string("Country is required!")
        .required("Country is required!"),
    });
    return {
      appointments: [],
      countries: [],
      users: [],
      userUserGroups: [],
      userUserGroups3: [],
      services: [],
      appointment: "",
      country_id: "",
      county_id: "",
      abbreviation: "",
      service_name: "",
      price: "",
      appointment_status: "",
      user_id: "",
      service_user: "",
      selectedService: null,
      vendors: [],
      appointmentAdded: false,
      status: "1",
      service_id: "",
      user: [],
      schema,
    };
  },
  apollo: {
    // fetch all countries
    appointments: {
      query: ALL_APPOINTMENTS_QUERY,
      variables() {
        return {
          filter: {
            user_id: this.user ? parseInt(this.user.user_id) : null,
            appointment_status: this.status ? this.status : null,
            service_id: null,
          },
        };
      },
    },
    countries: {
      query: ALL_COUNTRIES_QUERY,
    },
    users: {
      query: ALL_USERS_QUERY,
    },
    services: {
      query: ALL_SERVICES_QUERY,
    },
    userUserGroups: {
      query: CATEGORY_USERS_QUERY,
      variables: {
        groupId: "2",
      },
    },
  },
  methods: {
    openEditAppointment(appointment) {
      this.price = appointment.price;
      this.service_user = appointment.service_user.user_id;
      this.user_id = appointment.user_id.user_id;
      this.service_id = appointment.service_id.service_id;
      this.appointment_status = appointment.appointment_status;
      this.appointment_id = appointment.appointment_id;
      $("#editModalContent").modal("show");
    },
    editAppointment(appointment) {
      console.log(appointment);
      this.$apollo
        .mutate({
          mutation: EDIT_APPOINTMENT_MUTATION,
          variables: {
            appointmentId: parseInt(this.appointment_id),
            input: {
              price: parseFloat(appointment.price),
              service_user: appointment.service_user,
              user_id: appointment.user_id,
              appointment_status: this.appointment_status,
              service_id: appointment.service_id,
            },
          },
        })
        .then((response) => {
          $("#editModalContent").modal("hide");
          this.$swal({
            title: "Appointment updated sucessfully",
            position: "top-end",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
          this.$apollo.queries.appointments.refetch();
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
    deleteAppointment(appointment) {
      this.$swal({
        title: "Delete the Appointment?",
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
              mutation: DELETE_APPOINTMENT_MUTATION,
              variables: {
                appointmentId: parseInt(appointment),
              },
            })
            .then((response) => {
              this.$swal({
                title: "Appointment deleted sucessfully",
                position: "top-end",
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
              });
              this.$apollo.queries.appointments.refetch();
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
    async statusChange(status) {
      this.status = status;
      this.appointments = [];
      $("#appointment-table").DataTable().destroy();
      await this.$apollo
        .query({
          query: ALL_APPOINTMENTS_QUERY,
          variables: {
            filter: {
              appointment_status: this.status,
              service_id: null,
              user_id: parseInt(this.user.user_id),
            },
          },
        })
        .then((response) => {
          this.appointments = response.data.appointments;
        });
      setTimeout(function () {
        $("#appointment-table").DataTable({
          destroy: true,
          pageLength: 10,
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
  watch: {
    user: {
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.$apollo.queries.appointments.refetch();
        }
      },
      deep: true,
    },
    status: {
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.$apollo.queries.appointments.refetch();
        }
      },
      deep: true,
    },
  },
  async created() {
    this.user = TokenService.getUser();
    this.statusChange(this.status);
  },
};
</script>
