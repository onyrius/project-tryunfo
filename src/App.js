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
      cardTrunfo: false,
      hasTrunfo: false,
      buttonDelete: false,
      isSaveButtonDisabled: true,

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeOnClick = this.handleChangeOnClick.bind(this);
    this.verifyInput = this.verifyInput.bind(this);
    this.clearState = this.clearState.bind(this);
    this.deleteMyCards = this.deleteMyCards.bind(this);
    this.clearStateHasTrunfo = this.clearStateHasTrunfo.bind(this);
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
    let { hasTrunfo } = this.state;
    if (cardTrunfo) {
      hasTrunfo = true;
    } else {
      hasTrunfo = false;
    }

    let { buttonDelete } = this.state;
    if (event) buttonDelete = true;
    console.log('handleChangeOnClick foi ativado');
    this.setState((prevState) => ({
      buttonDelete,
      hasTrunfo,
      saveNewCards: [...prevState.saveNewCards, newCard] }), () => {
      this.clearState();
    });
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

 // verificar bug clearStatehasTrunfo && deleteMycards
 clearStateHasTrunfo = (valueCard) => {
   this.setState((previousState) => (
     { hasTrunfo: valueCard === 'true' ? false : previousState.hasTrunfo }));
 };

 // verifica os inputs para ativar o botao salvar.
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

 // deleta as cartas salvas
 deleteMyCards({ target }) {
   const { id, value } = target;

   console.log('esse è o meu id', id);
   console.log('esse è o meu value', value);
   console.log('deleteMyCards foi ativado');
   const { saveNewCards } = this.state;
   console.log('sou o saveNewCards', saveNewCards);

   const myRemaingCards = saveNewCards.filter((card) => card.cardName !== id);
   console.log('minhas cartas remanescentes', myRemaingCards);
   //  let { hasTrunfo } = this.state;
   // valor true significa que è trunfo
   /* if (value === true) {
     hasTrunfo = false;
   } else {
     hasTrunfo = true;
   } */
   this.setState({
     saveNewCards: [...myRemaingCards],
   }, () => this.clearStateHasTrunfo(value));
 }

 /** Source https://stackoverflow.com/questions/60990058/delete-a-div-onclick-in-react */
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
     hasTrunfo,
     saveNewCards,
     buttonDelete,
     isSaveButtonDisabled,
   } = this.state;
   console.log('sou o hastrunfo dentro do render', hasTrunfo);
   return (
     <div className="container-total">
       <h1>Spirito diVino</h1>
       <div className="form-container">
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
           hasTrunfo={ hasTrunfo }
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
       <h3 className=".minhas-cartastitle"> Minhas Cartas</h3>
       <div className="render-newcards" id="divToErase">
         {
           saveNewCards.map((card, index) => (
             <div key={ index } className="new-card">
               <Card
                 cardName={ card.cardName }
                 cardDescription={ card.cardDescription }
                 cardAttr1={ card.cardAttr1 }
                 cardAttr2={ card.cardAttr2 }
                 cardAttr3={ card.cardAttr3 }
                 cardImage={ card.cardImage }
                 cardRare={ card.cardRare }
                 cardTrunfo={ card.cardTrunfo }
                 buttonDelete={ buttonDelete }
                 deleteMyCards={ this.deleteMyCards }
               />
             </div>
           ))
         }

       </div>
     </div>
   );
 }
}

export default App;
