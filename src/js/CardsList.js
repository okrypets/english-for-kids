import Card, { CategoryItem } from "./Card";
import { 
    handleMouseEvent,
    getWorkMode,
    setWorkMode,
    handleMouseOutEvent
 } from "./utils";
//import { data } from './dataList';

let cardsFromDataList = []

class CardsList {
    constructor( data ) {
    this.data = data;
    this.cardListContainer = document.querySelector("div.cards__list");
    this.mode = 'categores';
    //this.getWorkMode = this.getWorkMode.bind(this);
    }

    init() {
        this.renderCardsToDom();
        this.eventListner();
    }

    eventListner() {     
        this.cardListContainer.addEventListener("click", handleMouseEvent);
        //this.cardListContainer.addEventListener("mousemove", handleMouseOutEvent);
    }

    renderCardsToDom() {
        let cardListContainer = this.getCardsListWrapper();
        cardsFromDataList = this.getCardsFromData();
        cardsFromDataList.map(element => {
            cardListContainer.appendChild(element.getCardTemplate());
        })
        return cardsFromDataList;
    }

    renderCard(item) {
        let card = null;
        //let mode = 
        //console.log(this.mode)
        switch (this.mode) {
            case 'categores':
                card = new Card(item);
                break;
            case 'category':
                card = new CategoryItem(item);
                break;
        
            default: 
                //card = new Card(item);
                break;
        }
        return card;
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
        cardListContainer.classList.add('cards__list', 'green', this.mode);
        //cardListContainer.classList.add(this.mode);
        return cardListContainer;
    }

    setWorkMode(mode) {
        this.mode = mode;
    }

    getWorkMode() {
        return this.mode;
    }



}

export default CardsList;
//export { getWorkMode };