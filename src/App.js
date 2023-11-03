import {Component} from 'react'
import ConfigurationContext from './context/ConfigurationContext'
import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onToggleShowContent = () => {
    this.setState(prevState => {
      const newValue = !prevState.showContent
      console.log('handler triggered')
      return {showContent: newValue}
    })
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prevState => {
      const newValue = !prevState.showLeftNavbar
      return {showLeftNavbar: newValue}
    })
  }

  onToggleShowRightNavbar = () => {
    this.setState(prevState => {
      const newValue = !prevState.showRightNavbar
      return {showRightNavbar: newValue}
    })
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
