<script>
export default {
    name: "HeaderView",
    setup() {

        let username = localStorage.getItem('username');

		function logout(){
            localStorage.clear();
			window.location = "/";
		}
        
		return {
			logout,
            username
		}
    },
}
</script>
<template>
    <!--**********************************
            Header start
        ***********************************-->
    		<div class="header">
                <div class="header-content">
                    <nav class="navbar navbar-expand">
                        <div class="collapse navbar-collapse justify-content-between">
                            <div class="header-left">
    						<div class="dashboard_bar">
    							Dashboard
    						</div>
                            </div>
                            <ul class="navbar-nav header-right">
    						<li class="nav-item dropdown notification_dropdown all">
    							<a class="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
    								<svg height="24" class="svg-main-icon" viewBox="0 0 32 32" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><clipPath id="clip_1"><path id="artboard_1" clip-rule="evenodd" d="m0 0h32v32h-32z"/></clipPath><g id="select" clip-path="url(#clip_1)"><path id="Vector" d="m4.70222 7.16834-.12871-.2574c-.0593-.11861-.13904-.22136-.23922-.30824-.10018-.08689-.21317-.1513-.33898-.19323-.1258-.04194-.25484-.0582-.38711-.0488-.13228.0094-.25772.04375-.37633.10306-.24699.12349-.41414.31622-.50147.5782-.08732.26197-.06923.51645.05426.76344l1.32093 2.64183c.0593.1186.13904.2214.23922.3083.10018.0868.21317.1512.33898.1932.1258.0419.25484.0582.38711.0488.13228-.0094.25772-.0438.37633-.1031.01854-.0092.03678-.0191.05471-.0295s.03552-.0214.05277-.0329l5.99999-3.99995c.1104-.07356.2024-.16543.2762-.27561s.1237-.23029.1497-.36032c.026-.13004.0261-.2601.0004-.39019-.0257-.13008-.0754-.25029-.1489-.36063-.1532-.22977-.3652-.37173-.636-.42588-.2707-.05416-.521-.00465-.7508.14853l-1.94316 1.29545-3.1143 2.07619zm11.29778-1.16834c-.2761 0-.5118.09763-.7071.29289s-.2929.43097-.2929.70711.0976.51184.2929.70711c.1953.19526.431.29289.7071.29289h14c.2761 0 .5118-.09763.7071-.29289.1953-.19527.2929-.43097.2929-.70711s-.0976-.51185-.2929-.70711-.431-.29289-.7071-.29289zm-11.27691 9.1683-.12871-.2574c-.12349-.2469-.31622-.4141-.5782-.5014-.26197-.0874-.51645-.0693-.76344.0542-.11861.0593-.22135.1391-.30824.2393-.08688.1001-.15129.2131-.19323.3389-.04193.1258-.0582.2549-.0488.3871.0094.1323.04376.2578.10306.3764l1.32092 2.6418c.1235.247.31623.4142.5782.5015.26198.0873.51646.0692.76345-.0543.01854-.0092.03678-.0191.05471-.0295s.03552-.0214.05277-.0329l6.00002-3.9999c.2298-.1532.3717-.3652.4259-.636.0541-.2708.0046-.521-.1486-.7508-.1531-.2298-.3651-.3717-.6359-.4259-.2708-.0541-.521-.0046-.7508.1485l-5.05749 3.3717zm11.27691-.1683c-.2761 0-.5118.0976-.7071.2929s-.2929.431-.2929.7071.0976.5118.2929.7071.431.2929.7071.2929h14c.2761 0 .5118-.0976.7071-.2929s.2929-.431.2929-.7071-.0976-.5118-.2929-.7071-.431-.2929-.7071-.2929zm-11.27691 8.1683-.12871-.2574c-.12349-.247-.31622-.4141-.5782-.5014-.26197-.0874-.51645-.0693-.76344.0542-.11861.0593-.22135.1391-.30824.2393-.08688.1001-.15129.2131-.19323.3389-.04193.1258-.0582.2549-.0488.3871.0094.1323.04376.2578.10306.3764l1.32092 2.6418c.1235.247.31623.4142.5782.5015.26198.0873.51646.0692.76345-.0543.01854-.0092.03678-.0191.05471-.0295s.03552-.0214.05277-.0329l6.00002-4c.1103-.0735.2024-.1654.2762-.2756.0738-.1101.1237-.2303.1497-.3603s.0261-.2601.0004-.3902c-.0258-.1301-.0754-.2503-.149-.3606-.1531-.2298-.3651-.3717-.6359-.4259-.2708-.0541-.521-.0046-.7508.1485l-1.94319 1.2955-3.1143 2.0762zm11.27691.8317c-.2761 0-.5118.0976-.7071.2929s-.2929.431-.2929.7071.0976.5118.2929.7071.431.2929.7071.2929h14c.2761 0 .5118-.0976.7071-.2929s.2929-.431.2929-.7071-.0976-.5118-.2929-.7071-.431-.2929-.7071-.2929z" fill-rule="evenodd"/></g></svg>
    							</a>
    								<div class="dropdown-menu dropdown-menu-end p-0">
    									<div class="card mb-0">
    										<div class="card-header border-0 d-block h-auto">
    											<ul class="d-flex align-items-center justify-content-around">
    												<li class="nav-item dropdown notification_dropdown">
    												  <a class="nav-link  menu-wallet" href="javascript:void(0);">
    															<svg id="Layer_1" enable-background="new 0 0 512 512" height="18" viewBox="0 0 512 512" width="18" xmlns="http://www.w3.org/2000/svg"><g><path d="m174 240h-108c-36.393 0-66-29.607-66-66v-108c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zm-108-208c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34v-108c0-18.748-15.252-34-34-34z"/><path d="m446 240h-108c-36.393 0-66-29.607-66-66v-108c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zm-108-208c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34v-108c0-18.748-15.252-34-34-34z"/><path d="m392 512c-66.168 0-120-53.832-120-120s53.832-120 120-120 120 53.832 120 120-53.832 120-120 120zm0-208c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88z"/><path d="m174 512h-108c-36.393 0-66-29.607-66-66v-108c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zm-108-208c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34v-108c0-18.748-15.252-34-34-34z"/></g></svg>
    												  </a>
    												</li>
    												<li class="nav-item dropdown notification_dropdown">
    												  <a class="nav-link bell dz-theme-mode" href="javascript:void(0);">
    															<svg id="icon-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
    													<svg id="icon-dark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    												  </a>
    												</li>
    												<li class="nav-item dropdown notification_dropdown">
    												  <a class="nav-link bell dz-fullscreen"  href="javascript:void(0);">
    													 <svg id="icon-full" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" style="stroke-dasharray: 37, 57; stroke-dashoffset: 0;"></path></svg>
    													 <svg id="icon-minimize" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="A098AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minimize"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" style="stroke-dasharray: 37, 57; stroke-dashoffset: 0;"></path></svg>
    												  </a>
    												</li>
																
    											</ul>
    										</div>
    									</div>
    								</div>
    						    </li>
    							<li class="nav-item dropdown notification_dropdown search-area-header">
    								<a class="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
    									<svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    										<path d="M27.6 25.8L22 20.2C23.3 18.5 24.1 16.4 24.1 14.1C24.1 8.60001 19.6 4.10001 14.1 4.10001C8.6 4.10001 4 8.60001 4 14.1C4 19.6 8.5 24.1 14 24.1C16.3 24.1 18.5 23.3 20.2 21.9L25.8 27.5C26 27.7 26.4 27.9 26.7 27.9C27 27.9 27.3 27.8 27.6 27.5C28.1 27.1 28.1 26.3 27.6 25.8ZM6.5 14.1C6.5 10 9.9 6.60001 14 6.60001C18.1 6.60001 21.5 10 21.5 14.1C21.5 18.2 18.1 21.6 14 21.6C9.9 21.6 6.5 18.3 6.5 14.1Z" fill="#A098AE"/>
    									</svg>
								
    								</a>
    								<div class="dropdown-menu dropdown-menu-end p-0 rounded">
    									<div class="card mb-0">
    										<div class="card-body px-0">
    											<div class="px-3">
    												<div class="input-group search-area w-100">
    													<input type="text" class="form-control" placeholder="Search here...">
    													<span class="input-group-text"><a href="javascript:void(0)">
    														<svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    															<path d="M17.5605 15.4395L13.7527 11.6317C14.5395 10.446 15 9.02625 15 7.5C15 3.3645 11.6355 0 7.5 0C3.3645 0 0 3.3645 0 7.5C0 11.6355 3.3645 15 7.5 15C9.02625 15 10.446 14.5395 11.6317 13.7527L15.4395 17.5605C16.0245 18.1462 16.9755 18.1462 17.5605 17.5605C18.1462 16.9747 18.1462 16.0252 17.5605 15.4395V15.4395ZM2.25 7.5C2.25 4.605 4.605 2.25 7.5 2.25C10.395 2.25 12.75 4.605 12.75 7.5C12.75 10.395 10.395 12.75 7.5 12.75C4.605 12.75 2.25 10.395 2.25 7.5V7.5Z" fill="#01A3FF"></path>
    														</svg>
    													</a></span>
    												</div>
    													<h6 class="my-2 mt-3">Recently Searched:</h6>
    											</div>
    											<div class="dlab-scroll px-3 mt-3 height300">
    												<ul class="d-flex align-items-center mb-3">
    													<li>
    														<img src="images/avatar/1.jpg" class="avatar avatar-sm" alt="">
    														<a href="javascript:void(0);" class="ms-2">Benjamin</a>
														
    													</li>
    													<li class="ms-auto"><i class="fa-solid fa-trash"></i></li>
    												</ul>
    												<ul class="d-flex align-items-center mb-3">
    													<li>
    														<img src="images/avatar/2.jpg" class="avatar avatar-sm" alt="">
    														<a href="javascript:void(0);" class="ms-2">Oliver</a>
    													</li>
    													<li class="ms-auto"><i class="fa-solid fa-trash"></i></li>
    												</ul>
    												<ul class="d-flex align-items-center mb-3">
    													<li>
    														<img src="images/avatar/1.jpg" class="avatar avatar-sm" alt="">
    														<a href="javascript:void(0);" class="ms-2">Lucas</a>
														
    													</li>
    													<li class="ms-auto"><i class="fa-solid fa-trash"></i></li>
    												</ul>
    												<ul class="d-flex align-items-center mb-3">
    													<li>
    														<img src="images/avatar/2.jpg" class="avatar avatar-sm" alt="">
    														<a href="javascript:void(0);" class="ms-2">Benjamin</a>
														
    													</li>
    													<li class="ms-auto"><i class="fa-solid fa-trash"></i></li>
    												</ul>
    												<ul class="d-flex align-items-center mb-3">
    													<li>
    														<img src="images/avatar/4.jpg" class="avatar avatar-sm" alt="">
    														<a href="javascript:void(0);" class="ms-2">Benjamin</a>
														
    													</li>
    													<li class="ms-auto"><i class="fa-solid fa-trash"></i></li>
    												</ul>
    												<ul class="d-flex align-items-center mb-3">
    													<li>
    														<img src="images/avatar/3.jpg" class="avatar avatar-sm" alt="">
    														<a href="javascript:void(0);" class="ms-2">Benjamin</a>
														
    													</li>
    													<li class="ms-auto"><i class="fa-solid fa-trash"></i></li>
    												</ul>
    												<ul class="d-flex align-items-center mb-3">
    													<li>
    														<img src="images/avatar/2.jpg" class="avatar avatar-sm" alt="">
    														<a href="javascript:void(0);" class="ms-2">Benjamin</a>
														
    													</li>
    													<li class="ms-auto"><i class="fa-solid fa-trash"></i></li>
    												</ul>
    												<ul class="d-flex align-items-center mb-3">
    													<li>
    														<img src="images/avatar/1.jpg" class="avatar avatar-sm" alt="">
    														<a href="javascript:void(0);" class="ms-2">Benjamin</a>
														
    													</li>
    													<li class="ms-auto"><i class="fa-solid fa-trash"></i></li>
    												</ul>
    											</div>
    										</div>
    									</div>
    								</div>
    							</li>
    							<li class="nav-item dropdown notification_dropdown">
                                    <a class="nav-link  menu-wallet" href="javascript:void(0);">
    									<svg id="Layer_2" enable-background="new 0 0 512 512" height="18" viewBox="0 0 512 512" width="18" xmlns="http://www.w3.org/2000/svg"><g><path d="m174 240h-108c-36.393 0-66-29.607-66-66v-108c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zm-108-208c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34v-108c0-18.748-15.252-34-34-34z"/><path d="m446 240h-108c-36.393 0-66-29.607-66-66v-108c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zm-108-208c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34v-108c0-18.748-15.252-34-34-34z"/><path d="m392 512c-66.168 0-120-53.832-120-120s53.832-120 120-120 120 53.832 120 120-53.832 120-120 120zm0-208c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88z"/><path d="m174 512h-108c-36.393 0-66-29.607-66-66v-108c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zm-108-208c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34v-108c0-18.748-15.252-34-34-34z"/></g></svg>
                                    </a>
    							</li>
    							<li class="nav-item dropdown notification_dropdown">
                                    <a class="nav-link bell dz-theme-mode" href="javascript:void(0);">
    									<i id="icon-light-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></i>
                                        <i id="icon-dark-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></i>
                                    </a>
    							</li>
    							<li class="nav-item dropdown notification_dropdown">
                                    <a class="nav-link bell dz-fullscreen"  href="javascript:void(0);">
                                        <svg id="icon-full-1" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" style="stroke-dasharray: 37, 57; stroke-dashoffset: 0;"></path></svg>
                                        <svg id="icon-minimize-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="A098AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minimize"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" style="stroke-dasharray: 37, 57; stroke-dashoffset: 0;"></path></svg>
                                    </a>
    							</li>
							
    							<li class="nav-item dropdown notification_dropdown">
                                    <a class="nav-link bell-link" href="javascript:void(0);">
    									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A098AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>						
                                    </a>
    							</li>		
    							<li class="nav-item bell-icon blink dropdown notification_dropdown">
                                    <a class="nav-link  " href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
    							<svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    								<path d="M25.3677 18.9391V9.86768C25.3677 4.70215 21.1655 0.5 16 0.5C10.8345 0.5 6.63232 4.70215 6.63232 9.86768V18.9397C4.96704 19.4224 3.73828 20.9544 3.73828 22.8374C3.73828 25.0386 5.5293 26.8296 7.73096 26.8296H11.377V26.877C11.377 29.4263 13.4507 31.5 16 31.5C18.5493 31.5 20.6231 29.4263 20.6231 26.8769V26.8296H24.2691C26.4707 26.8296 28.2617 25.0386 28.2617 22.7583C28.2617 20.9406 27.033 19.4198 25.3677 18.9391ZM9.63232 9.86768C9.63232 6.35645 12.4888 3.5 16 3.5C19.5112 3.5 22.3677 6.35645 22.3677 9.86768V18.7661H9.63232V9.86768ZM17.6231 26.8769C17.6231 27.772 16.895 28.5 16 28.5C15.105 28.5 14.377 27.772 14.377 26.8769V26.8296H17.623V26.8769H17.6231ZM24.269 23.8296H7.73096C7.1836 23.8296 6.73828 23.3843 6.73828 22.7583C6.73828 22.2114 7.18359 21.7661 7.73096 21.7661H24.2691C24.8164 21.7661 25.2617 22.2114 25.2617 22.8374C25.2617 23.3843 24.8164 23.8296 24.269 23.8296Z" fill="#A098AE"/>
    								</svg>		
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end of-visible">
    									<div class="dropdown-header">
    										<h4 class="title mb-0">Notification</h4>
    										<a href="javascript:void(0);" class="d-none"><i class="flaticon-381-settings-6"></i></a>
    									</div>
                                        <div id="DZ_W_Notification1" class="widget-media dlab-scroll p-3" style="height:380px;">
    										<ul class="timeline">
    											<li>
    												<div class="timeline-panel">
    													<div class="media me-2">
    														<img alt="image" width="50" src="images/avatar/1.jpg">
    													</div>
    													<div class="media-body">
    														<h6 class="mb-1">Dr sultads Send you Photo</h6>
    														<small class="d-block">29 July 2020 - 02:26 PM</small>
    													</div>
    												</div>
    											</li>
    											<li>
    												<div class="timeline-panel">
    													<div class="media me-2 media-info">
    														KG
    													</div>
    													<div class="media-body">
    														<h6 class="mb-1">Resport created successfully</h6>
    														<small class="d-block">29 July 2020 - 02:26 PM</small>
    													</div>
    												</div>
    											</li>
    											<li>
    												<div class="timeline-panel">
    													<div class="media me-2 media-success">
    														<i class="fa fa-home"></i>
    													</div>
    													<div class="media-body">
    														<h6 class="mb-1">Reminder : Treatment Time!</h6>
    														<small class="d-block">29 July 2020 - 02:26 PM</small>
    													</div>
    												</div>
    											</li>
    											 <li>
    												<div class="timeline-panel">
    													<div class="media me-2">
    														<img alt="image" width="50" src="images/avatar/1.jpg">
    													</div>
    													<div class="media-body">
    														<h6 class="mb-1">Dr sultads Send you Photo</h6>
    														<small class="d-block">29 July 2020 - 02:26 PM</small>
    													</div>
    												</div>
    											</li>
    											<li>
    												<div class="timeline-panel">
    													<div class="media me-2 media-danger">
    														KG
    													</div>
    													<div class="media-body">
    														<h6 class="mb-1">Resport created successfully</h6>
    														<small class="d-block">29 July 2020 - 02:26 PM</small>
    													</div>
    												</div>
    											</li>
    											<li>
    												<div class="timeline-panel">
    													<div class="media me-2 media-primary">
    														<i class="fa fa-home"></i>
    													</div>
    													<div class="media-body">
    														<h6 class="mb-1">Reminder : Treatment Time!</h6>
    														<small class="d-block">29 July 2020 - 02:26 PM</small>
    													</div>
    												</div>
    											</li>
    										</ul>
    									</div>
                                        <a class="all-notification" href="javascript:void(0);">See all notifications <i class="ti-arrow-end"></i></a>
                                    </div>
                                </li>
							
    							<li class="nav-item dropdown notification_dropdown">
                                    <a class="nav-link me-0 " href="javascript:void(0);" data-bs-toggle="dropdown">
    									<svg width="20" class="setting-svg" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    										<path d="M12.2631 2.66667L11.4167 6.46615C10.9353 6.69779 10.4752 6.96458 10.0339 7.26563L6.32035 6.09636L2.58337 12.5703L5.39848 15.1484C5.28849 15.9648 5.33831 16.3672 5.39848 16.8516L2.58337 19.4297L6.32035 25.9037L10.0339 24.7344C10.4752 25.0354 10.9353 25.3022 11.4167 25.5339L12.2631 29.3333H19.737L20.5834 25.5339C21.0647 25.3022 21.5249 25.0354 21.9662 24.7344L25.6797 25.9037L29.4167 19.4297L26.6016 16.8516C26.6246 16.5682 26.6664 16.2845 26.6667 16C26.6678 15.7069 26.6216 15.4108 26.6016 15.1484L29.4167 12.5703L25.6797 6.09636L21.9662 7.26563C21.5249 6.96458 21.0647 6.69779 20.5834 6.46615L19.737 2.66667H12.2631ZM14.4037 5.33334H17.5964L18.2552 8.29167L18.9167 8.55209C19.6649 8.84512 20.3644 9.24846 20.9922 9.75001L21.5495 10.1927L24.4401 9.28386L26.0365 12.0495L23.8021 14.099L23.9089 14.8021C24.0346 15.5797 24.0101 16.4746 23.9089 17.1979L23.8021 17.901L26.0365 19.9505L24.4401 22.7162L21.5495 21.8073L20.9922 22.25C20.3644 22.7516 19.6649 23.1549 18.9167 23.4479L18.2552 23.7083L17.5964 26.6667H14.4037L13.7448 23.7083L13.0834 23.4479C12.3351 23.1549 11.6357 22.7516 11.0079 22.25L10.4506 21.8073L7.55994 22.7162L5.96358 19.9505L8.19796 17.901L8.09119 17.1979C7.96095 16.4046 7.98095 15.4967 8.09119 14.8021L8.19796 14.099L5.96358 12.0495L7.55994 9.28386L10.4506 10.1927L11.0079 9.75001C11.6357 9.24846 12.3351 8.84512 13.0834 8.55209L13.7448 8.29167L14.4037 5.33334ZM16 10.6667C13.0703 10.6667 10.6667 13.0703 10.6667 16C10.6667 18.9297 13.0703 21.3333 16 21.3333C18.9298 21.3333 21.3334 18.9297 21.3334 16C21.3334 13.0703 18.9298 10.6667 16 10.6667ZM16 13.3333C17.4886 13.3333 18.6667 14.5115 18.6667 16C18.6667 17.4886 17.4886 18.6667 16 18.6667C14.5115 18.6667 13.3334 17.4886 13.3334 16C13.3334 14.5115 14.5115 13.3333 16 13.3333Z" fill="#A098AE"/>
    									</svg>

                                    </a>
    								<div class="dropdown-menu dropdown-menu-end">
    									<div id="DZ_W_TimeLine02" class="widget-timeline dlab-scroll style-1 p-3 height370">
    										<ul class="timeline">
    											<li>
    												<div class="timeline-badge primary"></div>
    												<a class="timeline-panel text-muted" href="javascript:void(0);">
    													<span>10 minutes ago</span>
    													<h6 class="mb-0">Youtube, a video-sharing website, goes live <strong class="text-primary">$500</strong>.</h6>
    												</a>
    											</li>
    											<li>
    												<div class="timeline-badge info">
    												</div>
    												<a class="timeline-panel text-muted" href="javascript:void(0);">
    													<span>20 minutes ago</span>
    													<h6 class="mb-0">New order placed <strong class="text-info">#XF-2356.</strong></h6>
    													<p class="mb-0">Quisque a consequat ante Sit amet magna at volutapt...</p>
    												</a>
    											</li>
    											<li>
    												<div class="timeline-badge danger">
    												</div>
    												<a class="timeline-panel text-muted" href="javascript:void(0);">
    													<span>30 minutes ago</span>
    													<h6 class="mb-0">john just buy your product <strong class="text-warning">Sell $250</strong></h6>
    												</a>
    											</li>
    											<li>
    												<div class="timeline-badge success">
    												</div>
    												<a class="timeline-panel text-muted" href="javascript:void(0);">
    													<span>15 minutes ago</span>
    													<h6 class="mb-0">StumbleUpon is acquired by eBay. </h6>
    												</a>
    											</li>
    											<li>
    												<div class="timeline-badge warning">
    												</div>
    												<a class="timeline-panel text-muted" href="javascript:void(0);">
    													<span>20 minutes ago</span>
    													<h6 class="mb-0">Mashable, a news website and blog, goes live.</h6>
    												</a>
    											</li>
    											<li>
    												<div class="timeline-badge dark">
    												</div>
    												<a class="timeline-panel text-muted" href="javascript:void(0);">
    													<span>20 minutes ago</span>
    													<h6 class="mb-0">Mashable, a news website and blog, goes live.</h6>
    												</a>
    											</li>
    										</ul>
    									</div>
    								</div>
    							</li>
    							<li class="nav-item">
    								<div class="dropdown header-profile2">
    									<a class="nav-link ms-0" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    										<div class="header-info2 d-flex align-items-center">
    											<div class="d-flex align-items-center sidebar-info">
												
    											</div>
    											<img src="images/user.jpg" alt="">
    										</div>
    									</a>
    									<div class="dropdown-menu dropdown-menu-end pb-0" style="">
    										<div class="card mb-0">
    											<div class="card-header p-3">
    												<ul class="d-flex align-items-center">
    													<li>
    														<img src="images/user.jpg" class="ms-0" alt="">
    													</li>
    													<li class="ms-2">
    														<h4 class="mb-0">{{ username }}</h4>
    														<span>Admin</span>
    													</li>
    												</ul>

    											</div>
    											<div class="card-body p-3">
    												<a href="app-profile.html" class="dropdown-item ai-icon ">
    													<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
    														<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    															<polygon points="0 0 24 0 24 24 0 24"/>
    															<path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>
    															<path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="var(--primary)" fill-rule="nonzero"/>
    														</g>
    													</svg>
    													<span class="ms-2">Profile </span>
    												</a>
    												<a href="chat.html" class="dropdown-item ai-icon ">
    													<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
    														<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    															<rect x="0" y="0" width="24" height="24"/>
    															<path d="M21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L5,18 C3.34314575,18 2,16.6568542 2,15 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 Z M6.16794971,10.5547002 C7.67758127,12.8191475 9.64566871,14 12,14 C14.3543313,14 16.3224187,12.8191475 17.8320503,10.5547002 C18.1384028,10.0951715 18.0142289,9.47430216 17.5547002,9.16794971 C17.0951715,8.86159725 16.4743022,8.98577112 16.1679497,9.4452998 C15.0109146,11.1808525 13.6456687,12 12,12 C10.3543313,12 8.9890854,11.1808525 7.83205029,9.4452998 C7.52569784,8.98577112 6.90482849,8.86159725 6.4452998,9.16794971 C5.98577112,9.47430216 5.86159725,10.0951715 6.16794971,10.5547002 Z" fill="var(--primary)"/>
    														</g>
    													</svg>
    													<span class="ms-2">Message </span>
    												</a>
    												<a href="email-inbox.html" class="dropdown-item ai-icon ">
    													<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
    														<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    															<rect x="0" y="0" width="24" height="24"/>
    															<path d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z" fill="#000000"/>
    															<circle fill="var(--primary)" opacity="0.3" cx="19.5" cy="17.5" r="2.5"/>
    														</g>
    													</svg>
    													<span class="ms-2">Notification </span>
    												</a>
    												<a href="javascript:void(0);" class="dropdown-item ai-icon ">
    													<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
    														<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    															<rect x="0" y="0" width="24" height="24"/>
    															<path d="M18.6225,9.75 L18.75,9.75 C19.9926407,9.75 21,10.7573593 21,12 C21,13.2426407 19.9926407,14.25 18.75,14.25 L18.6854912,14.249994 C18.4911876,14.250769 18.3158978,14.366855 18.2393549,14.5454486 C18.1556809,14.7351461 18.1942911,14.948087 18.3278301,15.0846699 L18.372535,15.129375 C18.7950334,15.5514036 19.03243,16.1240792 19.03243,16.72125 C19.03243,17.3184208 18.7950334,17.8910964 18.373125,18.312535 C17.9510964,18.7350334 17.3784208,18.97243 16.78125,18.97243 C16.1840792,18.97243 15.6114036,18.7350334 15.1896699,18.3128301 L15.1505513,18.2736469 C15.008087,18.1342911 14.7951461,18.0956809 14.6054486,18.1793549 C14.426855,18.2558978 14.310769,18.4311876 14.31,18.6225 L14.31,18.75 C14.31,19.9926407 13.3026407,21 12.06,21 C10.8173593,21 9.81,19.9926407 9.81,18.75 C9.80552409,18.4999185 9.67898539,18.3229986 9.44717599,18.2361469 C9.26485393,18.1556809 9.05191298,18.1942911 8.91533009,18.3278301 L8.870625,18.372535 C8.44859642,18.7950334 7.87592081,19.03243 7.27875,19.03243 C6.68157919,19.03243 6.10890358,18.7950334 5.68746499,18.373125 C5.26496665,17.9510964 5.02757002,17.3784208 5.02757002,16.78125 C5.02757002,16.1840792 5.26496665,15.6114036 5.68716991,15.1896699 L5.72635306,15.1505513 C5.86570889,15.008087 5.90431906,14.7951461 5.82064513,14.6054486 C5.74410223,14.426855 5.56881236,14.310769 5.3775,14.31 L5.25,14.31 C4.00735931,14.31 3,13.3026407 3,12.06 C3,10.8173593 4.00735931,9.81 5.25,9.81 C5.50008154,9.80552409 5.67700139,9.67898539 5.76385306,9.44717599 C5.84431906,9.26485393 5.80570889,9.05191298 5.67216991,8.91533009 L5.62746499,8.870625 C5.20496665,8.44859642 4.96757002,7.87592081 4.96757002,7.27875 C4.96757002,6.68157919 5.20496665,6.10890358 5.626875,5.68746499 C6.04890358,5.26496665 6.62157919,5.02757002 7.21875,5.02757002 C7.81592081,5.02757002 8.38859642,5.26496665 8.81033009,5.68716991 L8.84944872,5.72635306 C8.99191298,5.86570889 9.20485393,5.90431906 9.38717599,5.82385306 L9.49484664,5.80114977 C9.65041313,5.71688974 9.7492905,5.55401473 9.75,5.3775 L9.75,5.25 C9.75,4.00735931 10.7573593,3 12,3 C13.2426407,3 14.25,4.00735931 14.25,5.25 L14.249994,5.31450877 C14.250769,5.50881236 14.366855,5.68410223 14.552824,5.76385306 C14.7351461,5.84431906 14.948087,5.80570889 15.0846699,5.67216991 L15.129375,5.62746499 C15.5514036,5.20496665 16.1240792,4.96757002 16.72125,4.96757002 C17.3184208,4.96757002 17.8910964,5.20496665 18.312535,5.626875 C18.7350334,6.04890358 18.97243,6.62157919 18.97243,7.21875 C18.97243,7.81592081 18.7350334,8.38859642 18.3128301,8.81033009 L18.2736469,8.84944872 C18.1342911,8.99191298 18.0956809,9.20485393 18.1761469,9.38717599 L18.1988502,9.49484664 C18.2831103,9.65041313 18.4459853,9.7492905 18.6225,9.75 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>
    															<path d="M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>
    														</g>
    													</svg>
    													<span class="ms-2">Settings </span>
    												</a>

    											</div>
    											<div class="card-footer text-center p-3">
    												<a href="#" @click="logout" class="dropdown-item ai-icon btn btn-primary light">
    													<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
    													<span class="ms-2 text-primary">Logout </span>
    												</a>
    											</div>
    										</div>
    									</div>
    								</div>
    							</li>
                            </ul>
                        </div>
    				</nav>
    			</div>
			
    		</div>
    		<!--**********************************
            Header end ti-comment-alt
        ***********************************-->
</template>