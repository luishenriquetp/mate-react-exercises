/*
Implemente uma maneira de poder trocar a ordem dos itens na lista apertando os botões UP e DOWN

- Se o Item for o primeiro, o botão UP fica disabilitado
- Se o Item for o último, o botão DOWN fica disabilitado

*/

import DB from './db.json';
import './styles.css';

export default function ReorderList() {
  return (
    <div className="reorder-list">
      <h2>Reorder List</h2>
      <ul>
        {DB.map((it) => (
          <li key={it.id}>
            <span className="id">{it.id}</span>
            <span className="name">{it.name}</span>
            <span className="year">{it.year}</span>
            <div className="buttons">
              <button>UP</button>
              <button>DOWN</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

