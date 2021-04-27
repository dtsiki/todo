import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { filterTypes } from './../../constants/filterTypes';

import './style.scss';

const Filter = ({ selectedFilter, changeFilter }) => {
  const renderFilter = useMemo(() => {
    if (!filterTypes) return;
    return filterTypes.map((filterType) => {
      return (
        <li key={filterType} className="filter__item">
          <button
            className={`filter-button${selectedFilter === filterType ? ' filter-button--selected' : ''}`}
            onClick={() => changeFilter(filterType)}
          >
            {filterType}
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
