import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, id, logoUrl, title, domainUrl} = historyDetails

  const deleteItem = () => {
    deleteHistory(id)
  }

  return (
    <div className="list-container">
      <li className="list-style">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="app-image" alt="" />
        <p className="title">{title}</p>
        <p className="title">{domainUrl}</p>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-image"
            alt="delete"
            onClick={deleteItem}
          />
        </div>
      </li>
    </div>
  )
}
export default HistoryItem
