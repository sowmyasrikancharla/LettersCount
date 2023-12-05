/* eslint-disable no-restricted-syntax */
// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState(() => ({
      searchInput: event.target.value,
    }))
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="con">
        <div>
          <h1 className="head">Calculate the Letters you enter</h1>
          <label htmlFor="inp" className="lab">
            Enter the phrase
          </label>
          <br />
          <input
            className="inp-box"
            type="text"
            id="inp"
            placeholder="Enter the phrase"
            onChange={this.onChangeSearchInput}
          />
          <br />
          <button className="but">
            <p>No.of letters: {searchInput.length}</p>
          </button>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
