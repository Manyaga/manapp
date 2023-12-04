<template>
    <div class="app-admin-wrap layout-horizontal-bar">
    <Sidebar />
      <Topbar />
      <div class="main-content-wrap d-flex flex-column">
        <div class="main-content">
            <Breadcrumbs />
                  <div class="separator-breadcrumb border-top"></div>
                  <div class="row mb-4">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table text-center" id="user_interest_table" style="width: 100%">
                                <thead>
                                    <tr class="bg-primary text-white">
                                        <th scope="col">#</th>
                                        <th scope="col"></th>
                                        <th scope="col">Interest</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(interest, index) in userInterests" :key="interest.user_interest_id">
                                        <td>{{ index + 1 }}</td>
                                        <td><img class="rounded-circle m-0 avatar-sm-table" src="../../assets/images/like.png" alt="" /></td>
                                        <td>{{ interest.subcategory.name.toUpperCase() }}</td>
                                        <td>{{ interest.subcategory.category.name.toUpperCase() }}</td>
                                        <td>
                                            <a class="text-danger me-2" href="#" @click="deleteInterest(interest.user_interest_id)"><i class="nav-icon i-Close-Window fw-bold"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
import { ALL_USER_INTERESTS_QUERY, DELETE_USER_INTEREST_MUTATION } from '@/graphql';
  export default {
    name: "UserInterests",
    components: { Sidebar, Topbar, Footer, Breadcrumbs },
    data() {
        return {
            userInterests: [],
            user: [],
        }
    },
    apollo: {
    userInterests: {
      query: ALL_USER_INTERESTS_QUERY,
      variables() {
        return {
          filter: {
            user_id: this.user ? parseInt(this.user.user_id) : null,
          },
        };
      },
    },
  },
    methods: {
        deleteInterest(user_interest_id) {
            this.$swal({
                title: "Delete the User Interest?",
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
                            mutation: DELETE_USER_INTEREST_MUTATION,
                            variables: {
                                userInterestId: parseInt(user_interest_id),
                            }
                        })
                        .then(response => {
                            this.$swal({
                                title: 'User interest deleted sucessfully',
                                position: 'top-end',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 2000
                            });
                            this.$apollo.queries.userInterests.refetch()
                        }).catch((error) => {
                            this.$swal({
                                title: error.message,
                                position: "top-end",
                                icon: "warning",
                                showConfirmButton: false,
                                timer: 3000,
                            });
                        })
                }
            });
        },
        async statusChange() {
            this.userInterests = [];
            $('#user_interest_table').DataTable().destroy();
            await this.$apollo.query({
                query: ALL_USER_INTERESTS_QUERY,
                variables: {
                    filter: {
                        user_id: parseInt(this.user.user_id),
                    }    
                }
            }).then(response => {
                this.userInterests = response.data.userInterests
            })
            setTimeout(function () {
                $("#user_interest_table").DataTable({
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
        },

    },
    watch: {
    user: {
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.$apollo.queries.userInterests.refetch();
        }
      },
      deep: true,
    },
  },
    async created() {
        this.user = TokenService.getUser();
        this.statusChange();
    }
  }
  </script>