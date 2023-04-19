import {Component} from 'react'
import Header from '../Header'
import EachTab from '../EachTab'

import CardItem from '../CardItem'
import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagesList: props.imagesList,
      tabsList: props.tabsList,
      randomEach:
        props.imagesList[Math.floor(Math.random() * props.imagesList.length)],
      score: 0,
      seconds: 60,
      activeTab: 'FRUIT',
      gameProcess: true,
    }
  }

  componentDidMount() {
    this.decreaseSeconds()
  }

  clickRestart = () => {
    const {imagesList} = this.state
    this.setState({
      gameProcess: true,
      score: 0,
      seconds: 60,
      randomEach: imagesList[Math.floor(Math.random() * imagesList.length)],
    })
    this.decreaseSeconds()
  }

  decreaseSeconds = () => {
    this.timerId = setInterval(() => {
      const {seconds} = this.state
      if (seconds === 0) {
        clearInterval(this.timerId)
        this.setState({gameProcess: false})
      } else {
        this.setState(prevState => ({seconds: prevState.seconds - 1}))
      }
    }, 1000)
  }

  clickTab = id => {
    this.setState({activeTab: id})
  }

  thumbnailImg = id => {
    const {randomEach, imagesList} = this.state
    if (id === randomEach.id) {
      this.setState({
        randomEach: imagesList[Math.floor(Math.random() * imagesList.length)],
      })
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      this.setState({gameProcess: false})
      clearInterval(this.timerId)
    }
  }

  clickRestartBtn = () => {
    this.clickRestart()
  }

  resultCard = () => {
    const {score} = this.state

    return (
      <div className="result-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <p className="heading">
          YOUR SCORE <br />
          {score}
        </p>
        <button
          className="button-reset"
          type="button"
          onClick={this.clickRestartBtn}
        >
          <img
            className="reset-icon"
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    )
  }

  getContent = () => {
    const {activeTab, randomEach, tabsList, imagesList} = this.state
    const filterImagesList = imagesList.filter(
      each => activeTab === each.category,
    )

    return (
      <div className="body-card">
        <div>
          <img src={randomEach.imageUrl} className="random-img" alt="match" />
        </div>

        <ul className="category-list">
          {tabsList.map(each => (
            <EachTab
              each={each}
              key={each.tabId}
              clickCategory={this.clickTab}
              activeTab={activeTab}
            />
          ))}
        </ul>
        <div>
          <ul className="all-thumbnails">
            {filterImagesList.map(each => (
              <CardItem
                each={each}
                key={each.id}
                thumbnailImgClick={this.thumbnailImg}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {score, gameProcess, seconds} = this.state

    return (
      <>
        <Header score={score} seconds={seconds} />
        <div className="bg-container">
          {gameProcess ? this.getContent() : this.resultCard()}
        </div>
      </>
    )
  }
}
export default MatchGame
