import './ClearAll.css'
import {IonAlert} from "@ionic/react";

export interface ClearAllProps {
    handler: Function;
}

const ClearAll: React.FC<ClearAllProps> = ({ handler }) => {
    return (
        <>
            <div className="btn btn_type_clear" id="clear-all-alert">
                Очистить всё
            </div>
            <IonAlert
                header="Вы уверены?"
                trigger="clear-all-alert"
                buttons={[
                    {
                        text: 'Нет',
                        role: 'cancel',
                    },
                    {
                        text: 'Да',
                        role: 'confirm',
                        handler: () => {
                            handler()
                        },
                    },
                ]}
            />
        </>
    )
}

export default ClearAll;
