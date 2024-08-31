import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="logo-container">
      <img src={imageUrl} className="app-logo" alt="img" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
