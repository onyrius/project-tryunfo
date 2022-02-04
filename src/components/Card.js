import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deleteMyCards,
      buttonDelete,
    } = this.props;

    return (
      <div>
        <p data-testid="name-card">
          <i>Nome: </i>
          { cardName }
        </p>
        <p data-testid="description-card">
          <i>Descrição: </i>
          { cardDescription }
        </p>
        <p data-testid="attr1-card">
          <i>att1: </i>
          { cardAttr1 }
        </p>
        <p data-testid="attr2-card">
          <i>att2: </i>
          { cardAttr2 }
        </p>
        <p data-testid="attr3-card">
          <i>att3: </i>
          { cardAttr3 }
        </p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />

        <div>
          <i>Raridade: </i>
          <p data-testid="rare-card">{ cardRare }</p>
          {
            cardTrunfo
              ? <p data-testid="trunfo-card" name="trunfo">Super Trunfo</p> : <p />
          }
        </div>
        {
          buttonDelete
            ? (
              <button
                id={ cardName }
                value={ cardTrunfo } // atribuindo o valor do hastrunfo ao botao delete para facilitar a captura do dado.
                /** Source "Definindo um valor inicial ao botão:Value
                O elemento <button> pode conter um valor inicial prédeterminado para ser acessado programaticamente. Para isso, basta definir o conteúdo desejado no atributo value ao declarar a tag em um formulário. "
                https://blog.betrybe.com/html/button-html/ */
                name="delete"
                type="button"
                data-testid="delete-button"
                onClick={ deleteMyCards }
              >
                Excluir

              </button>)
            : ''
        }
      </div>
    );
  }
}

const { string, bool, func } = PropTypes;
Card.propTypes = {
  cardName: string.isRequired,
  cardDescription: string.isRequired,
  cardAttr1: string.isRequired,
  cardAttr2: string.isRequired,
  cardAttr3: string.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
  cardTrunfo: bool.isRequired,
  buttonDelete: bool.isRequired,
  deleteMyCards: func.isRequired,
};

export default Card;
