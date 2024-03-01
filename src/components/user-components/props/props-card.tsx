
import React, { FC, HTMLProps } from 'react';

interface CardProps extends HTMLProps<HTMLDivElement>{
    cardNumber: number;
    eventName: string;
    link_image: string;
    isSelected: boolean;
    endDate?: Date;
    onClick?: () => void;
}

export default CardProps;