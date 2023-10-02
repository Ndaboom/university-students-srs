<script>
import { reactive } from '@vue/reactivity';
import { createToaster } from "@meforma/vue-toaster";
import axios from 'axios'

export default {
  name: "LoadingView",
  setup() {

    const form = reactive({
      username: "",
      password: "",
    });

    const toaster = createToaster({
      position: "top-right",
      pauseOnHover: "true",
      dismissible: "true"
    });

    function Login(e) {
      e.preventDefault()
      if (form.username.value == "" && form.password.value == "") {
          toaster.show(`Please fill all required fields`, {
          type: "error"
        })
      }else {
        //Axios request
        axios
          .post('http://localhost:8080/auth/generateToken', form)
          .then(response => {
            if (response) {
              if (response.data.httpStatus == "OK") {
                toaster.show(`Connection successful`, {
                  type: "success"
                });
                localStorage.setItem('token', response.data.data);
                window.location = "/home";
              } else {
                toaster.show(response.data.message, {
                  type: "warning"
                });
              }
            }
          })
          .catch(error => {
            toaster.error(`Incorrect credentials`, {
              type: "error",
            });
          })
          .finally(() => this.loading = false)
        //Axios request
        //window.location = "/home";
      }
    }

    return {
      Login,
      form,
      toaster
    }
  },
};
</script>

<template>
  <div class="authincation d-flex flex-column flex-lg-row flex-column-fluid">
  		<div class="login-aside text-center  d-flex flex-column flex-row-auto">
  			<div class="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
  				<div class="text-center mb-lg-4 mb-2 pt-5 logo">
  					<img src="images/app-logo.png" class="app-logo" alt="">
  				</div>
  				<h3 class="mb-2 text-white">Welcome back!</h3>
  				<p class="mb-4">Please sign in to continue with our<br>University Student Registration System</p>
  			</div>
  		</div>
  		<div class="container flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
  			<div class="d-flex justify-content-center h-100 align-items-center">
  				<div class="authincation-content style-2">
  					<div class="row no-gutters">
  						<div class="col-xl-12 tab-content">
  							<div id="sign-up" class="auth-form tab-pane fade show active  form-validation">
  								<form @submit="Login">
  									<div class="text-center mb-4">
  										<h3 class="text-center mb-2 text-black">Sign In</h3>
  										<span>Enter your username and password to sign in</span>
  									</div>
  								
  									<div class="mb-3">
  										<label for="exampleFormControlInput1" class="form-label mb-2 fs-13 label-color font-w500">Username</label>
  									  <input type="text" v-model="form.username" class="form-control" id="exampleFormControlInput1" placeholder="Username">
  									</div>
  									<div class="mb-3">
  										<label for="exampleFormControlInput1" class="form-label mb-2 fs-13 label-color font-w500">Password</label>
  									  <input type="password" v-model="form.password" class="form-control" id="exampleFormControlInput2" placeholder="Password">
  									</div>
  									<!-- <a href="javascript:void(0);" class="text-primary float-end mb-4">Forgot Password ?</a> -->
  									<button class="btn btn-block btn-primary" type="submit" :disabled="!form.username && !form.password">Sign In</button>
									
  								</form>
  								<!-- <div class="new-account mt-3 text-center">
  									<p class="font-w500">Already have an account? <a class="text-primary" href="#sign-in" data-toggle="tab">Sign in</a></p>
  								</div> -->
  							</div>
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>
</template>
