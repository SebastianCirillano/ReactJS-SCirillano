import React from 'react'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

import "./navbar.css"


export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/"><img className="logo"src="/img/lines_cycle_leaf.jpg" alt="icono" /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                            <Link class="nav-link" to="/categoria/interior">Interior</Link>
                            
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/categoria/exterior">Exterior</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/categoria/macetas">Macetas</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <CartWidget/>

        </nav>
    )
}
