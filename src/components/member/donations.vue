<template>
  <!-- Add Donation Modal -->
  <div class="modal fade" id="verifyModalContent" tabindex="-1" role="dialog" aria-labelledby="verifyModalContent" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h5 class="modal-title" id="verifyModalContent_title">Add Donation</h5>
                              <button class="btn btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <Form @submit="addDonation" :validation-schema="schema" class="user">
                              <div class="modal-body">
                                <div class="form-group">
                                        <label for="donarId" class="form-control-label">Donor:</label>
                                        <Field name="donarId" class="form-control form-control-lg" v-model="donarId" as="select">
                                            <option value="">-- Donor--</option>
                                            <option v-for="donor in filterUsers" :value="donor._id" :key="donor._id">
                                            {{ donor.first_name }}
                                            </option>
                                        </Field>
                                        <ErrorMessage name="donarId" class="text-danger py-3 text-sm" />
                                        </div>
                                        <div class="form-group">
                                        <label for="categoryId" class="form-control-label">Category:</label>
                                        <Field name="categoryId" class="form-control form-control-lg" v-model="categoryId" as="select">
                                            <option value="">--Category--</option>
                                            <option v-for="category in categories" :value="category._id" :key="category._id">
                                            {{ category.category_name }}
                                            </option>
                                        </Field>
                                        <ErrorMessage name="categoryId" class="text-danger py-3 text-sm" />
                                        </div>
                                      <div class="form-group">
                                          <label class="col-form-label" for="amount">Amount:</label>
                                          <Field name="amount" class="form-control" id="amount" type="text" placeholder="amount" />
                                          <ErrorMessage name="amount" class="text-danger p-3" />
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
   <!-- Edit Donation Modal -->
   <div class="modal fade" id="editModalContent" tabindex="-1" role="dialog" aria-labelledby="editModalContent" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h5 class="modal-title" id="editModalContent_title">Edit Donation</h5>
                              <button class="btn btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <Form @submit="editDonation" :validation-schema="schema" class="user">
                              <div class="modal-body">
                                  
                                      <div class="form-group">
                                          <label class="col-form-label" for="s">Donor:</label>
                                          <Field name="donarId" class="form-control" v-model="donarId" type="text" />
                                          <ErrorMessage name="donarId" class="text-danger p-3" />
                                      </div>
                                      <div class="form-group">
                                        <label for="categoryId" class="form-control-label">Category Name</label>
                                        <Field name="categoryId" class="form-control form-control-lg" v-model="categoryId" as="select">
                                          <option value="">-- Category--</option>
                                          <option v-for="category in categories" :value="category._id" :key="category._id">
                                            {{ category.category_name }}
                                          </option>
                                        </Field>
                                        <ErrorMessage name="categoryId" class="text-danger py-3 text-sm" />
                                          <!-- <label class="col-form-label" for="categoryId">Category Name:</label>
                                          <Field name="categoryId" class="form-control" v-model="categoryId" type="text" />
                                          <ErrorMessage name="categoryId" class="text-danger p-3" /> -->
                                      </div>
                                      <div class="form-group">
                                          <label class="col-form-label" for="amount">Amount:</label>
                                          <Field name="amount" class="form-control" v-model="amount" type="text" />
                                          <ErrorMessage name="amount" class="text-danger p-3" />
                                      </div>
                                      <!-- <div class="form-group">
                                          <label class="col-form-label" for="status">Status:</label>
                                          <Field name="status" class="form-control" v-model="status" type="text" />
                                          <ErrorMessage name="status" class="text-danger p-3" />
                                      </div> -->
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
            <Breadcrumbs />
                  <div class="separator-breadcrumb border-top"></div>
                  <div class="row mb-4">
                    <div class="col-md-12">
                      <button class="btn btn-info text-white ul-btn-raised--v2 m-1  float-end" type="button" data-bs-toggle="modal"
                    data-target="#verifyModalContent" data-whatever="@mdo">
                    <i class="nav-icon i-add text-primary text-white fw-bold"></i> ADD DONATION</button>
                      </div>
                  </div>
                  <div class="row mb-4">
                    <div class="col-md-12 mb-4">
              <div class="card text-start">
                <div class="card-body">
                  <h4 class="card-title mb-3">Donations Received</h4>
                  <div class="table-responsive">
                    <table
                      class="display table table-striped table-bordered"
                      id="multicolumn_ordering_table"
                      style="width: 100%"
                    >
                      <thead>
                        <tr>
                          <th>Donor</th>
                          <th>Category</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Action</th>
                          <!-- <th>Start date</th>
                          <th>Salary</th> -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="donation in donations" :key="donation._id">
                          <td>{{ donation.donar.first_name }}</td>
                          <td>{{ donation.category.category_name }}</td>
                          <td>{{ donation.amount }}</td>
                          <td>{{ donation.status }}</td>
                          
                          <td>
                                        <a class="text-success me-2" @click="openEditDonation(donation)"><i class="nav-icon i-Pen-2 fw-bold"></i></a>
                                        <a class="text-danger me-2 float-end" @click="deleteDonation(donation._id)"><i class="nav-icon i-Close-Window fw-bold"></i></a>
                                    </td>
                          <!-- <td>2011/04/25</td>
                          <td>$320,800</td> -->
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>Donor</th>
                          <th>Category</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Action</th>
                          <!-- <th>Start date</th>
                          <th>Salary</th> -->
                        </tr>
                      </tfoot>
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
  import Topbar from "@/components/partials/Topbar.vue";
  import Footer from "@/components/partials/Footer.vue";
  import Sidebar from "@/components/partials/Sidebar";
  import Breadcrumbs from "@/components/partials/Breadcrumbs";
  import { ALL_DONATIONS_QUERY,ADD_DONATION_MUTATION,DELETE_DONATION_MUTATION,EDIT_DONATION_MUTATION,  ALL_DONORS_QUERY, ALL_CATEGORIES_QUERY  } from '@/graphql';
  import { Form, Field, ErrorMessage } from "vee-validate"
  import * as yup from "yup"
  export default {
    name: "Donation",
    components: { Sidebar, Topbar, Footer, Breadcrumbs, Form, Field, ErrorMessage },
    data () {
      const schema = yup.object().shape({
            amount: yup
          .string()
          .required("Amount is required!"),
          donarId: yup
        .string()
        .required("Donor is required!"),
        categoryId: yup
        .string()
        .required("Category is required!"),
    });
        return {
          donations: [],
          filterUsers: [],
          categories: [],
          amount: '',
          donarId: '',
          categoryId: '',
          donation_id: '',
          status: '',
          schema
        }
    },
  apollo: {
    // fetch all donations
    donations: {
        query: ALL_DONATIONS_QUERY
        },
    categories: {
        query: ALL_CATEGORIES_QUERY
        },
      filterUsers: {
        query: ALL_DONORS_QUERY,
        variables: {
          roleId: "63fd059321a945fd564e9c6e"
          }
        }
      },
      methods: {
      addDonation(donation) {
        this.$apollo
          .mutate({
            mutation: ADD_DONATION_MUTATION,
            variables: {
                donarId: donation.donarId,
                categoryId: donation.categoryId,
                amount: donation.amount,
            }
          })
          .then(response => {
            // redirect user
            $('#verifyModalContent').modal('hide')
              this.$swal({
                  title: 'Donation added sucessfully',
                  position: 'top-end',
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 2000
              });
              this.$apollo.queries.donations.refetch()
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
    deleteDonation(donation_id) {
      this.$swal({
        title: "Do you want to Delete the donation?",
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
                mutation: DELETE_DONATION_MUTATION,
                variables: {
                    donationId: donation_id,
                }
                })
                .then(response => {
                    this.$swal({
                        title: 'Donation deleted sucessfully',
                        position: 'top-end',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.$apollo.queries.donations.refetch()
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
    openEditDonation(donation) {
      console.log(donation)
        this.categoryId = donation.category._id
        this.donation_id = donation._id
        this.donarId = donation.donar.first_name
        this.amount = donation.amount
        $('#editModalContent').modal('show')

      },
    editDonation(donation) {        
      this.$apollo
        .mutate({
          mutation: EDIT_DONATION_MUTATION,
          variables: {
            input: {
               id: this.donation_id,
               donarId: donation.donarId,
               categoryId: this.categoryId,
               amount: donation.amount,
               status: donation.status,
              }
          }
        })
        .then(response => {
          $('#editModalContent').modal('hide')
            this.$swal({
                title: 'Donation updated sucessfully',
                position: 'top-end',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
            });
            this.$apollo.queries.donations.refetch()
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
    }
  
  }
  </script>