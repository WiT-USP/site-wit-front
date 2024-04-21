import React, { useState } from 'react';
import ButtonProps from 'components/user-components/props/button-props';
import {Container} from "./style"
import setaIcon from "../../../assets/img/seta.png";

const ToggleButton: React.FC<ButtonProps> = ({ question, answer }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <Container>
      <button className='btn-toggle' onClick={toggleAnswer}>
        <h1 className='question-title'>{question}</h1>
        <img className='img-question' src={setaIcon}/>
      </button>
      <div className='resposta'>{isAnswerVisible && <p className='answer'>{answer}</p>}</div>
    </Container>
  );
};
export default ToggleButton;