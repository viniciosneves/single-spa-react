import React from "react";
import { Link, BrowserRouter } from 'react-router-dom'

import './styles.css'

const Root = (props) => (
  <BrowserRouter>
    <header class="header">
      <a href="" class="logo">
        <img src="https://previews.123rf.com/images/findriyani/findriyani1901/findriyani190100987/114841401-snow-icon-logo-vector.jpg" alt=""/>
      </a>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
      <ul class="menu">
        <li>
          <Link to="/foo">Foo</Link>
        </li>
        <li>
          <Link to="/bar">Bar</Link>
        </li>
      </ul>
    </header>
  </BrowserRouter>
)

export default Root