import React from 'react'
import {graphql} from 'gatsby'

export const query = graphql `
  query MyQuery {
    allContentfulCity {
      edges {
        node {
          name
          description
          location {
            lat
            lon
          }
        }
      }
    }
  }
`

export default function About({data}) {
  return(
    <div>
      <h1>
        Hi I am the about page
      </h1>

      <ul>
        {
          data.allContentfulCity.edges.map(({node:city}) =>(
            <li key={city.name}>
              {city.name}
              {city.description} - {city.location.lat} - {city.location.lon}
            </li>
          ))
        }
      </ul>
    </div>
  )
}