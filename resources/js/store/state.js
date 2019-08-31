const state = {
    quizzes: [],
    results: [],
    dimensions: null,
    token: localStorage.getItem('access_token') || null,
    all_results: {},
}

export default state
