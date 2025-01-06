import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function About() {
    return (
        <div>
            <h1 style={{ textAlign: "center", marginTop: "2rem" }}>This is About Page 😍</h1>
            <div className='d-flex justify-content-evenly'>
                <Link to="setting">Setting</Link>
                <Link to="dashboard">Dashboard</Link>
            </div>
            <hr />
            <Outlet />
        </div>
    )
}
