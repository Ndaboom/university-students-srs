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
                <div class="card-line"></div>
                <div class="main-header">
                    <div class="column1">
                        <img class="un-logo" src="images/app-logo.png" />
                    </div>
                    <div class="middle-column">
                        <span class="title-bold secondary-color">REPUBLIC OF RWANDA</span><br>
                        <span class="title-bold">KIGALI INDEPENDENT UNIVERSITY</span><br>
                        <span class="title-bold">P.O BOX 243 Gisenyi</span>
                        <div class="middle-column-sub">
                            <span class="title-bold">Email:</span> <span>info@ulk.ac.rw</span> &nbsp; &nbsp; <span class="title-bold">website:</span> <span>www.ulk.ac.rw</span><br>
                            <span class="title-bold">Cell phone:</span> <span>0788303704     0788304137  0788304081</span>
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
                            <span class="title-bold secondary-color">Names :</span> <span class="title-bold">KAMBALE NDABO SAMMY</span><br>
                            <span class="title-bold secondary-color">School :</span><span class="title-bold">SCIENCE AND TECHNOLOGY</span><br>
                            <span class="title-bold secondary-color">Class/ Department :</span><span class="title-bold">Year 3 CSC/D</span><br>
                            <span class="title-bold secondary-color">Roll Number :</span> <span class="title-bold primary-color">201820078</span><br>
                            <span class="title-bold secondary-color">Tel :</span> <span class="title-bold">0973886132</span><br>
                            <span class="title-bold" style="padding-left: 95px;">Academic year : 2022 - 2023</span>
                        </div> 
                    </div>
                    <div class="main-body-footer">
                        <div class="footer-div1">
                            <span class="title-bold">ISHEMA Pierre</span><br>
                            <span class="title-bold">Director of Academics Affairs</span>
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