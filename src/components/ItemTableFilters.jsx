import React from 'react'

import '../styles/TableFilters.css';

function ItemTableFilters(props) {
  const filters = [
    {label: "Académico", value: "academico"},
    {label: "Oficina", value: "oficina"},
    {label: "Aseo", value: "aseo"},
    {label: "Pedagógico", value: "pedagogico"},
    {label: "Todos", value: ""}
  ]

  return(
    <div className="table-filter-container">
      <input className="table-filter-input" type="text" onChange={(e) => props.onSearch(e.target.value)} />
      {
        filters.map((filter, i) => (
          <a
            className={`table-filters-badge${ props.selected == filter.value ? " selected" : ""}`}
            key={`filter-${i}`}
            onClick={() => props.onItemType(filter.value) }
          >
            {filter.label}
          </a>
          )
        )
      }
    </div>
  )
}

export default ItemTableFilters
