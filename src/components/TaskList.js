import {Component} from 'react'
import {v4} from 'uuid'
import Lists from './Lists'
import Tabs from './Tabs'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class TaskList extends Component {
  state = {
    task: '',
    taskList: [],
    optionId: tagsList[0].optionId,
  }

  onChangeTask = event => {
    this.setState({task: event.target.value})
  }

  onChangeOption = event => {
    this.setState({optionId: event.target.value})
  }

  onAdd = e => {
    e.preventDefault()
    const {task, optionId} = this.state
    const typeOption = tagsList.find(
      eachOption => eachOption.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTaskList = {
      id: v4(),
      date: new Date().toLocaleString(),
      title: task,
      type: displayText,
    }

    this.setState(prevState => ({
      taskList: [...prevState.taskList, newTaskList],
      task: '',
      optionId: tagsList[0].optionId,
    }))
  }

  getFilteredTasks = () => {
    const {optionId, taskList} = this.state
    const filteredTasks = taskList.filter(
      eachTask => eachTask.type.displayText === optionId.displayText,
    )
    return filteredTasks
  }

  updateTabItem = optionId => {
    this.setState({optionId})
  }

  render() {
    const {task, optionId} = this.state
    const filteredTasks = this.getFilteredTasks()
    return (
      <div>
        <h1>Tasks</h1>
        <input type="text" value={task} onChange={this.onChangeTask} />
        <select value={optionId} onChange={this.onChangeOption}>
          {tagsList.map(eachOption => (
            <option key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </option>
          ))}
        </select>
        <button type="button" onClick={this.onAdd}>
          Add
        </button>
        <div>
          {tagsList.map(eachTab => (
            <Tabs
              key={eachTab.optionId}
              tabDetails={eachTab}
              updateTabItem={this.updateTabItem}
            />
          ))}
        </div>
        <div>
          {filteredTasks.map(eachTask => (
            <Lists key={eachTask.optionId} taskDetails={eachTask} />
          ))}
        </div>
      </div>
    )
  }
}

export default TaskList
