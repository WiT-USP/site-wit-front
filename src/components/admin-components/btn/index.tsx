import { FC, HTMLProps } from "react";
import { Container } from "./style";

interface DynamicTagProps extends HTMLProps<HTMLDivElement> {
  text: string;
  img_path: string;
  onAction?: () => void;
}

const DynamicButton: FC<DynamicTagProps> = ({ onAction, text, img_path }) => {
  const handleButtonAction = () => {
    if (onAction) onAction();
  };

  return (
    <Container>
      <div className="dynamic-button" onClick={handleButtonAction}>
        <img className="img-btn" src={img_path}></img>
        {text}
      </div>
    </Container>
  );
};

export default DynamicButton;
