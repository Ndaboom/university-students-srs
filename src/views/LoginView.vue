<script>
import { reactive } from '@vue/reactivity';
import { createToaster } from "@meforma/vue-toaster";
import { mapActions } from 'pinia';
import { authStore } from '@/stores/index';
import axios from 'axios';

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
      if (form.username.value != "" && form.password.value != "") {
        //Axios request
        // axios
        //   .post('client/login', form)
        //   .then(response => {
        //     if (response) {
        //       if (response.data.message == "Login successfull :)") {
        //         toaster.show(`Connecté avec success`, {
        //           type: "success"
        //         });
        //         localStorage.setItem('username', response.data.user.username);
        //         localStorage.setItem('user_category', response.data.user.user_category);
        //         localStorage.setItem('user_id', response.data.user.user_id);
        //         window.location = "/home";
        //       } else {
        //         toaster.show(response.data.message, {
        //           type: "warning"
        //         });
        //       }
        //     }
        //   })
        //   .catch(error => {
        //     console.log(error)
        //     toaster.error(`${error}`, {
        //       type: "error",
        //     });
        //   })
        //   .finally(() => this.loading = false)
        //Axios request
        window.location = "/home";
      } else {
        username,
          password,
          console.log("Please fill all required fields")
		toaster.show(`Veuiller remplir tous les champs`, {
		type: "error"
		})
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
  			<div class="aside-image position-relative" style="background-image:url(images/background/pic-2.png);">
  				<img class="img1 move-1" src="images/background/pic3.png" alt="">
  				<img class="img2 move-2" src="images/background/pic4.png" alt="">
  				<img class="img3 move-3" src="images/background/pic5.png" alt="">
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
  										<span>Your Social Campaigns</span>
  									</div>
  									<div class="row mb-4">
  										<div class="col-xl-6 col-6">
  											<a href="https://www.google.com/" class="btn btn-outline-light d-block social-bx">
  											<svg width="16" height="16" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  											<path d="M27.9851 14.2618C27.9851 13.1146 27.8899 12.2775 27.6837 11.4094H14.2788V16.5871H22.1472C21.9886 17.8738 21.132 19.8116 19.2283 21.1137L19.2016 21.287L23.44 24.4956L23.7336 24.5242C26.4304 22.0904 27.9851 18.5093 27.9851 14.2618Z" fill="#4285F4"/>
  											<path d="M14.279 27.904C18.1338 27.904 21.37 26.6637 23.7338 24.5245L19.2285 21.114C18.0228 21.9356 16.4047 22.5092 14.279 22.5092C10.5034 22.5092 7.29894 20.0754 6.15663 16.7114L5.9892 16.7253L1.58205 20.0583L1.52441 20.2149C3.87224 24.7725 8.69486 27.904 14.279 27.904Z" fill="#34A853"/>
  											<path d="M6.15656 16.7113C5.85516 15.8432 5.68072 14.913 5.68072 13.9519C5.68072 12.9907 5.85516 12.0606 6.14071 11.1925L6.13272 11.0076L1.67035 7.62109L1.52435 7.68896C0.556704 9.58024 0.00146484 11.7041 0.00146484 13.9519C0.00146484 16.1997 0.556704 18.3234 1.52435 20.2147L6.15656 16.7113Z" fill="#FBBC05"/>
  											<path d="M14.279 5.3947C16.9599 5.3947 18.7683 6.52635 19.7995 7.47204L23.8289 3.6275C21.3542 1.37969 18.1338 0 14.279 0C8.69485 0 3.87223 3.1314 1.52441 7.68899L6.14077 11.1925C7.29893 7.82856 10.5034 5.3947 14.279 5.3947Z" fill="#EB4335"/>
  											</svg>

  											<span class="ms-1 font-w600 label-color">Sign in with Google</span></a>
  										</div>
  										<div class="col-xl-6 col-6">
  											<a href="https://www.apple.com/" class="btn btn-outline-light d-block social-bx">
  											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 456.008 560.035"><path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"/></svg>
  											<span class="ms-1 font-w600 label-color">Sign in with Apple</span></a>
  										</div>
  									</div>
  									<div class="sepertor">
  										<span class="d-block mb-4 fs-13">Or with email</span>
  									</div>
  									<div class="mb-3">
  										<label for="exampleFormControlInput1" class="form-label mb-2 fs-13 label-color font-w500">Email address</label>
  									  <input type="text" v-model="form.username" class="form-control" id="exampleFormControlInput1" placeholder="hello@example.com">
  									</div>
  									<div class="mb-3">
  										<label for="exampleFormControlInput1" class="form-label mb-2 fs-13 label-color font-w500">Password</label>
  									  <input type="password" v-model="form.password" class="form-control" id="exampleFormControlInput2" placeholder="Password">
  									</div>
  									<a href="javascript:void(0);" class="text-primary float-end mb-4">Forgot Password ?</a>
  									<button class="btn btn-block btn-primary" type="submit" :disabled="!form.username && !form.password">Sign In</button>
									
  								</form>
  								<div class="new-account mt-3 text-center">
  									<p class="font-w500">Already have an account? <a class="text-primary" href="#sign-in" data-toggle="tab">Sign in</a></p>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>
</template>
