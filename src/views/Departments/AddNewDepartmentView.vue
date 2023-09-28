<template>
    <div class="content-body">
        <div class="container-fluid">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0">Department Details</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-xl-6 col-sm-6">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput9" class="form-label text-primary">Department's name<span
                                            class="required">*</span></label>
                                    <input type="text" class="form-control" id="exampleFormControlInput9"
                                        placeholder="Computer Science">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput8" class="form-label text-primary">Schools<span
                                            class="required">*</span></label>
                                    <select class="form-control" aria-label="Default select example">
    								  <option selected>Select</option>
    								  <option value="1" v-for="school in schools" :key="school">{{ school.schoolName }}</option>
    								</select>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea2" class="form-label text-primary">Short description<span
                                            class="required">*</span></label>
                                    <textarea class="form-control" id="exampleFormControlTextarea2" rows="6">

									  </textarea>
                                </div>
                            </div>
                    </div>
                    <div class="">
                        <button class="btn btn-outline-primary me-3">Save as Draft</button>
                        <button class="btn btn-primary" type="button">Save</button>
                    </div>
                </div>
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

        onMounted(() => {
            fetchSchools()
        });

        return {
            schools,
            toaster
        }
    }
}
</script>

<style></style>