interface CardProps {
  cardNumber: number;
  eventName: string;
  startTime: Date;
  endTime: Date;
  event?: string;
  hasCover: boolean;
  hasCoffee: boolean;
  workload?: string;
  isSelected: boolean;
}

export default CardProps;
