<template>
    <!-- Add Request Modal -->
    <div class="modal fade" id="verifyModalContent" tabindex="-1" role="dialog" aria-labelledby="verifyModalContent"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="verifyModalContent_title">Add Request</h5>
                    <button class="btn btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <Form @submit="addDonationRequest" :validation-schema="schema" class="user">
                    <div class="modal-body">
                        <div class="row row-xs">
                            <div class="form-group col-md-6">
                                <!-- <div class="row"> -->
                                <label for="memberId" class="form-control-label">Member Name</label>
                                <Field name="memberId" class="form-control form-control-lg" v-model="memberId" as="select">
                                    <option value="">-- Member--</option>
                                    <option v-for="member in filterUsers" :value="member._id" :key="member._id">
                                        {{ member.first_name }}
                                    </option>
                                </Field>
                                <ErrorMessage name="memberId" class="text-danger py-3 text-sm" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="productId" class="form-control-label">Product</label>
                                <Field name="productId" class="form-control form-control-lg" v-model="productId"
                                    as="select">
                                    <option value="">-- product--</option>
                                    <option v-for="product in products" :value="product._id" :key="product._id">
                                        {{ product.product_name }}
                                    </option>
                                </Field>
                                <ErrorMessage name="productId" class="text-danger py-3 text-sm" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="categoryId" class="form-control-label">Fundraise for</label>
                                <Field name="categoryId" class="form-control form-control-lg" v-model="categoryId"
                                    as="select">
                                    <option value="">-- Fundraising category--</option>
                                    <option v-for="category in categories" :value="category._id" :key="category._id">
                                        {{ category.category_name }}
                                    </option>
                                </Field>
                                <ErrorMessage name="categoryId" class="text-danger py-3 text-sm" />
                            </div>
                            <div class="form-group col-md-6">
                                <label class="col-form-label" for="story">Story:</label>
                                <Field name="story" class="form-control" v-model="story" type="text" placeholder="story" />
                                <ErrorMessage name="story" class="text-danger p-3" />
                            </div>
                            <div class="form-group col-md-6">
                                <label class="col-form-label" for="amount">Goal:</label>
                                <Field name="amount" class="form-control" v-model="amount" type="number" step="0.01"
                                    placeholder="amount" />
                                <ErrorMessage name="amount" class="text-danger p-3" />
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
    <!-- Edit Request Modal -->
    <div class="modal fade" id="editModalContent" tabindex="-1" role="dialog" aria-labelledby="editModalContent"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editModalContent_title">Edit Request</h5>
                    <button class="btn btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <Form @submit="editDonationRequest" :validation-schema="schema" class="user">
                    <div class="modal-body">
                        <div class="row row-xs">
                            <div class="form-group col-md-6">
                                <!-- <div class="row"> -->
                                <label for="memberId" class="form-control-label">Member Name</label>
                                <Field name="memberId" class="form-control form-control-lg" v-model="memberId" as="select">
                                    <option value="">-- Member--</option>
                                    <option v-for="member in filterUsers" :value="member._id" :key="member._id">
                                        {{ member.first_name }}
                                    </option>
                                </Field>
                                <ErrorMessage name="memberId" class="text-danger py-3 text-sm" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="productId" class="form-control-label">Product</label>
                                <Field name="productId" class="form-control form-control-lg" v-model="productId"
                                    as="select">
                                    <option value="">-- product--</option>
                                    <option v-for="product in products" :value="product._id" :key="product._id">
                                        {{ product.product_name }}
                                    </option>
                                </Field>
                                <ErrorMessage name="productId" class="text-danger py-3 text-sm" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="categoryId" class="form-control-label">Fundraise for</label>
                                <Field name="categoryId" class="form-control form-control-lg" v-model="categoryId"
                                    as="select">
                                    <option value="">-- Fundraising category--</option>
                                    <option v-for="category in categories" :value="category._id" :key="category._id">
                                        {{ category.category_name }}
                                    </option>
                                </Field>
                                <ErrorMessage name="categoryId" class="text-danger py-3 text-sm" />
                            </div>
                            <div class="form-group col-md-6">
                                <label class="col-form-label" for="story">Story:</label>
                                <Field name="story" class="form-control" v-model="story" type="text" placeholder="story" />
                                <ErrorMessage name="story" class="text-danger p-3" />
                            </div>
                            <div class="form-group col-md-6">
                                <label class="col-form-label" for="amount">Goal:</label>
                                <Field name="amount" class="form-control" v-model="amount" type="number" step="0.01"
                                    placeholder="amount" />
                                <ErrorMessage name="amount" class="text-danger p-3" />
                            </div>
                            <div class="form-group col-md-6">
                                <label class="col-form-label" for="status">Status:</label>
                                <div class="row">
                                    <label class="radio radio-success col-md-6  mr-4">
                                        <Field type="radio" name="status" checked value="1" v-model="approve_status"/><span>Approve</span><span class="checkmark"></span>
                                    </label>
                                    <label class="radio radio-danger col-md-6 mr-4">
                                        <Field type="radio" name="status" value="3" v-model="approve_status" /><span>Reject</span><span class="checkmark"></span>
                                    </label>
                                </div>
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
    <div class="app-admin-wrap layout-horizontal-bar">
        <Sidebar />
        <Topbar />
        <div class="main-content-wrap d-flex flex-column">
            <div class="main-content">
                <button class="btn btn-info text-white ul-btn-raised--v2 m-1  float-end" type="button"
                    data-bs-toggle="modal" data-target="#verifyModalContent" data-whatever="@mdo">
                    <i class="nav-icon i-add text-primary text-white fw-bold"></i> ADD FUNDRAISE REQUEST</button>
                <Breadcrumbs />
                <div class="separator-breadcrumb border-top"></div>
                <div class="row mb-4">
                    <div class="col-md-12">
                        <div class="card o-hidden mb-4">
                            <div class="card-body">
                                <div class="ul-widget__head">
                                    <div class="ul-widget__head-label">
                                        <h3 class="ul-widget__head-title">Fundraise Request</h3>
                                    </div>
                                    <div class="ul-widget__head-toolbar">
                                        <ul class="nav nav-tabs nav-tabs-line nav-tabs-bold ul-widget-nav-tabs-line"
                                            role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active show" data-bs-toggle="tab" role="tab"
                                                    aria-selected="true" @click="statusChange('0')">Open</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false"
                                                    @click="statusChange('1')">In Progress</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false"
                                                    @click="statusChange('2')">Shipped</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false"
                                                    @click="statusChange('4')">Closed</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false"
                                                    @click="statusChange('3')">Rejected</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="row mb-4">
                                    <div class="col-lg-4 col-xl-4 mt-3" v-for="requestdon in donationRequestsPerStatus"
                                        :key="requestdon._id">
                                        <div class="card">
                                            <div class="card-body"><!-- <img class="d-block w-100 rounded"
                                                    v-bind:src="requestdon.member.profilePhoto" alt="First slide" /> -->
                                                <div class="ul-widget-card__progress-rate"><span>$ {{
                                                    requestdon.donatedAmount }}</span><span>$ {{ requestdon.amount}}</span></div>
                                                <div class="progress progress--height mb-3">
                                                    <div :class="donationPercentage(requestdon.donatedAmount, requestdon.amount) < '50' ? 'progress-bar progress-bar-striped bg-danger' : (donationPercentage(requestdon.donatedAmount, requestdon.amount) > '90' ? 'progress-bar progress-bar-striped bg-success' : 'progress-bar progress-bar-striped bg-Primary' )" role="progressbar" :style="{'width':  donationPercentage(requestdon.donatedAmount, requestdon.amount) + '%' }"
                                                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <h5 class="card-title mt-4 mb-2">{{
                                                    requestdon.member.first_name.toUpperCase()
                                                    + " " + requestdon.member.last_name.toUpperCase() }}</h5>
                                                <p class="card-text text-mute">{{ requestdon.story }}</p>
                                                <div class="ul-widget-card__full-status mb-3">
                                                    <button v-if="requestdon.status == 0" class="btn btn-outline-gray-700 ul-btn-raised--v2 m-1"
                                                        type="button" @click="approve(requestdon._id)">
                                                        EDIT</button>
                                                    <button v-if="requestdon.status == 0" class="btn btn-outline-danger ul-btn-raised--v2 m-1  "
                                                        type="button" @click="deleteDonationRequest(requestdon._id)">
                                                        DELETE</button>
                                                    <button v-if="requestdon.status == !0" class="btn btn-outline-info ul-btn-raised--v2 m-1  "
                                                        type="button" @click="donate(requestdon._id)">
                                                        DONATE</button>
                                                    <button class="btn btn-outline-success ul-btn-raised--v2 m-1 float-end"
                                                        type="button">Preview</button>
                                                </div>
                                                <div class="separator-breadcrumb border-top"></div>
                                                <div class="ul-widget-card__rate-icon">
                                                    <span><p class="text-small font-italic"><i class="i-Map-Marker text-warning"></i>{{ requestdon.member.country.country_name.toUpperCase() }}</p>
                                                    </span>
                                                    <span><p class="text-small font-italic"><i class="i-Telephone text-primary"></i> {{requestdon.member.phone_number }}</p>
                                                    </span>
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
import { REQUESTSTATUS_QUERY, EDIT_DONATIONREQUEST_MUTATION, DELETE_DONATIONREQUEST_MUTATION, ADD_DONATIONREQUEST_MUTATION, ALL_DONATIONREQUESTS_QUERY, ALL_DONORS_QUERY, ALL_CATEGORIES_QUERY, ALL_PRODUCTS_QUERY } from '@/graphql';
import { Form, Field, ErrorMessage } from "vee-validate"
import * as yup from "yup"
export default {
    name: "FundraiserPreview",
    components: { Sidebar, Topbar, Footer, Breadcrumbs, Form, Field, ErrorMessage },
    data() {

        const schema = yup.object().shape({
            amount: yup
                .string()
                .required("Amount is required!"),
            memberId: yup
                .string()
                .required("Member is required!"),
            productId: yup
                .string()
                .required("Product is required!"),
            story: yup
                .string()
                .required("Story is required!"),
        });
        return {
            donationRequests: [],
            donationRequestsPerStatus: [],
            products: [],
            filterUsers: [],
            categories: [],
            amount: '',
            donationCode: '',
            memberId: '',
            productId: '',
            shippedDate: '',
            rejectedDate: '',
            processDate: '',
            story: '',
            closedDate: '',
            request_id: '',
            status: "0",
            approve_status: "1",
            categoryId: '',
            schema,
        }
    },
    apollo: {
        // fetch all donations
        donationRequests: {
            query: ALL_DONATIONREQUESTS_QUERY
        },
        products: {
            query: ALL_PRODUCTS_QUERY
        },
        categories: {
            query: ALL_CATEGORIES_QUERY
        },
        filterUsers: {
            query: ALL_DONORS_QUERY,
            variables: {
                roleId: "63fd058921a945fd564e9c6c"
            }
        },
        donationRequestsPerStatus: {
            query: REQUESTSTATUS_QUERY,
            variables: {
                status: "0"
            }
        }
    },
    methods: {
        addDonationRequest(donation) {
            this.$apollo
                .mutate({
                    mutation: ADD_DONATIONREQUEST_MUTATION,
                    variables: {
                        amount: donation.amount,
                        memberId: donation.memberId,
                        productId: donation.productId,
                        categoryId: donation.categoryId,
                        story: donation.story,
                    }
                })
                .then(response => {
                    // redirect user
                    $('#verifyModalContent').modal('hide')
                    this.$swal({
                        title: 'Donation Request added sucessfully',
                        position: 'top-end',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.$apollo.queries.donationRequestsPerStatus.refetch()
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
        deleteDonationRequest(request_id) {
            this.$swal({
                title: "Do you want to Delete the donation request?",
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
                            mutation: DELETE_DONATIONREQUEST_MUTATION,
                            variables: {
                                donationRequestId: request_id,
                            }
                        })
                        .then(response => {
                            this.$swal({
                                title: 'Donation Request deleted sucessfully',
                                position: 'top-end',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 2000
                            });
                            this.$apollo.queries.donationRequestsPerStatus.refetch()
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
        statusChange(status) {
            this.status = status;
            console.log(this.status)
            this.$apollo.queries.donationRequestsPerStatus.refetch({
                status: this.status
            })
        },
        openEditDonationRequest(donation) {
            console.log(donation)
            this.donationCode = donation.donation_code
            this.request_id = donation._id
            this.memberId = donation.member._id
            this.productId = donation.product._id
            this.categoryId = donation.product.category._id
            this.amount = donation.amount
            this.shippedDate = donation.shipped_date
            this.rejectedDate = donation.rejected_date
            this.processDate = donation.process_date
            this.story = donation.story
            this.closedDate = donation.closed_date
            this.status = donation.status
            $('#editModalContent').modal('show')

        },
        editDonationRequest(donation) {
            this.$apollo
                .mutate({
                    mutation: EDIT_DONATIONREQUEST_MUTATION,
                    variables: {
                        input: {
                            id: this.request_id,
                            amount: donation.amount,
                            donation_code: donation.donationCode,
                            memberId: donation.memberId,
                            product: donation.productId,
                            // shipped_date: donation.shippedDate,
                            // rejected_date: donation.rejectedDate,
                            category: donation.categoryId,
                            story: donation.story,
                            shippingAddress: donation.shippingAddress,
                            status: donation.status,
                        }
                    }
                })
                .then(response => {
                    $('#editModalContent').modal('hide')
                    this.$swal({
                        title: 'Donation Request updated sucessfully',
                        position: 'top-end',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.$apollo.queries.donationRequestsPerStatus.refetch()
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
        approve(request_id){
            this.$swal({
            title: 'Update donation request',
            icon: 'info',
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: 'Update',
            cancelButtonText: 'Cancel',
            input: 'radio',
            inputOptions: {
                1: "Approve",
                4: "Reject",
            },
            inputValidator: (value) => {
                if (!value) {
                return 'You need to choose something!'
                }
                else{
                var request = (value == 1) ? 'Approve' : 'Reject';
                this.$swal({
                    title: 'Do you want to '+ request + ' this request?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!'
                }).then((result) => {
                    if (result.isConfirmed) {
                    this.$apollo
                            .mutate({
                                mutation: EDIT_DONATIONREQUEST_MUTATION,
                                variables: {
                                    input: {
                                        id: request_id,
                                        status: value,
                                    }
                                }
                            })
                            .then(response => {
                                $('#editModalContent').modal('hide')
                                this.$swal({
                                    title: 'Donation Request  '+ request + 'ed sucessfully',
                                    position: 'top-end',
                                    icon: 'success',
                                    showConfirmButton: false,
                                    timer: 2000
                                });
                                this.$apollo.queries.donationRequestsPerStatus.refetch()
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
                })
                }
            }
            })
        },
        donationPercentage(goal, amount) {
            return (amount/goal)*100;
            }
    },
    created() {
        this.status = "0";
        this.statusChange;
        console.log(this.statusChange)
    }

}
</script>
  