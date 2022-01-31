import React from 'react';
import './index.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      saveNewCards: [],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      // hasTrunfo: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeOnClick = this.handleChangeOnClick.bind(this);
    this.verifyInput = this.verifyInput.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      this.verifyInput();
    });
  }

  handleChangeOnClick(event) {
    event.preventDefault();
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
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    };
    this.setState((prevState) => ({
      saveNewCards: [...prevState.saveNewCards, newCard] }), () => this.clearState());
  } // o prevState mantem o saveNewCards e pode add novas informaçoes ao array. e o clearState è chamado sincronamente

 clearState = () => {
   const initialState = {
     cardName: '',
     cardDescription: '',
     cardImage: '',
     cardAttr1: '0',
     cardAttr2: '0',
     cardAttr3: '0',
     cardRare: 'normal',
     cardTrunfo: false,
     isSaveButtonDisabled: true,
   };
   this.setState({ ...initialState });
 };

 verifyInput() {
   const {
     cardName,
     cardDescription,
     cardAttr1,
     cardAttr2,
     cardAttr3,
     cardImage,
     cardRare,
   } = this.state;
   const somaAllAttr = 210;
   const maxEachAttr = 90;
   const somaCardAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

   if (cardName.length !== 0
      && cardDescription.length !== 0
      && cardRare.length !== 0
      && cardImage.length !== 0
      && (somaCardAttr <= somaAllAttr)
      && (Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxEachAttr)
      && (Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxEachAttr)
      && (Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxEachAttr)

   ) {
     this.setState({ isSaveButtonDisabled: false });
   } else {
     return this.setState({ isSaveButtonDisabled: true });
   }
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
