import React from 'react'
import {Link  } from 'react-router-dom'

import './estilos.css'

const Base = ({ children }) => (
  <main>
    <h1>Vingadores</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/point-breaker">Point Breaker</Link>
        </li>
        <li>
          <Link to="/strongest-avenger">Strongest Avenger</Link>
        </li>
      </ul>
    </nav>
    {children}
  </main>
)

export default Base