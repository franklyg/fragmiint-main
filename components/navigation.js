import React, { Component } from 'react'
import Link from 'next/link'
export default class Navigation extends Component{

  state = {
    toggleMenu: false
  }

  toggleMenuOnClick = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })
  }
  // <div className="top-bar">
  //   <img />
  //   <div className="menu-btn" onClick={this.toggleMenuOnClick}>
  //     Open Menu
  //   </div>
  // </div>

  render(){
    return(
      <>
        <nav className={`main-navigation ${!this.state.toggleMenu ? 'not-active' : 'active'}` }>
          <ul>
            <li className="link-1" onClick={this.toggleMenuOnClick}>
              <Link href="/">
                <a>
                  Home
                </a>
              </Link>
            </li>
            <li className="link-2" onClick={this.toggleMenuOnClick}>
              <Link href="/about">
                <a>
                  About
                </a>
              </Link>
            </li>
            <li className="link-3" onClick={this.toggleMenuOnClick}>
              <Link href="/music">
                <a>
                  Music
                </a>
              </Link>
            </li>
            <li className="link-4" onClick={this.toggleMenuOnClick}>
              <Link href="mailto:f.gisonni@gmail.com">
                <a>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}
