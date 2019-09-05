<template>
    <div class="container">
        <section class="content-header">
            <h2>
                Available Quizzes:
            </h2>
        </section>
        <section class="content mt-5">
            <div class="row">
                <quiz-card v-for="quiz in quizzes"
                           :key="quiz.id"
                           :quiz="quiz"/>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import QuizCard from "../src/quizCard";

    export default {
        name: "home",
        components: {QuizCard},
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