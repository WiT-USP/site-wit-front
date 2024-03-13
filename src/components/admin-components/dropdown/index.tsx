import React, { useEffect, useRef, useState } from 'react';
import { Container } from './style';

interface Option {
  eventId: number;
  eventName: string;
}

interface DropdownProps {
  options: Option[];
  onSelect: (value: number) => void;
}


const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const handleSelectOption = (option: Option) => {
    console.log("[handleSelectOption] fui chamada")
    setSelectedOption(option);
    onSelect(option.eventId);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      e.stopImmediatePropagation();
      const [target] = e.composedPath();
      if (!ref.current?.contains(target as Node) && isOpen) {
        closeDropdown();
      }
    }

    document.body.addEventListener('click', handleOutsideClick, false);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick, false);
    };
  }, [isOpen]);

  return (
    <Container className={`dropdown relative`} ref={ref}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.eventName : 'Clique aqui para escolher uma opção'}
      </button>
      {isOpen && (
        <ul className={`dropdown-menu`}>
          {options.map((option) => (
            <li
              key={option.eventId}
              onClick={() => {
                handleSelectOption(option);
              }}
            >
              {option.eventName}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default Dropdown;
