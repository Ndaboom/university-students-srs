<template>
    <div class="content-body">
        <div class="container-fluid">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0">School Details</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-xl-6 col-sm-6">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput9" class="form-label text-primary">School's
                                        name<span class="required">*</span></label>
                                    <input type="text" class="form-control" id="exampleFormControlInput9"
                                        placeholder="Science and technology">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea2" class="form-label text-primary">Short
                                        description<span class="required">*</span></label>
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
    </div>
</template>

<script>
export default {
    name: "Add New School"
}
</script>

<style></style>