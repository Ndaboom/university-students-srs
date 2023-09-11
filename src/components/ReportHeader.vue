<template>
    <!-- Header -->
<div class="report_header">
    <div class="report_head">
        <div class="left">
        
        </div>
        <div class="middle">
            <img
            alt="logo lifti"
            src="@/images/lifti-logo.png"
            class="lifti-logo"
            />
            <h3>{{ report_name }}</h3>
        </div>
        <div class="right">
        
        </div>
    </div>
</div>
<!-- Header -->
</template>

<script>
export default {
    name: "ReportHeader",
    props: {
      report_name: String
    },
    setup() {
        
    },
}
</script>
<style scoped>
.report_header {
  width: 100%;
  height: 20%;
}
.report_head {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.left {
  width: 45%;
}
.left .left-side {
  height: 122px;
  padding: 7px;
  padding-left: 71px;
  padding-top: 20px;
}
.middle {
  padding-top: 20px;
  text-align: center;
  line-height: 7px;
}
.middle h4 {
  padding-bottom: 7px;
}
.middle h3 {
  padding-bottom: 7px;
}
.right {
  width: 30%;
}
.right .lifti-logo {
  height: 122px;
  padding: 7px;
  padding-left: 91px;
  padding-top: 20px;
}
.report_body {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 25px;
  padding-bottom: 20px;
}
.report_body .left {
  padding-left: 28px;
  width: 50%;
}
.report_body .left h3 {
  padding-bottom: 5px;
}
.report_body .right {
  width: 50%;
  padding-left: 269px;
}
.spaces {
  min-width: 55px;
}
.text-center {
  float: center;
  text-align: center;
}
</style>