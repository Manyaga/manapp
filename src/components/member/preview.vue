<template>
  <div class="app-admin-wrap layout-horizontal-bar">
    <Sidebar />
    <Topbar />
    <div class="main-content-wrap d-flex flex-column">
      <div class="main-content">
        <Breadcrumbs />
        <div class="separator-breadcrumb border-top"></div>
        <div class="row mb-4">
          <div class="card">
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="invoice" role="tabpanel" aria-labelledby="invoice-tab">
                <div class="d-sm-flex mb-5" data-view="print">
                  <span class="m-auto"></span>
                  <button v-if="fundraiser.status == '3'" class="btn btn-success mb-sm-0 mb-3 print-invoice">
                    Cashout
                  </button>
                </div>
                <!-- -===== Print Area =======-->
                <div id="print-area">
                  <div class="row">
                    <div class="col-md-6">
                      <h4 class="fw-bold">Request Code</h4>
                      <p>#{{ fundraiser.request_code }}</p>
                    </div>
                    <div class="col-md-6 text-sm-end">
                      <p><strong>Order status: </strong>{{ orderStatus() }}</p>
                      <p><strong>Launched: </strong>{{ fundraiser.createdAt }}</p>
                    </div>
                  </div>
                  <div class="mt-3 mb-4 border-top"></div>
                  <div class="row mb-5">
                    <div class="col-md-6 mb-3 mb-sm-0">
                      <h5 class="fw-bold">Requester</h5>
                      <p>{{ fundraiser.member.first_name.toUpperCase() }} {{ fundraiser.member.last_name.toUpperCase() }}</p>
                      <span style="white-space: pre-line">
                        {{ fundraiser.story.toUpperCase() }}
                      </span>
                    </div>
                    <div class="col-md-6 text-sm-end">
                      <h5 class="fw-bold">Country</h5>
                      <p>{{ fundraiser.member.country.country_name.toUpperCase() }}</p>
                      <!-- <span style="white-space: pre-line">
                        sales@ui-lib.com 8254 S. Garfield Street. Villa
                        Rica, GA 30180. +1-202-555-0170
                      </span> -->
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 table-responsive">
                      <table class="table table-hover mb-4">
                        <thead class="bg-gray-300">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col"></th>
                            <th scope="col">Donor</th>
                            <th scope="col">Country</th>
                            <th scope="col">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(donor,index) in fundraiser.donations" :value="donor._id" :key="donor._id">
                                <th scope="row">{{index+1}}</th>
                                <td><img class="rounded-circle m-0 avatar-sm-table"  v-bind:src="donor.donar.profilePhoto" alt="" /></td>
                                <td>{{donor.donar.first_name.toUpperCase() + " " + donor.donar.last_name.toUpperCase()}}</td>
                                <td>{{donor.donar.country.country_name}}</td>
                                <td>$ {{donor.amount}}</td>
                            </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-md-12">
                      <div class="invoice-summary">
                        <p>Received: <span>$ {{Number(fundraiser.donatedAmount).toLocaleString()}}</span></p>
                        <h5 class="fw-bold">
                          Goal: <span>$ {{Number(fundraiser.amount).toLocaleString()}}</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ==== / Print Area =====-->
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
import TokenService from "@/services/token.service";
export default {
  name: "FundraiserPreview",
  components: { Sidebar, Topbar, Footer, Breadcrumbs },
  data() {
    return {
      fundraiser: TokenService.getRequest(),
    }
  },
  methods: {
    donationPercentage(goal, amount) {
      return (amount / goal) * 100;
    },
    orderStatus() {
      return (this.fundraiser.status == "2") ? "IN PROGRESS" : ((this.fundraiser.status == "3") ? "CLOSED" : "REJECTED")
    }
  },
  created() {
    this.status = "0";
    this.statusChange;
    console.log(this.statusChange)
  }

}
</script>
