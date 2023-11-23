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
        /* this.currentuser = TokenService.getUser()
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
        this.requestCount = this.allDonationRequests.monthsDonationRequests.length */
  },
  methods: {
  },
}
  
  </script>
