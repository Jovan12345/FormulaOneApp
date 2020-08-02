export const fetchChamps = (param) =>{ 
    return {
        type: 'FETCH_CHAMPS',
        payload: param
    }
}