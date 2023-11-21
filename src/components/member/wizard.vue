<template>
<div class="app-admin-wrap layout-horizontal-bar">
    <Sidebar />
    <Topbar />
    <div class="main-content-wrap d-flex flex-column">
        <div class="main-content">
            <button class="btn btn-info text-white ul-btn-raised--v2 m-1  float-end" type="button" data-bs-toggle="modal"
                data-target="#verifyModalContent" data-whatever="@mdo">
                <i class="nav-icon i-add text-primary text-white fw-bold"></i> VIEW FUNDRAISERS REQUEST</button>
            <Breadcrumbs />
            <div class="separator-breadcrumb border-top"></div>
            <div class="row mb-3">
            <div class="col-12 col-lg-6 col-sm-12">
              <div class="input-group mb-3">
                <label class="input-group-text" for="theme_selector"
                  >Themes</label
                >
                <select
                  class="custom-select col-lg-6 col-sm-12"
                  id="theme_selector"
                  style="width: 80px"
                >
                  <option value="default">default</option>
                  <option value="arrows">arrows</option>
                  <option value="circles">circles</option>
                  <option value="dots">dots</option>
                </select>
              </div>
            </div>
            <div
              class="col-12 col-lg-6 col-sm-12 d-flex flex-column flex-sm-row align-items-center"
            >
              <span class="m-auto"></span>
              <label>External Buttons:</label>
              <div class="btn-group col-lg-6 col-sm-12 ps-sm-3" role="group">
                <button class="btn btn-secondary" id="prev-btn" type="button">
                  Go Previous
                </button>
                <button class="btn btn-secondary" id="next-btn" type="button">
                  Go Next
                </button>
                <button class="btn btn-danger" id="reset-btn" type="button">
                  Reset Wizard
                </button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <!--  SmartWizard html -->
              <div id="smartwizard">
                <ul>
                  <li>
                    <a href="#step-1"
                      >Step 1<br /><small>Tell us your story</small></a
                    >
                  </li>
                  <li>
                    <a href="#step-2"
                      >Step 2<br /><small>Initial Target</small></a
                    >
                  </li>
                  <li>
                    <a href="#step-3"
                      >Step 3<br /><small>Images</small></a
                    >
                  </li>
                  <li>
                    <a href="#step-4"
                      >Step 4<br /><small>Video</small></a
                    >
                  </li>
                </ul>
                <div>
                  <div id="step-1">
                    <h3 class="border-bottom border-gray pb-2">
                      Step 1 Story
                    </h3>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                  <div id="step-2">
                    <h3 class="border-bottom border-gray pb-2">
                      Step 2 Target
                    </h3>
                    <div>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </div>
                  </div>
                  <div id="step-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                  <div id="step-4">
                    <h3 class="border-bottom border-gray pb-2">
                      Step 4 Video
                    </h3>
                    <div class="card o-hidden">
                      <div class="card-header">My Details</div>
                      <div class="card-block p-0">
                        <table class="table">
                          <tbody>
                            <tr>
                              <th>Name:</th>
                              <td>Tim Smith</td>
                            </tr>
                            <tr>
                              <th>Email:</th>
                              <td>example@example.com</td>
                            </tr>
                          </tbody>
                        </table>
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
import {ADD_DONATIONREQUEST_MUTATION, USER_QUERY} from '@/graphql';
export default {
name: "Fundraiser",
components: { Sidebar, Topbar, Footer, Breadcrumbs, Form, Field, ErrorMessage },
data () {
    const schema = yup.object().shape({
    amount: yup
      .string()
      .required("Amount is required!"),
    productId: yup
    .string()
    .required("Product is required!"),
    shippingAddress: yup
    .string()
    .required("Address is required!"),
});
    return {
        amount: '',
        request_id: '',
        status: "1",
        categories: [],
        categoryID: '641080c58e4d970eaaff90c5',
        donationCode: '',
        memberId: '',
        productId: '',
        categoryId: '',
        shippingAddress: '',
        schema,
    }
},
apollo: {
currentuser: {
    query: USER_QUERY
    },
},
methods: {
addDonationRequest(donation) {
this.$apollo
    .mutate({
    mutation: ADD_DONATIONREQUEST_MUTATION,
    variables: {
        amount: donation.amount,
        memberId: this.currentuser._id,
        productId: donation.productId,
        categoryId: donation.categoryId,
        shippingAddress: donation.shippingAddress,
    }
    })
    .then(response => {
        this.$swal({
            title: 'Donation Request added sucessfully',
            position: 'top-end',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
        });
        this.$router.push("/my-fundraisers-requests");
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
    this.$router.push("/request-preview");
},
},
async created(){              
}

}
</script>
