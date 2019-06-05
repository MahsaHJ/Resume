import React, { Component } from 'react';
import NavBar, { ElementsWrapper } from 'react-scrolling-nav';
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import './NavbarSection.css';
import ResponsiveMenu from 'react-responsive-navbar';
import ThemeSwitch from 'react-theme-switch';
 
//class NavbarSection extends Component {
//  render() {
  //  return (
    //  <ResponsiveMenu
      //  menuOpenButton={<div />}
//        menuCloseButton={<div />}
  //      changeMenuOn="500px"
    //    largeMenuClassName="large-menu-classname"
      //  smallMenuClassName="small-menu-classname"
//        menu={
  //        <ul>
    //        <li><a href=".TitleSection">Item 1</a></li>
      //      <a href=".AboutSection">Item 1</a>
        //    <a href=".SkilSection">Item 1</a>
//          </ul>
  //      }
    //  />
//    );
 // }
//}
class NavbarSection extends Component {
    render() {
        return (
          <div>
            
            <header id="home">
                <nav id="nav-wrap">

                    <ul id="nav" className="nav">
                        <li><ThemeSwitch preserveRasters /></li>
                        <li><a href="#title">Title</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                    </ul>

                </nav>

            </header>
            
          </div>
        );
    }
}



export default NavbarSection;