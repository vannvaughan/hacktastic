import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

export default class Nav extends Component {
    
    render () {
        return (
            <div>
                <nav className="Nav">
                    <div className="Nav-header">
                        <div className="Nav-title">Hacktastic</div>
                    </div>
                    <ul className="Nav-navlist">
                        <li className="Home-navButton"><Link to="/">Home</Link></li>
                        <li className="Social-navButton"><Link to="/social">Social</Link></li>
                        <li className="Contact-navButton"><Link to="/Contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

