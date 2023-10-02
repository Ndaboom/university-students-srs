<template>
    <div class="content-body">
        <div class="container-fluid">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0">Department Details</h5>
                    </div>
                    <form @submit="addDepartment">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-xl-6 col-sm-6">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput9" class="form-label text-primary">Department's name<span
                                            class="required">*</span></label>
                                    <input type="text" v-model="form.departmentName" class="form-control" id="exampleFormControlInput9"
                                        placeholder="Computer Science">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput8" class="form-label text-primary">Schools<span
                                            class="required">*</span></label>
                                    <select class="form-control" v-model="form.schoolId" aria-label="Default select example">
    								  <option selected>Select</option>
    								  <option :value="school.id" v-for="school in schools" :key="school">{{ school.schoolName }}</option>
    								</select>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea2" class="form-label text-primary">Short description<span
                                            class="required">*</span></label>
                                    <textarea class="form-control" id="exampleFormControlTextarea2" v-model="form.departmentDescription" rows="6"></textarea>
                                </div>
                            </div>
                    </div>
                    <div class="">
                        <button class="btn btn-outline-primary me-3">Save as Draft</button>
                        <button class="btn btn-primary" type="submit">Save</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
</div></template>

<script>
import { reactive, ref } from '@vue/reactivity';
import { createToaster } from "@meforma/vue-toaster";
import { onMounted } from '@vue/runtime-core';
import axios from 'axios'

axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;

export default {
    name: "Add New Department",
    setup(){
        const toaster = createToaster({
            position: "top-right",
            pauseOnHover: "true",
            dismissible: "true"
        });

        const form = reactive({
            departmentName: "",
            schoolId: "",
            departmentDescription: ""
        });

        let schools = ref([]);
        
        function fetchSchools() {
            axios
                .get('http://localhost:8080/schools').then(response => {
                    if (response) {
                        if (response.data.httpStatus == "OK") {
                            schools.value = response.data.data
                        } else {
                            toaster.show(response.data.message, {
                                type: "warning"
                            });
                        }
                    }
                })
                .catch(error => {
                    toaster.error(`Failed to fetch schools... - ${error}`, {
                        type: "error",
                    });
                })
                .finally(() => this.loading = false)
        }

        function addDepartment(e){
            e.preventDefault()
            if(form.departmentName != "" && form.departmentDescription != "" && form.schoolId != ""){
            axios
                .post('http://localhost:8080/departments', form).then(response => {
                    if (response) {
                        if (response.data.httpStatus == "OK") {
                            toaster.show(`Department created successfully`, {
                                type: "success"
                            });
                            form.departmentName = ''
                            form.departmentDescription = ''
                            //router.push("/departments")
                        } else {
                            toaster.show(response.data.message, {
                                type: "warning"
                            });
                        }
                    }
                })
                .catch(error => {
                    toaster.error(`Something went wrong, please try again... - ${error}`, {
                        type: "error",
                    });
                })
                .finally(() => this.loading = false)
            } else {
                toaster.error(`Please, fill in all the required fields`, {
                        type: "error",
                    });
            }
        }

        onMounted(() => {
            fetchSchools()
        });

        return {
            schools,
            toaster,
            addDepartment,
            form
        }
    }
}
</script>

<style></style>