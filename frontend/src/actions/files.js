import axios from "axios"

export const upload = (file, callback) => async dispatch => {
    try {
        console.log(file)
        const res = await axios.post('/files', file, {headers: {
            'Content-Type': 'multipart/form-data',
            authorization: localStorage.getItem('token')
        } })

        const {
            id,
            path
        } = res.data
        
        callback(id, path)
    } catch (e) {
        console.log(e)
    }
}