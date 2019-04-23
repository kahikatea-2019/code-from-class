import request from 'superagent'

export function deleteWombat (wombat) {
  return {
    type: 'DELETE_WOMBAT',
    wombat: wombat
  }
}

export function addWombat (wombat) {
  return {
    type: 'ADD_WOMBAT',
    wombat: wombat
  }
}

export function requestApi () {
  return {
    type: 'REQUESTING_API'
  }
}

export function receiveApi () {
  return {
    type: 'RECEIVING_API'
  }
}

export function saveWombat (wombat) {
  return function (dispatch) {
    dispatch(requestApi())
    request.post('http://localhost:3000/api/wombats')
      .send({
        name: wombat
      })
      .then(() => {
        dispatch(addWombat(wombat))
        dispatch(receiveApi())
      })
      .catch(err => {
        dispatch(receiveApi())
        dispatch(showError(err.message))
      })
  }
}

function requestWombats () {
  return {
    type: 'REQUESTING_WOMBATS'
  }
}

function receiveWombats (wombats) {
  return {
    type: 'RECEIVING_WOMBATS',
    wombats: wombats
  }
}

export function getWombats () {
  return function (dispatch) {
    // turn on wait indicator
    dispatch(requestWombats())
    request.get('http://localhost:3000/api/wombats')
      .then(res => {
        const wombats = res.body.wombats
        // turn off wait indicator
        dispatch(receiveWombats(wombats))
      })
  }
}

export function showError () {
  return {
    type: 'SHOW_ERROR'
  }
}
