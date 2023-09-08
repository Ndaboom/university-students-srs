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
  <div class="authincation h-100">
    <div class="container h-100">
      <div class="row justify-content-center h-100 align-items-center">
        <div class="col-md-6" id="login_box">
          <div class="authincation-content">
            <div class="row no-gutters">
              <div class="col-xl-12">
                <div class="auth-form">
                  <div class="text-center mb-3">
                    <a href="#"><img src="/images/app-logo.png" class="app-logo" alt=""></a>
                  </div>
                  <h4 class="text-center mb-4 text-black">Connectez-vous à votre compte</h4>
                  <form @submit="Login">
                    <div class="form-group">
                      <label class="mb-1 text-black"><strong>Nom d'utilisateur</strong></label>
                      <input type="text" v-model="form.username" class="form-control" placeholder="hello@example.com">
                    </div>
                    <div class="form-group">
                      <label class="mb-1 text-black"><strong>Mot de passe</strong></label>
                      <input type="password" v-model="form.password" class="form-control" placeholder="Mot de passe">
                    </div>
                    <div class="text-center">
                      <button type="submit" :disabled="!form.username && !form.password" class="btn text-white btn-block"
                        id="login_btn">Me connecter</button><br>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></template>
