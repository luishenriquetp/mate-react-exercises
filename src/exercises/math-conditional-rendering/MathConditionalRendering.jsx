/*
Implemente os eventos necessários para capturar a operação 
onde temos um argumento "a" um "b" e sua operação basica da matematica

Obs:
- Verifique se os componentes de operações estão devidamente implementados
- renderize apenas aquele resultado vinculado a operação selecionada
- So deve renderizar se ambos os argumentos e a operação estiverem selecionadas

*/

import './styles.css';
import { Addition, Division, Multiplication, Subtraction } from './operations';

export default function ConditionalRenderingMath() {
  return (
    <div>
      <h2>Math Conditional Rendering</h2>
      <h3>Operation:</h3>
      <div className="inputs">
        <input type="number" name="argumentA" />
        <select name="mathOperation">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="x">x</option>
          <option value="/">/</option>
        </select>
        <input type="number" name="argumentB" />
      </div>
      <h3>Result:</h3>
      <Addition />
      <Subtraction />
      <Multiplication />
      <Division />
    </div>
  );
}

