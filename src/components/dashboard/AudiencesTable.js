import React from 'react'
import { Close } from '@material-ui/icons'

export default function AudiencesTable(props) {

  if ( !props.audiences ) {
    return ('')
  }

  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Created at</th>
          <th colspan="2">Event Types</th>
        </tr>
      </thead>
      <tbody>
      {
        props.audiences.map(audience => {
          return(
            <tr
              onClick={() => props.toggleAudience(audience.id)}
              class={`cursor-pointer ${props.audienceSelected==audience.id && "bg-info"}`}
            >
              <td>{audience.id}</td>
              <td>{audience.name}</td>
              <td>{audience.createdAt}</td>
              <td>{audience.events.length && audience.events.join(', ')}</td>
              <td>{audience.id==props.audienceSelected && <Close />}</td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  )
}
