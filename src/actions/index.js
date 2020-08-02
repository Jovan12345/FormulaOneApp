import ergast from '../apis/ergast'

export const fetchChamps = () => async dispatch => {
    const response = await ergast.get('/driverstandings/1.json?limit=14&offset=55')

    dispatch({ type: 'FETCH_CHAMPS', payload: response.data })
}

