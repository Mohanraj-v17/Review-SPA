import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <div className='about'>
            <h1>This is a about page</h1>
            <p>Review App is a modern React-based web application that allows users to explore, create, and manage reviews seamlessly. Built with Vite for high performance and fast development, the app delivers a smooth and responsive user experience. It uses dynamic routing, reusable components, and efficient state management to ensure scalability and maintainability.
            </p>
            <Link to="/" className='btn btn-primary'>Go to home</Link>
        </div>
    )
}

export default About