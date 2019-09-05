<template>
    <div class="container">
        <template v-if="quiz">
            <div class="row justify-content-left">
                <p>
                    <strong>{{ quiz.title }}</strong>
                    <br>
                    <span class="text-muted">{{ quiz.description }}</span>
                </p>
            </div>
            <template v-if="quiz.hasOwnProperty('questions')">
                <form style="margin-bottom: 50px;" @submit.prevent="send">
                    <div class="test-questions comp">
                        <question-box v-for="question in quiz.questions"
                                      :key="question.id"
                                      :question="question" :quiz_id="quiz.id"/>
                    </div>
                    <div class="test-questions comp">
                        <div class="question">
                            <div class="statement">
                                Your Email
                            </div>
                            <div class="decision">
                                <input type="email" required="required" autocomplete="email" name="email"
                                       v-model="email"
                                       class="form-control form-control-lg" placeholder="you@example.com">
                            </div>
                        </div>
                    </div>

                    <div class="test-questions comp">
                        <button type="submit" class="btn btn-primary btn-lg btn-block">
                            Save & Continue
                            <span class="fas fa-arrow-right"></span></button>
                    </div>
                </form>
            </template>
        </template>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import QuestionBox from "../src/questionBox";

    export default {
        name: "quiz",
        components: {QuestionBox},
        data() {
            return {
                id: null,
                quiz: null,
                email: '',
                data: {}
            }
        },
        created() {
            this.id = this.$route.params.id;
        },
        methods: {
            ...mapActions({
                getQuiz: 'getQuiz',
                sendQuiz: 'sendQuiz',
            }),
            async updateQuiz() {
                await this.getQuiz(this.id)
                this.quiz = this.$store.getters.getQuizById(this.id)
            },
            async send() {
                let answers = []
                this.quiz.questions.forEach(function (question) {
                    answers.push({id: question.id, value: question.value})
                });
                let result = await this.sendQuiz({email: this.email, quiz_id: this.quiz.id, answers: answers});
                this.$router.push({name: 'result', params: {id: result.id}})
            }
        },
        mounted() {
            this.quiz = this.$store.getters.getQuizById(this.id)
            this.updateQuiz();
        },
    }
</script>