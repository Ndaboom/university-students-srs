<template>
  <!--****
		Wallet Sidebar
		****-->
    		<div class="wallet-bar wow fadeInRight dlab-scroll active" id="wallet-bar" data-wow-delay="0.7s">		
    			<div class="row ">
    				<!--column-->
    				<div class="col-xl-12">
    					<div class="card bg-transparent mb-1">
    						<div class="card-header border-0 px-3">
    							<div>
    								<h2 class="heading mb-0">Recent Students</h2>
    								<span>You have <span class="font-w600">456</span> Students</span>
    							</div>
    							<div >
    								<a href="#" class="add icon-box bg-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    									<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    										<path d="M5.188 13.412V8.512H0.428V5.348H5.188V0.531999H8.352V5.348H13.14V8.512H8.352V13.412H5.188Z" fill="white"/>
    									</svg>
    								</a>									
    							</div>	
    						</div>
    						<div class="card-body height450 dlab-scroll loadmore-content recent-activity-wrapper p-3 pt-2" id="RecentActivityContent">
    							<!--student-->
    							<div class="d-flex align-items-center student">
    								<span class="dz-media">
    									<img src="images/profile/small/pic1.jpg" alt="" width="50" class="avatar">
    								</span>
    								<div class="user-info">
    									<h6 class="name"><a href="app-profile.html">Samantha William</a></h6>
    									<span class="fs-14 font-w400 text-wrap">Class VII A</span>
    								</div>
    								<div class="icon-box st-box ms-auto">
    									<a href="#">
    										<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    										<path d="M19 0.000114441H3C2.20435 0.000114441 1.44129 0.316185 0.878679 0.878794C0.31607 1.4414 0 2.20446 0 3.00011V13.0001C0 13.7958 0.31607 14.5588 0.878679 15.1214C1.44129 15.684 2.20435 16.0001 3 16.0001H19C19.7956 16.0001 20.5587 15.684 21.1213 15.1214C21.6839 14.5588 22 13.7958 22 13.0001V3.00011C22 2.20446 21.6839 1.4414 21.1213 0.878794C20.5587 0.316185 19.7956 0.000114441 19 0.000114441V0.000114441ZM20 12.7501L15.1 8.35011L20 4.92011V12.7501ZM2 4.92011L6.9 8.35011L2 12.7501V4.92011ZM8.58 9.53011L10.43 10.8201C10.5974 10.9362 10.7963 10.9985 11 10.9985C11.2037 10.9985 11.4026 10.9362 11.57 10.8201L13.42 9.53011L18.42 14.0001H3.6L8.58 9.53011ZM3 2.00011H19C19.1857 2.0016 19.3673 2.05478 19.5245 2.15369C19.6817 2.2526 19.8083 2.39333 19.89 2.56011L11 8.78011L2.11 2.56011C2.19171 2.39333 2.31826 2.2526 2.47545 2.15369C2.63265 2.05478 2.81428 2.0016 3 2.00011V2.00011Z" fill="#A098AE"/>
    										</svg>
    									</a>		
    								</div>													
    							</div>
    							<!--/student-->
    							<!--student-->
    							<div class="d-flex align-items-center student">
    								<span class="dz-media">
    									<img src="images/profile/small/pic2.jpg" alt="" width="50" class="avatar">
    								</span>
    								<div class="user-info">
    									<h6 class="name"><a href="app-profile.html">Tony Soap</a></h6>
    									<span class=" text-wrap text-break">Class VII B</span>
    								</div>
    								<div class="icon-box st-box ms-auto">
    									<a href="#">
    										<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    										<path d="M19 0.000114441H3C2.20435 0.000114441 1.44129 0.316185 0.878679 0.878794C0.31607 1.4414 0 2.20446 0 3.00011V13.0001C0 13.7958 0.31607 14.5588 0.878679 15.1214C1.44129 15.684 2.20435 16.0001 3 16.0001H19C19.7956 16.0001 20.5587 15.684 21.1213 15.1214C21.6839 14.5588 22 13.7958 22 13.0001V3.00011C22 2.20446 21.6839 1.4414 21.1213 0.878794C20.5587 0.316185 19.7956 0.000114441 19 0.000114441V0.000114441ZM20 12.7501L15.1 8.35011L20 4.92011V12.7501ZM2 4.92011L6.9 8.35011L2 12.7501V4.92011ZM8.58 9.53011L10.43 10.8201C10.5974 10.9362 10.7963 10.9985 11 10.9985C11.2037 10.9985 11.4026 10.9362 11.57 10.8201L13.42 9.53011L18.42 14.0001H3.6L8.58 9.53011ZM3 2.00011H19C19.1857 2.0016 19.3673 2.05478 19.5245 2.15369C19.6817 2.2526 19.8083 2.39333 19.89 2.56011L11 8.78011L2.11 2.56011C2.19171 2.39333 2.31826 2.2526 2.47545 2.15369C2.63265 2.05478 2.81428 2.0016 3 2.00011V2.00011Z" fill="#A098AE"/>
    										</svg>
    									</a>		
    								</div>																				
    							</div>
    							<!--/student-->
    							<!--student-->
    							<div class="d-flex align-items-center student">
    								<span class="dz-media">
    									<img src="images/profile/small/pic3.jpg" alt="" class="avatar">
    								</span>
    								<div class="user-info">
    									<h6 class="name"><a href="app-profile.html">Karen Hope</a></h6>
    									<span>Web Developer</span>
    								</div>
    								<div class="icon-box st-box ms-auto">
    									<a href="#">
    										<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    										<path d="M19 0.000114441H3C2.20435 0.000114441 1.44129 0.316185 0.878679 0.878794C0.31607 1.4414 0 2.20446 0 3.00011V13.0001C0 13.7958 0.31607 14.5588 0.878679 15.1214C1.44129 15.684 2.20435 16.0001 3 16.0001H19C19.7956 16.0001 20.5587 15.684 21.1213 15.1214C21.6839 14.5588 22 13.7958 22 13.0001V3.00011C22 2.20446 21.6839 1.4414 21.1213 0.878794C20.5587 0.316185 19.7956 0.000114441 19 0.000114441V0.000114441ZM20 12.7501L15.1 8.35011L20 4.92011V12.7501ZM2 4.92011L6.9 8.35011L2 12.7501V4.92011ZM8.58 9.53011L10.43 10.8201C10.5974 10.9362 10.7963 10.9985 11 10.9985C11.2037 10.9985 11.4026 10.9362 11.57 10.8201L13.42 9.53011L18.42 14.0001H3.6L8.58 9.53011ZM3 2.00011H19C19.1857 2.0016 19.3673 2.05478 19.5245 2.15369C19.6817 2.2526 19.8083 2.39333 19.89 2.56011L11 8.78011L2.11 2.56011C2.19171 2.39333 2.31826 2.2526 2.47545 2.15369C2.63265 2.05478 2.81428 2.0016 3 2.00011V2.00011Z" fill="#A098AE"/>
    										</svg>
    									</a>		
    								</div>																			
    							</div>
    							<!--/student-->
    							<!--student-->
    							<div class="d-flex align-items-center student">
    								<span class="dz-media">
    									<img src="images/profile/small/pic4.jpg" alt="" class="avatar">
    								</span>
    								<div class="user-info">
    									<h6 class="name"><a href="app-profile.html">Jordan Nico</a></h6>
    									<span class=" text-wrap">Class VII A</span>
    								</div>
    								<div class="icon-box st-box ms-auto">
    									<a href="#">
    										<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    										<path d="M19 0.000114441H3C2.20435 0.000114441 1.44129 0.316185 0.878679 0.878794C0.31607 1.4414 0 2.20446 0 3.00011V13.0001C0 13.7958 0.31607 14.5588 0.878679 15.1214C1.44129 15.684 2.20435 16.0001 3 16.0001H19C19.7956 16.0001 20.5587 15.684 21.1213 15.1214C21.6839 14.5588 22 13.7958 22 13.0001V3.00011C22 2.20446 21.6839 1.4414 21.1213 0.878794C20.5587 0.316185 19.7956 0.000114441 19 0.000114441V0.000114441ZM20 12.7501L15.1 8.35011L20 4.92011V12.7501ZM2 4.92011L6.9 8.35011L2 12.7501V4.92011ZM8.58 9.53011L10.43 10.8201C10.5974 10.9362 10.7963 10.9985 11 10.9985C11.2037 10.9985 11.4026 10.9362 11.57 10.8201L13.42 9.53011L18.42 14.0001H3.6L8.58 9.53011ZM3 2.00011H19C19.1857 2.0016 19.3673 2.05478 19.5245 2.15369C19.6817 2.2526 19.8083 2.39333 19.89 2.56011L11 8.78011L2.11 2.56011C2.19171 2.39333 2.31826 2.2526 2.47545 2.15369C2.63265 2.05478 2.81428 2.0016 3 2.00011V2.00011Z" fill="#A098AE"/>
    										</svg>
    									</a>		
    								</div>																				
    							</div>
    							<!--/student-->
    							<!--student-->
    							<div class="d-flex align-items-center student">
    								<span class="dz-media">
    									<img src="images/profile/small/pic5.jpg" alt="" class="avatar">
    								</span>
    								<div class="user-info">
    									<h6 class="name"><a href="app-profile.html">Nadila Adja</a></h6>
    									<span class=" text-wrap">Class VII B</span>
    								</div>
    								<div class="icon-box st-box ms-auto">
    									<a href="#">
    										<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    										<path d="M19 0.000114441H3C2.20435 0.000114441 1.44129 0.316185 0.878679 0.878794C0.31607 1.4414 0 2.20446 0 3.00011V13.0001C0 13.7958 0.31607 14.5588 0.878679 15.1214C1.44129 15.684 2.20435 16.0001 3 16.0001H19C19.7956 16.0001 20.5587 15.684 21.1213 15.1214C21.6839 14.5588 22 13.7958 22 13.0001V3.00011C22 2.20446 21.6839 1.4414 21.1213 0.878794C20.5587 0.316185 19.7956 0.000114441 19 0.000114441V0.000114441ZM20 12.7501L15.1 8.35011L20 4.92011V12.7501ZM2 4.92011L6.9 8.35011L2 12.7501V4.92011ZM8.58 9.53011L10.43 10.8201C10.5974 10.9362 10.7963 10.9985 11 10.9985C11.2037 10.9985 11.4026 10.9362 11.57 10.8201L13.42 9.53011L18.42 14.0001H3.6L8.58 9.53011ZM3 2.00011H19C19.1857 2.0016 19.3673 2.05478 19.5245 2.15369C19.6817 2.2526 19.8083 2.39333 19.89 2.56011L11 8.78011L2.11 2.56011C2.19171 2.39333 2.31826 2.2526 2.47545 2.15369C2.63265 2.05478 2.81428 2.0016 3 2.00011V2.00011Z" fill="#A098AE"/>
    										</svg>
    									</a>		
    								</div>																				
    							</div>
    							<!--/student-->
    						</div>
    						<div class="card-footer text-center border-0 pt-0 px-3 pb-0">
    							<a href="javascript:void(0);" class="btn btn-block btn-primary light btn-rounded dlab-load-more" id="RecentActivity" rel="ajax/recentactivity.html">View More</a>
    						</div>
    					</div>
    				</div>
    				<!--/column-->
    				<!--column-->
    				<div class="col-xl-12">
    					<div class="card massage bg-transparent mb-0">
    						<div class="card-header border-0 px-3 py-0">
    							<div>
    								<h2 class="heading">Messages</h2>
    							</div>
							
    						</div>
    						<div class="card-body height450 dlab-scroll p-0 px-3" id="messageContent">
    							<!--student-->
    							<div class="d-flex student border-bottom">
    								<div class="d-flex align-items-center">
    									<span class="dz-media">
    										<img src="images/profile/small/pic1.jpg" alt="" class="avatar">
    									</span>
    									<div class="user-info">
    										<h6 class="name"><a href="app-profile.html">Samantha William</a></h6>
    										<span class="fs-14 font-w400 text-wrap">Lorem ipsum dolor sit</span>
    									</div>
    								</div>													
    								<div class="indox">
    									<span class="fs-14 font-w400 text-wrap">12:45 PM</span>		
    								</div>
    							</div>
    							<!--student-->
    							<div class="d-flex student border-bottom">
    								<div class="d-flex align-items-center">
    									<span class="dz-media">
    										<img src="images/profile/small/pic2.jpg" alt="" class="avatar">
    									</span>
    									<div class="user-info">
    										<h6 class="name"><a href="app-profile.html">Tony Soap</a></h6>
    										<span class="fs-14 font-w400 text-wrap">Lorem ipsum dolor sit</span>
    									</div>
    								</div>													
    								<div class="indox">
    									<span class="fs-14 font-w400 text-wrap">12:45 PM</span>		
    								</div>
    							</div>
    							<!--student-->
    							<div class="d-flex student border-bottom">
    								<div class="d-flex align-items-center">
    									<span class="dz-media">
    										<img src="images/profile/small/pic2.jpg" alt="" class="avatar">
    									</span>
    									<div class="user-info">
    										<h6 class="name"><a href="app-profile.html">Tony Soap</a></h6>
    										<span class="fs-14 font-w400 text-wrap">Lorem ipsum dolor sit</span>
    									</div>
    								</div>													
    								<div class="indox">
    									<span class="fs-14 font-w400 text-wrap">12:45 PM</span>		
    								</div>
    							</div>
    							<!--tudent-->
    							<div class="d-flex student border-bottom">
    								<div class="d-flex align-items-center">
    									<span class="dz-media">
    										<img src="images/profile/small/pic3.jpg" alt="" class="avatar">
    									</span>
    									<div class="user-info">
    										<h6 class="name"><a href="app-profile.html">Jordan Nico</a></h6>
    										<span class="fs-14 font-w400 text-wrap">Lorem ipsum dolor sit</span>
    									</div>
    								</div>													
    								<div class="indox">
    									<span class="fs-14 font-w400 text-wrap">12:45 PM</span>		
    								</div>
    							</div>
    							<!--student-->
    							<div class="d-flex student border-bottom">
    								<div class="d-flex align-items-center">
    									<span class="dz-media">
    										<img src="images/profile/small/pic4.jpg" alt="" class="avatar">
    									</span>
    									<div class="user-info">
    										<h6 class="name"><a href="app-profile.html">Nadila Adja</a></h6>
    										<span class="fs-14 font-w400 text-wrap">Lorem ipsum dolor sit</span>
    									</div>
    								</div>													
    								<div class="indox">
    									<span class="fs-14 font-w400 text-wrap">12:45 PM</span>		
    								</div>
    							</div>
    							<div class="d-flex student border-bottom">
    								<div class="d-flex align-items-center">
    									<span class="dz-media">
    										<img src="images/profile/small/pic4.jpg" alt="" class="avatar">
    									</span>
    									<div class="user-info">
    										<h6 class="name"><a href="app-profile.html">Nadila Adja</a></h6>
    										<span class="fs-14 font-w400 text-wrap">Lorem ipsum dolor sit</span>
    									</div>
    								</div>													
    								<div class="indox">
    									<span class="fs-14 font-w400 text-wrap">12:45 PM</span>		
    								</div>
    							</div>
    						</div>
    						<div class="card-footer text-center border-0 px-3 pb-0">
    							<a href="contact.html" class="btn btn-block btn-primary light btn-rounded dlab-load-more" id="message" rel="ajax/message-content.html">View More</a>
    						</div>
    					</div>
    				</div>
    				<!--/column-->
    				<!--column-->
    				<div class="col-xl-12 ">
    					<div class="card tags bg-transparent mb-0">
    						<div class="card-header border-0 px-3 py-0">
    							<h2 class="heading">Current Foods Menu</h2>
    						</div>
    						<div class="card-body  p-3 py-1 ">	
    							<div class="card-body-inner food">
    								<span class="dz-media">
    									<img src="images/food/pic1.jpg" alt="" class="avatar">
    								</span>
    								<div class="user-info">
    									<h5 class="name"><a href="app-profile.html">Beef Steak with Fried Potato</a></h5>
    									<span class="fs-14 font-w400 text-wrap">Lorem ipsum dolor sit</span>
    								</div>
    							</div>	
    							<div class="card-body-inner food">
    								<span class="dz-media">
    									<img src="images/food/pic2.jpg" alt="" class="avatar">
    								</span>
    								<div class="user-info">
    									<h5 class="name"><a href="app-profile.html">Pancake with Honey</a></h5>
    									<span class="fs-14 font-w400 text-wrap">Lorem ipsum dolor sit</span>
    								</div>
    							</div>	
    							<div class="card-body-inner food">
    								<span class="dz-media">
    									<img src="images/food/pic3.jpg" alt="" class="avatar">
    								</span>
    								<div class="user-info">
    									<h5 class="name"><a href="app-profile.html">Japanese Beef Ramen</a></h5>
    									<span class="fs-14 font-w400 text-wrap">Lorem ipsum dolor sit</span>
    								</div>
    							</div>
    						</div>
    						<div class="card-footer pt-0 border-0 px-2">
    							<button class="btn btn-block btn-primary light btn-rounded  mb-3">View More</button>		
    						</div>
    					</div>	
							
    				</div>
    				<!--column-->
    			</div>
    		</div>
    		<div class="wallet-bar-close"></div>
</template>

<script>
export default {
  name: "Wallet"
}
</script>

<style>

</style>