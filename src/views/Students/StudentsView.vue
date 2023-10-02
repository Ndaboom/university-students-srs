<template>
  <div class="content-body">
                <!-- row -->
    			<div class="container-fluid">
    				<!-- Row -->
    				<div class="row">
    					<div class="col-xl-12">
    						<div class="row">
    							<div class="col-xl-12">
    								<div class="page-title flex-wrap">
    									<div class="input-group search-area mb-md-0 mb-3">
    										<input type="text" class="form-control" placeholder="Search here...">
    										<span class="input-group-text"><a href="javascript:void(0)">
    											<svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    												<path d="M17.5605 15.4395L13.7527 11.6317C14.5395 10.446 15 9.02625 15 7.5C15 3.3645 11.6355 0 7.5 0C3.3645 0 0 3.3645 0 7.5C0 11.6355 3.3645 15 7.5 15C9.02625 15 10.446 14.5395 11.6317 13.7527L15.4395 17.5605C16.0245 18.1462 16.9755 18.1462 17.5605 17.5605C18.1462 16.9747 18.1462 16.0252 17.5605 15.4395V15.4395ZM2.25 7.5C2.25 4.605 4.605 2.25 7.5 2.25C10.395 2.25 12.75 4.605 12.75 7.5C12.75 10.395 10.395 12.75 7.5 12.75C4.605 12.75 2.25 10.395 2.25 7.5V7.5Z" fill="#01A3FF"/>
    											</svg>
    										</a></span>
    									</div>
    									<div>
    										<select class="image-select bs-select dashboard-select me-3" aria-label="Default">
    											<option selected>Newest</option>
    											<option value="1">Oldest</option>
    											<option value="2">Recent</option>
    										</select>
    										<router-link to="/add-student" v-slot="{ navigate }">
    										<button type="button" class="btn btn-primary" @click="navigate">
    										 + New Student
    										</button>
                                            </router-link>
    									</div>
    								</div>
    							</div>
    							<!--column-->
    							<div class="col-xl-12 wow fadeInUp" data-wow-delay="1.5s">
    								<div class="table-responsive full-data">
    									<table class="table-responsive-lg table display dataTablesCard student-tab dataTable no-footer" id="example-student">
    										<thead>
    											<tr>
    												<th>
    													<input type="checkbox" class="form-check-input" id="checkAll" required="">
    												</th>
    												<th>Name</th>
    												<th>ID</th>
    												<th>Reg. Date</th>
    												<th>Parent Name</th>
    												<th>City</th>
    												<th>Grade</th>
    												<th class="text-end">Action</th>
    											</tr>
    										</thead>
    										<tbody>
    											<tr v-for="student in students" :key="student">
    												<td>
    													<div class="checkbox me-0 align-self-center">
    														<div class="custom-control custom-checkbox ">
    															<input type="checkbox" class="form-check-input" id="check8" required="">
    															<label class="custom-control-label" for="check8"></label>
    														</div>
    													</div>
    												</td>
    												<td>
    													<div class="trans-list">
    														<img src="images/no-img-avatar.png" alt="" class="avatar avatar-sm me-3">
    														<h4>{{ student.studentFirstName }} {{ student.studentLastName }}</h4>
    													</div>
    												</td>
    												<td><span class="text-primary font-w600">2023000{{ student.id }}</span></td>
    												<td>
    													<div class="date">{{ student.enrollmentDate }}</div>
    												</td>
    												<td><h6 class="mb-0">{{ student.parentsName }} </h6></td>
    												<td><h6 class="mb-0">{{ student.placeOfBirth }}</h6></td>
    												<td>
    													<div class="badge bg-warning">
    														{{ student.studentClass }}
    													</div>
    												</td>
    												<td>
    													<div class="dropdown custom-dropdown float-end">
    														<div class="btn sharp tp-btn " data-bs-toggle="dropdown">
    															<svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    																<path d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z" fill="#A098AE"/>
    															</svg>
    														</div>
    														<div class="dropdown-menu dropdown-menu-end">
    															<a class="dropdown-item" data-bs-toggle="modal" v-bind:data-bs-target="'#studentCardPreview'+student.id+''" href="javascript:void(0);">Generate Student Card</a>
    															<a class="dropdown-item" href="javascript:void(0);">Edit</a>
    															<a class="dropdown-item" href="javascript:void(0);">Delete</a>
    														</div>
    													</div>
    												</td>
													<!-- Modal -->

													<div class="modal fade" v-bind:id="'studentCardPreview'+student.id+''" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
													<div class="modal-dialog">
													<div class="modal-content">
														<div class="modal-header">
														<h1 class="modal-title fs-5 student-card-ui">Student Card Preview</h1>
														<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
														</div>
														<div class="modal-body">
															<div class="student-card" id="printMe">
																<div class="card-line"></div>
																<div class="main-header">
																	<div class="column1">
																		<img class="un-logo" src="images/app-logo.png" />
																	</div>
																	<div class="middle-column">
																		<span class="title-bold secondary-color">REPUBLIC OF RWANDA</span><br>
																		<span class="title-bold" style="color:black;">KIGALI INDEPENDENT UNIVERSITY</span><br>
																		<span class="title-bold" style="color:black;">P.O BOX 243 Gisenyi</span>
																		<div class="middle-column-sub">
																			<span class="title-bold" style="color:black;">Email:</span> <span style="color:black;">info@ulk.ac.rw</span> &nbsp; &nbsp; <span class="title-bold" style="color:black;">website:</span> <span style="color:black;">www.ulk.ac.rw</span><br>
																			<span class="title-bold" style="color:black;">Cell phone:</span> <span style="color:black;">0788303704     0788304137  0788304081</span>
																		</div>
																	</div>
																	<div class="column-1">
																		<img class="un-logo" src="images/app-logo.png" />
																	</div>
																</div>
																<div class="main-body">
																	<div class="main-body-title">
																		<span class="title-bold primary-color">STUDENT CARD</span>
																		<span class="title-bold primary-color">Undergraduate</span>
																	</div>
																	<div class="main-body-content">
																		<div class="main-body-content-column">
																			<img src="images/no-img-avatar.png" class="student-photo"/>
																		</div>
																		<div class="main-body-content-column" style="padding: 5px;">
																			<span class="title-bold secondary-color">Names :</span> <span class="title-bold" style="color:black;">{{ student.studentFirstName }} {{ student.studentLastName }}</span><br>
																			<span class="title-bold secondary-color">School :</span><span class="title-bold" style="color:black;">SCIENCE AND TECHNOLOGY</span><br>
																			<span class="title-bold secondary-color">Class/ Department :</span><span class="title-bold" style="color:black;">{{ student.studentClass }}</span><br>
																			<span class="title-bold secondary-color">Roll Number :</span> <span class="title-bold primary-color" style="color:black;">20232000{{ student.id }}</span><br>
																			<span class="title-bold secondary-color">Tel :</span> <span class="title-bold" style="color:black;">{{ student.studentPhoneNumber }}</span><br>
																			<span class="title-bold" style="padding-left: 95px;color:black;" >Academic year : 2022 - 2023</span>
																		</div> 
																	</div>
																	<div class="main-body-footer">
																		<div class="footer-div1">
																			<span class="title-bold" style="color:black;">ISHEMA Pierre</span><br>
																			<span class="title-bold" style="color:black;">Director of Academics Affairs</span>
																		</div>
																		<div class="footer-div2"> 
																			<img src="images/signature.jpg"/>
																		</div>
																		<div class="footer-div3"> 
																			<img src="images/bar-code.png"/>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="modal-footer">
														<button type="button" class="btn btn-danger light" data-bs-dismiss="modal">Close</button>
														<button type="button" class="btn btn-primary" v-print="'#printMe'">Print</button>
													</div>
													</div>
													</div>
													<!-- Modal -->
    											</tr>
    											
    										</tbody>
    									</table> 
    								</div>
    							</div>
    							<!--/column-->
    						</div>
    					</div>
    				</div>
					
    				<!--**********************************
					Footer start
				***********************************-->
    			</div>
    		</div>
	
</template>

<script>

import { ref } from '@vue/reactivity';
import { createToaster } from "@meforma/vue-toaster";
import { onMounted } from '@vue/runtime-core';
import axios from 'axios'

export default {
  name: "Students",
  setup(){
	const toaster = createToaster({
			position: "top-right",
			pauseOnHover: "true",
			dismissible: "true"
		});

		const students = ref([]);
		axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;

		function fetchStudents() {
			axios
				.get('http://localhost:8080/students').then(response => {
					if (response) {
						if (response.data.httpStatus == "OK") {
							toaster.show(`students fetched`, {
								type: "success"
							});
							students.value = response.data.data
						} else {
							toaster.show(response.data.message, {
								type: "warning"
							});
						}
					}
				})
				.catch(error => {
					toaster.error(`Failed to fetch students... - ${error}`, {
						type: "error",
					});
				})
				.finally(() => null)
		}

		async function print () {
        // Pass the element id here
        await VueHtmlToPaper('printMe');
    	}

		onMounted(() => {
			fetchStudents()
		});

	return {
		students,
		print
	}
  }
}
</script>
<style scoped>

.primary-color {
    color: #009f3c;
}

.secondary-color {
    color: #4D44B5;
}
.modal-body {
    min-height: 250px;
}

.modal-footer {
    background-color: white;
}

.student-card {
    background: #58c5aa !important;
    height: 200px;
    width: 301px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 2px;
}

.card-line {
    margin-top: 3px;
    margin-left: 8px;
    margin-right: 8px;
    background: black;
    height: 0.5px;
}

.main-header {
    display: flex;
    padding: 7px;
    line-height: 7px;
}

.column1 {
    width: 20%;
}

.middle-column {
    width: 80%;
    text-align: center;
}

.middle-column span {
    font-size: 7px;
}

.un-logo {
    height: 50px;
    width: 50px;
}

.title-bold {
    font-weight: bold;
}

.main-body {
    padding: 10px;
}

.main-body-title {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.main-body-title span:first-child {
    font-size: 10px;
    order: 1; /* This places the first span to the left */
}

.main-body-title span:last-child {
    font-size: 10px;
    order: 2; /* This places the second span to the right */
}

.main-body-content {
    display: flex;
    border: 0.5px solid black;
}

.main-body-content .main-body-column:first-child {
    width: 20%;
}

.main-body-content .main-body-column:nth-child(2) {
    /* widows: 80%; */
    padding:5px;
}

.main-body-content-column {
    font-size: 7px;
}

.student-photo {
    width: 70px;
    height: 78px;
}

.main-body-footer {
    display: flex;
    justify-content: space-between;
    font-size: 7px;
    border-bottom: 0.5px solid black;
}

.main-body-footer .footer-div1 {
    line-height: 8px;
}

.main-body-footer .footer-div2 img {
    height: 19px;
}

.main-body-footer .footer-div3 img {
    height: 19px;
}
</style>