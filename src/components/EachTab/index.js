import './index.css'

const EachTab = props => {
  const {each, clickCategory, activeTab} = props
  const {tabId, displayText} = each

  const tabButton = tabId === activeTab ? 'button-yellow' : 'button-tab'

  const onClickTab = () => {
    clickCategory(tabId)
  }
  return (
    <li className="tab">
      <button type="button" className={tabButton} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default EachTab
