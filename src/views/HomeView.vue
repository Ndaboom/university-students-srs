<script>
import { ref, reactive } from '@vue/reactivity';
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
import HeaderView from '../components/HeaderView.vue';
import SideBarView from '../components/SideBarView.vue';
import FooterView from '../components/FooterView.vue';
export default {
    name: "home",
    components: {
        HeaderView,
        SideBarView,
        FooterView
    },
    setup() {

        const stations = ref([]);
        const drivers = ref([]);
        const vehiculesB = ref([]);
        const achats = ref([]);
        const consommations = ref([]);
        const bureaux = ref([]);
        const user = ref([]);
        const user_category = localStorage.getItem("user_category");
        const username = localStorage.getItem("username");
        const stock_essence = ref(0);
        const stock_mazout = ref(0);

        const toaster = createToaster({
            position: "top-right",
            pauseOnHover: "true",
            dismissible: "true"
        });

        fetch_students()
        fetch_drivers()
        getVehiculesB()
        fetch_achats()
        fetch_bureaux()
        fetch_station_profil();
        fetch_consommations();
        fetch_essence_status();
        fetch_station_profil();

        function fetch_students() {
            //Axios request
            stations.value = 0          
        }

        function fetch_bureaux() {
            //Axios request
            bureaux.value = 0
        }

        function fetch_drivers() {
            drivers.value = 0
        }

        function getVehiculesB() {
            vehiculesB.value = 0
        }

        function fetch_achats() {
            achats.value = 0
            //Axios request
        }

        function fetch_consommations() {
            //Axios request
            consommations.value = 0
            //Axios request
        }

        function fetch_essence_status(id) {
            //Axios request
            stock_essence.value = 0;
            //Axios request
        }

        function fetch_mazout_status(id) {
            //Axios request
            stock_mazout.value = 0;
            //Axios request
        }


        function fetch_station_profil() {
            //Axios request
            
            //Axios request
        }

        return {
            stations,
            drivers,
            vehiculesB,
            achats,
            bureaux,
            consommations,
            user_category,
            stock_essence,
            stock_mazout,
            username,
            user
        }

    },
}
</script>
<template>
    <div>
        <HeaderView />
        <SideBarView />
        <transition name="t">
            <router-view></router-view>
        </transition>
        <div class="content-body" v-if="this.$route.name === 'home'">
            <!-- row -->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-6 col-xxl-12">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card avtivity-card">
                                    <div class="card-body">
                                        <div class="media align-items-center">
                                            <span class="activity-icon bgl-success mr-md-4 mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                                    viewBox="0 0 16 16" fill="none" class="bi bi-fuel-pump-diesel-fill">
                                                    <path
                                                        d="M4.974 9.806h.692c.306 0 .556.063.75.19.198.127.343.317.437.568.096.252.144.565.144.941 0 .284-.027.53-.083.74-.053.21-.133.386-.241.528a.986.986 0 0 1-.412.315 1.575 1.575 0 0 1-.595.103h-.692V9.806Z"
                                                        fill="#27BC48" />
                                                    <path
                                                        d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1c.564 0 1.034.11 1.412.336.383.228.634.551.794.907.295.655.294 1.465.294 2.081V7.5a.5.5 0 0 1-.5.5H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V2Zm2 .5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5ZM4 9v5h1.796c.496 0 .906-.099 1.23-.297.327-.197.571-.484.732-.86.161-.377.242-.828.242-1.356 0-.525-.08-.973-.242-1.344a1.775 1.775 0 0 0-.725-.85C6.71 9.098 6.296 9 5.796 9H4Z"
                                                        fill="#27BC48" />
                                                </svg>
                                            </span>
                                            <router-link to="/stations_list">
                                                <div class="media-body">
                                                    <p class="fs-14 mb-2">Stations enregistrés</p>
                                                    <span class="title text-black font-w600">{{ stations.length }}</span>
                                                </div>
                                            </router-link>
                                        </div>
                                        <div class="progress" style="height:5px;">
                                            <div class="progress-bar bg-success"
                                                style="width: {{ stations.length }}%; height:5px;" role="progressbar">
                                                <span class="sr-only">{{ stations.length }}% Enregistrés</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="effect bg-success"></div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card avtivity-card">
                                    <div class="card-body">
                                        <div class="media align-items-center">
                                            <span class="activity-icon bgl-secondary  mr-md-4 mr-3">
                                                <svg width="40" height="37" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" class="bi bi-file-person">
                                                    <path
                                                        d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"
                                                        fill="#A02CFA" />
                                                    <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="#A02CFA" />
                                                </svg>
                                            </span>
                                            <router-link to="/drivers_list">
                                                <div class="media-body">
                                                    <p class="fs-14 mb-2">Clients enregistrés</p>
                                                    <span class="title text-black font-w600">{{ drivers.length }}</span>
                                                </div>
                                            </router-link>
                                        </div>
                                        <div class="progress" style="height:5px;">
                                            <div class="progress-bar bg-secondary"
                                                style="width: {{ drivers.length }}%; height:5px;" role="progressbar">
                                                <span class="sr-only">{{ drivers.length }} Enregistrés</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="effect bg-secondary"></div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card avtivity-card">
                                    <div class="card-body">
                                        <div class="media align-items-center">
                                            <span class="activity-icon bgl-danger mr-md-4 mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39"
                                                    viewBox="0 0 16 16" fill="none" class="bi bi-stopwatch-fill">
                                                    <path
                                                        d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"
                                                        fill="#FF3282" />
                                                </svg>
                                            </span>
                                            <router-link to="/sells_history">
                                                <div class="media-body">
                                                    <p class="fs-14 mb-2">Achat 7 derniers jours</p>
                                                    <span class="title text-black font-w600">{{ achats[0]?.Qte }} Ltr</span>
                                                </div>
                                            </router-link>
                                        </div>
                                        <div class="progress" style="height:5px;">
                                            <div class="progress-bar bg-danger" style="width: 90%; height:5px;"
                                                role="progressbar">
                                                <span class="sr-only">42% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="effect bg-danger"></div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card avtivity-card">
                                    <div class="card-body">
                                        <div class="media align-items-center">
                                            <span class="activity-icon bgl-warning  mr-md-4 mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                                    viewBox="0 0 16 16" fill="none" class="bi bi-car-front-fill">
                                                    <path fill-rule="evenodd"
                                                        d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189l.956-1.913A.5.5 0 0 1 4.309 3h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17-1.247 0-3.688.097-4.597.17a.51.51 0 0 1-.497-.731Z"
                                                        fill="#FFBC11" />
                                                </svg>
                                            </span>
                                            <router-link to="/vehicules_categories">
                                                <div class="media-body">
                                                    <p class="fs-14 mb-2">Categories vehicules</p>
                                                    <span class="title text-black font-w600">{{ vehiculesB.length }}</span>
                                                </div>
                                            </router-link>
                                        </div>
                                        <div class="progress" style="height:5px;">
                                            <div class="progress-bar bg-warning" style="width: 42%; height:5px;"
                                                role="progressbar">
                                                <span class="sr-only">{{ vehiculesB.length }} Enregistrés</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="effect bg-warning"></div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card avtivity-card">
                                    <div class="card-body">
                                        <div class="media align-items-center">
                                            <span class="activity-icon bgl-warning  mr-md-4 mr-3">
                                                <svg width="40" height="40" viewBox="0 0 1024 1024"
                                                    xmlns="http://www.w3.org/2000/svg" fill="#FFBC11">
                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                        stroke-linejoin="round"></g>
                                                    <g id="SVGRepo_iconCarrier">
                                                        <path fill="#FFBC11"
                                                            d="M192 128v704h384V128H192zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z">
                                                        </path>
                                                        <path fill="#FFBC11"
                                                            d="M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z">
                                                        </path>
                                                        <path fill="#FFBC11"
                                                            d="M640 384v448h192V384H640zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32z">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <router-link to="/sales_offices">
                                                <div class="media-body">
                                                    <p class="fs-14 mb-2">Bureaux</p>
                                                    <span class="title text-black font-w600">{{ bureaux.length }}</span>
                                                </div>
                                            </router-link>
                                        </div>
                                        <div class="progress" style="height:5px;">
                                            <div class="progress-bar bg-warning" style="width: 42%; height:5px;"
                                                role="progressbar">
                                                <span class="sr-only">{{ bureaux.length }} Enregistrés</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="effect bg-warning"></div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card avtivity-card">
                                    <div class="card-body">
                                        <div class="media align-items-center">
                                            <span class="activity-icon bgl-danger mr-md-4 mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39"
                                                    viewBox="0 0 16 16" fill="none" class="bi bi-stopwatch-fill">
                                                    <path
                                                        d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"
                                                        fill="#FF3282" />
                                                </svg>
                                            </span>
                                            <router-link to="/consumption_report">
                                                <div class="media-body">
                                                    <p class="fs-14 mb-2">Consommation 7 derniers jours</p>
                                                    <span class="title text-black font-w600">{{ consommations[0]?.Qte }}
                                                        Ltr</span>
                                                </div>
                                            </router-link>
                                        </div>
                                        <div class="progress" style="height:5px;">
                                            <div class="progress-bar bg-danger" style="width: 90%; height:5px;"
                                                role="progressbar">
                                                <span class="sr-only">42% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="effect bg-danger"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <FooterView />
</div></template>
<style scoped>.t-enter-from,
.t-leave-to {
    opacity: 0;
}

.t-enter-active,
.t-leave-active {
    transition: opacity 0.5s ease-in;
}</style>

