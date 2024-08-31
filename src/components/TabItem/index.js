import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId} = props
  const {displayText, tabId} = tabDetails
  const onClickfn = tabId => {
    updateTabId(tabId)
  }
  return (
    <li>
      <button onClick={onClickfn} type="button">
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
