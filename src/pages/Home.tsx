import {IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Home.css';
import {add} from "ionicons/icons";
import EventsList from "../components/EventsList/EventsList";

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Обратный отсчет</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Обратный отсчет</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <EventsList></EventsList>

                <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton>
                        <IonIcon icon={add}></IonIcon>
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};

export default Home;
