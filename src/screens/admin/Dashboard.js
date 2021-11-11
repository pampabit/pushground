import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import DashboardAPI from '../../api/DashboardAPI'
import EventsChart from '../../components/dashboard/EventsChart'
import AudiencesTable from '../../components/dashboard/AudiencesTable'

const Dashboard = () => {

  const [context, setContext] = useContext(AppContext)
  const [audiences, setAudiences] = useState([])
  const [audienceSelected, setAudienceSelected] = useState(null)
  const [events, setEvents] = useState([])

  const toggleAudience = (audienceId) => {
    audienceId != audienceSelected
      ? setAudienceSelected(audienceId)
      : setAudienceSelected(null)
  }

  useEffect(() => {
    const pAudiences = DashboardAPI.getAudiences().then(data => data && setAudiences(data))
    const pEvents = DashboardAPI.getEvents().then(data => data && setEvents(data))
  }, [])

  return(
    <div class="row mt-5">
      <div class="col-12">

        <h1 class="big-title-2 fade-in mb-5">
          Hola {context.user.name}
        </h1>

        <div class="row mb-5">
          <div class="col-md-12">
            <AudiencesTable
              audiences={audiences}
              audienceSelected={audienceSelected}
              toggleAudience={toggleAudience}
            />
          </div>
        </div>

        <div class="row mb-5">
          <div class="col-md-12">
            <EventsChart
              events={events}
              audienceSelected={audienceSelected}
            />
          </div>
        </div>

      </div>
    </div>
  )
}
export default Dashboard
