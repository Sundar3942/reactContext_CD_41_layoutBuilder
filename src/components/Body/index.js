// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body">
          {showLeftNavbar && (
            <div className="left-navbar">
              <h3 className="body-heading">Left Navbar Menu</h3>
              <ul type="none">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h3 className="body-heading">Content</h3>
              <p>
                Lorem ipsum upesnuaspd sjdfijadnf asdjfias dfn aisdfas ndf
                asjdfnasf
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-navbar">
              <h3 className="body-heading">Right Navbar Menu</h3>
              <div className="ad-container">
                <p className="ad">Ad 1</p>
              </div>
              <div className="ad-container">
                <p className="ad">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
