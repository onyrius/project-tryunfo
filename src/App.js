import React from 'react';
import './index.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeOnClick = this.handleChangeOnClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
    // const somaAllAttr = 210;
    const maxEachAttr = 90;
    if (value === null
      || value === undefined
      || value === ''
      || (target.type === 'number' && value >= maxEachAttr) // os atributos sao do tipo number
      || (target.type === 'number' && value < 0) // os atributos sao do tipo number
      || (target.type === 'number' && target.name) // os atributos sao do tipo number
    ) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      return this.setState({ isSaveButtonDisabled: false });
    }
  }

  handleChangeOnClick(event) {
    event.preventDefault();
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleChangeOnClick }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
