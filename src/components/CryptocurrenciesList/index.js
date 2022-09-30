import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem/index'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {crypto: [], isLoading: true}

  componentDidMount() {
    this.getCryptoDetails()
  }

  getCryptoDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      euroValue: eachData.euro_value,
      usdValue: eachData.usd_value,
    }))
    this.setState({crypto: updatedData, isLoading: false})
  }

  render() {
    const {crypto, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="bg-container">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <ul className="ul-elements">
              <li className="first-list">
                <h1 className="ul-heading">Coin Type</h1>
                <div className="second-heading">
                  <h1 className="ul-heading">USD</h1>
                  <h1 className="ul-heading">EURO</h1>
                </div>
              </li>
              {crypto.map(eachCrypto => (
                <CryptocurrencyItem crypto={eachCrypto} key={eachCrypto.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
