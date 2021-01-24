import React from 'react'
import {graphql} from 'gatsby'

export const query = graphql `
  query ($id: String - "") {
    contentfulCity(id: {eq: $id}) {
      name
      description
      location {
        lat
        lon
      }
    }
  }
`

export default function City({data}) {
  return (
    <div>
      <h1>
        Hi I am {data.contentfulCity.name}
      </h1>

      <h2>
        {data.contentfulCity.description}
      </h2>

      <h3>
        {data.contentfulCity.location.lat} - {data.contentfulCity.location.lon}
      </h3>
    </div>
  )
}