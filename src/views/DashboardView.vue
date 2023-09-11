<script>
import { reactive, ref } from '@vue/reactivity';
import axios from 'axios';
import BarChart from '../components/BarChart.vue';
import { createToaster } from "@meforma/vue-toaster";
export default {
    name: "dashboard",
    setup() {
        const pagination = reactive({
            current_page: 1,
            peer_page: 10
        });
        const tri_criteria = reactive({
            start_date: "",
            end_date: ""
        });

        const toaster = createToaster({
            position: "top-right",
            pauseOnHover: "true",
            dismissible: "true"
        });

        let consommations = ref([]);
        const labels = [];
        const values = [];
        function fetch_data() {
            if (tri_criteria.start_date != "" && tri_criteria.end_date != "") {
                axios
                    .get("client/" + tri_criteria.start_date + "/" + tri_criteria.end_date + "/ConsoMpErIODsT")
                    .then(response => {
                        if (response) {
                            if (response.data.consommation) {
                                consommations.value = response.data.consommation
                                populateArrays(consommations.value);
                            }
                        }
                    }).catch(error => {
                        toaster.error(`${error}`, {
                            type: "error",
                        });
                    }).finally(() => null);
                //Axios request
            }
        }

        function populateArrays(consommations) {
            for (let i = 0; i < consommations.length; i++) {
                labels.push(consommations[i].Nom_S);
                values.push(consommations[i].Cons);
            }
            console.log("Arrays populate", labels, values)
        }

        const chartData = {
            labels: labels.values,
            datasets: [{ data: values.values }]
        }

        return {
            pagination,
            tri_criteria,
            fetch_data,
            labels,
            values,
            chartData
        };
    },
    components: { BarChart }
}
</script>
<template>
    <div class="content-body">
        <!-- row -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-xl-5 col-xxl-12 mr-auto">
                                    <div class="d-sm-flex d-block align-items-center">
                                        <div>
                                            <h4 class="fs-20 text-black">Generate report</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-7 col-xxl-12 mt-3">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <input type="date" @change="fetch_data" v-model="tri_criteria.start_date"
                                                class="form-control" />
                                        </div>
                                        <div class="col-md-3">
                                            <input type="date" @change="fetch_data" v-model="tri_criteria.end_date"
                                                class="form-control" />
                                        </div>
                                        <div class="col-md-3">
                                            <a @click="fetch_data" class="btn btn-primary btn-md mb-2">Generer<i
                                                    class="las la-angle-right ml-3 scale5"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Table here -->
                            <BarChart />
                            <!-- Table here -->
                        </div>
                    </div>
                </div>
                <!-- Content here -->
        </div>
    </div>
</div></template>