<template>
  <div class="modal fade" id="studentCardPreview" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="student-card-ui">Student Card Preview</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="student-card">

            </div>
        </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-danger light" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Print</button>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "Student card"
}
</script>

<style scoped>
.modal-body {
    min-height: 250px;
}

.modal-footer {
    background-color: white;
}
</style>