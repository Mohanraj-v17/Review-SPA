import { Link } from 'react-router-dom'
import { useContext } from 'react'
import ThemeContext from './context/Feedbacktheme'
import { FaMoon, FaSun } from 'react-icons/fa'

const Header = ({ text, bgColor, textColor }) => {

  const { theme, toggleTheme } = useContext(ThemeContext)

  const headerStyle = {
    backgroundColor: theme === 'dark' ? '#1a1a1a' : bgColor,
    color: theme === 'dark' ? '#fff' : textColor,
    transition: 'all 0.3s ease'
  }

  return (
    <header style={headerStyle}>
      <div className="container">
        <div className="header-content">
          <Link to="/">
            <h2>{text}</h2>
          </Link>
          <div className="header-nav">
            <Link to="/about">About us</Link>
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header



