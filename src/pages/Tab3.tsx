import React from 'react';
import {  IonButtons, IonBackButton, IonHeader, IonToolbar, IonPage, IonTitle, IonContent } from '@ionic/react';

const Tab3Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab Three</IonTitle>
        </IonToolbar>
        <IonToolbar>
      <IonButtons slot="start">
        <IonBackButton defaultHref="/" />
      </IonButtons>
      <IonTitle>Back Button</IonTitle>
    </IonToolbar>

      </IonHeader>
      <IonContent />
    </IonPage>
  );
};

export default Tab3Page;
