import "./TopBox.css"
import { topDealUsers } from "../../data.js"
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
const TopBox = () => {
  return (
    <Link to="/expenses" style={{ textDecoration: 'none', color: 'inherit' }}> {/* Wrap in Link */}
      <div className="topBox">
        <h1>Largest Transactions</h1>
        <div className="list">
          {topDealUsers.map(user=>(
            <div className="listItem" key={user.id}>
              <div className="user">
                <img src={user.img} alt="" />
                <div className="userTexts">
                  <span className="username">{user.username}</span>
                  <span className="email">{user.email}</span>
                </div>
              </div>
              <span className="amount">${user.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default TopBox;