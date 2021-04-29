import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { filterTypes } from './../../constants/filterTypes';

import './style.scss';

const Filter = ({ selectedFilter, changeFilter }) => {
  const renderFilter = useMemo(() => {
    if (!filterTypes) return;
    return filterTypes.map((filterType) => {
      return (
        <li key={filterType.name} className="filter__item">
          <button
            className={`filter-button${selectedFilter.name === filterType.name ? ' filter-button--selected' : ''}`}
            onClick={() => changeFilter(filterType)}
          >
            {filterType.name}
          </button>
        </li>
      );
    });
  }, [selectedFilter]);

  return <ul className="filter">{renderFilter}</ul>;
};

Filter.propTypes = {
  changeFilter: PropTypes.func,
  selectedFilter: PropTypes.string,
};

export default Filter;
