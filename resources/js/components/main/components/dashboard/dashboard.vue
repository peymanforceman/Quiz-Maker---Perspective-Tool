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
                                    <th></th>
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
        <div class="modal fade" id="show_user_result_answers" tabindex="-1" role="dialog"
             aria-labelledby="UserAnswers"
             aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div v-if="this.show_result !=null" class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Answers by {{ show_result.participant }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div v-if="this.show_result !=null" class="modal-body">
                        <div class="test-questions comp">
                            <question-box v-for="item in this.answers"
                                          :key="item.id"
                                          :question="item" :quiz_id="item.id"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'
    import ResultRow from "../src/resultRow";
    import QuestionBox from "../src/questionBox";

    export default {
        name: "dashboard",
        components: {QuestionBox, ResultRow},
        data() {
            return {
                show_result: null,
                answers: [],
            }
        },
        computed: {
            ...mapGetters({
                participant_results: 'participant_results',
            })
        },
        methods: {
            ...mapActions({
                getResults: 'getResults',
                getAnswers: 'getAnswers',
            }),
            async getData(page = 1) {
                await this.getResults(page);
            },
            getAnotherPages(page = 1) {
                this.getData(page);
            },
            async reqAnswers(data) {
                let response = await this.getAnswers(data);
                this.answers = response;
                $('#show_user_result_answers').modal('show')
            },
        },
        mounted() {
            this.getData(1);
            this.$root.$on('show_answers', (params) => {
                this.show_result = params;
                this.reqAnswers({
                    result_id: params.id,
                    participant_id: params.participant_id,
                    quiz_id: params.quiz_id
                })

            })
        }

    }
</script>

<style scoped>

</style>