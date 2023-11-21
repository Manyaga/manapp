<template>
  <section class="signup">
    <div class="container">
      <div class="signup-content">
        <div class="signup-form">
          <h2 class="form-title">Sign up</h2>
          <Form @submit="addUser" :validation-schema="schema" class="register-form">
            <div class="form-group">
              <label class="col-form-label" for="last_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
              <Field name="first_name" class="form-control" id="first_name" type="text" placeholder="first name" />
              <ErrorMessage name="first_name" class="text-danger p-3" />
            </div>
            <div class="form-group">
              <label class="col-form-label" for="last_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
              <Field name="last_name" class="form-control" id="last_name" type="text" placeholder="last name" />
              <ErrorMessage name="last_name" class="text-danger p-3" />
            </div>
            <div class="form-group">
              <label class="col-form-label" for="email"><i class="zmdi zmdi-email"></i></label>
              <Field name="email" class="form-control" id="email" type="text" placeholder="email" />
              <ErrorMessage name="email" class="text-danger p-3" />

            </div>
            <div class="form-group">
              <label class="col-form-label" for="phone_number"><i class="zmdi zmdi-phone"></i></label>
              <Field name="phone_number" class="form-control" id="phone_number" type="text" placeholder="phone number" />
              <ErrorMessage name="phone_number" class="text-danger p-3" />
            </div>
            <div class="form-group">
              <label class="col-form-label" for="country"><i class="zmdi zmdi-location"></i></label>
              <Field name="country" class="form-control form-control-lg" v-model="country" as="select">
                <option value="">-- Country--</option>
                <option v-for="country in countries" :value="country.country_id" :key="country.country_id">
                  {{ country.country_name }}
                </option>
              </Field>
              <ErrorMessage name="country" class="text-danger py-3 text-sm" />
            </div>
            <div class="form-group">
              <label class="col-form-label" for="password"><i class="zmdi zmdi-lock"></i></label>
              <Field name="password" class="form-control" id="password" type="password" />
              <ErrorMessage name="password" class="text-danger p-3" />

            </div>
            <div class="form-group">
              <label class="col-form-label" for="confirmpassword"><i class="zmdi zmdi-lock-outline"></i></label>
              <Field name="confirmpassword" class="form-control" id="confirmpassword" type="password" />
              <ErrorMessage name="confirmpassword" class="text-danger p-3" />
            </div>
            <div class="form-group form-button">
              <input type="submit" name="signup" id="signup" class="form-submit" value="Register" />
            </div>
          </form>
        </div>
        <div class="signup-image">
          <figure><img src="../../assets/images/signup-image.jpg" alt="sing up image"></figure>
          <a href="/login" class="signup-image-link">I am already member</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate"
import * as yup from "yup"
import { ALL_USER_GROUPS_QUERY, ALL_COUNTRIES_QUERY, ADD_USER_MUTATION } from '@/graphql'
export default {
  name: 'Login',
  components: {
    Form, Field, ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      first_name: yup
        .string()
        .required("first Name is required!"),
      second_name: yup
        .string()
        .required("Second Name is required!"),
      last_name: yup
        .string()
        .required("Last Name is required!"),
      email: yup
        .string()
        .required("Email is required!"),
      phone_number: yup
        .string()
        .required("Phone Number is required!"),
      country: yup
        .string()
        .required("Country is required!"),
      role: yup
        .string()
        .required("Role is required!"),
      password: yup
        .string()
        .required("password is required!"),
      confirmpassword: yup
        .string()
        .required("Password confirmation is required!"),
    });

    return {
      loading: false,
      register: false,
      message: "",
      schema,
      title: "",
      countries: [],

    };
  },
  apollo: {
    countries: {
      query: ALL_COUNTRIES_QUERY
    }
  },
  methods: {
    async addUser(user) {
      console.log(user)
      await this.$apollo
        .mutate({
          mutation: ADD_USER_MUTATION,
          variables: {
            createAcc: {
              zip_code: user.zip_code,
              street: user.street,
              second_name: user.second_name,
              user_group: 2,
              postal_code: user.postal_code,
              phone_number: user.phone_number,
              password: user.password,
              last_name: user.last_name,
              first_name: user.first_name,
              email: user.email,
              country: user.country,
              confirmpassword: user.confirmpassword,
            }
          }
        })
        .then(response => {
          $('#verifyModalContent').modal('hide')
          this.$swal({
            title: 'Account created successfully',
            position: 'top-end',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          });
          this.$router.push("/login")
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

<style  scoped src = "../../assets/css/style.css"></style>
<style  scoped src = "../../assets/fonts/material-icon/css/material-design-iconic-font.min.css"></style>