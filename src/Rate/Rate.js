import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc'
import { 
  Container, 
  CardDeck, 
  Card } from 'react-bootstrap';

class Rate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: '',
      currencyRate: {},
    }
    this.currency = ['USD', 'RUB', 'BRL', 'PHP'];
    this.rate();
  }
  rate  = () => {
    fetch('https://api.exchangeratesapi.io/latest')
    .then(data => {
      return data.json();
    })
    .then(data => {
      this.setState({date: data.date})
      let result = {}
      for (let i = 0; i < this.currency.length; i++) {
        result[this.currency[i]] = data.rates[this.currency[i]]
      }
      this.setState({currencyRate: result})
    })

  }

  render () {

    return (
      <Container>
        <h3 className="text-center m-5"> Курс валют на {this.state.date}</h3>
        <CardDeck>
          {Object.keys(this.state.currencyRate).map((keyName, i) => 
              (
                <Card key={keyName} className="text-center bg-info border-muted mt-4">
                    <div className="currency-name">{keyName}</div>
                    <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}</div>
                    <p>* Можно купить за 1 EUR</p>
                </Card>
              )
              )}
        </CardDeck>
        <Calc rate={this.state.currencyRate}/>
      </Container>

    );

  }
}


export default Rate;
