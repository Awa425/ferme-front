import api from './api'

export const getAnimals = () => {
    return api.get('/animals')
}

export default getAnimals