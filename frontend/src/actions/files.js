import axios from "axios"

export const upload = (file, callback) => async dispatch => {
    const res = await axios.post('/files', file, { headers: localStorage.getItem('token') })

    const {
        id,
        path
    } = res.data
    
    callback(id, path)
}