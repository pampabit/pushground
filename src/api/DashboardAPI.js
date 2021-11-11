import Config from '../Config'
const DashboardAPI = {
  getAudiences,
  getEvents
}
export default DashboardAPI

function getAudiences(json) {
  return fetch(Config.API_URL + '/candidates/test/audiences')
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      return json
    })
    .catch(error => console.log(error))
}

function getEvents(json) {
  return fetch(Config.API_URL + '/candidates/test/events')
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      return json
    })
    .catch(error => console.log(error))
}
