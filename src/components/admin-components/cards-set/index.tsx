import React from "react";

import { Container } from "./style";
import Card from "../card";

const CardsSet: React.FC = () => {

    const lista = [
        {
            cardNumber: 1,
            eventName: "DevCon 2024: The Future of Coding",
            startTime: "2024-02-12 09:00",
            endTime: "2024-02-12 18:00",
            event: "Conference",
            workload: "9 hours"
        },
        {
            cardNumber: 2,
            eventName: "AI Summit: Exploring Artificial Intelligence",
            startTime: "2024-02-12 10:30",
            endTime: "2024-02-12 17:00",
            event: "Summit",
            workload: "6 hours and 30 minutes"
        },
        {
            cardNumber: 3,
            eventName: "CodeCamp: Mastering Web Development",
            startTime: "2024-02-12 08:45",
            endTime: "2024-02-12 16:00",
            event: "Workshop",
            workload: "7 hours and 15 minutes"
        },
        {
            cardNumber: 4,
            eventName: "Cybersecurity Forum: Securing the Digital World",
            startTime: "2024-02-12 13:00",
            endTime: "2024-02-12 19:30",
            event: "Forum",
            workload: "6 hours and 30 minutes"
        },
        {
            cardNumber: 5,
            eventName: "Tech Startup Expo: Innovation Showcase",
            startTime: "2024-02-12 11:15",
            endTime: "2024-02-12 15:45",
            event: "Expo",
            workload: "4 hours and 30 minutes"
        }
    ];


    const [listEvents, setListEvents] = React.useState(lista);

    return (
        <Container>
            <div className="card-list">
                {listEvents.length>0 && listEvents.map(lista => {
                    return(
                        <Card
                            key={lista.cardNumber}
                            cardNumber={lista.cardNumber}
                            name={lista.eventName}
                            startTime={lista.startTime}
                            endTime={lista.endTime}
                            event={lista.event}
                            workload={lista.workload}
                        />
                    )
                })}
            </div>
        </Container>

    )
}

export default CardsSet;
