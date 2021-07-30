import api from './index'

export const getUser = () => api('user','GET',null)
export const addUser = (product:Object) => api('user','POST',product)
