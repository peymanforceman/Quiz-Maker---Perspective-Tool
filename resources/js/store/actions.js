import axios from 'axios'
import helpers from './helper.js'

const actions = {
    async getAllQuizzes({commit}) {
        let response = await axios.get('api/quizzes')
        commit('SET_QUIZZES', response.data.data)
    },
    async getQuiz({commit}, id) {
        let response = await axios.get(`api/quiz/${id}`)
        commit('SET_QUIZ', response.data.data)
    },
    setQuestionAnswer({commit}, data) {
        commit('SET_QUESTION_ANSWER', data)
    },
    async sendQuiz({commit}, data) {
        let response = await axios.post(`api/quiz/${data.quiz_id}`, data)
        commit('SET_QUIZ_RESULT', response.data.data)
        return response.data.data
    },
    async getResult({commit}, id) {
        let response = await axios.get(`api/quiz/result/${id}`)
        commit('SET_QUIZ_RESULT', response.data.data)
    },
    async getAnswers({commit}, data) {
        let response = await axios.post(`api/admin/result/answers`, data)
        return response.data.data
    },
    async getAllDimensions({commit}) {
        let response = await axios.get(`api/dimensions`)
        commit('SET_DIMENSIONS', response.data.data)
    },
    async loginReq({commit}, data) {
        return new Promise((resolve, reject) => {
            axios.post(`api/admin/login`, data)
                .then(response => {
                    const token = response.data.access_token

                    localStorage.setItem('access_token', token)
                    commit('SET_LOGIN_INFO', token)

                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    adminLogOut(context) {
        helpers.setAuth(context)
        if (context.getters.loggedIn) {
            return new Promise((resolve, reject) => {
                axios.post('api/admin/logout')
                    .then(response => {
                        localStorage.removeItem('access_token')
                        context.commit('LOG_OUT')
                        resolve(response)
                    })
                    .catch(error => {
                        localStorage.removeItem('access_token')
                        context.commit('LOG_OUT')
                        reject(error)
                    })
            })
        }
    },
    getResults(context, page = 1) {
        helpers.setAuth(context)
        axios.post(`api/admin/results?page=${page}`)
            .then(response => {
                context.commit('GET_ALL_RESULTS', response.data)
            })
    }
}

export default actions
