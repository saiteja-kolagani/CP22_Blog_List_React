// Write your JS code here
import {Component} from 'react'

import './index.css'

class BlogItem extends Component {
  render() {
    const {each} = this.props

    return (
      <li className="list-container">
        <div>
          <h1 className="list-title">{each.title}</h1>
          <p className="list-description">{each.description}</p>
        </div>
        <p className="list-date">{each.publishedDate}</p>
      </li>
    )
  }
}

export default BlogItem
