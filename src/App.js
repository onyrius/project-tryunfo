/* eslint-disable max-lines */
import React from 'react';
import './index.css';
import Form from './components/Form';
import Card from './components/Card';
import Filters from './components/Filters';

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
      cardTrunfo: false,
      hasTrunfo: false,
      buttonDelete: false,
      isSaveButtonDisabled: true,
      valueCardName: '',
      valueCardRare: '',
      valueCardTrunfo: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeOnClick = this.handleChangeOnClick.bind(this);
    this.verifyInput = this.verifyInput.bind(this);
    this.clearState = this.clearState.bind(this);
    this.deleteMyCards = this.deleteMyCards.bind(this);
    this.clearStateHasTrunfo = this.clearStateHasTrunfo.bind(this);
    this.onInputFilter = this.onInputFilter.bind(this);
    this.filteredRender = this.filteredRender.bind(this);
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
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled,
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
    let { hasTrunfo } = this.state;
    if (cardTrunfo) hasTrunfo = true;

    let { buttonDelete } = this.state;
    if (event) buttonDelete = true;
    this.setState((prevState) => ({ buttonDelete,
      hasTrunfo,
      saveNewCards: [...prevState.saveNewCards, newCard],
    }),
    () => { this.clearState(); });
  } // o prevState mantem o saveNewCards e pode add novas informaçoes ao array. e o clearState è chamado sincronamente

  onInputFilter({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    let { valueCardName, valueCardRare, valueCardTrunfo } = this.state;
    valueCardName = value;
    valueCardRare = value;
    valueCardTrunfo = value;
    this.setState({
      valueCardTrunfo,
      valueCardName,
      valueCardRare,
    });
  }

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

 clearStateHasTrunfo = (valueCard) => {
   this.setState((previousState) => (
     { hasTrunfo: valueCard === 'true' ? false : previousState.hasTrunfo }));
 };

 filteredRender() { // referencia Thiago Nobrega: https://github.com/tryber/sd-018-b-project-tryunfo/pull/34/files
   const { saveNewCards, valueCardName, valueCardTrunfo, valueCardRare } = this.state;

   if (valueCardName !== '' && valueCardRare !== 'todas') {
     return saveNewCards.filter((card) => ((card.cardName.includes(valueCardName)
     /* && card.cardRare === valueCardRare */)));
   }
   /*  if (valueCardName !== '') {
     return saveNewCards.filter((card) => ((card.cardName.includes(valueCardName))));
   }
   if (valueCardRare !== 'todas') {
     return saveNewCards.filter((card) => (card.cardRare === valueCardRare));
   }
   if (valueCardTrunfo) {
     return saveNewCards.filter((card) => card.cardTrunfo === valueCardTrunfo);
   } */

   return saveNewCards;
 }

 verifyInput() {
   const {
     cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
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

 // deleta as cartas salvas  /** Source https://stackoverflow.com/questions/60990058/delete-a-div-onclick-in-react */
 deleteMyCards({ target }) {
   const { id, value } = target;
   const { saveNewCards } = this.state;
   const myRemaingCards = saveNewCards.filter((card) => card.cardName !== id);
   this.setState({
     saveNewCards: [...myRemaingCards],
   }, () => this.clearStateHasTrunfo(value));
 }

 render() {
   const {
     cardName, cardDescription, cardTrunfo, cardRare, cardImage, cardAttr1,
     cardAttr2, cardAttr3, buttonDelete,
     isSaveButtonDisabled } = this.state;

   return (
     <div className="container-total">
       <h1>Spirito diVino</h1>
       <div className="form-container">
         <Form
           onInputChange={ this.handleChange }
           onSaveButtonClick={ this.handleChangeOnClick }
           isSaveButtonDisabled={ isSaveButtonDisabled }
           { ...this.state }
         />

         <div className="card">
           <h3 className="h3-do-Card">Visualizaçao</h3>
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
       </div>
       <div>
         <h3> Minhas Adega</h3>
         <div>
           <p className="filtro">Filtro de busca</p>

           <Filters
             onInputFilter={ this.onInputFilter }
           />
         </div>
       </div>
       <div className="render-newcards" id="divToErase">
         { this.filteredRender().map((card, index) => (
           <div key={ index } className="new-card">
             <Card
               { ...card }
               buttonDelete={ buttonDelete }
               deleteMyCards={ this.deleteMyCards }
             />
           </div>
         ))}
       </div>
     </div>
   );
 }
}
export default App;
