import React from "react"
import { Link } from "gatsby"
import { RiArrowUpSLine } from 'react-icons/ri';

const MenuItems = [
  {
    path: "/blog",
    title: "Blog"
  },
  {
    path: "/",
    title: "About"
  },

]

const ListLink = (props) => (<li><Link to={props.to}>{props.children}</Link></li>)


class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showMenu: false}

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({      
      showMenu: !state.showMenu    
    }))
  }

  render () {
    const listMenuItems = MenuItems.map((menuItem, index) => {
      if (this.props.location.pathname === menuItem.path) {
        return <li><button className="button-link-lookalike" key={index} onClick={this.handleToggleClick}>{menuItem.title}</button></li>
      }
      return <ListLink key={index} to={menuItem.path}>{menuItem.title}</ListLink>
    }
    )
    return (
      <nav className="site-navigation">

        <button onClick={this.handleToggleClick} className={"menu-trigger" + (this.state.showMenu ? " is-active" : "")}>
          
          <div className="icon-menu-line"><div className="menu-text">Menu</div></div>
          <div className="icon-menu-close"><RiArrowUpSLine/></div>
         
        </button>
        <ul>
          {listMenuItems}
        </ul>
      </nav>
    )
  }
}

export default Navigation
