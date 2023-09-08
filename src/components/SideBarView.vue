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
    <div class="deznav">
            <div class="deznav-scroll"  style="overflow: visible;overflow-x: auto;">
				<ul class="metismenu" id="menu">
                     <li><a class="has-arrow ai-icon" href="#" aria-expanded="false">
							<i class="flaticon-381-networking"></i>
							<span class="nav-text">Home</span>
						</a>
                        <ul aria-expanded="false">
                            <li :class="{ 'mm-active': isRouteActive('home') }">
                            <router-link to="/home" :class="{ 'mm-active': isRouteActive('home') }" >Dashboard</router-link>
                            </li>
                            <li :class="{ 'mm-active': isRouteActive('consumption_report') }">
                            <router-link to="/consumption_report" :class="{ 'mm-active': isRouteActive('consumption_report') }" >Students</router-link>
                            </li>
                        </ul>
                     </li>
                    <li><a class="has-arrow ai-icon" href="#" aria-expanded="false">
							<i class="flaticon-381-notepad"></i>
							<span class="nav-text">Reports</span>
						</a>
                        <ul aria-expanded="false">
                            <li :class="{ 'mm-active': isRouteActive('fuels') }">
                            <router-link to="/fuels" :class="{ 'mm-active': isRouteActive('fuels') }" >General Reports</router-link>
                            </li>
                           
						</ul>
                    </li>
                    
                    <!-- Parametres -->
                    <li v-if="user_category == 1"><a class="has-arrow ai-icon" href="#" aria-expanded="false">
                        <i class="flaticon-381-settings-2"></i>
                        <span class="nav-text">Settings</span>
                    </a>
                    <ul aria-expanded="false">
                        
                            <li :class="{ 'mm-active': isRouteActive('users') }">
                                <router-link :class="{ 'mm-active': isRouteActive('users') }" to="/users">Utilisateurs</router-link>
                            </li>

                            <li :class="{ 'mm-active': isRouteActive('users_categories') }">
                                <router-link to="/users_categories" :class="{ 'mm-active': isRouteActive('users_categories') }">Categorie utilisateurs</router-link>
                            </li>
                           
                    </ul>
                    </li>
                     <!-- Vente carburant -->
                    <li v-if="user_category == 9 || user_category == 8">
                        <a class="has-arrow ai-icon" href="#" aria-expanded="false">
                            <i class="flaticon-381-networking"></i>
                            <span class="nav-text">Carburants</span>
                        </a>
                        <ul aria-expanded="false">
                            <li :class="{ 'mm-active': isRouteActive('consumption_history') }">
                                <router-link to="/consumption_history" :class="{ 'mm-active': isRouteActive('consumption_history') }">Historique consommations</router-link>
                            </li>
                            <li :class="{ 'mm-active': isRouteActive('supply') }">
                                <router-link to="/supply" :class="{ 'mm-active': isRouteActive('supply') }">Ravitaillement</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
				<div class="copyright">
					<p><strong>Lifti Admin Dashboard</strong> © 2022 All Rights Reserved</p>
				</div>
			</div>
        </div>
</template>