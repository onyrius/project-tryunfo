import React from 'react';
// import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
  //  const { } = this.props;
    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            data-testid="name-input"
            type="text"
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea data-testid="description-input" />
        </label>
        <label htmlFor="attr1-input">
          Atributo 1
          <input
            data-testid="attr1-input"
            type="number"
          />
        </label>
        <label htmlFor="attr2-input">
          Atributo 2
          <input
            data-testid="attr2-input"
            type="number"
          />
        </label>
        <label htmlFor="attr3-input">
          Atributo 3
          <input
            data-testid="attr3-input"
            type="number"
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            data-testid="image-input"
            type="text"
          />
        </label>
        <select data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="trunfo-input">
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

/* Form.propTypes = {
  : PropTypes.string.isRequired,
  : PropTypes.string.isRequired,
}; */
export default Form;
