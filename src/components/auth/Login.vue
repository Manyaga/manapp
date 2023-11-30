<template>
  <div class="main">
    <section class="sign-in">
      <div class="container">
        <div class="signin-content">
          <div class="signin-image">
            <br />
            <figure>
              <img
                src="../../assets/images/wrist-watch.jpg"
                alt="sing up image"
              />
            </figure>
            <a href="/register" class="signup-image-link">Create an account</a>
          </div>

          <div class="signin-form">
            <span class="flex-grow-1"></span>
            <div class="d-flex align-items-center">
              <img class="logo" src="../../assets/login-logo.jpg" alt="" />
              <div>
                <h2 class="form-titlem-0">ManApp</h2>
              </div>
            </div>
            <h3 class="form-title">Welcome Back!</h3>
            <Form
              @submit="handleLogin"
              :validation-schema="schema"
              class="user"
            >
              <div class="form-group">
                <Field
                  name="email"
                  type="text"
                  class="form-control form-control-user"
                  placeholder="your-email@gmail.com"
                />
                <ErrorMessage name="email" class="text-danger p-3" />
              </div>
              <div class="form-group">
                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                <Field
                  name="password"
                  type="password"
                  class="form-control form-control-user"
                  placeholder="Password"
                />
                <ErrorMessage name="password" class="text-danger p-3" />
              </div>
              <div class="form-group">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  class="agree-term"
                />
                <label for="remember-me" class="label-agree-term"
                  ><span><span></span></span>Remember me</label
                >
              </div>
              <div class="form-group form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  class="form-submit"
                  value="Log in"
                />
              </div>
              <div
                v-if="message"
                class="alert alert-dismissible fade show alert-card alert-danger"
                role="alert"
              >
              <span style="font-weight: bold; font-size: 16px;">{{ message }}</span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- <div v-if="message" class="alert alert-dismissible fade show alert-card alert-danger" role="alert">
    {{ message }}
  </div> -->
</template>

<script>
import TokenService from "@/services/token.service";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import {
  LOGIN_MUTATION,
  CURRENTUSER_QUERY,
  ADD_USER_MUTATION,
} from "@/graphql";
export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      loading: false,
      register: false,
      message: "",
      schema,
      title: "",
      currentuser: [],
    };
  },
  methods: {
    async handleLogin(user) {
      await this.$apollo
        .mutate({
          mutation: LOGIN_MUTATION,
          variables: {
            username: user.email,
            password: user.password,
          },
        })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("token", response.data.login.token);
        })
        .catch((error) => {
          this.message = error.message;
        });
      await this.$apollo.query({
        query: CURRENTUSER_QUERY,
        fetchPolicy: 'network-only'
      }).then(response => {
        TokenService.setUser(response.data.currentUser);
      })
      
      // this.message = "We apologize, but we are currently unable to process your login. Kindly attempt to log in again later.";
      this.$router.push("/dashboard")
      // this.message = "We apologize, but we are currently unable to process your login. Kindly attempt to log in again later.";
    },
  },
};
</script>

<style scoped src="../../assets/css/style.css"></style>
<style scoped src="../../assets/fonts/icomoon/style.css"></style>
