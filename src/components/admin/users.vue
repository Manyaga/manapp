<template> 
    <!-- Add User Modal -->
    <div class="modal fade" id="verifyModalContent" tabindex="-1" role="dialog" aria-labelledby="verifyModalContent" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="verifyModalContent_title">Add Admin</h5>
                                <button class="btn btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <Form @submit="addUser" :validation-schema="schema" class="user">
                                <div class="modal-body">
                                    <div class="row row-xs">
                                      <div class="form-group col-md-6">
                                      <!-- <div class="row"> -->
                                          <label class="col-form-label" for="first_name">First Name:</label>
                                          <Field name="first_name" class="form-control" id="first_name" type="text" placeholder="first name" />
                                          <ErrorMessage name="first_name" class="text-danger p-3" />
                                      </div>
                                      <div class="form-group col-md-6">
                                          <label class="col-form-label" for="second_name">Second Name:</label>
                                          <Field name="second_name" class="form-control" id="second_name" type="text" placeholder="second name" />
                                          <ErrorMessage name="second_name" class="text-danger p-3" />
                                      </div>
                                      <div class="form-group col-md-6">
                                      <!-- <div class="row"> -->
                                          <label class="col-form-label" for="last_name">Last Name:</label>
                                          <Field name="last_name" class="form-control" id="last_name" type="text" placeholder="last name" />
                                          <ErrorMessage name="last_name" class="text-danger p-3" />
                                      </div>
                                      <div class="form-group col-md-6">
                                          <label class="col-form-label" for="email">Email:</label>
                                          <Field name="email" class="form-control" id="email" type="text" placeholder="email" />
                                          <ErrorMessage name="email" class="text-danger p-3" />
                                      </div>
                                      <div class="form-group col-md-6">
                                      <!-- <div class="row"> -->
                                          <label class="col-form-label" for="phone_number">Phone Number:</label>
                                          <Field name="phone_number" class="form-control" id="phone_number" type="text" placeholder="phone number" />
                                          <ErrorMessage name="phone_number" class="text-danger p-3" />
                                      </div>
                                      <div class="form-group col-md-6">
                                          <label class="col-form-label" for="postal_code">Postal Code:</label>
                                          <Field name="postal_code" class="form-control" id="postal_code" type="text" placeholder="postal code" />
                                          <ErrorMessage name="postal_code" class="text-danger p-3" />
                                      </div>
                                      <div class="form-group col-md-6">
                                      <!-- <div class="row"> -->
                                          <label class="col-form-label" for="zip_code">Zip Code:</label>
                                          <Field name="zip_code" class="form-control" id="zip_code" type="text" placeholder="zip code" />
                                          <ErrorMessage name="zip_code" class="text-danger p-3" />
                                      </div>
                                      <div class="form-group col-md-6">
                                          <label class="col-form-label" for="street">Street:</label>
                                          <Field name="street" class="form-control" id="street" type="text" placeholder="street" />
                                          <ErrorMessage name="street" class="text-danger p-3" />
                                      </div>
                                      
                                      <div class="form-group col-md-6">
                                      <!-- <div class="row"> -->
                                      <label for="country" class="form-control-label">country Name</label>
                                      <Field name="country" class="form-control form-control-lg" v-model="country" as="select">
                                          <option value="">-- Country--</option>
                                          <option v-for="country in allcountries" :value="country._id" :key="country._id">
                                          {{ country.country_name }}
                                          </option>
                                      </Field>
                                      <ErrorMessage name="country" class="text-danger py-3 text-sm" />
                                      </div>
                                      <div class="form-group col-md-6">
                                          <label for="gender" class="form-control-label">Gender</label>
                                      <Field name="gender" class="form-control form-control-lg" v-model="gender" as="select">
                                          <option value="">-- Gender--</option>
                                          <option value="female">Female</option>
                                          <option value="male">Male</option>
                                      </Field>
                                      <ErrorMessage name="gender" class="text-danger py-3 text-sm" />
                                      </div>

                                      <div class="form-group col-md-6">
                                      <!-- <div class="row"> -->
                                          <label class="col-form-label" for="password">Password:</label>
                                          <Field name="password" class="form-control" id="password" type="password" />
                                          <ErrorMessage name="password" class="text-danger p-3" />
                                      </div>
                                      <div class="form-group col-md-6">
                                          <label class="col-form-label" for="confirmpassword">Confirm Password:</label>
                                          <Field name="confirmpassword" class="form-control" id="confirmpassword" type="password" />
                                          <ErrorMessage name="confirmpassword" class="text-danger p-3" />
                                      </div>
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
     <!-- Edit User Modal -->
     <div class="modal fade" id="editModalContent" tabindex="-1" role="dialog" aria-labelledby="editModalContent" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="editModalContent_title">Edit Admin</h5>
                                <button class="btn btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <Form @submit="editUser" :validation-schema="schema" class="user">
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label mb-0" for="first_name">First Name:</label>
                                            <Field name="first_name" class="form-control" v-model="first_name" type="text" />
                                            <ErrorMessage name="first_name" class="text-danger p-3" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label" for="second_name">Second Name:</label>
                                            <Field name="second_name" class="form-control" v-model="second_name" type="text" />
                                            <ErrorMessage name="second_name" class="text-danger p-3" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label" for="last_name">Last Name:</label>
                                            <Field name="last_name" class="form-control" v-model="last_name" type="text" />
                                            <ErrorMessage name="last_name" class="text-danger p-3" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label" for="email">Email:</label>
                                            <Field name="email" class="form-control" v-model="email" type="text" />
                                            <ErrorMessage name="email" class="text-danger p-3" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label" for="phone_number">Phone Number:</label>
                                            <Field name="phone_number" class="form-control" v-model="phone_number" type="text" />
                                            <ErrorMessage name="phone_number" class="text-danger p-3" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label" for="postal_code">Postal Code:</label>
                                            <Field name="postal_code" class="form-control" v-model="postal_code" type="text" />
                                            <ErrorMessage name="postal_code" class="text-danger p-3" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label" for="zip_code">Zip Code:</label>
                                            <Field name="zip_code" class="form-control" v-model="zip_code" type="text" />
                                            <ErrorMessage name="zip_code" class="text-danger p-3" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label" for="street">Street:</label>
                                            <Field name="street" class="form-control" v-model="street" type="text" />
                                            <ErrorMessage name="street" class="text-danger p-3" />
                                        </div>
                                        
                                        <div class="form-group col-md-12">
                                        <label for="country" class="form-control-label">country Name</label>
                                        <Field name="country" class="form-control form-control-lg" v-model="country" as="select">
                                            <option value="">-- Country--</option>
                                            <option v-for="country in allcountries" :value="country._id" :key="country._id">
                                            {{ country.country_name }}
                                            </option>
                                        </Field>
                                        <ErrorMessage name="country" class="text-danger py-3 text-sm" />
                                        </div>
                                        <!-- <div class="form-group">
                                            <label for="role" class="form-control-label">Role</label>
                                        <Field name="role" class="form-control form-control-lg" v-model="role" as="select">
                                            <option value="">-- Role--</option>
                                            <option v-for="role in allRoles" :value="role._id" :key="role._id">
                                            {{ role.role_name }}
                                            </option>
                                        </Field>
                                        <ErrorMessage name="role" class="text-danger py-3 text-sm" />
                                        </div> -->
                                </div>
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
                                    <button class="btn btn-primary" type="Submit">Update</button>
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
            <button class="btn btn-info text-white ul-btn-raised--v2 m-1  float-end" type="button" data-bs-toggle="modal"
                    data-target="#verifyModalContent" data-whatever="@mdo">
                    <i class="nav-icon i-add text-primary text-white fw-bold"></i> ADD Admin</button>
            <Breadcrumbs />
                  <div class="separator-breadcrumb border-top"></div>
                  <div class="row mb-4">
                    <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table text-center" id="admin_table" style="width: 100%">
                                <thead>
                                    <tr class="bg-primary text-white">
                                        <th scope="col">#</th>
                                        <th scope="col"></th>
                                        <th scope="col">Member</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Country</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="member,index in filterUsers" :key="member._id">
                                    <th scope="row">{{ index+1 }}</th>
                                    <td>
                                        <img class="rounded-circle m-0 avatar-sm-table" v-bind:src="member.profilePhoto" alt=""/>
                                    </td>
                                    <td>{{member.first_name.toUpperCase() + " " + member.last_name.toUpperCase()}}</td>
                                    <td>{{ member.email }}</td>
                                    <td>{{ member.phone_number }}</td>
                                    <td>{{ member.country.country_name }}</td>
                                    <td><span class="badge bg-success">Active</span>
                                    </td>
                                    <td>
                                    
                                        <a class="text-success me-2" href="#"  @click="openEditUser(member)"><i class="nav-icon i-Pen-2 fw-bold"></i></a>
                                        <a class="text-danger me-2" href="#" @click="deleteUser(member._id)"><i class="nav-icon i-Close-Window fw-bold"></i></a>
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

  import {  ALL_DONORS_QUERY, ADD_USER_MUTATION, ALL_ROLES_MUTATION, ALL_COUNTRIES_QUERY, DELETE_USER_MUTATION, EDIT_USER_MUTATION } from '@/graphql';
  import * as yup from "yup"
  import { Form, Field, ErrorMessage } from "vee-validate"

  export default {
    name: "Members",
    components: { Sidebar, Topbar, Footer, Breadcrumbs, Form, Field, ErrorMessage  },
    data () {
        const schema = yup.object().shape({
        first_name: yup
          .string()
          .required("first Name is required!"),
          second_name: yup
        .string()
        .required("Second Name is required!"),
        last_name: yup
        .string()
        .required("Last Name is required!"),
        email: yup
          .string()
          .required("Email is required!"),
          phone_number: yup
        .string()
        .required("Phone Number is required!"),
        postal_code: yup
        .string()
        .required("Postal Code is required!"),
        zip_code: yup
          .string()
          .required("Zip Code is required!"),
    });
        return {
            allusers: [],
            allRoles: [],
            allcountries: [],
            filterUsers: [],
            first_name: "",
            second_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            postal_code: "",
            zip_code: "",
            street: "",
            country: "",
            county: "",
            role: "",
            password: "",
            confirmpassword: "",
            user_id: "",
            gender: "",
            schema
        }
    },
  apollo: {
    filterUsers: {
        query: ALL_DONORS_QUERY,
        variables: {
            roleId: "63fd057b21a945fd564e9c6a",
            status: "1"
          }
        },
    // fetch all users
    // allusers: {
    //     query: ALL_SYTEMUSERS_MUTATION
    //     },
    allRoles: {
        query: ALL_ROLES_MUTATION
        },
    allcountries: {
        query: ALL_COUNTRIES_QUERY
        }
    },
        methods: {
            addUser(user) {
                console.log(user)
                this.$apollo
                    .mutate({
                    mutation: ADD_USER_MUTATION,
                    variables: {
                        createAcc:{  
                            zip_code: user.zip_code,
                            street: user.street,
                            second_name: user.second_name,
                            role: "63fd057b21a945fd564e9c6a",
                            postal_code: user.postal_code,
                            phone_number: user.phone_number,
                            password: user.password,
                            last_name: user.last_name,
                            first_name: user.first_name,
                            email: user.email,
                            country: user.country,
                            confirmpassword: user.confirmpassword,
                            gender:user.gender
                        }
                    }
                    })
                    .then(response => {
                    // redirect user
                    $('#verifyModalContent').modal('hide')
                        this.$swal({
                            title: 'Admin added sucessfully',
                            position: 'top-end',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 2000
                        });
                        this.$apollo.queries.filterUsers.refetch()
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
                
    openEditUser(user) {
        this.user_id = user._id
        this.first_name = user.first_name
        this.second_name = user.second_name
        this.last_name = user.last_name
        this.email = user.email
        this.phone_number = user.phone_number
        this.postal_code = user.postal_code
        this.zip_code = user.zip_code
        this.street = user.street
        this.country = user.country._id
        // this.role = user.role,
      $('#editModalContent').modal('show')

    },
    editUser(user) {
        console.log(user)
      console.log(user)
      this.$apollo
        .mutate({
          mutation: EDIT_USER_MUTATION,
          variables: {
            input: {
                id: this.user_id,
                first_name: user.first_name,
                second_name: user.second_name,
                last_name: user.last_name,
                email: user.email,
                phone_number: user.phone_number,
                postal_code: user.postal_code,
                zip_code: user.zip_code,
                street: user.street,
                country: user.country,
                role: "63fd057b21a945fd564e9c6a",
            }
          }
        })
        .then(response => {
          $('#editModalContent').modal('hide')
          this.$swal({
            title: 'Admin updated sucessfully',
            position: 'top-end',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          });
          this.$apollo.queries.filterUsers.refetch()
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
    deleteUser(user_id) {
      this.$swal({
        title: "Delete the Admin?",
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
              mutation: DELETE_USER_MUTATION,
              variables: {
                id: user_id,
              }
            })
            .then(response => {
              this.$swal({
                title: 'Admin deleted sucessfully',
                position: 'top-end',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
              });
              this.$apollo.queries.filterUsers.refetch()
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
        this.filterUsers = [];       
        $('#admin_table').DataTable().destroy();
        await this.$apollo.query({
            query: ALL_DONORS_QUERY,
            variables: {
                roleId: "63fd057b21a945fd564e9c6a",
                status: "1"
            }
            }).then(response => {
                this.filterUsers = response.data.filterUsers
            })
        setTimeout(function () {
            $("#admin_table").DataTable({
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
  