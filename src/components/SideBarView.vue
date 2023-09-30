<script>
import { useRoute } from 'vue-router';
export default {
    name: "SideBarView",
    setup() {

        const user_category = localStorage.getItem("user_category");
        const route = useRoute();

        function isRouteActive(routeName) {
            return route.name === routeName;
        }

        return {
            user_category,
            isRouteActive
        }
    },
}
</script>
<template>
    <!--**********************************
            Sidebar start
        ***********************************-->
            <div class="dlabnav">
    			<div class="dlabnav-scroll">	
    				<ul class="metismenu" id="menu">
    					<li><a class="has-arrow " href="javascript:void(0);" aria-expanded="false">
    							<i class="material-symbols-outlined">home</i>
    							<span class="nav-text">Dashboard</span>
    						</a>
    						<ul aria-expanded="false">
    							<li>
									<router-link to="/home">Dashboard</router-link>
								</li>
    						</ul>

    					</li>
    					<li><a class="has-arrow " href="javascript:void(0);" aria-expanded="false">
    						<i class="material-symbols-outlined">school</i>
    						<span class="nav-text">Student</span>
    					</a>
    					<ul aria-expanded="false">
    						<li>
								<router-link to="/students">Students</router-link>
							</li>
    						<li>
								<router-link to="/add-student">Add New Student</router-link>
							</li>
    					</ul>
    					</li>

						<li>
							<a class="has-arrow " href="javascript:void(0);" aria-expanded="false">
	    						<i class="material-symbols-outlined">school</i>
	    						<span class="nav-text">School</span>
	    					</a>
	    					<ul aria-expanded="false">
	    						<li>
									<router-link to="/schools">Schools</router-link>
								</li>
	    						<li>
									<router-link to="/add-school">Add New School</router-link>
								</li>
	    					</ul>
	    				</li>

						<li><a class="has-arrow " href="javascript:void(0);" aria-expanded="false">
								<i class="material-symbols-outlined">school</i>
								<span class="nav-text">Department</span>
							</a>
							<ul aria-expanded="false">
								<li>
									<router-link to="/departments">Departments</router-link>
								</li>
								<li>
									<router-link to="/add-department">Add New Department</router-link>
								</li>
							</ul>
						</li>

    					<li><a class="has-arrow " href="javascript:void(0);" aria-expanded="false">
    						<i class="material-symbols-outlined">person</i>
    						<span class="nav-text">Data Sorting & Filtering</span>
    					</a>
    					<ul aria-expanded="false">
    						<li>
								<router-link to="/sort_filters">General</router-link>
							</li>
    					</ul>
    					</li>
    				</ul>
    				<div class="copyright">
    					<p><strong>USRS Dashboard</strong></p>
    					<p class="fs-12">Made with <span class="heart"></span> by Sammy Ndabo & Leslie Mitima</p>
    				</div>
    			</div>
            </div>
            <!--**********************************
            Sidebar end
        ***********************************-->
</template>