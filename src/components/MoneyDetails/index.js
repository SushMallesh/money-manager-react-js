import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Balance</p>
          <p className="details-money">Rs {balanceAmount}</p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Income</p>
          <p className="details-money">Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Expenses</p>
          <p className="details-money">Rs {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails

// const MoneyDetails = props => {
//   const {eachMoneyDetails} = props
//   const {
//     moneyType,
//     iconUrl,
//     iconAltText,
//     className,
//     // testId,
//     value,
//   } = eachMoneyDetails

//   return (
//     <li className={`card-item ${className}`}>
//       <img className="icon" src={iconUrl} alt={iconAltText} />
//       <div className="money-details-card">
//         <p className="money-type">{moneyType}</p>
//         <p>Rs {value}</p>
//       </div>
//     </li>
//   )
// }
