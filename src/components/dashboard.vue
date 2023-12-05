<template>
  <!-- Add Appointment Modal -->
  <div class="modal fade" id="verifyModalContent" tabindex="-1" role="dialog" aria-labelledby="verifyModalContent" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="verifyModalContent_title">
            BOOK APPOINTMENT
          </h5>
          <button class="btn btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" ></button>
        </div>
        <Form @submit="addAppointment" class="user">
          <div class="modal-body">
            <div class="row row-xs">
              <div class="form-group col-md-6">
                <label class="col-form-label" for="user_id">User </label>
                <Field name="user_id" class="form-control form-control-lg" as="select" >
                  <option value="">-- User--</option>
                  <option v-for="user in userUserGroups" :value="user.id" :key="user.id" > {{ user.user_id.first_name }} </option>
                </Field>
                <ErrorMessage name="service_user" class="text-danger py-3 text-sm" />
              </div>
              <div class="form-group col-md-6">
                <label class="col-form-label" for="service_id">Service</label>
                <Field name="service_id" class="form-control form-control-lg" as="select" >
                  <option value="">-- Service--</option>
                  <option v-for="service in services" :value="service.service_id" :key="service.service_id" > {{ service.service_name }} </option>
                </Field>
                <ErrorMessage name="service_id" class="text-danger py-3 text-sm" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-bs-dismiss="modal" > Close </button>
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
      <!-- Begin Page Content -->
      <div class="container-fluid">
        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-2">
          <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>
        <div class="text-muted mb-3">Overview &amp; summary</div>

        <!-- Content Row -->
        <div class="row">
          <!-- Earnings  Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1" > Appointments </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">{{insights.appointments}}</div>
                  </div>
                  <div class="col-auto"> <i class="fas fa-calendar fa-2x text-gray-300"></i> </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Earnings  Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2"> <div class="text-xs font-weight-bold text-success text-uppercase mb-1" > Services </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">{{ insights.services }}</div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Earnings  Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1" > Members </div>
                    <div class="row no-gutters align-items-center">
                      <div class="col-auto">
                        <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800" > {{ insights.members }} </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pending Requests Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1" > Vendors </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">{{ insights.vendors }}</div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-comments fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- Content Column -->
          <div class="col-xl-12 col-lg-12">
            <!-- Project Card Example -->
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Top Services</h6>
              </div>
              <div class="card-body">
                <div class="row mb-2">
                  <div class="col-lg-6 col-md-6 col-sm-6 mb-2" v-for="(service, index) in services" :key="service.service_id" >
                    <div class="card card-ecommerce-3 o-hidden mb-4">
                      <div class="d-flex flex-column flex-sm-row">
                        <div> <img class="card-img-left" src="../assets/images/fashion.png" alt="" /> </div>
                        <div class="flex-grow-1 p-4">
                          <h5 class="m-0">{{ service.service_name }}</h5>
                          <p class="text-muted mt-3"> {{ service.description }} </p>
                          <div class="actions position-absolute bottom-0 end-0 p-4" >
                            <button class="btn btn-primary ul-btn-raised--v2" type="button" data-bs-toggle="modal" data-target="#verifyModalContent" data-whatever="@mdo" @click="openAddAppointment(service)" > BOOK APPOINTMENT </button>
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
        <!-- Content Row -->
        <div class="row">
          <div class="col-xl-8 col-lg-7 mb-4">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Summary</h6>
              </div>
              <div class="card-body">
                <div class="chart-container"> <canvas id="lineChart" style="display: block; width: 432px; height: 245px" width="432" height="245" ></canvas> </div>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-5 mb-4">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary"> Monthly Total Amounts Per Service </h6>
              </div>
              <div class="card-body">
                <div class="chart-container"> <canvas id="doughnutChart" style="display: block; width: 432px; height: 245px" width="432" height="245" ></canvas> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Main Content -->
      <Footer />
    </div>
  </div>
</template>

<script>
import TokenService from "@/services/token.service";
import Topbar from "@/components/partials/Topbar.vue";
import Footer from "@/components/partials/Footer.vue";
import Sidebar from "@/components/partials/Sidebar";
import { ALL_INTEREST_CATEGORIES_QUERY, ALL_SERVICES_QUERY, ADD_APPOINTMENT_MUTATION, CATEGORY_USERS_QUERY, ALL_USERS_QUERY, DASHBOARD_QUERY } from "@/graphql";

import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  name: "Dashboard",
  components: { Sidebar, Topbar, Footer, Form, Field, ErrorMessage },
  data() {
    return {
      allDonationRequests: [],
      myDoughnutChart: null,
      currentuser: [],
      services: [],
      total: 0,
      donationCount: 0,
      requestCount: 0,
      myLineChart: null,
      myDoughnutChart: null,
      service_id: "",
      price: "",
      insights: [],
      appointment_status: "",
    };
  },
  apollo: {
    // fetch all countries
    interestCategories: {
      query: ALL_INTEREST_CATEGORIES_QUERY,
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
    users: {
      query: ALL_USERS_QUERY,
    },
  },
  async created() {
    // Your async data fetching logic goes here
  },
  methods: {
    openAddAppointment(service) {
      this.service_id = service.service_id;
      this.appointment_status = 0;
    },

    addAppointment(appointment) {
      this.$apollo
        .mutate({
          mutation: ADD_APPOINTMENT_MUTATION,
          variables: {
            input: {
              service_id: appointment.service_id,
              user_id: appointment.user_id,
            },
          },
        })
        .then((response) => {
          const redirectUrl = response.data.createAppointment.redirectUrl;
          const createAppointment = response.data.createAppointment;
          $("#verifyModalContent").modal("hide");
          this.savedRedirectUrl = redirectUrl;
          localStorage.setItem("savedRedirectUrl", this.savedRedirectUrl);
          localStorage.setItem(
            "appointments",
            JSON.stringify(createAppointment)
          );
          this.$router.push("/payment");
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
    loadChartData() {
      var lineChart = document.getElementById("lineChart").getContext("2d");
      var doughnutChart = document
        .getElementById("doughnutChart")
        .getContext("2d");
      if (this.myLineChart) this.myLineChart.destroy();
      if (this.myDoughnutChart) this.myDoughnutChart.destroy();
      this.myLineChart = new Chart(lineChart, {
        type: "line",
        data: {
          labels: [
            "Vendor",
            "Vendor1",
            "Vendor3",
            "Vendor2",
            "Vendor4",
            "Vendor5",
          ],
          datasets: [
            {
              label: "Monthly appointment Amount",
              borderColor: "#08431A",
              pointBorderColor: "#FFF",
              pointBackgroundColor: "#08431A",
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 1,
              pointRadius: 4,
              backgroundColor: "transparent",
              fill: true,
              borderWidth: 2,
              data: [1232, 1323, 33, 445, 55, 567],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: "bottom",
            labels: {
              padding: 10,
              fontColor: "#08431A",
            },
          },
          tooltips: {
            bodySpacing: 4,
            mode: "nearest",
            intersect: 0,
            position: "nearest",
            xPadding: 10,
            yPadding: 10,
            caretPadding: 10,
          },
          layout: {
            padding: { left: 15, right: 15, top: 15, bottom: 15 },
          },
        },
      });
      this.myDoughnutChart = new Chart(doughnutChart, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [123, 33, 3334, 445, 4577],
              backgroundColor: ["blue", "red", "purple", "green", "pink"],
            },
          ],
          labels: [
            "Glooming",
            "Dressing",
            "Personality",
            "Communication",
            "Romance",
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: "right",
            labels: {
              fontSize: 10,
              boxWidth: 30,
            },
          },
          layout: {
            padding: {
              left: 20,
              right: 20,
              top: 20,
              bottom: 20,
            },
          },
          tooltips: {
            enabled: true,
            mode: "label",
            callbacks: {
              label: function (tooltipItem, data) {
                var indice = tooltipItem.index;
                return " $" + data.datasets[0].data[indice];
              },
            },
          },
        },
      });
      if (document.getElementById("chart-legends") != null) {
        document.getElementById("chart-legends").innerHTML =
          this.myDoughnutChart.generateLegend();
      }
    },
  },
  async created() {},

  async mounted() {
    await this.$apollo
        .query({
          query: DASHBOARD_QUERY,
        })
        .then((response) => {
          this.insights = response.data.insights;
        });
    
    this.loadChartData();
  },
};
</script>
