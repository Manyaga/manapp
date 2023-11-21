<template>
    <div class="app-admin-wrap layout-horizontal-bar">
        <Sidebar />
        <Topbar />
        <div class="main-content-wrap d-flex flex-column">
            <div class="main-content">
                <div class="breadcrumb">
                    <h1>User Profile</h1>
                    <ul>
                        <li><a href="">Pages</a></li>
                        <li>User Profile</li>
                    </ul>
                </div>
                <div class="separator-breadcrumb border-top"></div>
                <div class="card user-profile o-hidden mb-4">
                    <div class="header-cover"
                        style="background-image: url('https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg')">
                    </div>
                    <div class="user-info"><img class="profile-picture avatar-lg mb-2" v-bind:src="currentuser.profilePhoto"
                            alt="" />
                        <p class="m-0 text-24">{{ currentuser.first_name.toUpperCase() }} {{ currentuser.last_name.toUpperCase() }}</p>

                        <span>
                            <p class="text-small font-italic"><img class="profile-picture avatar-sm mb-2" id="userDropdown"
                                    v-bind:src="currentuser.country.image" alt="" /> {{
                                        currentuser.country.country_name.toUpperCase() }}</p>
                        </span>
                        <p class="text-muted m-0">User Role: {{ currentuser.role.role_name }}</p>
                    </div>
                    <div class="card-body">
                        <ul class="nav nav-tabs profile-nav mb-4" id="profileTab" role="tablist">
                            <li class="nav-item"><a class="nav-link active" id="about-tab" data-bs-toggle="tab"
                                    href="#about" role="tab" aria-controls="about" aria-selected="true">Profile</a></li>
                            <li v-if="currentuser.role._id == '63fd058921a945fd564e9c6c'" class="nav-item"><a class="nav-link" id="friends-tab" data-bs-toggle="tab" href="#friends"
                                    role="tab" aria-controls="friends" aria-selected="false">Payment Options</a></li>
                            <li v-if="currentuser.role._id == '63fd058921a945fd564e9c6c'" class="nav-item"><a class="nav-link" id="photos-tab" data-bs-toggle="tab" href="#photos"
                                    role="tab" aria-controls="photos" aria-selected="false">Account</a></li>
                        </ul>
                        <div class="tab-content" id="profileTabContent">
                            <div class="tab-pane fade active show" id="about" role="tabpanel" aria-labelledby="about-tab">
                                <div class="card mt-4">                                    
                                    <Form @submit="editUser" :validation-schema="schema" class="user">
                                    <div class="card-body">
                                        <div class="card-title">Personal Information</div>
                                            <p>The account {{ currentuser.first_name.toUpperCase() }} {{ currentuser.last_name.toUpperCase() }} created this account on {{ currentuser.createdAt }} with phone details of {{ currentuser.phone_number }} and email {{ currentuser.phone_number }}.</p>
                                        <hr />
                                        <div class="row">
                                            <div class="form-group col-md-6">
                                                <label class="col-form-label" for="first_name">First Name:</label>
                                                <Field name="first_name" class="form-control" :value="currentuser.first_name" type="text" />
                                                <ErrorMessage name="first_name" class="text-danger p-3" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="col-form-label" for="second_name">Second Name:</label>
                                                <Field name="second_name" class="form-control" :value="currentuser.second_name" type="text" />
                                                <ErrorMessage name="second_name" class="text-danger p-3" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="col-form-label" for="last_name">Last Name:</label>
                                                <Field name="last_name" class="form-control" :value="currentuser.last_name" type="text" />
                                                <ErrorMessage name="last_name" class="text-danger p-3" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="col-form-label" for="email">Email:</label>
                                                <Field name="email" class="form-control" :value="currentuser.email" type="text" />
                                                <ErrorMessage name="email" class="text-danger p-3" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="col-form-label" for="phone_number">Phone Number:</label>
                                                <Field name="phone_number" class="form-control" :value="currentuser.phone_number" type="text" />
                                                <ErrorMessage name="phone_number" class="text-danger p-3" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="col-form-label" for="postal_code">Postal Code:</label>
                                                <Field name="postal_code" class="form-control" :value="currentuser.postal_code" type="text" />
                                                <ErrorMessage name="postal_code" class="text-danger p-3" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="col-form-label" for="zip_code">Zip Code:</label>
                                                <Field name="zip_code" class="form-control" :value="currentuser.zip_code" type="text" />
                                                <ErrorMessage name="zip_code" class="text-danger p-3" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label class="col-form-label" for="street">Street:</label>
                                                <Field name="street" class="form-control" :value="currentuser.street" type="text" />
                                                <ErrorMessage name="street" class="text-danger p-3" />
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label for="country" class="form-control-label">country Name</label>
                                                <Field name="country" class="form-control form-control-lg" :value="currentuser.country._id" as="select">
                                                    <option value="">-- Country--</option>
                                                    <option v-for="country in allcountries" :value="country._id" :key="country._id">
                                                        {{ country.country_name }}
                                                    </option>
                                                </Field>
                                                <ErrorMessage name="country" class="text-danger py-3 text-sm" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <div class="row text-end">
                                            <div class="col-lg-12">
                                                <button class="btn btn-primary" type="Submit">Update</button>
                                            </div>
                                        </div>
                                    </div>
                                    </Form>
                                    </div>

                                    <hr />
                                </div>
                                <div v-if="currentuser.role._id == '63fd058921a945fd564e9c6c'" class="tab-pane fade" id="friends" role="tabpanel" aria-labelledby="friends-tab">
                                    <div class="card mt-4">
                                        <div class="card-body">
                                            <div class="card-title">Billing Details</div>
                                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active" id="home-basic-tab" data-bs-toggle="tab"
                                                        href="#homeBasic" role="tab" aria-controls="homeBasic"
                                                        aria-selected="true"><i
                                                            class="i-Telephone text-danger text-16 align-middle me-1"></i><span>Mobile Money</span></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="profile-basic-tab" data-bs-toggle="tab"
                                                        href="#profileBasic" role="tab" aria-controls="profileBasic"
                                                        aria-selected="false"><i
                                                            class="i-Paypal text-primary text-16 align-middle me-1"></i><span>Paypal</span></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="contact-basic-tab" data-bs-toggle="tab"
                                                        href="#contactBasic" role="tab" aria-controls="contactBasic"
                                                        aria-selected="false"><i
                                                            class="i-Building text-warning text-16 align-middle me-1"></i><span>Bank</span></a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade show active" id="homeBasic" role="tabpanel"
                                                    aria-labelledby="home-basic-tab">
                                                    <div class="row">
                                                        <div class="form-group col-md-6">
                                                            <label class="ul-form__label" for="inputEmail12">Full Name:</label>
                                                            <input class="form-control" id="inputEmail12" type="text"
                                                                value="Account Name" />
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label class="ul-form__label" for="inputtext11">Phone Number:</label>
                                                            <input class="form-control" id="inputtext11" type="text"
                                                                value="Phone Number" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="profileBasic" role="tabpanel"
                                                    aria-labelledby="profile-basic-tab">
                                                    <div class="row">
                                                        <div class="form-group col-md-6">
                                                            <label class="ul-form__label" for="inputtext11">PayPal Email:</label>
                                                            <input class="form-control" id="inputtext11" type="email"
                                                                value="Email" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="contactBasic" role="tabpanel"
                                                    aria-labelledby="contact-basic-tab">
                                                    <div class="row">
                                                        <div class="form-group col-md-6">
                                                            <label class="ul-form__label" for="inputEmail12">Bank:</label>
                                                            <input class="form-control" id="inputEmail12" type="text"
                                                                value="Bank" />
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label class="ul-form__label" for="inputtext11">Branch:</label>
                                                            <input class="form-control" id="inputtext11" type="text"
                                                                value="Branch" />
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label class="ul-form__label" for="inputEmail12">Swift Code:</label>
                                                            <input class="form-control" id="inputEmail12" type="text"
                                                                value="Swift Code" />
                                                        </div>                                                        
                                                        <div class="form-group col-md-6">
                                                            <label class="ul-form__label" for="inputtext11">Account Name:</label>
                                                            <input class="form-control" id="inputtext11" type="text"
                                                                value="Account Name" />
                                                        </div>                                                        
                                                        <div class="form-group col-md-6">
                                                            <label class="ul-form__label" for="inputtext11">Account NO#:</label>
                                                            <input class="form-control" id="inputtext11" type="text"
                                                                value="Account Number" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <div class="row text-end">
                                                <div class="col-lg-12">
                                                    <button class="btn btn-primary m-1" type="button">
                                                        Update
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="currentuser.role._id == '63fd058921a945fd564e9c6c'" class="tab-pane fade" id="photos" role="tabpanel" aria-labelledby="photos-tab">
                                    <div class="card">
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="invoice" role="tabpanel"
                                                aria-labelledby="invoice-tab">
                                                <div class="d-sm-flex mb-5" data-view="print">
                                                    <span class="m-auto"></span>
                                                    <button class="btn btn-success mb-sm-0 mb-3 print-invoice">
                                                        Cashout
                                                    </button>
                                                </div>
                                                <!-- -===== Print Area =======-->
                                                <div id="print-area">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <h4 class="fw-bold">Account</h4>
                                                            <p>#FUNDRAISERS</p>
                                                        </div>
                                                        <div class="col-md-6 text-sm-end">
                                                            <p><strong>Order status: </strong>Closed</p>
                                                        </div>
                                                    </div>
                                                    <div class="mt-3 mb-4 border-top"></div>
                                                    <div class="row">
                                                        <div class="col-md-12 table-responsive">
                                                            <table class="table table-hover mb-4">
                                                                <thead class="bg-gray-300">
                                                                    <tr>
                                                                        <th scope="col">#</th>
                                                                        <th scope="col">Item Name</th>
                                                                        <th scope="col">Unit Price</th>
                                                                        <th scope="col">Unit</th>
                                                                        <th scope="col">Cost</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th scope="row">1</th>
                                                                        <td>Product 1</td>
                                                                        <td>300</td>
                                                                        <td>2</td>
                                                                        <td>600</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">1</th>
                                                                        <td>Product 2</td>
                                                                        <td>200</td>
                                                                        <td>3</td>
                                                                        <td>600</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="invoice-summary">
                                                                <p>Sub total: <span>$1200</span></p>
                                                                <p>Processing Fee: <span>$120</span></p>
                                                                <h5 class="fw-bold">
                                                                    Grand Total: <span>$1320</span>
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
                    </div>
                </div><!-- end of main-content -->
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
import { CREATE_BANKING_MUTATION, USER_QUERY, EDIT_USER_MUTATION, ALL_ROLES_MUTATION, ALL_COUNTRIES_QUERY, MPESA_DETAILS_QUERY, MPESA_DETAILS_MUTATION, BANK_BILLING_QUERY } from '@/graphql';

import { Form, Field, ErrorMessage } from "vee-validate"
// import * as yup from "yup"
import * as yup from "yup"
export default {
    name: "Profile",
    components: { Sidebar, Topbar, Footer, Breadcrumbs, Form, Field, ErrorMessage },
    data() {
        return {
            currentuser: [],
            bankBillings: [],
            mpesaDetails: [],
            role_name: "",
        }
    },
    apollo: {
        currentuser: {
            query: USER_QUERY
        },
        allRoles: {
            query: ALL_ROLES_MUTATION
        },
        allcountries: {
            query: ALL_COUNTRIES_QUERY
        },
        bankBillings: {
            query: BANK_BILLING_QUERY
        },
        mpesaDetails: {
            query: MPESA_DETAILS_QUERY
        },
    },
    methods: {
        editUser(user) {
            this.$apollo
                .mutate({
                    mutation: EDIT_USER_MUTATION,
                    variables: {
                        input: {
                            id: this.currentuser._id,
                            first_name: user.first_name,
                            second_name: user.second_name,
                            last_name: user.last_name,
                            email: user.email,
                            phone_number: user.phone_number,
                            postal_code: user.postal_code,
                            zip_code: user.zip_code,
                            street: user.street,
                            country: user.country,
                        }
                    }
                })
                .then(response => {
                    $('#editModalContent').modal('hide')
                    this.$swal({
                        title: 'Profile updated sucessfully',
                        position: 'top-end',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.$apollo.queries.currentuser.refetch()
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
