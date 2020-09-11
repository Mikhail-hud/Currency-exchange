import React from 'react';
import './About.css';
import {
  Container, 
  Tab, 
  Nav, 
  Row, 
  Col
} from 'react-bootstrap';
import Logo from './logo3.png'


class About extends React.Component {
  
  render () {

    return (
      <Container >
        <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
          <Row >
            <Col sm={3}>
              <Nav variant="pills" className='flex-column mt-2' >
                <Nav.Item className="mt-5">
                  <Nav.Link eventKey="first">Сертификат</Nav.Link>
                </Nav.Item >
                <Nav.Item className="mt-3">
                  <Nav.Link eventKey="second">Сотрудничество</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mt-3">
                  <Nav.Link eventKey="third">Контакты</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mt-3">
                  <Nav.Link eventKey="fourth">Партнёры</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mt-3">
                  <Nav.Link eventKey="fifth">Покупка и оплата</Nav.Link>
                </Nav.Item >
              </Nav>
            </Col>
            <Col sm={9} >
                <Tab.Content className="mt-5 about" >
                  <Tab.Pane eventKey="first">
                    <h4 className="text-center">Сертификат</h4>
                    <img src={Logo} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptate corporis nobis ipsum sint magnam temporibus autem nihil in officia saepe, numquam non consequatur, dolore doloribus tempora? Aliquam, incidunt magni!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptate corporis nobis ipsum sint magnam temporibus autem nihil in officia saepe, numquam non consequatur, dolore doloribus tempora? Aliquam, incidunt magni!</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <h4 className="text-center">Сотрудничество</h4>
                    <img src={Logo} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptate corporis nobis ipsum sint magnam temporibus autem nihil in officia saepe, numquam non consequatur, dolore doloribus tempora? Aliquam, incidunt magni!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptate corporis nobis ipsum sint magnam temporibus autem nihil in officia saepe, numquam non consequatur, dolore doloribus tempora? Aliquam, incidunt magni!</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <h4 className="text-center">Контакты</h4>
                    <img src={Logo} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptate corporis nobis ipsum sint magnam temporibus autem nihil in officia saepe, numquam non consequatur, dolore doloribus tempora? Aliquam, incidunt magni!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptate corporis nobis ipsum sint magnam temporibus autem nihil in officia saepe, numquam non consequatur, dolore doloribus tempora? Aliquam, incidunt magni!</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <h4 className="text-center">Партнёры</h4>
                    <img src={Logo} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptate corporis nobis ipsum sint magnam temporibus autem nihil in officia saepe, numquam non consequatur, dolore doloribus tempora? Aliquam, incidunt magni!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptate corporis nobis ipsum sint magnam temporibus autem nihil in officia saepe, numquam non consequatur, dolore doloribus tempora? Aliquam, incidunt magni!</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <h4 className="text-center">Покупка и оплата</h4>
                    <img src={Logo} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptate corporis nobis ipsum sint magnam temporibus autem nihil in officia saepe, numquam non consequatur, dolore doloribus tempora? Aliquam, incidunt magni!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptate corporis nobis ipsum sint magnam temporibus autem nihil in officia saepe, numquam non consequatur, dolore doloribus tempora? Aliquam, incidunt magni!</p>
                  </Tab.Pane>
                </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
        
    );

  }
}


export default About;
