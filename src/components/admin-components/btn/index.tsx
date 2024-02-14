import React, { FC, HTMLProps } from 'react';
import { Container } from './style';

interface DynamicTagProps extends HTMLProps<HTMLDivElement> {
  text: string;
  img_path: string;
}

const DynamicButton: FC<DynamicTagProps> = ({ text, img_path}) => {

  return (
    <Container>
        <div className="dynamic-button">
            <img className ='img-btn'src={img_path}></img>
            {text}
        </div>
    </Container>
  );
};

export default DynamicButton;