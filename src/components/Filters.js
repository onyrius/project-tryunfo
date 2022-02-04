import React from 'react';
import PropTypes from 'prop-types';

export default class Filters extends React.Component {
  render() {
    const {
      onInputFilterName,
      valueCardName,
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
            onChange={ onInputFilterName }
          />
        </label>
        <label htmlFor="cardRareFilter" className="filtro">
          Raridade:
          <select
            name="cardRareFilter"
            data-testid="rare-filter"
            onChange={ onInputFilterName }

          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="name-filter" className="filtro">
          Super Trunfo
          <input
            name="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-filter"
            checked="false"
            onChange={ onInputFilterName }
          />
        </label>
      </>
    );
  }
}

const { func, string } = PropTypes;
Filters.propTypes = {
  onInputFilterName: func.isRequired,
  valueCardName: string.isRequired,
};
