<template>
  <!-- Add Subcategory Modal -->
  <div class="modal fade" id="verifyModalContent" tabindex="-1" role="dialog" aria-labelledby="verifyModalContent"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="verifyModalContent_title">ADD INTEREST SUB-CATEGORY</h5>
          <button class="btn btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <Form @submit="addSubcategory" :validation-schema="schema" class="user">
          <div class="modal-body">
            <div class="form-group">
              <label class="col-form-label" for="name">Interest Sub-category:</label>
              <Field name="name" class="form-control" type="text" />
              <ErrorMessage name="name" class="text-danger p-3" />
            </div>
            <div class="form-group">
              <label class="col-form-label" for="category_id">Interest Category:</label>
              <Field name="category_id" class="form-control" v-model="category_id" as="select">
                <option value="" :selected="selected">--Select Category--</option>
                <option v-for="category in interestCategories" :value="category.category_id" :key="category.category_id">
                  {{ category.name.toUpperCase() }}
                </option>
              </Field>
              <ErrorMessage name="category_id" class="text-danger py-3 text-sm" />
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
  <!-- Edit Subcategory Modal -->
  <div class="modal fade" id="editModalContent" tabindex="-1" role="dialog" aria-labelledby="editModalContent"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editModalContent_title">EDIT INTEREST SUB-CATEGORY</h5>
          <button class="btn btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <Form @submit="editCountry" :validation-schema="schema" class="user">
          <div class="modal-body">
            <div class="form-group">
              <label class="col-form-label" for="name">Interest Sub-category:</label>
              <Field name="name" class="form-control" v-model="name" @input="remark = $event.target.value.toUpperCase()"
                type="text" />
              <ErrorMessage name="name" class="text-danger p-3" />
            </div>
            <div class="form-group">
              <label class="col-form-label" for="category_id">Interest Category:</label>
              <Field name="category_id" class="form-control" v-model="category_id" as="select">
                <option value="" :selected="selected">--Select category--</option>
                <option v-for="category in interestCategories" :value="category.category_id" :key="category.category_id">
                  {{ category.name.toUpperCase() }}
                </option>
              </Field>
              <ErrorMessage name="category_id" class="text-danger py-3 text-sm" />
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
        <button class="btn btn-info text-white ul-btn-raised--v2 m-1 text-white float-end" type="button"
          data-bs-toggle="modal" data-target="#verifyModalContent" data-whatever="@mdo">
          <i class="nav-icon i-add text-white fw-bold"></i> ADD INTEREST SUB-CATEGORY
        </button>
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
                    <ul class="nav nav-tabs nav-tabs-line nav-tabs-bold ul-widget-nav-tabs-line" role="tablist">
                      <li class="nav-item"><a class="nav-link active show" data-bs-toggle="tab"
                          href="#ul-widget5-tab1-content" @click="back()" aria-selected="true">BACK</a></li>
                    </ul>
                  </div>
                </div>
                <div class="ul-widget__body">
                  <div class="ul-widget1" v-for="(sub_category, index) in interestSubcategories"
                    v-bind:key="sub_category.subcategory_id">
                    <div class="ul-widget4__item ul-widget4__users">
                      <div class="ul-widget4__img"><img id="userDropdown" src="../../assets/images/faces/1.jpg" alt=""
                          data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" /></div>
                      <div class="ul-widget2__info ul-widget4__users-info"><a class="ul-widget2__title" href="#">{{
                        sub_category.name.toUpperCase() }}</a><span class="ul-widget2__username" href="#">{{
    sub_category.category.name.toUpperCase() }}</span></div><span
                        class="ul-widget4__number t-font-boldest text-success"><a class="text-info me-2"
                          @click="openEditSubcategory(sub_category)"><i class="nav-icon i-Pen-2 fw-bold"></i></a>
                        <a class="text-danger me-2" @click="deleteSubcategory(sub_category.subcategory_id)"><i
                            class="nav-icon i-Close-Window fw-bold"></i></a></span>
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
import { ALL_INTEREST_CATEGORIES_QUERY, ALL_INTEREST_SUBCATEGORIES_QUERY, ADD_INTEREST_SUBCATEGORY_MUTATION, EDIT_INTEREST_SUBCATEGORY_MUTATION, DELETE_INTEREST_SUBCATEGORY_MUTATION } from '@/graphql'
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
      interestCategories: [],
      interestSubcategories: [],
      interest: TokenService.getInterest(),
      subcategory: '',
      category_id: TokenService.getInterest().category_id,
      subcategory_id: "",
      schema
    }
  },
  apollo: {
    interestCategories: {
      query: ALL_INTEREST_CATEGORIES_QUERY
    },
    interestSubcategories: {
      query: ALL_INTEREST_SUBCATEGORIES_QUERY
    }
  },
  methods: {
    addSubcategory(subcategory) {
      this.$apollo
        .mutate({
          mutation: ADD_INTEREST_SUBCATEGORY_MUTATION,
          variables: {
            input: {
            name: subcategory.name,
            category_id: parseInt(subcategory.category_id),
            }
          }
        })
        .then(response => {
          $('#verifyModalContent').modal('hide')
          this.$swal({
            title: 'Sub-category added sucessfully',
            position: 'top-end',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          });
          this.$apollo.queries.InterestCategories.refetch()
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
    openEditSubcategory(subcategory) {
      this.name = subcategory.name
      this.category_id = subcategory.category.category_id
      this.subcategory_id = subcategory.category_id
      $('#editModalContent').modal('show')

    },
    editCountry(subcategory) {
      console.log(subcategory)
      this.$apollo
        .mutate({
          mutation: EDIT_INTEREST_SUBCATEGORY_MUTATION,
          variables: {
            subcategoryId: this.subcategory_id,
            input: {
              name: subcategory.subcategory,
              category_id: subcategory.category_id,
            }
          }
        })
        .then(response => {
          $('#editModalContent').modal('hide')
          this.$swal({
            title: 'Sub-category updated sucessfully',
            position: 'top-end',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          });
          this.$apollo.queries.InterestCategories.refetch()
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
            this.$router.push("/interest-categories");
        },
    deleteSubcategory(subcategory_id) {
      this.$swal({
        title: "Delete the Subcategory?",
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
              mutation: DELETE_INTEREST_SUBCATEGORY_MUTATION,
              subcategoryId: subcategory_id,
            })
            .then(response => {
              this.$swal({
                title: 'Subcategory deleated sucessfully',
                position: 'top-end',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
              });
              this.$apollo.queries.InterestCategories.refetch()
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
    async statusChange() {
      this.interestCategories = [];
      await this.$apollo
        .query({
          query: ALL_INTEREST_CATEGORIES_QUERY,
        })
        .then((response) => {
          this.interestCategories = response.data.interestCategories;
        })
        },

  },
  async created() {
        this.statusChange();
    }
}
</script>
    
   