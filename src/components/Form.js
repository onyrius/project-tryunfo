import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  /*  constructor() {
    super();
    this.state = {
      cardTrunfo: false,
    };
  }
 */
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            data-testid="name-input"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1-input">
          Atributo 1
          <input
            data-testid="attr1-input"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2-input">
          Atributo 2
          <input
            data-testid="attr2-input"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3-input">
          Atributo 3
          <input
            data-testid="attr3-input"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <select
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="trunfo-input">
          <input
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          disabled={ isSaveButtonDisabled }
          type="submit"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}

const { string, func, bool } = PropTypes;
Form.propTypes = {
  cardName: string.isRequired,
  cardDescription: string.isRequired,
  cardAttr1: string.isRequired,
  cardAttr2: string.isRequired,
  cardAttr3: string.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
  cardTrunfo: bool.isRequired,
  // hasTrunfo: bool.isRequired,
  isSaveButtonDisabled: bool.isRequired,
  onInputChange: func.isRequired,
  onSaveButtonClick: func.isRequired,
};
export default Form;
