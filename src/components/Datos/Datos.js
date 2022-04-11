import {Products} from '../../AsyncMock'

export const PedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(Products)
        }, 1000)
    })
}
