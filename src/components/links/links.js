import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
//import './link.css'

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

  export default () => (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/displayGrid/">Display a grid</ListLink>
          <ListLink to="/about/">Adding blockers</ListLink>
          <ListLink to="/">Allow player movement</ListLink>
          <ListLink to="/contact/">Allow player movement</ListLink>
        </ul>
      </header>
    </div>
  )

  