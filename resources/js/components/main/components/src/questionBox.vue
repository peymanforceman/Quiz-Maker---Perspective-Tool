<template>
    <div class="question">
        <div class="statement">
            {{ question.question }}
        </div>
        <div class="decision">
            <div class="caption disagree">Disagree</div>
            <div class="options">
                <input :name="'question['+quiz_id+']['+question.id+']'" value="1" v-model="value" required="required"
                       type="radio"/>
                <input :name="'question['+quiz_id+']['+question.id+']'" value="2" v-model="value" required="required"
                       type="radio"/>
                <input :name="'question['+quiz_id+']['+question.id+']'" value="3" v-model="value" required="required"
                       type="radio"/>
                <input :name="'question['+quiz_id+']['+question.id+']'" value="4" v-model="value" required="required"
                       type="radio"/>
                <input :name="'question['+quiz_id+']['+question.id+']'" value="5" v-model="value" required="required"
                       type="radio"/>
                <input :name="'question['+quiz_id+']['+question.id+']'" value="6" v-model="value" required="required"
                       type="radio"/>
                <input :name="'question['+quiz_id+']['+question.id+']'" value="7" v-model="value" required="required"
                       type="radio"/>
            </div>
            <div class="caption agree">Agree</div>
        </div>
        <div class="decision mobile">
            <div class="caption disagree">Disagree</div>
            <div class="caption agree">Agree</div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "questionBox",
        props: {
            question: {
                required: true,
                type: Object,
            },
            quiz_id: {
                type: Number,
                required: true,
            }
        },
        data() {
            return {
                value: ''
            }
        },
        methods: {
            ...mapActions({
                setQuestionAnswer: 'setQuestionAnswer',
            })
        },
        watch: {
            value: function (value) {
                let data = {
                    quiz_id: this.quiz_id,
                    question_id: this.question.id,
                    value: parseInt(value)
                }
                this.setQuestionAnswer(data)
            }
        }
    }
</script>