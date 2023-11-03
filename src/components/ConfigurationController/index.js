// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const toggleContent = event => {
        onToggleShowContent(event)
      }
      const toggleLeftNavbar = event => {
        onToggleShowLeftNavbar(event)
      }
      const toggleRightNavbar = event => {
        onToggleShowRightNavbar(event)
      }

      return (
        <div className="configuration-controller">
          <h1>Layout</h1>

          <div className="input-container">
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onChange={toggleContent}
            />
            <label htmlFor="content">Content</label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              id="leftNavbar"
              checked={showLeftNavbar}
              onChange={toggleLeftNavbar}
            />
            <label htmlFor="leftNavbar">Left Navbar</label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              id="rightNavbar"
              checked={showRightNavbar}
              onChange={toggleRightNavbar}
            />
            <label htmlFor="rightNavbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
