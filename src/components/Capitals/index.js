import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {selectedOption: countryAndCapitalsList[0].id}

  onChangeSelect = event => {
    this.setState({
      selectedOption: event.target.value,
    })
  }

  getCountry = () => {
    const {selectedOption} = this.state

    const selectedCapitalsCountry = countryAndCapitalsList.find(
      eachItem => eachItem.id === selectedOption,
    )
    return selectedCapitalsCountry.country
  }

  render() {
    const {selectedOption} = this.state
    const country = this.getCountry(selectedOption)

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="option-container">
            <select
              className="option-select"
              onChange={this.onChangeSelect}
              value={selectedOption}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  className="options"
                  key={eachItem.id}
                  value={eachItem.id}
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="country-desc">is capital of which country?</p>
          </div>
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
