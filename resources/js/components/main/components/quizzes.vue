<template>
    <div class="container">
        <div class="bs-docs-section clearfix">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            Available Quizzes:
                        </div>
                        <div class="card-body">
                            <table id="tablePreview" class="table">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>title</th>
                                    <th>description</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <quiz-row v-for="(item, index) in quizzes"
                                          :key="item.id"
                                          :quiz="item"
                                          :index="index"/>
                                </tbody>
                            </table>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary">+ Add New Quiz</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import QuizRow from "./src/quizRow";

    export default {
        name: "quizzes",
        components: {QuizRow},
        data() {
            return {}
        },
        computed: {
            ...mapGetters({
                quizzes: 'quizzes',
            })
        },
        methods: {
            ...mapActions({
                getAllQuizzes: 'getAllQuizzes',
            }),
            async updateQuizzes() {
                await this.getAllQuizzes()
            }
        },
        mounted() {
            this.updateQuizzes();
        }
    }
</script>