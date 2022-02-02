import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    console.log('sou o hasTrunfo dentro do Form', hasTrunfo);
    return (
      <form>
        <h3>Insira sua carta</h3>
        <div className="form-input">
          <label htmlFor="name-input">
            Nome
            <input
              data-testid="name-input"
              type="text"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="form-input">
          <label htmlFor="description-input">
            Descrição
            <textarea
              name="cardDescription"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="form-atr">
          <label htmlFor="attr1-input">
            Atr 1
            <input
              name="cardAttr1"
              data-testid="attr1-input"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
              className="atr-input"
            />
          </label>
          <label htmlFor="attr2-input">
            Atr 2
            <input
              name="cardAttr2"
              data-testid="attr2-input"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
              className="atr-input"
            />
          </label>
          <label htmlFor="attr3-input">
            Atr 3
            <input
              name="cardAttr3"
              data-testid="attr3-input"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
              className="atr-input"
            />
          </label>
        </div>

        <div className="form-image">
          <label htmlFor="image-input">
            Imagem
            <input
              name="cardImage"
              data-testid="image-input"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="form-input">
          <label htmlFor="cardRare">
            <strong>Raridade: </strong>
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>

        <div className="form-input">
          <label htmlFor="trunfo-input">
            <strong>Super Trunfo</strong>
            { hasTrunfo && <p>Você já tem um Super Trunfo em seu baralho </p> }
            { !hasTrunfo && <input
              name="cardTrunfo"
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />}

          </label>
        </div>
        <button
          name="submit"
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
  cardName: PropTypes.string.isRequired,
  cardDescription: string.isRequired,
  cardAttr1: string.isRequired,
  cardAttr2: string.isRequired,
  cardAttr3: string.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
  cardTrunfo: bool.isRequired,
  hasTrunfo: bool.isRequired,
  isSaveButtonDisabled: bool.isRequired,
  onInputChange: func.isRequired,
  onSaveButtonClick: func.isRequired,
};
export default Form;
