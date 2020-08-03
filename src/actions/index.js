import ergast from '../apis/ergast'
import wikiMedia from '../apis/wikiMedia'

export const fetchChamps = () => async dispatch => {
    const response = await ergast.get('/driverstandings/1.json?limit=14&offset=55')

    dispatch({ type: 'FETCH_CHAMPS', payload: response.data })
}

export const fetchChamp = (year) => async dispatch => {
    const response = await ergast.get(`/${year}/driverstandings/1.json`)

    dispatch({ type: 'FETCH_CHAMP', payload: response.data })
}

export const fetchWinners = (year) => async dispatch => {
    const response = await ergast.get(`/${year}/results/1.json`)

    dispatch({ type: 'FETCH_WINNERS', payload: response.data })
}

export const trackWinners = (year, round) => async dispatch => {
    if (year && round) {
        const response = await ergast.get(`/${year}/${round}/results.json`)

        dispatch({ type: 'FETCH_TRACK_WINNERS', payload: response.data })
    } else {
        dispatch({ type: 'CLEAR_TRACK_WINNERS' })
    }
}

export const champImg = () => async dispatch => {
    const response = await wikiMedia.get(`/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=Jenson_Button`,
        {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            credentials: 'same-origin',
        })

    dispatch({ type: 'FETCH_CHAMP_IMG', payload: response })
}