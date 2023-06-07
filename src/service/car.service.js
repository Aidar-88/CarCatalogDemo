import axios from "axios"

export const carService = {
    async getAll() {
        const response = await axios.get('http://localhost:3000/cars')
        return response.data
    },

    async getById(id) {
        const response = await axios.get(`http://localhost:3000/cars?id=${id}`)
        return response.data[0]
    },
}

// json-server --watch db.json