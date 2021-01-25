import React from 'react'
import {Link, graphql} from 'gatsby'

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
          gatsbyPath(filePath: "/city/{contentfulCity.name}")
        }
      }
    }
  }
`

export default function Home({data}) {
  return(
    <div>
      <h1>
        Hi I am the home page
      </h1>

      <ul>
        {
          data.allContentfulCity.edges.map(({node:city}) =>(
            <li 
            key={city.name}
            >
              <Link to={city.gatsbyPath}>{city.name}</Link>
              {city.description} - {city.location.lat} - {city.location.lon}
            </li>
          ))
        }
      </ul>
    </div>
  )
}