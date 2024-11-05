import axios from "axios"

const base = import.meta.env.VITE_BASE_URL

export const getData = async (path) => {
    try {
        const res = await axios.get(base + path)

        return res
    } catch(error) {
        return
    }
}