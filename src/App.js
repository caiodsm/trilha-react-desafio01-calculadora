import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row, Column } from "./styles";
import { useState } from 'react';


function App() {
  const [ currentNumber, setCurrentNumber ] = useState('0');
  const [ firstNumber, setFirstNumber ] = useState('0');
  const[operation, setOperation ] = useState('');

  const handleAddNumber = (number) => {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)

  }

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0')
    setOperation('')
  }

  const handlePowNumber = () => {
    if(currentNumber !== '0') {
      const pow = Math.pow(Number(currentNumber), 2)
      setCurrentNumber(String(pow));
      setOperation('^2');
    } 
}
const handleSquartNumber = () => {
  if(currentNumber !== '0') {
    const squart = Math.pow(Number(currentNumber), 0.5)
    setCurrentNumber(String(squart));
    setOperation('^1/2');
  } 
}


  const handleSumNumbers = () => {
      if(firstNumber === '0' && currentNumber !== '0') {
        setFirstNumber(currentNumber);
        setCurrentNumber('0');
        setOperation('+');

      } else {
        const sum = Number(firstNumber) +  Number(currentNumber);
        setCurrentNumber(String(sum));
        setFirstNumber('0');
        setOperation('')
      }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');

    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation('')
    }
}

const handleMultiplyNumbers = () => {
  if(firstNumber === '0') {
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
    setOperation('*');

  } else {
    const multiply = Number(firstNumber) * Number(currentNumber);
    setCurrentNumber(String(multiply));
    setOperation('')
  }
}
const handleDividdNumbers = () => {
  if (currentNumber === '0') {
    alert("Divisão por zero não é permitida");
    return;
  }
  if(firstNumber === '0') {
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
    setOperation('/');
  } else {
    const divided = Number(firstNumber) / Number(currentNumber);
    setCurrentNumber(String(divided));
    setOperation('');
  }
}
const handlePositiveAndNegative= () => {
  const negative = -1 * Number(currentNumber);
  setCurrentNumber(String(negative));
}
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation) {
        case '+':
          handleSumNumbers()
          break;
        case '-':
          handleMinusNumbers()
          break;
        case '*':
          handleMultiplyNumbers()
          break;
        case '/':
          handleDividdNumbers()
        break;
        case '^2':
          handlePowNumber()
          break;
        case '^1/2':
          handleSquartNumber()
          break;
        // case '+/-':
        //   handleSquartNumber()
        //   break;
        default: 
          break;
      }
    }
}


  return (
    <>
    <div className="App">
      <Container>
        <Content>
          <h1>Calculadora</h1>
          <h2> Pronta para operar </h2>
          <Input value={currentNumber}/>
          <Row>
            <Button label="%"onClick={() => handleAddNumber('')}/>
            <Button label="CE"onClick={() => handleAddNumber('')}/>
            <Button label="C"onClick={() => handleOnClear()}/>
            <Button label="<x"onClick={() => handleAddNumber('')}/>
          </Row>
          <Row>
            <Button label="1/x"onClick={() => handleAddNumber('')}/>
            <Button label="x^2"onClick={() => handlePowNumber()}/>
            <Button label="x^1/2"onClick={() => handleSquartNumber()}/>
            <Button label="/"onClick={() => handleDividdNumbers()}/>
          </Row>
          <Row>
            <Button label="7"onClick={() => handleAddNumber('7')}/>
            <Button label="8"onClick={() => handleAddNumber('8')}/>
            <Button label="9"onClick={() => handleAddNumber('9')}/>
            <Button label="x"onClick={() => handleMultiplyNumbers()}/>
          </Row>
          <Row>
            <Button label="4"onClick={() => handleAddNumber('4')}/>
            <Button label="5"onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="-"onClick={() => handleMinusNumbers()}/>
          </Row>
          <Row>
            <Button label="3"onClick={() => handleAddNumber('3')}/>
            <Button label="2"onClick={() => handleAddNumber('2')}/>
            <Button label="1"onClick={() => handleAddNumber('1')}/>
            <Button label="+" onClick={() => handleSumNumbers()}/>
          </Row>
          <Row>
            <Button label="+/-" onClick={() => handlePositiveAndNegative()}/>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="," onClick={() => handleAddNumber(',')}/>
            <Button label="=" onClick={() => handleEquals()}/>
          </Row>
        </Content>

      </Container>
    </div>;
    </>
  )  
}

export default App;
