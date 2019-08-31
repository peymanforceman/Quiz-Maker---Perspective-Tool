const getters = {
    loggedIn(state) {
        return state.token != null
    },
    token(state) {
        return state.token
    },
    quizzes(state) {
        return state.quizzes
    },
    getDimensions(state) {
        return state.dimensions
    },
    getQuizById: state => id => {
        return state.quizzes.find(
            item => item.id == id
        );
    },
    getResultById: state => id => {
        return state.results.find(
            item => item.id == id
        );
    },
    participant_results(state) {
        return state.all_results
    },

}

export default getters