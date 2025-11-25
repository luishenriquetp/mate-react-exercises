/*

Implemente a tabela combinando os DB de Countries e Products

- Implementar um filtro global para Description, Name (product)
- Implementar um filtro atraves de botões para as countries
    - Estado Inicial deve ser ALL,
    - Quando Clico num country, aquele country deve ser adicionado ao filtro (&&)
    - Quando Click num butão que já está selecionado, esse deve soltar esse filtro
    - O Botão que estiver filtrando deve ficar verde (Selected)
    - Os 2 filtros devem trabalhar juntos (GLobal e Country)
*/

import COUNTRIES from './db/countries.json';
import PRODUCTS from './db/products.json';
import { useState } from 'react';
import './styles.css';

const products = PRODUCTS.map((product) => ({
  ...product,
  countryName: COUNTRIES.find((country) => country.id === product.countryId).name,
}));

export default function CombinedDBFilters() {
  const [globalFilter, setGlobalFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState(COUNTRIES.map((item) => item.name));
  console.log(countryFilter);
  const handleCountryFilter = (country) => {
    const findCountry = countryFilter.find((item) => item === country);
    if (findCountry) {
      setCountryFilter(countryFilter.filter((item) => item !== country));
    } else {
      setCountryFilter([...countryFilter, country]);
    }
  };

  const filteredProducts = products.filter(
    (item) =>
      (item.name.toLowerCase().includes(globalFilter) || item.description.toLowerCase().includes(globalFilter)) &&
      countryFilter.includes(item.countryName)
  );

  return (
    <div className="many-filters">
      <div className="filters">
        <input name="global-filter" onChange={(e) => setGlobalFilter(e.target.value.toLowerCase())} placeholder="Global Filter" />
        <div className="buttons">
          {COUNTRIES.map((country) => (
            <button
              className={countryFilter.includes(country.name) ? 'selected' : ''}
              onClick={() => handleCountryFilter(country.name)}
              key={country.id}
            >
              {country.name}
            </button>
          ))}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>COUNTRY ID</th>
            <th>DESCRIPTION</th>
            <th>COUNTRY NAME</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((row) => (
            <tr key={row.id}>
              {Object.entries(row).map(([key, value]) => (
                <td key={key}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
