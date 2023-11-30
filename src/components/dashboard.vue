<template>
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
          <!-- Earnings (Monthly) Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div
                      class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                    >
                      Total Srts (Monthly)
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      234
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Earnings (Monthly) Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div
                      class="text-xs font-weight-bold text-success text-uppercase mb-1"
                    >
                      Total Scans (Monthly)
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      345
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Earnings (Monthly) Card Example -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div
                      class="text-xs font-weight-bold text-info text-uppercase mb-1"
                    >
                      Total Invoices (Monthly)
                    </div>
                    <div class="row no-gutters align-items-center">
                      <div class="col-auto">
                        <div
                          class="h5 mb-0 mr-3 font-weight-bold text-gray-800"
                        >
                          56
                        </div>
                      </div>
                      <div class="col">
                        <div class="progress progress-sm mr-2">
                          <div
                            class="progress-bar bg-info"
                            role="progressbar"
                            style="width: 50%"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
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
                    <div
                      class="text-xs font-weight-bold text-warning text-uppercase mb-1"
                    >
                      Total LPs (Monthly)
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      1345
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-comments fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Content Row -->
        <div class="row">
          <!-- Content Column -->
          <div class="col-xl-8 col-lg-7 mb-4">
            <!-- Project Card Example -->
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Summary</h6>
              </div>
              <div class="card-body">
                <div class="chart-container">
                  <canvas
                    id="lineChart"
                    style="display: block; width: 432px; height: 245px"
                    width="432"
                    height="245"
                  ></canvas>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-5 mb-4">
            <!-- Illustrations -->
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  Toll Process Totals
                </h6>
              </div>
              <!-- <div
												class="card shadow-none border-dark border-left border-bottom border-right">
												<div class="card-header bg-dark text-white font-weight-bold text-uppercase">
													<h5>{{ month }} Agency Toll Spending </h5>
												</div> -->
              <div class="card-body">
                <div class="chart-container">
                  <canvas
                    id="doughnutChart"
                    style="display: block; width: 432px; height: 245px"
                    width="432"
                    height="245"
                  ></canvas>
                </div>
                <!-- <div id="chart-legends"></div> -->
                <!-- </div>
											</div> -->
              </div>
            </div>
          </div>
          <div class="row">
            <!-- Content Column -->
            <div class="col-lg-12 mb-4">
              <!-- Project Card Example -->
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                </div>
                <div class="card-body">
                  <h4 class="small font-weight-bold">
                    Server Migration <span class="float-right">20%</span>
                  </h4>
                  <div class="progress mb-4">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      style="width: 20%"
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h4 class="small font-weight-bold">
                    Sales Tracking <span class="float-right">40%</span>
                  </h4>
                  <div class="progress mb-4">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style="width: 40%"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h4 class="small font-weight-bold">
                    Customer Database <span class="float-right">60%</span>
                  </h4>
                  <div class="progress mb-4">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 60%"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h4 class="small font-weight-bold">
                    Payout Details <span class="float-right">80%</span>
                  </h4>
                  <div class="progress mb-4">
                    <div
                      class="progress-bar bg-info"
                      role="progressbar"
                      style="width: 80%"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h4 class="small font-weight-bold">
                    Account Setup <span class="float-right">Complete!</span>
                  </h4>
                  <div class="progress">
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      style="width: 100%"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->
      <Footer />
    </div>
  </div>
</template>

<!-- Rest of your script and style tags remain unchanged -->

<script>
import TokenService from "@/services/token.service";
import Topbar from "@/components/partials/Topbar.vue";
import Footer from "@/components/partials/Footer.vue";
import Sidebar from "@/components/partials/Sidebar";
import {
  ALL_INTEREST_CATEGORIES_QUERY,
  ALL_SERVICES_QUERY,
  EDIT_INTEREST_CATEGORY_MUTATION,
  DELETE_INTEREST_CATEGORY_MUTATION,
} from "@/graphql";

import { DASHBOARD_QUERY, USER_DASHBOARD_QUERY } from "@/graphql";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  name: "Dashboard",
  components: { Sidebar, Topbar, Footer, Form, Field, ErrorMessage },
  data() {
    return {
      allDonationRequests: [],
      myDoughnutChart: null,
      currentuser: [],
      total: 0,
      donationCount: 0,
      requestCount: 0,
      myLineChart: null,
      myDoughnutChart: null,
    };
  },
  apollo: {
    // fetch all countries
    interestCategories: {
      query: ALL_INTEREST_CATEGORIES_QUERY,
    },
  },
  async created() {
    // Your async data fetching logic goes here
  },
  methods: {
    loadChartData() {
      var lineChart = document.getElementById("lineChart").getContext("2d");
      var doughnutChart = document
        .getElementById("doughnutChart")
        .getContext("2d");
      if (this.myLineChart) this.myLineChart.destroy();
      if (this.myDoughnutChart) this.myDoughnutChart.destroy();
      // DashboardService.getDTS(this.filers).then((response) => {
      this.myLineChart = new Chart(lineChart, {
        type: "line",
        data: {
          labels: ["test", "test1", "test23", "test2", "test34", "test5"],
          datasets: [
            {
              label: "Daily Toll Spending",
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
      // });
      // DashboardService.getAgencyTolls(this.filers).then((response) => {
      this.myDoughnutChart = new Chart(doughnutChart, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [123, 33, 3334, 445, 4577, 6789],
              backgroundColor: [
                "blue",
                "red",
                "purple",
                "green",
                "pink",
                "orange",
              ],
            },
          ],
          labels: ["test", "test1", "test23", "test2", "test34", "test5"],
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
    this.loadChartData();
  },
};
</script>
