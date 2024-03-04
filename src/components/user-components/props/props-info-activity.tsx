interface InfoProps {
  activityName: string;
  activityId: number;
  subject?: string;
  local?: string;
  responsible: string;
  startTime: Date;
  endTime: Date;
  registrationAt: Date;
}

export default InfoProps;
