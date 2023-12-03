<template>
  <!--Iframe for payment redirect-->
 
  <div class="app-admin-wrap layout-horizontal-bar">
    <Sidebar />
    <Topbar />
    <div class="main-content-wrap d-flex flex-column">
      <h1>Make Payment</h1>
    <iframe
      ref="myIframe"
      frameborder="0"
      allowfullscreen
    ></iframe>
      
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
      schema,
    };
  },
  apollo: {
    // fetch all countries
    appointments: {
      query: ALL_APPOINTMENTS_QUERY,
      variables: {
        limit: 10,
        offset: 0,
        filter: {
          appointment_status: null,
          service_id: null,
          service_user: null,
          user_id: null,
        },
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
    userUserGroups3: {
      query: CATEGORY_USERS_QUERY,
      variables: {
        groupId: "3",
      },
    },
  },
  methods: {
    getVendorsByService() {
      // Assuming you have an API endpoint to fetch vendors by service
      // Adjust the API call based on your backend structure
      const serviceId = this.selectedService.service_id;

      // Make an API call to get vendors for the selected service
      // Example using axios:
      // axios.get(`/api/vendors?serviceId=${serviceId}`)
      //   .then(response => {
      //     this.vendors = response.data;
      //   })
      //   .catch(error => {
      //     console.error('Error fetching vendors:', error);
      //   });

      // For now, let's simulate some data for demonstration purposes
      this.vendors = [
        { vendor_id: 1, vendor_name: "Vendor A", price: 50 },
        { vendor_id: 2, vendor_name: "Vendor B", price: 60 },
        // Add more vendors as needed
      ];
    },
    addAppointment(appointment) {
      this.$apollo
        .mutate({
          mutation: ADD_APPOINTMENT_MUTATION,
          variables: {
            input: {
              // appointment_status: appointment.appointment_status,
              // price: parseFloat(appointment.price),
              service_id: appointment.service_id,
              // service_user: appointment.service_user,
              user_id: appointment.user_id,
            },
          },
        })
        .then((response) => {
          const redirectUrl = response.data.createAppointment.redirectUrl;

          // Hide the modal
          $("#verifyModalContent").modal("hide");

          // this.appointmentAdded = true;
          // Display success notification
          // this.$swal({
          //   title: "Appointment added successfully",
          //   position: "top-end",
          //   icon: "success",
          //   showConfirmButton: false,
          //   timer: 2000,
          // });

          // Load the redirect URL in the iframe
          if (redirectUrl) {
            this.$refs.myIframe.src = redirectUrl;
          }

          // Refetch appointments (if needed)
          this.$apollo.queries.appointments.refetch();
        })
        .catch((error) => {
          // Display error notification
          this.$swal({
            title: error.message,
            position: "top-end",
            icon: "warning",
            showConfirmButton: false,
            timer: 3000,
          });
        });
    },
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
    async statusChange() {
      this.appointments = [];
      $("#county_table").DataTable().destroy();
      await this.$apollo
        .query({
          query: ALL_APPOINTMENTS_QUERY,
          variables: {
            limit: 10,
            offset: 0,
            filter: {
              appointment_status: null,
              service_id: null,
              service_user: null,
              user_id: null,
            },
          },
        })
        .then((response) => {
          this.appointments = response.data.appointments;
        });
      setTimeout(function () {
        $("#county_table").DataTable({
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
