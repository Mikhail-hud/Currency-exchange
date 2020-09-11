import React from "react";
import "./Calc.css";
import {
  Card, Row, Col
} from 'react-bootstrap';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }
  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate };
  }
  calcRate = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    let countCurrency = elements["count-currency"].value;
    let typeCurrency = elements["type-currency"].value;
    this.setState({
      result: (countCurrency / this.state.rate[typeCurrency]).toFixed(2),
    });
  };
  render() {
    return (
        <Card className="bg-dark text-white calc">
          <h3 className="text-center">Колькулятор Обмена</h3>
            <div>
              <h4 className="mb-3">Меняю</h4>
                  <form onSubmit={this.calcRate}>
                    <Row>
                      <Col sm={6}>
                        <input type="number" defaultValue="150" name="count-currency"  className="custom"/>
                      </Col>
                      <Col sm={6}>
                        <select name="type-currency" id="" className="custom">
                          {Object.keys(this.state.rate).map((keyName, i) => (
                            <option key={keyName} defaultValue={keyName}>
                              {keyName}
                            </option>
                          ))}
                        </select>
                      </Col>
                    </Row>
                  <input type="submit" value="Рассчитать"/>
                  </form>
                  <div>
                      <h4 className="mt-3">Результат: {this.state.result}</h4>
                  </div>
            </div>
        </Card>
    );
  }
}

export default Calc;
