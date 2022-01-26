const Tabs = props => {
  const {tabDetails, updateTabItem} = props
  const {optionId, displayText} = tabDetails
  const onClickTabItem = () => {
    updateTabItem(optionId)
  }
  return (
    <button type="button" onClick={onClickTabItem}>
      {displayText}
    </button>
  )
}

export default Tabs
