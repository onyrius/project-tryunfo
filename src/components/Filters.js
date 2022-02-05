import React from 'react';
import PropTypes from 'prop-types';

export default class Filters extends React.Component {
  render() {
    const {
      onInputFilter,
      valueCardName,
      valueCardRare,
      valueCardTrunfo,
    } = this.props;

    return (
      <>
        <label htmlFor="name-filter" className="filtro">
          Seu vinho
          <input
            data-testid="name-filter"
            type="text"
            name="filterName"
            value={ valueCardName }
            onChange={ onInputFilter }
          />
        </label>
        <label htmlFor="cardRareFilter" className="filtro">
          Raridade:
          <select
            name="cardRareFilter"
            data-testid="rare-filter"
            value={ valueCardRare }
            onChange={ onInputFilter }

          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="cardTrunfo" className="filtro">
          Super Trunfo
          <input
            name="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-filter"
            checked={ valueCardTrunfo }
            value={ valueCardTrunfo }
            onChange={ onInputFilter }
          />
        </label>
      </>
    );
  }
}

const { func, string, bool } = PropTypes;
Filters.propTypes = {
  onInputFilter: func.isRequired,
  valueCardName: string.isRequired,
  valueCardRare: string.isRequired,
  valueCardTrunfo: bool.isRequired,
};
