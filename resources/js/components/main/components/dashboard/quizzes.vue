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
                            <a href="#" data-toggle="modal" data-target="#add_new_quiz" class="btn btn-primary">+ Add
                                New Quiz</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="add_new_quiz" tabindex="-1" role="dialog" aria-labelledby="AddNewQuiz"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <form>
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add A New Quiz</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">

                            <div class="form-group">
                                <label for="title" class="col-form-label">Title:</label>
                                <input id="title" type="text" class="form-control" v-model="form.title" name="title"
                                       :class="{ 'is-invalid': form.errors.has('title') }" required="required">
                            </div>
                            <div class="form-group">
                                <label for="description" class="col-form-label">Description:</label>
                                <textarea v-model="form.description" name="description" class="form-control"
                                          id="description"
                                          :class="{ 'is-invalid': form.errors.has('title') }"
                                          required="required"></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import QuizRow from "../src/quizRow";

    export default {
        name: "quizzes",
        components: {QuizRow},
        data() {
            return {
                form: new Form({
                    title: '',
                    description: ''
                })
            }
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