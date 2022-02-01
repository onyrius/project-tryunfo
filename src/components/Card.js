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
      </div>
    );
  }
}

const { string, bool } = PropTypes;
Card.propTypes = {
  cardName: string.isRequired,
  cardDescription: string.isRequired,
  cardAttr1: string.isRequired,
  cardAttr2: string.isRequired,
  cardAttr3: string.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
  cardTrunfo: bool.isRequired,
};

export default Card;
