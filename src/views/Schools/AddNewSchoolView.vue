<template>
    <div class="content-body">
        <div class="container-fluid">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0">School Details</h5>
                    </div>
                    <form @submit="addSchool">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-xl-6 col-sm-6">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput9" class="form-label text-primary">School's
                                        name<span class="required">*</span></label>
                                    <input type="text" v-model="form.schoolName" class="form-control" id="exampleFormControlInput9"
                                        placeholder="Science and technology">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea2" class="form-label text-primary">Short
                                        description<span class="required">*</span></label>
                                    <textarea class="form-control" v-model="form.schoolDescription" id="exampleFormControlTextarea2" rows="6">

									  </textarea>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <button class="btn btn-outline-primary me-3">Save as Draft</button>
                            <button class="btn btn-primary" type="submit" :disabled="!form.schoolName && !form.schoolDescription">Save</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { createToaster } from "@meforma/vue-toaster";
import { useRouter } from 'vue-router'
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export default {
    name: "Add New School",
    setup(){
        const form = reactive({
            schoolName: "",
            schoolDescription: "",
        });

        const toaster = createToaster({
            position: "top-right",
            pauseOnHover: "true",
            dismissible: "true"
        });

        const router = useRouter()

        function addSchool(e){
            e.preventDefault()
            
            if (form.schoolName.valueOf != "" && form.schoolDescription.valueOf != "") {
            axios
                .post('http://localhost:8080/schools', form).then(response => {
                    if (response) {
                        if (response.data.httpStatus == "OK") {
                            toaster.show(`School created successfully`, {
                                type: "success"
                            });
                            form.schoolName = ''
                            form.schoolDescription = ''
                            router.push("/schools")
                        } else {
                            toaster.show(response.data.message, {
                                type: "warning"
                            });
                        }
                    }
                })
                .catch(error => {
                    toaster.error(`Something went wrong please try again... - ${error}`, {
                        type: "error",
                    });
                })
                .finally(() => this.loading = false)
            }else{
                toaster.show(`Please fill all required fields`, {
                    type: "error"
                })
            }
        }

        return {
            addSchool,
            form,
            toaster
        }
    }
}
</script>

<style></style>