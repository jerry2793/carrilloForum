import axios from "axios"

export const upload = (file, callback) => async dispatch => {
    try {
        console.log(file)
        const res = await axios.post('/files', file, {headers: {
            'Content-Type': 'multipart/form-data',
            authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZmVhOTk4MmM3NGU1NTYzNDgxNDBkNzEiLCJpYXQiOjE2MTA3NTAyMzE2NDh9.B7WSFJ1hKj4OSLJlPXHXxneQFjKypJJRJb4YJz1ezmQ'
            // authorization: localStorage.getItem('token')
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