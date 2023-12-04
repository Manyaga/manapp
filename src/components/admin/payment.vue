<template>
  <!--Iframe for payment redirect-->

  <div class="app-admin-wrap layout-horizontal-bar">
    <Sidebar />
    <Topbar />
    <div class="main-content-wrap d-flex flex-column">
      <div class="main-content">
        <Breadcrumbs />
        <div class="separator-breadcrumb border-top"></div>
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card shadow mb-4">
              <iframe
                ref="myIframe"
                frameborder="0"
                allowfullscreen
                style="position: fixed; left: 0; width: 100%; height: 500px"
              ></iframe>
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
import { Form, Field, ErrorMessage } from "vee-validate";

import { VIEW_PAYMENT_COMPLETE_QUERY } from "@/graphql";
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
    return {
      merchantReference: null,
    };
  },
  apollo: {
    onePayment: {
      query: VIEW_PAYMENT_COMPLETE_QUERY,
      variables: {
        merchantRef: JSON.parse(localStorage.getItem("appointments"))
          .merchantReference,
        // merchantRef: "6e25d254b7640bf11681319382579",
      },
    },
  },
  methods() {
    // async statusChange() {
    //   this.servicePricings = [];
    //   await this.$apollo
    //     .query({
    //       query: VIEW_PAYMENT_COMPLETE_QUERY,
    //       variables: {
    //     merchantRef: this.appointments.merchantReference,
    //     // merchantRef: "6e25d254b7640bf11681319382579",
    //   },
    //     })
    //     .then((response) => {
    //       this.servicePricings = response.data.servicePricings;
    //     });
    // }
  },
  mounted() {
    const redirectUrl = localStorage.getItem("savedRedirectUrl");
    this.merchantReference = JSON.parse(
      localStorage.getItem("appointments")
    ).merchantReference;

    if (redirectUrl) {
      // Set the src attribute of the iframe
      this.$refs.myIframe.src = redirectUrl;
    }
  },
};
</script>
