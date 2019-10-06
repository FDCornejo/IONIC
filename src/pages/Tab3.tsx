import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonFab, IonFabButton, IonIcon, IonButton, IonButtons } from '@ionic/react';
import React, { Component } from 'react';
import { Plugins, CameraResultType } from '@capacitor/core';
import { removeCircle, addCircle } from 'ionicons/icons';
const { Camera } = Plugins;
const { Toast } = Plugins;
const { Modals } = Plugins;

const INITIAL_STATE = {
  photo: '',
};



export class Tab3 extends Component {
  state: any = {};
  props: any = {};
  constructor(props: any) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    var imageUrl = image.webPath;
    // Can be set to the src of an image now
    this.setState({
      photo: imageUrl
    })
  }


  async delete() {

    await Modals.alert({
      title: 'Merci',
      message: 'The photo will be deleted'
    });
    await Toast.show({
      text: 'Photo Deleted!'
    });
    this.setState({
      photo: null
    })
  }

  render() {
    const { photo } = this.state;
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="dark">
            <IonTitle>Photo Camera</IonTitle>
            <IonButtons slot="primary">
              <IonButton color="danger" onClick={() => this.delete()} >
                <IonIcon icon={removeCircle}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonImg style={{ 'border': '1px solid primary', 'minHeight': 'auto' }} src={photo} ></IonImg>
          <IonFab color="primary" vertical="bottom" horizontal="center" slot="fixed">
            <IonFabButton color="tertiary" onClick={() => this.takePicture()}>
              <IonIcon icon={addCircle} />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage >
    );
  };
}
export default Tab3;