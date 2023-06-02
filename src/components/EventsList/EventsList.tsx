import {useEffect, useState} from "react";
import {closeCircleOutline, createOutline} from "ionicons/icons";
import {IonIcon} from "@ionic/react";
import './EventsList.css';
import countdown from '../../utils/countdown.min.js';

const EventsList: React.FC = () => {

    const [events, setEvents] = useState([
        { id: 1, title: 'Дон Кихот', date: '2023-05-29' },
        { id: 2, title: 'Чистка зубов', date: '2023-10-06' },
    ]);
    const [eventTitle, setEventTitle] = useState('Test');
    const [eventDate, setEventDate] = useState('2023-05-29');
    const [lastId, setLastId] = useState(events.length);
    const [updateId, setUpdateId] = useState(null);

    useEffect(() => {
        const fakeData = [];
        for (let i = 1; i <= 30; i++) {
            fakeData.push({ id: i, title: 'Чистка зубов', date: '2023-10-06' })
        }
        setEvents(fakeData);
    }, [])


    function clearAll() {
        setEvents([])
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!eventTitle || !eventDate) {
            return;
        }

        if (updateId) {
            setEvents(events.map(event => event.id === updateId ? {...event, title: eventTitle, date: eventDate} : event));
            setUpdateId(null);
        } else {
            setLastId(lastId + 1)
            setEvents([...events, { id: lastId + 1, title: eventTitle, date: eventDate }])
        }

        setEventTitle('');
        setEventDate('');
    }

    function removeEvent(id) {
        setEvents(events.filter(event => event.id !== id));
    }

    function onTitleChange(e) {
        setEventTitle(e.target.value);
    }

    function onDateChange(e) {
        setEventDate(e.target.value);
    }

    function updateEvent(event) {
        setEventTitle(event.title);
        setEventDate(event.date);
        setUpdateId(event.id);
    }

    const formatDate = (date) => {
        const d = countdown(Date.parse(date));
        return `${d.years}г ${d.months}мес ${d.days}дн ${d.hours}ч ${d.minutes}мин`;
    };

    return (
        <>
            <div className="event-list">
                {events.map(event =>
                    <div className="event-item" key={event.id}>
                        <div className="event-item__info">
                            <div className="event-item__title">{event.title}</div>
                            <div className="event-item__timer">Осталось {formatDate(event.date)}</div>
                        </div>
                        <div className="event-item__actions">
                            <button className="btn btn_type_edit" onClick={() => updateEvent(event)}>
                                <IonIcon icon={createOutline}></IonIcon>
                            </button>
                            <button className="btn btn_type_remove" onClick={() => removeEvent(event.id)}>
                                <IonIcon icon={closeCircleOutline}></IonIcon>
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {events.length ?
                <div className="btn btn_type_clear" onClick={clearAll}>
                    Очистить всё
                </div> : ''}
        </>
    );
};

export default EventsList;
