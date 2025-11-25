/*

Implemente o Sorting  no button do <th> que deve ter dois estados:
1 -> asc (Ordem crescente)
2 -> dsc (Orden Decrescente)


O botão deve mudar o seu texto, exibindo qual será seu próximo estado quando apertado.

Tambem implemnete o botão reser para retornar ao estado original da tabela


*/
import './styles.css';
import { useState } from 'react';
import DB from './db.json';

export default function SortingTable() {
  const [data] = useState(DB);

  const headers = Object.keys(data[0]);

  return (
    <div>
      <h2>Sorting Table</h2>

      <button>Reset</button>

      <table>
        <thead>
          <tr>
            {headers.map((item) => (
              <th key={item}>
                {item}
                <button></button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {Object.entries(row).map(([key, value]) => (
                <td key={key}> {value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

