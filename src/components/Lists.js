const Lists = props => {
  const {taskDetails} = props
  const {title, type, date} = taskDetails
  return (
    <div>
      <h1>{title}</h1>
      <p>{type}</p>
      <p>{date}</p>
    </div>
  )
}

export default Lists
