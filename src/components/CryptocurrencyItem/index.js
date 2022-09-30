import './index.css'

const CryptocurrencyItem = props => {
  const {crypto} = props
  const {id, currencyLogo, currencyName, euroValue, usdValue} = crypto
  return (
    <li className="list-elements">
      <div className="logo-details">
        <img src={currencyLogo} alt={currencyName} className="cypto-logo" />
        <p className="para">{currencyName}</p>
      </div>
      <div className="logo-details">
        <p className="para">{usdValue}</p>
        <p className="para">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
