<template>
    <div class="app-admin-wrap layout-horizontal-bar">
    <Sidebar />
      <Topbar />
      <div class="main-content-wrap d-flex flex-column">
        <div class="main-content">
            <RouterLink to="product-categories"><button class="btn btn-info text-white ul-btn-raised--v2 m-1  float-end" type="button">
                    <i class="nav-icon i-add text-primary text-white fw-bold"></i> ADD DONATION REQUEST</button></RouterLink>                    
            <Breadcrumbs />
                  <div class="separator-breadcrumb border-top"></div>
                  <div class="row mb-4">
                    <div class="col-md-12">
                        <div class="card o-hidden mb-4">
                            <div class="card-body">
                                <div class="ul-widget__head">
                                    <div class="ul-widget__head-label">
                                        <h3 class="ul-widget__head-title">Product Donation Request</h3>
                                    </div>
                                    <div class="ul-widget__head-toolbar">
                                        <ul class="nav nav-tabs profile-nav" role="tablist">
                                            <li class="nav-item">
                                            <a class="nav-link active show" data-bs-toggle="tab"  role="tab"
                                                aria-selected="true" @click="statusChange('1')">Open</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" data-bs-toggle="tab"  role="tab"
                                                aria-selected="false" @click="statusChange('2')">In Progress</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" data-bs-toggle="tab" role="tab"
                                                aria-selected="false" @click="statusChange('3')">Shipped</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-bs-toggle="tab" role="tab"
                                                aria-selected="false" @click="statusChange('4')">Closed</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-bs-toggle="tab" role="tab"
                                                aria-selected="false" @click="statusChange('5')">Rejected</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            <div class="tab-content">
                                <div v-if="donationRequestsPerStatusUser.length > 0" class="table-responsive">
                                    <table class="table align-items-center mb-5" id="product-table" style="width: 100%">
                                        <thead>
                                        <tr class="bg-primary text-white">
                                            <th scope="col"></th>
                                            <!-- <th scope="col">#</th> -->
                                            <th scope="col">Name</th>
                                            <th scope="col">Avatar</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Category</th>                                        
                                            <th scope="col">Amount</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="requestdon,index in donationRequestsPerStatusUser" :key="requestdon._id">
                                        <th scope="row">{{ index+1 }}</th>                                       
                                        <!-- <td >{{ index+1 }}</td> -->
                                        <td>{{ requestdon.member.first_name.toUpperCase() }} {{ requestdon.member.last_name.toUpperCase() }}</td>
                                        <td>
                                            <span><div class="ul-widget_user-card">
                                                <div class="ul-widget4__img"><img id="userDropdown"  v-bind:src="requestdon.member.profilePhoto" alt="" /></div>
                                            </div></span>
                                        </td>
                                        <td>{{requestdon.member.email }}</td>
                                        <td>{{requestdon.member.country.country_name.toUpperCase()}}</td>
                                        <td>{{requestdon.product.product_name.toUpperCase()}}</td>
                                        <td>{{requestdon.category.category_name.toUpperCase()}}</td>
                                        <td>
                                            $ {{ requestdon.amount }}
                                            <!-- <span class="badge rounded-pill badge-outline-warning p-2 m-1">Inactive</span> -->
                                        </td>
                                        <td>
                                            <button  v-if="requestdon.status != '1'" class="btn btn-outline-success ul-btn-raised--v2 m-1 float-end"
                                                        type="button" @click="preview(requestdon)">PREVIEW</button>
                                            <span v-if="requestdon.status == '1'" class="badge rounded-pill badge-outline-success p-2 m-1">OPEN</span>
                                        </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div v-if="donationRequestsPerStatusUser.length == 0" class="card">
                                    <div class="card-body">
                                        <div class="user-profile mb-4">
                                        <div class="ul-widget-card__user-info">
                                            <img class="profile-picture avatar-lg mb-2 mt-2"
                                            src="https://cdn.pixabay.com/photo/2014/12/21/23/57/money-576443_1280.png" alt="" />

                                        </div>
                                        <div class="ul-widget-card--line text-center mt-2">
                                            <a type="button"> No fundraiser with this status!</a>
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
    import { REQUEST_USER_STATUS_QUERY} from '@/graphql';
    import "datatables.net-dt/js/dataTables.dataTables";
    import "@/assets/css/dataTables.bootstrap4.min.css";
    import "@/assets/css/buttons.dataTables.min.css";
    import "datatables.net-buttons/js/dataTables.buttons.js";
    import "datatables.net-buttons/js/buttons.colVis.js";
   // import "datatables.net-buttons/js/buttons.flash.js";
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
  export default {
    name: "Request",
    components: { Sidebar, Topbar, Footer, Breadcrumbs},
    data () {
        return {
            donationRequestsPerStatusUser: [],
            status: '1'
        }
    },
    methods: {
        preview(request) {
            TokenService.setRequest(request);
            this.$router.push("/gift-aid-preview");
        },
    async statusChange(status){
        this.status = status;
        console.log(status)      
        this.donationRequestsPerStatusUser = [];       
        $('#product-table').DataTable().destroy();
        await this.$apollo.query({
            query: REQUEST_USER_STATUS_QUERY,
            variables: {
                status: status
            },
            }).then(response => {
                this.donationRequestsPerStatusUser = response.data.donationRequestsPerStatusUser
            })
        setTimeout(function () {
            $("#product-table").DataTable({
                destroy: true,
                pageLength: 5,
                lengthChange: true,
                processing: true,
                paging: true,
                info: false,
                dom: "Bfrtip",
                buttons: [
                { extend: 'csv', text: '<i class="fa-solid fa-file-pdf"></i>', className: 'btn btn-sm btn-outline-success mb-3 text-success' },
                { extend: 'pdf', text: '<i class="fa fa-file-pdf"></i>', className: 'btn btn-sm btn-outline-danger mb-3 text-danger' },
                { extend: 'print', text: '<i class="fa fa-print"></i>', className: 'btn btn-sm btn-outline-secondary mb-3 text-secondary' }
                ]  
            });
            }, 300);
    }
    
    },
    async created(){    
        this.statusChange("1");           
    },
  
  }
  </script>
  