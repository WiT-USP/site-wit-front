import Activities from "../../../components/user-components/props/props-info-activity";

interface InfoProps {
  id: number;
  eventName: string;
  // link_image: string;
  beginDate: Date;
  link_coffee?: string;
  coffeeValue?: string;
  link_fotos?: string;
  finalDate: Date;
  activities: Activities[];
}

export default InfoProps;
