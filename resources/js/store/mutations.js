const mutations = {
    SET_QUIZZES(state, data) {
        state.quizzes = data
    },
    SET_QUIZ(state, data) {
        let index = state.quizzes.findIndex(quiz => quiz.id === data.id)
        if (index >= 0) {
            state.quizzes = state.quizzes.map((q) => {
                if (q.id === data.id) {
                    return data
                }
                return q
            })
        } else {
            let quizzes = state.quizzes.slice()
            quizzes.unshift(data)
            state.quizzes = quizzes
        }
    },
    SET_QUESTION_ANSWER(state, data) {
        let quiz_index = state.quizzes.findIndex(quiz => quiz.id === data.quiz_id)
        let question_index = state.quizzes[quiz_index].questions.findIndex(question => question.id === data.question_id)
        state.quizzes[quiz_index].questions[question_index].value = data.value;
    },
    SET_QUIZ_RESULT(state, data) {
        let index = state.results.findIndex(result => result.id === data.id)
        if (index >= 0) {
            state.results = state.results.map((result) => {
                if (result.id === data.id) {
                    return data
                }
                return result
            })
        } else {
            let results = state.results.slice()
            results.unshift(data)
            state.results = results
        }
    },
    SET_DIMENSIONS(state, data) {
        state.dimensions = data
    },
    SET_LOGIN_INFO(state, token) {
        state.token = token
    },
    LOG_OUT(state) {
        state.token = null
    },
    GET_ALL_RESULTS(state, data) {
        state.all_results = data
    }
}

export default mutations
