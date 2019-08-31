import axios from 'axios'

const helper = {
    setAuth(context) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;
    },
}

export default helper;