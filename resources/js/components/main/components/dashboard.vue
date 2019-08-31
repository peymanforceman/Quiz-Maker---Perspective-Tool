<template>
    <div class="container">
        <div class="bs-docs-section clearfix">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            Latest Participants:
                        </div>
                        <div class="card-body">
                            <table id="tablePreview" class="table">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Quiz</th>
                                    <th>Email</th>
                                    <th>Key</th>
                                    <th>Meaning</th>
                                </tr>
                                </thead>
                                <tbody>
                                <result-row v-for="(item, index) in participant_results.data"
                                            :key="item.id"
                                            :result="item"
                                            :index="index"/>
                                </tbody>
                            </table>
                        </div>
                        <div class="card-footer">
                            <pagination :data="participant_results"
                                        @pagination-change-page="getAnotherPages"></pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'
    import ResultRow from "./src/resultRow";

    export default {
        name: "dashboard",
        components: {ResultRow},
        data() {
            return {}
        },
        computed: {
            ...mapGetters({
                participant_results: 'participant_results',
            })
        },
        methods: {
            ...mapActions({
                getResults: 'getResults',
            }),
            async getData(page = 1) {
                await this.getResults(page);
            },
            getAnotherPages(page = 1) {
                this.getData(page);
            }
        },
        mounted() {
            this.getData(1);
        }

    }
</script>

<style scoped>

</style>