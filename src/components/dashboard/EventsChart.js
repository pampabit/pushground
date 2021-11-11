import React from 'react'
import { BarChart, Bar, Legend, Tooltip, CartesianGrid, XAxis, YAxis } from 'recharts'

export default function EventsChart(props) {

    const eventsData = props.events.map(data => {
        let newData = props.audienceSelected ? data.audiences[props.audienceSelected] : data.totals
        newData['date'] = data.date
        return newData
    })

    return (
      <BarChart width={900} height={400} data={eventsData}>
        <CartesianGrid strokeDasharray="#ccc" />
        <Bar type="monotone" dataKey="view_content" fill="blue" />
        <Bar type="monotone" dataKey="page_scroll" fill="green" />
        <Bar type="monotone" dataKey="conversion" name="conversión" fill="black" />
        <Legend />
        <Tooltip />
        <XAxis dataKey="date" />
        <YAxis />
      </BarChart>
    )
}
