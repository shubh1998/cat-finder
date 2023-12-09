import axiosInstance from "../api"

export const fetchCatsListService = ({limit, page}) => {
    return axiosInstance({
        method: 'get',
        url: `/breeds?limit=${limit}&page=${page}`
    })
}