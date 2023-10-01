<template>
  <div class="content-body">
				<form @submit="addStudent" method="post" enctype="multipart/form-data">
    			<div class="container-fluid">
    				<div class="row">
    					<div class="col-xl-12">
    						<div class="card">
    							<div class="card-header">
    								<h5 class="mb-0">Student Details</h5>
    							</div>
    							<div class="card-body">
    								<div class="row">
    									<div class="col-xl-3 col-lg-4">
    										<label class="form-label text-primary">Photo<span class="required">*</span></label>
    										 <div class="avatar-upload">
    											<div class="avatar-preview">
    												<div id="imagePreview" style="background-image: url(images/no-img-avatar.png);"> 			
    												</div>
    											</div>
    											<div class="change-btn mt-2 mb-lg-0 mb-3">
    												<input type='file' class="form-control d-none"  id="imageUpload" v-on:change="handleFileChange" accept=".png, .jpg, .jpeg">
    												<label for="imageUpload" class="dlab-upload mb-0 btn btn-primary btn-sm">Choose File</label>
    												<a href="javascript:void" class="btn btn-danger light remove-img ms-2 btn-sm">Remove</a>
    											</div>
    										</div>	
    									</div>
    									<div class="col-xl-9 col-lg-8">
    										<div class="row">
    											<div class="col-xl-6 col-sm-6">
    												<div class="mb-3">
    												  <label for="exampleFormControlInput1" class="form-label text-primary">First Name<span class="required">*</span></label>
    												  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="James" v-model="form.studentFirstName">
    												</div>
    												<div class="mb-3">
    												  <label  class="form-label text-primary">Date & Place of Birth<span class="required">*</span></label>
    													<div class="d-flex">
    														<input type="date" class="form-control" placeholder="2017-06-04" id="datepicker" v-model="form.dateOfBirth">
    														<input type="text" class="form-control w-50 ms-3" id="exampleFormControlInput7" placeholder="Gisenyi" v-model="form.placeOfBirth">
    													</div>
    												</div>
    												<div class="mb-3">
    												  <label for="exampleFormControlInput3" class="form-label text-primary">Email<span class="required">*</span></label>
    												  <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="hello@example.com" v-model="form.studentEmail">
    												</div>
    												<div class="mb-3">
    												  <label for="exampleFormControlTextarea1" class="form-label text-primary">Address<span class="required">*</span></label>
    												  <textarea class="form-control" id="exampleFormControlTextarea1" v-model="form.studentAddress" rows="6"></textarea>
    												</div>
    											</div>
    											<div class="col-xl-6 col-sm-6">
    												<div class="mb-3">
    												  <label for="exampleFormControlInput4" class="form-label text-primary">Last Name<span class="required">*</span></label>
    												  <input type="text" class="form-control" id="exampleFormControlInput4" v-model="form.studentLastName" placeholder="Wally">
    												</div>
    												<div class="mb-3">
    												  <label for="exampleFormControlInput5" class="form-label text-primary">Parent Name<span class="required">*</span></label>
    												  <input type="text" class="form-control" id="exampleFormControlInput5" v-model="form.parentsName" placeholder="Mana William">
    												</div>
    												<div class="mb-3">
    												  <label for="exampleFormControlInput6" class="form-label text-primary">Phone Number<span class="required">*</span></label>
    												  <input type="text" v-model="form.studentPhoneNumber" class="form-control" id="exampleFormControlInput6" placeholder="+243973886132">
    												</div>
    											</div>
    										</div>
    									</div>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
                    <div class="col-xl-12">
    					<div class="card">
    						<div class="card-header">
    							<h5 class="mb-0">Academics Details</h5>
    						</div>
    						<div class="card-body">
    							<div class="row">
    								<div class="col-xl-6 col-sm-6">
    									<div class="mb-3">
    									  <label for="exampleFormControlInput8" class="form-label text-primary">Class<span class="required">*</span></label>
    									  <input type="text" class="form-control" id="exampleFormControlInput8" v-model="form.studentClass" placeholder="Y3 CSC/D">
    									</div>
    									<div class="mb-3">
    									  <label for="exampleFormControlInput9" class="form-label text-primary">Department<span class="required">*</span></label>
    									  <select class="form-control" v-model="form.studentDepartmentId" aria-label="Default select example">
	    								  <option selected>Select</option>
	    								  <option :value="department.id" v-for="department in departments" :key="department">{{ department.departmentName }}</option>
	    								</select>
    									</div>
    								</div>
								
    								<div class="col-xl-6 col-sm-6">
    									<div class="mb-3">
    									  <label for="exampleFormControlInput10" class="form-label text-primary">School<span class="required">*</span></label>
    									  <select class="form-control" v-model="form.studentSchoolId" aria-label="Default select example">
	    								  <option selected>Select</option>
	    								  <option :value="school.id" v-for="school in schools" :key="school">{{ school.schoolName }}</option>
	    								  </select>
    									</div>
    									
    								</div>
    							</div>
    							<div class="">
    								<button class="btn btn-outline-primary me-3">Save as Draft</button>
    								<button class="btn btn-primary" type="submit">Save</button>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
			</form>
    		</div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import { createToaster } from "@meforma/vue-toaster";
import { onMounted } from '@vue/runtime-core';
import axios from 'axios'

axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;

export default {
    name: "Add New Student",
	setup() {
		const toaster = createToaster({
			position: "top-right",
			pauseOnHover: "true",
			dismissible: "true"
		});

		const form = reactive({
			studentFirstName: "",
			studentLastName: "",
			dateOfBirth: "",
			placeOfBirth: "",
			parentsName: "",
			studentEmail: "",
			studentPhoneNumber: "",
			studentAddress: "",
			studentClass: "",
			studentSchoolId: "",
			studentDepartmentId: "",
			studentImage: null
		});

		// Create an Axios request configuration object
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data', // Specify the content type as 'multipart/form-data'
			},
		};

		const departments = ref([]);
		const schools = ref([]);

		function fetchDepartments() {
			axios
				.get('http://localhost:8080/departments').then(response => {
					if (response) {
						if (response.data.httpStatus == "OK") {
							departments.value = response.data.data
						} else {
							toaster.show(response.data.message, {
								type: "warning"
							});
						}
					}
				})
				.catch(error => {
					toaster.error(`Failed to fetch departments... - ${error}`, {
						type: "error",
					});
				})
				.finally(() => this.loading = false)
		}

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

		function handleFileChange(event) {
			form.studentImage = event.target.files[0];
			// console.log(form.studentImage);
		}

		function addStudent(e) {
			e.preventDefault()

			// const formData = new FormData();

			// Append form fields to the formData object
			// formData.append('studentFirstName', this.form.studentFirstName);
			// formData.append('studentLastName', this.form.studentLastName);
			// formData.append('dateOfBirth', this.form.dateOfBirth);
			// formData.append('placeOfBirth', this.form.placeOfBirth);
			// formData.append('parentsName', this.form.parentsName);
			// formData.append('studentEmail', this.form.studentEmail);
			// formData.append('studentPhoneNumber', this.form.studentPhoneNumber);
			// formData.append('studentAddress', this.form.studentAddress);
			// formData.append('studentClass', this.form.studentClass);
			// formData.append('studentSchoolId', this.form.studentSchoolId);
			// formData.append('studentDepartmentId', this.form.studentDepartmentId);
			// ...

			// Check if an image file is selected
			// if (this.form.studentImage) {
			// 	formData.append('studentImage', this.form.studentImage);
			// }
			
			axios
				.post('http://localhost:8080/students', form).then(response => {
					if (response) {
						if (response.data.httpStatus == "OK") {
							toaster.show(`Student registered successfully`, {
								type: "success"
							});
							form.studentFirstName = ""
							form.studentLastName = ""
							form.dateOfBirth = ""
							form.placeOfBirth = ""
							form.parentsName = ""
							form.studentEmail = ""
							form.studentPhoneNumber = ""
							form.studentAddress = ""
							form.studentClass = ""
							form.studentSchoolId = ""
							form.studentDepartmentId = ""
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
		}

		onMounted(() => {
			fetchDepartments()
			fetchSchools()
		});

		return {
			departments,
			schools,
			toaster,
			addStudent,
			handleFileChange,
			form
		}
	}
}
</script>

<style>

</style>