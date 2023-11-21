<template>
  <div class="app-admin-wrap layout-horizontal-bar">
    <Sidebar />
    <Topbar />
    <div class="main-content-wrap d-flex flex-column">
      <div class="main-content">
        <Breadcrumbs />
        <div class="separator-breadcrumb border-top"></div>
        <div class="row text-center mb-4">
          <div class="col-md-12">
            <div class="row mb-4">
              <div class="col-lg-6 col-xl-6 mt-3">
                <div class="card">
                  <div class="card-body">
                    <div class="user-profile mb-4">
                      <div class="ul-widget-card__user-info">
                        <img class="profile-picture avatar-lg mb-2 mt-2"
                          src="https://cdn.pixabay.com/photo/2013/07/13/12/19/chocolate-159631_640.png" alt="" />

                      </div>
                      <div class="ul-widget-card--line text-center mt-2">
                        <RouterLink to="requests"><button class="btn btn-outline-gray-700 ul-btn-raised--v2 m-1"
                            type="button"> Product Request</button></RouterLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-xl-6 mt-3">
                <div class="card">
                  <div class="card-body">
                    <div class="user-profile mb-4">
                      <div class="ul-widget-card__user-info">
                        <img class="profile-picture avatar-lg mb-2"
                          src="https://cdn.pixabay.com/photo/2016/04/01/10/06/bay-1299772__480.png" alt="" />

                      </div>
                      <div class="ul-widget-card--line text-center  mt-2">
                        <RouterLink to="fundraise"><button class="btn btn-outline-gray-700 ul-btn-raised--v2 m-1"
                            type="button">
                            Fundraiser Requests</button></RouterLink>
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
  name: "Request",
  components: { Sidebar, Topbar, Footer, Breadcrumbs, Form, Field, ErrorMessage },

}
</script>
  