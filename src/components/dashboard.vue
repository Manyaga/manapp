<template>
  <div class="app-admin-wrap layout-horizontal-bar">
  <Sidebar />
    <Topbar />
    <div class="main-content-wrap d-flex flex-column">
        <!-- ============ Body content start ============= -->
        <div class="main-content" >
            <div class="breadcrumb">
                <h1 class="me-2">Dashboard</h1>
                <ul>
                    <!-- <li><a href="">Pages</a></li> -->
                    <!-- <li>Dashboard</li> -->
                </ul>
            </div>
            <div class="separator-breadcrumb border-top"></div>
            
            <div class="row" >
                
                <div class="col-lg-4 col-md-12">
                    <div class="card mb-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <table class="table">
                                            <thead class="bg-primary text-white">
                                                <tr>
                                                    <th scope="col">Crrrent month Summary</th>
                                                    <th scope="col">#</th>
                                                </tr>
                                            </thead>
                                            <tbody>                                                
                                                <tr v-if="currentuser.role._id != '63fd059321a945fd564e9c6e'">
                                                    <td>Donation requests count</td>
                                                    <td class="fw-bold text-primary">{{ donationCount }}</td>
                                                </tr>
                                                <tr v-if="currentuser.role._id != '63fd059321a945fd564e9c6e'">
                                                    <td> Donation requests amount</td>
                                                    <td class="fw-bold text-primary">$ {{ allDonationRequests.monthsTotalRequests }}</td>
                                                </tr>
                                                <tr v-if="currentuser.role._id != '63fd058921a945fd564e9c6c'">
                                                    <td>Donation count</td>
                                                    <td class="fw-bold text-success">{{ requestCount }}</td>
                                                </tr>
                                                <tr v-if="currentuser.role._id != '63fd058921a945fd564e9c6c'">
                                                    <td> Donation amount</td>
                                                    <td class="fw-bold text-success">$ {{ allDonationRequests.monthsTotal }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="col-lg-8 col-md-12">
                        <!-- CARD ICON-->
                        <div class="row">
                            <div v-if="currentuser.role._id != '63fd059321a945fd564e9c6e'" class="col-lg-6 col-md-6 col-sm-6" >
                                <div class="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                                    <div class="card-body text-center"><i class="i-Add-User"></i>
                                        <div class="content" >
                                            <p class="text-muted mt-2 mb-0">All Requests</p>
                                            <p class="text-primary text-24 line-height-1 mb-2">{{ allDonationRequests.total }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>                
                            <div v-if="currentuser.role._id != '63fd059321a945fd564e9c6e'" class="col-lg-6 col-md-6 col-sm-6">
                                <div class="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                                    <div class="card-body text-center"><i class="i-Financial"></i>
                                        <div class="content">
                                            <p class="text-muted mt-2 mb-0">Requests Sum</p>
                                            <p class="text-primary text-24 line-height-1 mb-2">${{ allDonationRequests.amount }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="currentuser.role._id != '63fd058921a945fd564e9c6c'" class="col-lg-6 col-md-6 col-sm-6" >
                                <div class="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                                    <div class="card-body text-center"><i class="i-Add-User"></i>
                                        <div class="content" >
                                            <p class="text-muted mt-2 mb-0">All Donations</p>
                                            <p class="text-primary text-24 line-height-1 mb-2"  >{{ allDonationRequests.totalDonations }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div v-if="currentuser.role._id != '63fd058921a945fd564e9c6c'" class="col-lg-6 col-md-6 col-sm-6">
                                <div class="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                                    <div class="card-body text-center"><i class="i-Money-2"></i>
                                        <div class="content">
                                            <p class="text-muted mt-2 mb-0">Donations Sum</p>
                                            <p class="text-primary text-24 line-height-1 mb-2">${{ allDonationRequests.monthsTotal }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <!-- ICON BG-->
               
            </div>
            <div v-if="currentuser.role._id != '63fd058921a945fd564e9c6c'" class="row">
                <!-- best-sellers-->
                    <div class="col-xl-12 col-md-12 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="ul-widget__head">
                                    <div class="ul-widget__head-label">
                                        <h3 class="ul-widget__head-title">Top Donations</h3>
                                    </div>
                                    <div class="ul-widget__head-toolbar">
                                        <ul class="nav nav-tabs nav-tabs-line nav-tabs-bold ul-widget-nav-tabs-line" role="tablist">
                                            <li class="nav-item"><a class="nav-link active show" data-toggle="tab" href="#ul-widget5-tab1-content" role="tab" aria-selected="true">TOP</a></li><!-- 
                                            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#ul-widget5-tab2-content" role="tab" aria-selected="false">Month</a></li> -->
                                        </ul>
                                    </div>
                                </div>
                                <div class="ul-widget__body">
                                    <div class="tab-content">
                                        <div class="tab-pane active show" id="ul-widget5-tab1-content">
                                            <div class="ul-widget5">
                                                <div v-for="(donor,index) in allDonationRequests.topDonations" :value="donor._id" :key="donor._id" class="ul-widget5__item">
                                                    <div class="ul-widget5__content">
                                                        <div class="ul-widget5__pic"><img v-bind:src="donor.donar.profilePhoto" alt="Third slide" /></div>
                                                        <div class="ul-widget5__section"><a class="ul-widget4__title" href="#">{{donor.donar.first_name.toUpperCase() + " " + donor.donar.last_name.toUpperCase()}}</a>
                                                            <p class="ul-widget5__desc">{{donor.donar.email}}</p>
                                                            <div class="ul-widget5__info"><span>Contact: </span><span class="text-primary">{{donor.donar.phone_number}}</span><span>Country:</span><span class="text-primary">{{donor.donar.country.country_name}}</span></div>
                                                        </div>
                                                    </div>
                                                    <div class="ul-widget5__content">
                                                        <div class="ul-widget5__stats"><span class="ul-widget5__number">$ {{donor.amount}}</span><span class="ul-widget5__sales text-mute">Amount</span></div>
                                                        <!-- <div class="ul-widget5__stats"><span class="ul-widget5__number">{{donor.category.category_name}}</span><span class="ul-widget5__sales text-mute">Product</span></div> -->
                                                        <div class="ul-widget5__stats"><span class="ul-widget5__number">{{ (donor.donationRequests != null) ? donor.donationRequests.request_code : 
                        donor.fundraiser.request_code}}</span><span class="ul-widget5__sales text-mute">REQUEST CODE</span></div>
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
            <div v-if="currentuser.role._id != '63fd059321a945fd564e9c6e'" class="row">
                <div class="col-md-12">
                    <div class="card o-hidden mb-4">
                        <div class="card-body">
                            <h4 class="card-title mb-3">Current Month Product Aid</h4>
                            <div class="table-responsive">
                                <table class="table text-center" id="user_table">
                                    <thead>
                                        <tr class="bg-primary text-white">
                                            <th scope="col">#</th>
                                            <th scope="col"></th>
                                            <th scope="col">Member</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">Product</th>
                                           <th scope="col">Category</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(request,index) in allDonationRequests.monthsDonationRequests" :value="request._id" :key="request._id">
                                            <th scope="row">{{index+1}}</th>
                                            <td><img class="rounded-circle m-0 avatar-sm-table"  v-bind:src="request.member.profilePhoto" alt="" /></td>
                                            <td>{{request.member.first_name.toUpperCase() + " " + request.member.last_name.toUpperCase()}}</td>
                                            <td>{{request.member.phone_number}}</td>
                                            <td>{{request.member.email}}</td>
                                            <td>{{request.member.country.country_name}}</td>
                                            <td>{{request.product.product_name}}</td>
                                            <td>{{request.category.category_name}}</td>
                                            <td>$ {{request.amount}}</td>
                                            <td><span :class="request.status == '1' 
                                      ? 'badge bg-primary'
                                      : (request.status == '2' ? 'badge bg-secondary' : (request.status == '4' ? 'badge bg-warning' : (request.status == '3' ? 'badge bg-sucess' : 'badge bg-danger')))">{{request.status == '1' ? 'OPEN' : (request.status == '0' ? 'CART' : (request.status == '2' ? 'PROCESSING' : (request.status == '3' ? 'SHIPPED' : (request.status == '4' ? 'CLOSED' : 'REJECTED'))))}}</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
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
import TokenService from "@/services/token.service";
import Topbar from "@/components/partials/Topbar.vue";
import Footer from "@/components/partials/Footer.vue";
import Sidebar from "@/components/partials/Sidebar";

import { DASHBOARD_QUERY, USER_DASHBOARD_QUERY } from '@/graphql';
  import { Form, Field, ErrorMessage } from "vee-validate"
  export default {
    name: "Dashboard",
    components: { Sidebar, Topbar, Footer, Form, Field, ErrorMessage },
    data () {
        return {
            allDonationRequests: [],
            myDoughnutChart: null,
            currentuser: [],
            total: 0,
            donationCount: 0,
            requestCount: 0,
        }
    },
    async created() {
        this.currentuser = TokenService.getUser()
        if(this.currentuser.role._id == '63fd057b21a945fd564e9c6a'){
            await this.$apollo.query({
            query: DASHBOARD_QUERY,
            }).then(response => {
                this.allDonationRequests = response.data.allDonationRequests
            })
        }else{
            await this.$apollo.query({
            query: USER_DASHBOARD_QUERY,
            }).then(response => {
                this.allDonationRequests = response.data.userDashboard
            })
        }
        
        this.donationCount = this.allDonationRequests.monthsDonations.length
        this.requestCount = this.allDonationRequests.monthsDonationRequests.length
  },
  methods: {
  },
}
  
  </script>
