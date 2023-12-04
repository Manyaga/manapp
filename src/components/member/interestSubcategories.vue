<template>
  <div class="app-admin-wrap layout-horizontal-bar">
    <Sidebar />
    <Topbar />
    <div class="main-content-wrap d-flex flex-column">
      <div class="main-content">
        <router-link to="/my-interests"><button class="btn btn-info text-white ul-btn-raised--v2 m-1 text-white float-end" type="button">
          <i class="nav-icon i-File-Edit text-white fw-bold"></i> MY INTERESTS
        </button></router-link>
        <Breadcrumbs />
        <div class="separator-breadcrumb border-top"></div>
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="ul-widget__head pb-20 v-margin">
                  <div class="ul-widget__head-label">
                    <h3 class="ul-widget__head-title">INTEREST SUB-CATEGORIES FOR {{ interest.name.toUpperCase() }}</h3>
                  </div>
                  <div class="ul-widget__head-toolbar">
                    <!-- <button class="btn btn-outline-secondary m-1" @click="back()" type="button">BACK</button> -->
                    <i class="nav-icon me-2 i-left text-primary" @click="back()"></i>
                  </div>
                </div>
                <div class="ul-widget__body">
                  <div class="tab-pane active show">
                  <div class="ul-widget1">
                    <div class="ul-widget4__item ul-widget4__users" v-for="(sub_category, index) in interestSubcategories" v-bind:key="sub_category.subcategory_id">
                      <div class="ul-widget4__img"><img id="userDropdown" src="../../assets/images/like.png" alt="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" /></div>
                      <div class="ul-widget2__info ul-widget4__users-info"><a class="ul-widget2__title" href="#">{{sub_category.name.toUpperCase() }}</a><span class="ul-widget2__username text-primary" href="#">{{sub_category.category.name.toUpperCase() }}</span></div>
                      <div class="ul-widget4__actions"><button class="btn btn-outline-info m-1" @click="addUserInterest(sub_category.subcategory_id)" type="button">ADD</button></div>
                    </div>
                  </div>
                  <div v-if="interestSubcategories.length == 0" class="row">
                    <div class="user-profile mb-4">
                      <div class="ul-widget-card__user-info">
                        <img class="profile-picture avatar-lg mb-2 mt-2"
                          src="https://cdn.pixabay.com/photo/2015/10/31/12/00/question-1015308_1280.jpg" alt="" />

                      </div>
                      <div class="ul-widget-card--line text-center mt-2">
                        <a type="button" data-bs-toggle="modal" data-target="#verifyModalContent" data-whatever="@mdo">
                          No sub-categoy yet please add!</a>
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
import TokenService from "@/services/token.service";
import { Form, Field, ErrorMessage } from "vee-validate"
import * as yup from "yup"
import { ALL_INTEREST_SUBCATEGORIES_QUERY, ADD_USER_INTEREST_MUTATION} from '@/graphql'
export default {
  name: "Subcategory",
  components: { Sidebar, Topbar, Footer, Breadcrumbs, Form, Field, ErrorMessage },
  data() {
    const schema = yup.object().shape({
      name: yup
        .string()
        .required("Interest Sub-category name is required!"),
      category_id: yup
        .string("Interest Category is required!")
        .required("Interest Category  is required!"),
    });
    return {
      interestSubcategories: [],
      interest: TokenService.getInterest(),
      user: TokenService.getUser(),
      category_id: TokenService.getInterest().category_id,
      schema
    }
  },
  apollo: {
    interestSubcategories: {
      query: ALL_INTEREST_SUBCATEGORIES_QUERY
    }
  },
  methods: {
    addUserInterest(subcategory_id) {
      this.$apollo
        .mutate({
          mutation: ADD_USER_INTEREST_MUTATION,
          variables: {
            input: {
              user_id: parseInt(this.user.user_id),
              subcategory_id: parseInt(subcategory_id),
            }
          }
        })
        .then(response => {
          $('#verifyModalContent').modal('hide')
          this.$swal({
            title: 'User Interest added sucessfully',
            position: 'top-end',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          });
          this.$router.push("/my-interests")
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
    back() {
      TokenService.removeInterest();
      this.$router.push("/member-interests-categories");
    },

  }
}
</script>
    
   