import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
interface UserDetailPageProps extends RouteComponentProps<{
  datos: string;
}> { }

const Details: React.FC<UserDetailPageProps> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle> About This Anime</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Synopsis</h1>
        <p>{match.params.datos}</p>
      </IonContent>
    </IonPage>
  );
};

export default Details;
