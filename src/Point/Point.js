import React from 'react';
import './Point.css';
import { 
  Form,
  Col,
  Button
} from 'react-bootstrap';

class Point extends React.Component {
  
  render () {

    return (
      <Form className="fr">
        <Form.Row>
          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Михаил"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>Фамилия</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Гуд"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ваш email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="********" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Адрес</Form.Label>
          <Form.Control placeholder="Шевченко 214/16" />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Город</Form.Label>
            <Form.Control placeholder="Киев" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Индекс</Form.Label>
            <Form.Control placeholder="13246"/>
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Получать рассылку" />
        </Form.Group>

        <Button variant="primary" type="submit">Отправить</Button>
      </Form>
    );

  }
}

export default Point;
