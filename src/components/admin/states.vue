<template>
  <!-- Add County Modal -->
<div class="modal fade" id="verifyModalContent" tabindex="-1" role="dialog" aria-labelledby="verifyModalContent" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="verifyModalContent_title">ADD COUNTY</h5>
                <button class="btn btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <Form @submit="addCounty" :validation-schema="schema" class="user">
                <div class="modal-body">                    
                    <div class="form-group">
                        <label class="col-form-label" for="county">County:</label>
                        <Field name="county" class="form-control" type="text" />
                        <ErrorMessage name="county" class="text-danger p-3" />
                    </div>
                    <div class="form-group">
                        <label class="col-form-label" for="country_id">Country:</label>
                        <Field name="country_id" class="form-control" as="select">
                        <option value="" :selected="selected">--Select Country--</option>
                        <option v-for="country in allcountries" :value="country._id" :key="country._id">
                          {{country.country_name.toUpperCase() }}
                        </option>
                        </Field>
                        <ErrorMessage name="country_id" class="text-danger py-3 text-sm" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
                    <button class="btn btn-primary" type="Submit">Submit</button>
                </div>                            
            </Form>
        </div>
    </div>
</div>
<!-- Edit County Modal -->
<div class="modal fade" id="editModalContent" tabindex="-1" role="dialog" aria-labelledby="editModalContent" aria-hidden="true">
  <div class="modal-dialog" role="document">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="editModalContent_title">EDIT COUNTY</h5>
              <button class="btn btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <Form @submit="editCountry" :validation-schema="schema" class="user">
              <div class="modal-body">                  
                  <div class="form-group">
                      <label class="col-form-label" for="county">County Name:</label>
                      <Field name="county" class="form-control" v-model="county" @input="remark=$event.target.value.toUpperCase()" type="text" />
                      <ErrorMessage name="county" class="text-danger p-3" />
                  </div>
                  <div class="form-group">
                    <label class="col-form-label" for="country_id">Country:</label>
                    <Field name="country_id" class="form-control" v-model="country_id" as="select">
                    <option value="" :selected="selected">--Select Country--</option>
                    <option v-for="country in allcountries" :value="country._id" :key="country._id">
                      {{country.country_name.toUpperCase() }}
                    </option>
                    </Field>
                    <ErrorMessage name="country_id" class="text-danger py-3 text-sm" />
                </div>
              </div>
              <div class="modal-footer">
                  <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
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
        <div class="main-content">
          <button class="btn btn-info text-white ul-btn-raised--v2 m-1 text-white float-end" type="button" data-bs-toggle="modal" data-target="#verifyModalContent" data-whatever="@mdo">
                          <i class="nav-icon i-add text-white fw-bold"></i> ADD COUNTY 
                        </button>
            <Breadcrumbs />
              <div class="separator-breadcrumb border-top"></div>
                  <div class="row mb-4">
                    <div class="col-md-12">
                      <table class="table" id="county_table">
                        <thead class="table">
                          <tr class="bg-primary text-white">
                            <th scope="col">#</th>
                            <th scope="col">County</th>
                            <th scope="col">Country</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(county, index) in states" v-bind:key="county._id">
                            <td>{{ index +1 }}</td>
                            <td> {{ county.county_name.toUpperCase() }}</td>
                            <td> {{ county.country.country_name.toUpperCase() }}</td>
                            <td><span 
                              :class="county.status == 'active' 
                                      ? 'badge bg-success'
                                      : 'badge bg-danger'">{{ county.status }}</span></td>
                             <td>
                              <a class="text-info me-2" @click="openEditCounty(county)"><i class="nav-icon i-Pen-2 fw-bold"></i></a>
                              <a class="text-danger me-2" @click="deleteCounty(county._id)"><i class="nav-icon i-Close-Window fw-bold"></i></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
  import { Form, Field, ErrorMessage } from "vee-validate"
  import * as yup from "yup"
  import { ALL_COUNTIES_QUERY , ALL_COUNTRIES_QUERY, ADD_COUNTY_MUTATION, EDIT_COUNTY_MUTATION, DELETE_COUNTY_MUTATION } from '@/graphql'
  export default {
    name: "State",
    components: { Sidebar, Topbar, Footer, Breadcrumbs, Form, Field, ErrorMessage },
    data () {
    const schema = yup.object().shape({
        county: yup
          .string()
          .required("County name is required!"),
        country_id: yup
        .string("Country is required!")
        .required("Country is required!"),
    });
    return {
      states: [],
      allcountries: [],
      county: '',
      country_id: '',
      county_id: "",
      schema
    }
  },
  apollo: {
    // fetch all countries
    states: {
        query: ALL_COUNTIES_QUERY 
        },
    allcountries: {
      query: ALL_COUNTRIES_QUERY
    }
    },
    methods: {
    addCounty(county) {
      this.$apollo
        .mutate({
          mutation: ADD_COUNTY_MUTATION,
          variables: {
            countyName: county.county,
            countryId: county.country_id,
          }
        })
        .then(response => {
          $('#verifyModalContent').modal('hide')
            this.$swal({
                title: 'County added sucessfully',
                position: 'top-end',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
            });
            this.$apollo.queries.states.refetch()
        }).catch((error) => {
            this.$swal({
                title: error.message,
                position: "top-end",
                icon: "warning",
                showConfirmButton: false,
                timer: 3000,
            });
        })
      },
      openEditCounty(county) {
        this.county = county.county_name
        this.country_id = county.country._id
        this.county_id = county._id
        $('#editModalContent').modal('show')

      },
      editCountry(county) {
        console.log(county)
      this.$apollo
        .mutate({
          mutation: EDIT_COUNTY_MUTATION,
          variables: {
            input: {
                id: this.county_id,
                county_name: county.county,
                country: county.country_id,
              }
          }
        })
        .then(response => {
          $('#editModalContent').modal('hide')
            this.$swal({
                title: 'County updated sucessfully',
                position: 'top-end',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
            });
            this.$apollo.queries.states.refetch()
        }).catch((error) => {
            this.$swal({
                title: error.message,
                position: "top-end",
                icon: "warning",
                showConfirmButton: false,
                timer: 3000,
            });
        })
      },
      deleteCounty(county_id) {
      this.$swal({
        title: "Delete the County?",
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
                mutation: DELETE_COUNTY_MUTATION,
                variables: {
                    countyId: county_id,
                }
                })
                .then(response => {
                    this.$swal({
                        title: 'County deleated sucessfully',
                        position: 'top-end',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.$apollo.queries.states.refetch()
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
    async statusChange(){      
        this.states = [];       
        $('#county_table').DataTable().destroy();
        await this.$apollo.query({
            query: ALL_COUNTIES_QUERY
            }).then(response => {
                this.states = response.data.states
            })
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
                { extend: 'csv', text: '<i class="fa-solid fa-file-pdf"></i>', className: 'btn btn-sm btn-outline-success mb-3 text-success' },
                { extend: 'pdf', text: '<i class="fa fa-file-pdf"></i>', className: 'btn btn-sm btn-outline-danger mb-3 text-danger' },
                { extend: 'print', text: '<i class="fa fa-print"></i>', className: 'btn btn-sm btn-outline-secondary mb-3 text-secondary' }
                ]  
            });
            }, 300);
    }
  
  },
    async created(){
      this.statusChange();
    }
}
  </script>
  
 