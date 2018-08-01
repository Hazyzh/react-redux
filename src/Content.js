import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import { connect } from './react-redux'

class Content extends Component {

  static contextTypes = {
    store: PropTypes.object
  }


  render () {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
        <ThemeSwitch />
      </div>
    )
  }
}

const mapStateToProps = (state) => { //将一个全局state通过props传入<Content />
  return {
    themeColor: state.themeColor
  }
}

Content = connect(mapStateToProps)(Content)


export default Content
