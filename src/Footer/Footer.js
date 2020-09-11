import React from 'react';
import './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


class Footer extends React.Component {
  
  render () {

    let nav = {'Гарантии': '/', 'О сервисе': '/', 'Условия возврата': '/', 'Соглашение о использовании сервиса': '/'};

    return (
        <MDBFooter  className="font-small pt-4 mt-4 footer-title ">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6" >
                        <h1 className="footer-title"><a href="/">Currency exchange</a></h1>
                    </MDBCol>
                    <MDBCol md="6">
                        <ul>
                            {Object.keys(nav).map((item, index) => {
                                return <li key={index}><a href={nav[item]}>{item}</a></li>
                            })}
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    <p>2020 &copy; All Rights Reserved</p>
                </MDBContainer>
            </div>
        </MDBFooter>
    );

  }
}


export default Footer;
