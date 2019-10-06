import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonButton,
  IonButtons,
  IonCol,
  IonItem,
  IonPage,
  IonToolbar,
  IonBadge,
  IonLabel,
  IonSearchbar
} from '@ionic/react';
import axios from 'axios';

import React, { Component } from 'react';
import './Tab1.css';
import { Modelito } from '../Models/animeModel'
const getBaseUrl = "https://api.jikan.moe/v3/search/anime?q=";



export default class Tab1 extends Component {
  state = {
    elements: [],
    texto: 'Naruto',
    fresh: false
  };

  handleChangeSearch = (e: any) => {
    this.setState({ texto: e.target.value });
  }
  componentDidMount() {
    var s = this.state.texto
    var url = getBaseUrl + s.split(' ') + '&limit=16'
    axios
      .get(url)
      .then((response: any) => {
 
        this.setState({ elements: response.data.results })
      })
  }
  Buscar = () => {
    var s = this.state.texto
    var url = getBaseUrl + s.split(' ') + '&limit=16'
    axios
      .get(url)
      .then((response: any) => {
 
        this.setState({ elements: response.data.results })
      })
  }

  render() {
    let cosas = this.state.elements.map((value: Modelito, index) => {

      return (
        <IonCol key={index} size="12">


          <IonCard>
            <img alt="this is you" src={value.image_url} />
            <IonCardHeader>
              <IonCardTitle>{value.title}</IonCardTitle>
              <IonBadge color="primary">Score {value.score}</IonBadge>
            </IonCardHeader>
            <IonItem color="dark" routerLink={"/tab1/details/" + value.synopsis}>
              <IonLabel>
                <h2>Read more</h2>
              </IonLabel>
            </IonItem>

          </IonCard>


        </IonCol>
      )
    });


    return (
      <IonPage>
        <IonHeader >
          <IonToolbar color="dark">
            <IonItem color="dark">
              <IonSearchbar color="tertiary" value={this.state.texto} onIonInput={this.handleChangeSearch} ></IonSearchbar>

            </IonItem>
            <IonButtons slot="primary">
              <IonButton shape="round" onClick={this.Buscar} color="light">
                Buscar
          </IonButton>
            </IonButtons>

          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              {cosas}
            </IonRow>
          </IonGrid>

        </IonContent>
      </IonPage>
    );

  }


};

