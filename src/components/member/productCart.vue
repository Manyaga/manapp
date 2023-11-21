<template>
    <div class="app-admin-wrap layout-horizontal-bar">
        <Sidebar />
        <Topbar />
        <div class="main-content-wrap d-flex flex-column">
            <div class="main-content">
                <Breadcrumbs />
                <div class="separator-breadcrumb border-top"></div>
                <section class="product-cart">
                    <div class="row">
                        <div class="col-lg-12">
                            <ul class="nav nav-tabs justify-content-end mb-4" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="invoice-tab" data-bs-toggle="tab" href="#invoice"
                                        role="tab" aria-controls="invoice" aria-selected="true">Product Aids</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="edit-tab" data-bs-toggle="tab" href="#edit" role="tab"
                                        aria-controls="edit" aria-selected="false">Fundraisers</a>
                                </li>
                            </ul>
                            <div class="card">
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="invoice" role="tabpanel"
                                        aria-labelledby="invoice-tab">
                                        <div v-if="donationRequestsPerStatusUser.length > 0" class="card-body">
                                            <div class="row">
                                            <div class="col-md-6">
                                                <h4 class="fw-bold text-primary">My Cart</h4>
                                            </div>
                                            <div class="col-md-6 text-sm-end">
                                                <p><strong>Date: </strong>{{ timeNow }}</p>
                                            </div>
                                        </div>
                                        <!-- <div class="mt-3 mb-4 border-top"></div> -->
                                        <div class="row mb-5">
                                            <div class="col-md-6 mb-3 mb-sm-0">
                                                <h5 class="fw-bold">DONOR</h5>
                                                <p>{{ currentuser.first_name.toUpperCase() }} {{
                                                    currentuser.last_name.toUpperCase() }}</p>
                                            </div>
                                            <div class="col-md-6 text-sm-end">
                                                <h5 class="fw-bold">County</h5>
                                                <p>{{ currentuser.country.country_name.toUpperCase() }}</p>
                                            </div>
                                        </div>
                                            <div class="table-responsive">
                                                <table class="table">
                                                    <thead class="bg-gray-300">
                                                        <tr>
                                                            <th scope="col">SL.</th>
                                                            <th scope="col">Product</th>
                                                            <th scope="col">Price</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Total</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="requestdon, index in donationRequestsPerStatusUser"
                                                            :key="requestdon._id">
                                                            <td>{{ index + 1 }}</td>
                                                            <td scope="row"><img
                                                                    class="profile-picture avatar-sm mb-2 img-fluid"
                                                                    src="../../assets/images/products/speaker-1.jpg"
                                                                    alt="" />
                                                                <div
                                                                    class="ul-product-cart__detail d-inline-block align-middle ms-1">
                                                                    <a href="">
                                                                        <h5 class="heading">
                                                                            {{ requestdon.product.product_name.toUpperCase()
                                                                            }}</h5>
                                                                    </a><span class="text-mute font-size-200">{{
                                                                        requestdon.category.category_name }}</span>
                                                                </div>
                                                            </td>
                                                            <td>${{ requestdon.product.unitPrice }}</td>
                                                            <td>
                                                                <input class="form-control w-25" max="5" type="number"
                                                                    @change="onQuantityChange($event, requestdon)"
                                                                    :value="requestdon.quantity" />
                                                                <div v-if="message"
                                                                    class="alert alert-dismissible fade show alert-card alert-danger"
                                                                    role="alert">
                                                                    {{ message }}
                                                                </div>
                                                            </td>
                                                            <td>${{ requestdon.amount }}</td>
                                                            <td><a class="text-danger me-2" href="#"
                                                                    @click="deleteDonationRequest(requestdon._id)">
                                                                    <i class="nav-icon i-Close-Window fw-bold"></i></a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="invoice-summary">
                                                    <!-- <p>Received: <span>$ {{Number(productAid.donatedAmount).toLocaleString()}}</span></p> -->
                                                    <h5 class="fw-bold text-16">
                                                        <span class="text-primary text-16" scope="row"> TOTAL: </span><span
                                                            class="font-weight-700 text-16">$ {{ calculateTotal() }}</span>
                                                    </h5>
                                                    <button class="btn btn-primary ripple m-1" @click="updateStatus()"
                                                        type="button">Checkout</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-if="donationRequestsPerStatusUser.length == 0" class="card-body">
                                            <div class="user-profile mb-4">
                                                <div class="ul-widget-card__user-info">
                                                    <img class="profile-picture avatar-lg mb-2"
                                                        src="https://cdn.pixabay.com/photo/2016/05/25/20/17/icon-1415760__480.png"
                                                        alt="" />

                                                </div>
                                                <div class="ul-widget-card--line text-center  mt-2">
                                                    <RouterLink to="product-categories"><a class="m-1" type="button">
                                                            No item in the cart yet, click here to Shop!</a></RouterLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="edit" role="tabpanel" aria-labelledby="edit-tab">
                                        <div v-if="fundraisersPerStatusUser.length > 0" class="card-body">
                                            <div class="row">
                                            <div class="col-md-6">
                                                <h4 class="fw-bold text-primary">My Cart</h4>
                                            </div>
                                            <div class="col-md-6 text-sm-end">
                                                <p><strong>Date: </strong>{{ timeNow }}</p>
                                            </div>
                                        </div>
                                        <!-- <div class="mt-3 mb-4 border-top"></div> -->
                                        <div class="row mb-5">
                                            <div class="col-md-6 mb-3 mb-sm-0">
                                                <h5 class="fw-bold">DONOR</h5>
                                                <p>{{ currentuser.first_name.toUpperCase() }} {{
                                                    currentuser.last_name.toUpperCase() }}</p>
                                            </div>
                                            <div class="col-md-6 text-sm-end">
                                                <h5 class="fw-bold">County</h5>
                                                <p>{{ currentuser.country.country_name.toUpperCase() }}</p>
                                            </div>
                                        </div>
                                            <div class="table-responsive">
                                                <table class="table">
                                                    <thead class="bg-gray-300">
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Code</th>
                                                            <th scope="col">Story</th>
                                                            <th scope="col">Amount</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="requestdon, index in fundraisersPerStatusUser"
                                                            :key="requestdon._id">
                                                            <td>{{ index + 1 }}</td>
                                                            <td scope="row"><img
                                                                    class="profile-picture avatar-sm mb-2 img-fluid"
                                                                    src="../../assets/images/products/speaker-1.jpg"
                                                                    alt="" />
                                                                <div
                                                                    class="ul-product-cart__detail d-inline-block align-middle ms-1">
                                                                    <a href="">
                                                                        <h5 class="heading">
                                                                            {{ requestdon.request_code.toUpperCase()
                                                                            }}</h5>
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>{{ requestdon.story }}</td>
                                                            <td>$ {{ Number(requestdon.amount).toLocaleString() }}</td>
                                                            <td><a class="text-danger me-2" href="#"
                                                                    @click="deleteFundraiser(requestdon._id)">
                                                                    <i class="nav-icon i-Close-Window fw-bold"></i></a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="invoice-summary">
                                                    <!-- <p>Received: <span>$ {{Number(productAid.donatedAmount).toLocaleString()}}</span></p> -->
                                                    <h5 class="fw-bold text-16">
                                                        <span class="text-primary text-16" scope="row"> TOTAL: </span><span
                                                            class="font-weight-700 text-16">$ {{ fundraiserTotal() }}</span>
                                                    </h5>
                                                    <button class="btn btn-primary ripple m-1" @click="updateFundraisers()"
                                                        type="button">Checkout</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-if="fundraisersPerStatusUser.length == 0" class="card-body">
                                            <div class="user-profile mb-4">
                                                <div class="ul-widget-card__user-info">
                                                    <img class="profile-picture avatar-lg mb-2"
                                                        src="https://cdn.pixabay.com/photo/2016/05/25/20/17/icon-1415760__480.png"
                                                        alt="" />

                                                </div>
                                                <div class="ul-widget-card--line text-center  mt-2">
                                                    <RouterLink to="my-fundraisers-requests"><a class="m-1" type="button">
                                                            No fundraiser in cart, click here to launch a fundraiser!</a></RouterLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                </section><!-- end of main-content -->
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
import moment from 'moment'
import { DELETE_DONATIONREQUEST_MUTATION, EDIT_DONATIONREQUEST_MUTATION, FUNDRAISER_USER_STATUS_QUERY, REQUEST_USER_STATUS_QUERY, EDIT_FUNDRAISER_MUTATION, DELETE_FUNDRAISER_MUTATION } from '@/graphql';
export default {
    name: "ProductCart",
    components: { Sidebar, Topbar, Footer, Breadcrumbs },
    data() {
        return {
            donationRequestsPerStatusUser: [],
            fundraisersPerStatusUser: [],
            amount: '',
            quantity: '',
            total: 0,
            requestID: '',
            message: '',
            currentuser: TokenService.getUser(),
        }
    },
    apollo: {
        // fetch all donations
        donationRequestsPerStatusUser: {
            query: REQUEST_USER_STATUS_QUERY,
            variables: {
                status: '0'
            }
        },
        fundraisersPerStatusUser: {
            query: FUNDRAISER_USER_STATUS_QUERY,
            variables: {
                status: '0'
            }
        }
    },
    methods: {
        onQuantityChange(event, request) {
            if (request.quantity > event.target.value) {
                this.amount = (event.target.value * request.product.unitPrice).toFixed(2);
                this.quantity = event.target.value
                this.requestID = request._id
                this.editDonationRequest()
            } else {
                if ((event.target.value - request.quantity) > request.product.availabelQuantity) {
                    this.message = 'Maximum items available is ' + request.product.availabelQuantity;
                } else {
                    this.amount = (event.target.value * request.product.unitPrice).toFixed(2);
                    this.quantity = event.target.value
                    this.requestID = request._id
                    this.editDonationRequest()
                }

            }
        },
        calculateTotal() {
            this.total = 0;
            for (var i = 0; i < this.donationRequestsPerStatusUser.length; i++) {
                this.total += (Number(this.donationRequestsPerStatusUser[i].amount))
            }
            return this.total.toFixed(2)
        },
        fundraiserTotal() {
            this.total = 0;
            for (var i = 0; i < this.fundraisersPerStatusUser.length; i++) {
                this.total += (Number(this.fundraisersPerStatusUser[i].amount))
            }
            return this.total.toLocaleString()
        },
        async updateStatus() {
            for (var i = 0; i < this.donationRequestsPerStatusUser.length; i++) {
                await this.$apollo
                    .mutate({
                        mutation: EDIT_DONATIONREQUEST_MUTATION,
                        variables: {
                            input: {
                                id: this.donationRequestsPerStatusUser[i]._id,
                                status: '1',
                            }
                        }
                    })
            }
            await this.$swal({
                title: 'Product Aid(s) added sucessfully',
                position: 'top-end',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
            });
            this.$router.push("/my-donation-requests");
        },
        async updateFundraisers() {
            for (var i = 0; i < this.fundraisersPerStatusUser.length; i++) {
                await this.$apollo
                    .mutate({
                        mutation: EDIT_FUNDRAISER_MUTATION,
                        variables: {
                            input: {
                                id: this.fundraisersPerStatusUser[i]._id,
                                status: '1',
                            }
                        }
                    })
            }
            await this.$swal({
                title: 'Fundraiser(s) added sucessfully',
                position: 'top-end',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
            });
            this.$router.push("/my-fundraisers-requests");
        },
        async deleteDonationRequest(request_id) {
            this.$swal({
                title: "Remove product aid from cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Remove",
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
                                title: 'Product aid removed',
                                position: 'top-end',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 2000
                            });
                            this.$apollo.queries.donationRequestsPerStatusUser.refetch({
                                variables: {
                                    status: '0'
                                }
                            });
                        })
                }
            });
        },
        async deleteFundraiser(request_id) {
            this.$swal({
                title: "Remove fundtaiser from cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Remove",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$apollo
                        .mutate({
                            mutation: DELETE_FUNDRAISER_MUTATION,
                            variables: {
                                fundraiserId: request_id,
                            }
                        })
                        .then(response => {
                            this.$swal({
                                title: 'Fundtaiser removed',
                                position: 'top-end',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 2000
                            });
                            this.$apollo.queries.fundraisersPerStatusUser.refetch({
                                variables: {
                                    status: '0'
                                }
                            });
                        })
                }
            });
        },
        editDonationRequest() {
            this.$apollo
                .mutate({
                    mutation: EDIT_DONATIONREQUEST_MUTATION,
                    variables: {
                        input: {
                            id: this.requestID,
                            amount: this.amount,
                            quantity: this.quantity,
                        }
                    }
                })
                .then(response => {
                    $('#editModalContent').modal('hide')
                    this.amount = ''
                    this.quantity = ''
                    this.requestID = ''
                    this.$apollo.queries.donationRequestsPerStatusUser.refetch()
                })
        }
    },
    async created() {
    },
    computed: {
      timeNow: function() {
            return moment().format('MMMM Do YYYY')
      }
    },

}
</script>