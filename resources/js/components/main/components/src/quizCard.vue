<template>
    <div class="col-sm-12 col-md-6 col-lg-4 mg-bottom">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ quiz.title}}</h5>
                <p class="card-text">{{ quiz.description }}</p>
                <router-link :to="{ name:'quiz' , params:{id:quiz.id}  }" class="btn btn-block btn-primary">
                    Participate
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "quizCard",
        props: {
            quiz: {
                required: true,
                type: Object,
            }
        }
    }
</script>