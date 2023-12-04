<template>
  <div class="app-admin-wrap layout-horizontal-bar">
    <Sidebar />
    <Topbar />
    <div class="main-content-wrap d-flex flex-column">
      <div class="main-content">
        <div class="breadcrumb">
          <Breadcrumbs />
        </div>
        <div class="separator-breadcrumb border-top"></div>
        <div class="card user-profile o-hidden mb-4">
          <div
            class="header-cover"
            style="
              background-image: url('https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg');
            "
          ></div>
          <div class="user-info">
            <img
              class="profile-picture avatar-lg mb-2"
              src="../assets/images/user.png"
              alt=""
            />
            <p class="m-0 text-24">
              {{ user.first_name.toUpperCase() }}
              {{ user.last_name.toUpperCase() }}
            </p>
            <!-- <p class="text-muted m-0">
              User Role: {{ user.role.group_id.group_name }}
            </p> -->
          </div>
          <div class="card-body">
            <ul
              class="nav nav-tabs profile-nav mb-4"
              id="profileTab"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="about-tab"
                  data-bs-toggle="tab"
                  href="#about"
                  role="tab"
                  aria-controls="about"
                  aria-selected="true"
                  >Profile</a
                >
              </li>
            </ul>
            <div class="tab-content" id="profileTabContent">
              <div
                class="tab-pane fade active show"
                id="about"
                role="tabpanel"
                aria-labelledby="about-tab"
              >
                <div class="card mt-4">
                  <Form
                    @submit="editUser"
                    :validation-schema="schema"
                    class="user"
                  >
                    <div class="card-body">
                      <div class="card-title">Personal Information</div>
                      <p>
                        The account {{ user.first_name.toUpperCase() }}
                        {{ user.last_name.toUpperCase() }} created this account
                        on {{ user.createdAt }} with phone details of
                        {{ user.phone_number }} and email {{ user.email }}.
                      </p>
                      <hr />
                      <div class="row">
                        <div class="form-group col-md-6">
                          <label class="col-form-label" for="first_name"
                            >First Name:</label
                          >
                          <Field
                            name="first_name"
                            class="form-control"
                            :value="user.first_name"
                            type="text"
                          />
                          <ErrorMessage
                            name="first_name"
                            class="text-danger p-3"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label class="col-form-label" for="last_name"
                            >Last Name:</label
                          >
                          <Field
                            name="last_name"
                            class="form-control"
                            :value="user.last_name"
                            type="text"
                          />
                          <ErrorMessage
                            name="last_name"
                            class="text-danger p-3"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label class="col-form-label" for="email"
                            >Email:</label
                          >
                          <Field
                            name="email"
                            class="form-control"
                            :value="user.email"
                            type="text"
                          />
                          <ErrorMessage name="email" class="text-danger p-3" />
                        </div>
                        <div class="form-group col-md-6">
                          <label class="col-form-label" for="phone_number"
                            >Phone Number:</label
                          >
                          <Field
                            name="phone_number"
                            class="form-control"
                            :value="user.phone_number"
                            type="text"
                          />
                          <ErrorMessage
                            name="phone_number"
                            class="text-danger p-3"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label class="col-form-label" for="postal_code"
                            >Postal Code:</label
                          >
                          <Field
                            name="postal_code"
                            class="form-control"
                            :value="user.postal_code"
                            type="text"
                          />
                          <ErrorMessage
                            name="postal_code"
                            class="text-danger p-3"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label class="col-form-label" for="zip_code"
                            >Zip Code:</label
                          >
                          <Field
                            name="zip_code"
                            class="form-control"
                            :value="user.zip_code"
                            type="text"
                          />
                          <ErrorMessage
                            name="zip_code"
                            class="text-danger p-3"
                          />
                        </div>
                        <div class="form-group col-md-12">
                          <label for="country" class="form-control-label"
                            >country Name</label
                          >
                          <Field
                            name="country"
                            class="form-control form-control-lg"
                            :value="user.country_id.country_id"
                            as="select"
                          >
                            <option value="">-- Country--</option>
                            <option
                              v-for="country in countries"
                              :value="country.country_id"
                              :key="country.country_id"
                            >
                              {{ country.country_name }}
                            </option>
                          </Field>
                          <ErrorMessage
                            name="country"
                            class="text-danger py-3 text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="card-footer">
                      <div class="row text-end">
                        <div class="col-lg-12">
                          <button class="btn btn-primary" type="Submit">
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>

                <hr />
              </div>
            </div>
          </div>
        </div>
        <!-- end of main-content -->
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

import {
  CREATE_BANKING_MUTATION,
  CURRENTUSER_QUERY,
  EDIT_USER_MUTATION,
  ALL_ROLES_MUTATION,
  ALL_COUNTRIES_QUERY,
  MPESA_DETAILS_QUERY,
  MPESA_DETAILS_MUTATION,
  BANK_BILLING_QUERY,
} from "@/graphql";

import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  name: "Profile",
  components: {
    Sidebar,
    Topbar,
    Footer,
    Breadcrumbs,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      currentUser: [],
      countries: [],
      role_name: "",
      country_id: "",
      user: "",
    };
  },
  apollo: {
    currentUser: {
      query: CURRENTUSER_QUERY,
    },
    countries: {
      query: ALL_COUNTRIES_QUERY,
    },
  },
  methods: {
    editUser(user) {
      this.$apollo
        .mutate({
          mutation: EDIT_USER_MUTATION,
          variables: {
            input: {
              id: this.currentUser.country_id,
              first_name: user.first_name,
              //   second_name: user.second_name,
              last_name: user.last_name,
              email: user.email,
              phone_number: user.phone_number,
              postal_code: user.postal_code,
              zip_code: user.zip_code,
              street: user.street,
              country: user.country,
            },
          },
        })
        .then((response) => {
          $("#editModalContent").modal("hide");
          this.$swal({
            title: "Profile updated sucessfully",
            position: "top-end",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
          this.$apollo.queries.currentUser.refetch();
        })
        .catch((error) => {
          this.$swal({
            title: error.message,
            position: "top-end",
            icon: "warning",
            showConfirmButton: false,
            timer: 3000,
          });
        });
    },
  },
  async created() {
    this.user = TokenService.getUser();
    //     this.currentUser = TokenService.getUser();
  },
};
</script>
