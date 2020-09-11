import React from 'react';
import './Nav.css';
import {Nav} from 'react-bootstrap';


class Navigation extends React.Component {
  
  render () {
    let nav = {'Главная': '/', 'О нас': '/about','Регистрация': '/point', 'Other': 404};

    return (
      <Nav className="mr-auto" >
          {Object.keys(nav).map((iteam, index) => {
              if(typeof(nav[iteam]) !== 'number') {
                  return <Nav.Link key={index} href={nav[iteam]}>{iteam}</Nav.Link>
              }
              else {
                return false
              }
          })}
      </Nav>
    )      
  }
}


export default Navigation;
