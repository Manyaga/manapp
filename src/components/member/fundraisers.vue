<template>
        <!-- Add Request Modal -->
        <div class="modal fade" id="verifyModalContent" tabindex="-1" role="dialog" aria-labelledby="verifyModalContent" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="verifyModalContent_title">START A FUNDRAISER</h5>
                                <button class="btn btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <Form @submit="addFundraiser" :validation-schema="schema" class="user">
                                <div class="modal-body">
                                    <div class="row row-xs">
                                        <div class="form-group col-md-6">
                                            <label class="col-form-label" for="amount">Your Initial Target:</label>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text">$</span>
                                                <Field name="amount" class="form-control" id="amount" v-model="amount" step='0.01' type="number" placeholder="amount" />
                                                <span class="input-group-text">.00</span>
                                            </div>
                                            <ErrorMessage name="amount" class="text-danger p-3" />
                                        </div>
                                        <div class="col-md-6"><img class="profile-picture avatar-lg mb-2 mt-2"
                                        src="https://cdn.pixabay.com/photo/2015/01/27/12/11/amazone-613708_1280.png" alt="" /></div>
                                        <div class="form-group col-md-12">
                                            <label class="col-form-label" for="story">Your fundraising needs.:</label>
                                            <div class="input-group">
                                                <span class="input-group-text">Story</span>
                                                <Field name="story" as="textarea" class="form-control"/>
                                            </div>
                                            <ErrorMessage name="story" class="text-danger p-3" />
                                        </div> 
                                        <label class="col-form-label">Bear in mind that transaction <u>fees</u>, including credit and debit charges, are deducted from each donation.</label>
                                                                           
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
     <div class="modal fade" id="editModalContent" tabindex="-1" role="dialog" aria-labelledby="editModalContent" aria-hidden="true">
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
                                            <label class="col-form-label" for="amount">Your Initial Target:</label>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text">$</span>
                                                <Field name="amount" class="form-control" id="amount" v-model="amount" step='0.01' type="number" placeholder="amount" />
                                                <span class="input-group-text">.00</span>
                                            </div>
                                            <ErrorMessage name="amount" class="text-danger p-3" />
                                        </div>
                                        <div class="col-md-6"><img class="profile-picture avatar-lg mb-2 mt-2"
                                        src="https://cdn.pixabay.com/photo/2015/01/27/12/11/amazone-613708_1280.png" alt="" /></div>
                                        <div class="form-group col-md-12">
                                            <label class="col-form-label" for="story">Your fundraising needs.:</label>
                                            <div class="input-group">
                                                <span class="input-group-text">Story</span>
                                                <Field name="story" v-model="story" as="textarea" class="form-control"/>
                                            </div>
                                            <ErrorMessage name="story" class="text-danger p-3" />
                                        </div> 
                                        <label class="col-form-label">Bear in mind that transaction <u>fees</u>, including credit and debit charges, are deducted from each donation.</label>
                                                                           
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
                <button class="btn btn-info text-white ul-btn-raised--v2 m-1  float-end" type="button" data-bs-toggle="modal"
                    data-target="#verifyModalContent" data-whatever="@mdo">
                    <i class="nav-icon i-add text-primary text-white fw-bold"></i> LAUNCH FUNDRAISER</button>
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
                                        <ul class="nav nav-tabs profile-nav"
                                            role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active show" data-bs-toggle="tab" role="tab"
                                                    aria-selected="true" @click="statusChange('1')">Open</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false"
                                                    @click="statusChange('2')">In Progress</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false"
                                                    @click="statusChange('3')">Closed</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false"
                                                    @click="statusChange('4')">Rejected</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div v-if="fundraisersPerStatusUser.length > 0"  class="row mb-4">                                    
                                    <div class="col-lg-3 col-xl-3 mt-3" v-for="requestdon in fundraisersPerStatusUser"
                                        :key="requestdon._id">
                                        <div class="card">
                                            <div class="card-body"><img class="d-block w-100 rounded"
                                                    v-bind:src="requestdon.member.profilePhoto" alt="First slide" />
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
                                                    <button  v-if="requestdon.status != '1'" class="btn btn-outline-success ul-btn-raised--v2 m-1 float-end"
                                                        type="button" @click="preview(requestdon)">PREVIEW</button>
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
                                <div v-if="fundraisersPerStatusUser.length == 0"  class="row">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="user-profile mb-4">
                                            <div class="ul-widget-card__user-info">
                                                <img class="profile-picture avatar-lg mb-2 mt-2"
                                                src="https://cdn.pixabay.com/photo/2014/12/21/23/57/money-576443_1280.png" alt="" />

                                            </div>
                                            <div class="ul-widget-card--line text-center mt-2">
                                                <a type="button" data-bs-toggle="modal" data-target="#verifyModalContent" data-whatever="@mdo"> No fundraiser yet please launch one!</a>
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
import TokenService from "@/services/token.service";
import Topbar from "@/components/partials/Topbar.vue";
import Footer from "@/components/partials/Footer.vue";
import Sidebar from "@/components/partials/Sidebar";
import Breadcrumbs from "@/components/partials/Breadcrumbs";
import { Form, Field, ErrorMessage } from "vee-validate"
    import * as yup from "yup"
import { FUNDRAISER_USER_STATUS_QUERY,CREATE_FUNDRAISER,EDIT_DONATIONREQUEST_MUTATION,DELETE_FUNDRAISER,USER_QUERY, } from '@/graphql';
export default {
    name: "Request",
    components: { Sidebar, Topbar, Footer, Breadcrumbs, Form, Field, ErrorMessage },
    data () {
        const schema = yup.object().shape({
        amount: yup
          .string()
          .required("Amount is required!"),
        story: yup
        .string()
        .required("Story is required!"),
    });
        return {
            fundraisersPerStatusUser: [],
            amount: '',
            request_id: '',
            story: '',
            status: "1",
            categoryID: '641080c58e4d970eaaff90c5',
            schema,
        }
    },
    apollo: {
    currentuser: {
        query: USER_QUERY
        },
    },
    methods: {
    async statusChange(status){
        this.status = status;        
        this.fundraisersPerStatusUser = []; 
        await this.$apollo.query({
            query: FUNDRAISER_USER_STATUS_QUERY,
            variables: {
                status: this.status,
            },
            fetchPolicy: 'network-only'
            }).then(response => {
                this.fundraisersPerStatusUser = response.data.fundraisersPerStatusUser
            })
    },
    addFundraiser(donation) {
    this.$apollo
        .mutate({
        mutation: CREATE_FUNDRAISER,
        variables: {
            amount: donation.amount,
            memberId: this.currentuser._id,
            story: donation.story,
            status: '1',
        }
        })
        .then(response => {
        // redirect user
        $('#verifyModalContent').modal('hide')
            this.$swal({
                title: 'Fundraiser added to cart sucessfully',
                position: 'top-end',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
            });
            this.$router.push("/product-cart");
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
    preview(request) {
        TokenService.setRequest(request);
        this.$router.push("/preview");
    },
    donationPercentage(amount, goal) {
        return (amount/goal)*100;
    },
    },
    async created(){    
        await this.statusChange("1");           
    }

}
</script>
  