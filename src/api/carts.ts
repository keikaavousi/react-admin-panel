import api from './index'

export const getCart = () => api('cart','GET',null)
export const addCart = (product:Object) => api('cart','POST',product)
