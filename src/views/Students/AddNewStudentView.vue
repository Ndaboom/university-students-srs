<template>
  <div class="content-body">
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
    												<input type='file' class="form-control d-none"  id="imageUpload" accept=".png, .jpg, .jpeg">
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
    												  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="James">
    												</div>
    												<div class="mb-3">
    												  <label  class="form-label text-primary">Date & Place of Birth<span class="required">*</span></label>
    													<div class="d-flex">
    														<input type="text" class="form-control" placeholder="2017-06-04" id="datepicker">
    														<input type="text" class="form-control w-50 ms-3" id="exampleFormControlInput7" placeholder="Gisenyi">
    													</div>
    												</div>
    												<div class="mb-3">
    												  <label for="exampleFormControlInput3" class="form-label text-primary">Email<span class="required">*</span></label>
    												  <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="hello@example.com">
    												</div>
    												<div class="mb-3">
    												  <label for="exampleFormControlTextarea1" class="form-label text-primary">Address<span class="required">*</span></label>
    												  <textarea class="form-control" id="exampleFormControlTextarea1" rows="6">
													 
												  </textarea>
    												</div>
    											</div>
    											<div class="col-xl-6 col-sm-6">
    												<div class="mb-3">
    												  <label for="exampleFormControlInput4" class="form-label text-primary">Last Name<span class="required">*</span></label>
    												  <input type="text" class="form-control" id="exampleFormControlInput4" placeholder="Wally">
    												</div>
    												<div class="mb-3">
    												  <label for="exampleFormControlInput5" class="form-label text-primary">Parent Name<span class="required">*</span></label>
    												  <input type="text" class="form-control" id="exampleFormControlInput5" placeholder="Mana William">
    												</div>
    												<div class="mb-3">
    												  <label for="exampleFormControlInput6" class="form-label text-primary">Phone Number<span class="required">*</span></label>
    												  <input type="number" class="form-control" id="exampleFormControlInput6" placeholder="+243973886132">
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
    									  <input type="text" class="form-control" id="exampleFormControlInput8" placeholder="Y3 CSC/D">
    									</div>
    									<div class="mb-3">
    									  <label for="exampleFormControlInput9" class="form-label text-primary">Department<span class="required">*</span></label>
    									  <input type="text" class="form-control" id="exampleFormControlInput9" placeholder="Computer Science">
    									</div>
    									<div class="mb-3">
    									  <label for="exampleFormControlTextarea2" class="form-label text-primary">Address<span class="required">*</span></label>
    									  <textarea class="form-control" id="exampleFormControlTextarea2" rows="6">
										 
									  </textarea>
    									</div>
    								</div>
								
    								<div class="col-xl-6 col-sm-6">
    									<div class="mb-3">
    									  <label for="exampleFormControlInput10" class="form-label text-primary">School<span class="required">*</span></label>
    									  <input type="text" class="form-control" id="exampleFormControlInput10" placeholder="Science and technology">
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
    		</div>
</template>

<script>
export default {
    name: "Add New Student"
}
</script>

<style>

</style>