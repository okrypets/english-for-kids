import Card, { CategoryItem, PlayCard } from "./Card";
import { 
    handleMouseEvent,
    getWorkMode,
    setWorkMode,
    handleMouseOutEvent
 } from "./utils";
 import {
    handlePlayButtonClick
 } from './play.utils';
//import { data } from './dataList';

let cardsFromDataList = []

class CardsList {
    constructor( data ) {
    this.data = data;
    this.cardListContainer = document.querySelector("div.cards__list");
    this.mode = 'categores';
    this.isPlay = false;
    this.playButton = document.createElement('button');;
    }

    init() {
        this.renderCardsToDom();
        this.eventListner();
    }

    eventListner() {     
        this.cardListContainer.addEventListener("click", handleMouseEvent);
        //this.playButton.addEventListener("click", handlePlayButtonClick);
    }

    renderCardsToDom() {
        let cardListContainer = this.getCardsListWrapper();
        cardsFromDataList = this.getCardsFromData();
        cardsFromDataList.map(element => {
            cardListContainer.appendChild(element.getCardTemplate());
        })
        
        if (this.isPlay && this.mode === 'category') {
            let playButtonContainer = document.createElement('div');
            playButtonContainer.classList.add('play_button');
            cardListContainer.insertAdjacentElement('beforeend', playButtonContainer)
            playButtonContainer.insertAdjacentElement('beforeend', this.getPlayButton())
        }
        //this.isPlay && this.mode === 'category' ? cardListContainer.insertAdjacentElement('beforeend', this.getPlayButton()) : null;
        return cardsFromDataList;
    }

    renderCard(item) {
        let card = null;
        switch (this.mode) {
            case 'categores':
                card = new Card(item);
                break;
            case 'category':
                card = !this.isPlay ? new CategoryItem(item) : new PlayCard(item);
                break;
        
            default: 
                break;
        }        
        return card;
    }

    getPlayButton() {
        let playButton = this.playButton;
        playButton.innerText = "Start"
        return playButton;
    }

    getCardsFromData() {
        let cardsArr = [];
        this.data.forEach(item => {
            let cardItem = this.renderCard(item)
            cardsArr.push(cardItem);
        })

        return cardsArr;
    }

    getCardsListWrapper() {
        let cardListContainer = this.cardListContainer;
        cardListContainer.innerHTML = '';
        cardListContainer.classList = [];
        cardListContainer.classList.add('cards__list', this.mode);        
        //cardListContainer.classList.add(this.mode);
        return cardListContainer;
    }

    setWorkMode(mode) {
        this.mode = mode;
    }

    getWorkMode() {
        return this.mode;
    }

    setIsPlay(bool) {
        this.isPlay = bool;
    }

}

export default CardsList;
