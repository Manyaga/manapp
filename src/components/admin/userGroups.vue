<template>
    <!-- Add Attribute Modal -->
    <div class="modal fade" id="verifyModalContent" tabindex="-1" role="dialog" aria-labelledby="verifyModalContent" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="verifyModalContent_title">Add Attribute</h5>
                                <button class="btn btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <Form @submit="addUserGroup" :validation-schema="schema" class="user">
                                <div class="modal-body">
                                    
                                        <div class="form-group">
                                            <label class="col-form-label" for="group_name">Attribute Name:</label>
                                            <Field name="group_name" class="form-control" id="group_name" type="text" />
                                            <ErrorMessage name="group_name" class="text-danger p-3" />
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
     <!-- Edit Attribute Modal -->
     <div class="modal fade" id="editModalContent" tabindex="-1" role="dialog" aria-labelledby="editModalContent" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="editModalContent_title">Edit Attribute {{ group_name}}</h5>
                                <button class="btn btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <Form @submit="editUserGroup" :validation-schema="schema"  class="user">
                                <div class="modal-body">
                                    
                                        <div class="form-group">
                                            <label class="col-form-label" for="group_name">Attribute Name:</label>
                                            <Field name="group_name" class="form-control" v-model="group_name" type="text" />
                                            <ErrorMessage name="group_name" class="text-danger p-3" />
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
            <Breadcrumbs />
              <div class="separator-breadcrumb border-top"></div>
              <div class="row mb-4">
                <div class="col-md-12">
                    <button class="btn btn-info text-white ul-btn-raised--v2 m-1  float-end"
                            type="button" data-bs-toggle="modal" data-target="#verifyModalContent" data-whatever="@mdo">
                            <i class="nav-icon i-add text-primary text-white fw-bold"></i> ADD ATTRIBUTE</button>
                            
                  <p>Attributes are features that describe the services and product offered</p>
                  </div>
              </div>
                <div class="row mb-4">
                <div class="col-lg-3 col-xl-3 mt-3" v-for="group in UserGroups" :key="group._id">
                <div class="card">
                  <div class="card-body">
                    <div class="user-profile mb-4">
                      <div class="ul-widget-card__user-info">
                        <img
                          class="profile-picture avatar-lg mb-2"
                          src="https://cdn-icons-png.flaticon.com/512/9554/9554955.png"
                          alt=""
                        />
                        <p class="m-0 text-24">{{group.group_name.toUpperCase()}}</p>
                      </div>
                    </div>
                    <div class="mt-4">
                      <a class="text-info me-2" @click="openEditUserGroup(group)"><i class="nav-icon i-Pen-2 fw-bold"></i></a>
                      <a class="text-danger me-2 float-end" @click="deleteUserGroup(group._id)"><i class="nav-icon i-Close-Window fw-bold"></i></a>
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
  import { Form, Field, ErrorMessage } from "vee-validate"
  import * as yup from "yup"
  import { ALL_USER_GROUPS_QUERY, ADD_USER_GROUP_MUTATION, DELETE_USER_GROUP_MUTATION,EDIT_USER_GROUP_MUTATION } from '@/graphql'
  export default {
    name: "Usergroup",
    components: { Sidebar, Topbar, Footer, Breadcrumbs, Form, Field, ErrorMessage },
    data () {
    const schema = yup.object().shape({
        group_name: yup
          .string()
          .required("User Group name is required!"),
    });
    return {
      UserGroups: [],
      group_name: '',
      group_id: '',
      schema
    }
  },
  apollo: {
    // fetch all UserGroups
    UserGroups: {
        query: ALL_USER_GROUPS_QUERY
        }
    },
    methods: {
    addUserGroup(group) {
      this.$apollo
        .mutate({
          mutation: ADD_USER_GROUP_MUTATION,
          variables: {
            group_name: group.group_name,
          }
        })
        .then(response => {
          // redirect user
          $('#verifyModalContent').modal('hide')
            this.$swal({
                title: 'User group added sucessfully',
                position: 'top-end',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
            });
            this.$apollo.queries.UserGroups.refetch()
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
      openEditUserGroup(group) {
        this.group_name = group.group_name
        this.group_id = group._id
        $('#editModalContent').modal('show')

      },
    editUserGroup(group) {    
      console.log(group)    
      this.$apollo
        .mutate({
          mutation: EDIT_USER_GROUP_MUTATION,
          variables: {
            groupId: group_id,
            input: {
               group_name: group.group_name,
              }
          }
        })
        .then(response => {
          $('#editModalContent').modal('hide')
            this.$swal({
                title: 'User group updated sucessfully',
                position: 'top-end',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
            });
            this.$apollo.queries.UserGroups.refetch()
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
      deleteUserGroup(group_id) {
      this.$swal({
        title: "Delete the user group?",
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
                mutation: DELETE_USER_GROUP_MUTATION,
                    groupId: group_id,               
                })
                .then(response => {
                    this.$swal({
                        title: 'User group deleted sucessfully',
                        position: 'top-end',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.$apollo.queries.UserGroups.refetch()
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
  }  
  
  }
  </script>