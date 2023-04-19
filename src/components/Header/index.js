import './index.css'

const Header = props => {
  const {score, seconds} = props
  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logos-img"
      />
      <ul className="score-card">
        <li className="list-score">
          <p className="score">{`Score: ${score}`}</p>
        </li>
        <li className="list-score">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            className="timer"
            alt="timer"
          />
          <p className="seconds">{`${seconds} Sec`}</p>
        </li>
      </ul>
    </nav>
  )
}
export default Header
