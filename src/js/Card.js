import {
    handleCardClick
} from './utils'

class Card {
    constructor(cardItem) {
        this.id = cardItem.id;
        this.img = cardItem.img;
        this.name = cardItem.name;  
        this.nameRu = cardItem.nameRu;      
        this.cardImg = document.createElement('img');
        this.card = document.createElement('div');
    }

    getCardTemplate() {
        let cardTemplate = this.card;
        let itemId = this.id
        cardTemplate.classList.add('card', 'card_item');
        cardTemplate.setAttribute('data-id', itemId)
        cardTemplate.append(this.getCardImgTemplate());
        cardTemplate.append(this.getCardNameTemplate());

        return cardTemplate;
    }

    // eventListner() {     
    //     this.card.addEventListener("click", handleCardClick);
    // }

    getImageSource() {
        return `./src/assets/img/category/${this.img}`;
    }

    getCardImgTemplate() {
        let cardImg = this.cardImg;
        cardImg.setAttribute('src', this.getImageSource());
        cardImg.setAttribute('alt', `./src/assets/img/category/${this.name}`);
        return cardImg;
    }

    getCardNameTemplate() {
        let cardName = document.createElement('h2');
        cardName.innerText = this.name;
        cardName.classList.add('cart_title');
        return cardName;
    }

    getCardNameRuTemplate() {
        let cardName = document.createElement('h2');
        cardName.innerText = this.nameRu;
        cardName.classList.add('cart_title');
        return cardName;
    }

}

export default Card;

export class CategoryItem extends Card {
    constructor(cardItem) {
        super(cardItem);        
        this.front = document.createElement('div');
        this.back = document.createElement('div');
    }

    getCardTemplate() {
        let cardTemplate = this.card;
        let itemId = this.id
        cardTemplate.classList.add('card', 'card_item');
        cardTemplate.setAttribute('data-id', itemId)
        cardTemplate.append(this.getFrontCard());
        cardTemplate.append(this.getBackCard());

        return cardTemplate;
    }

    getFrontCard() {
        let front = this.front;
        let name = this.getCardNameTemplate();
        let reload = this.getButtonReload();
        front.classList.add('front');
        front.setAttribute('style', `background-image: url(${this.getImageSource()})`)
        //front.append(this.getCardImgTemplate());
        front.append(name);
        front.appendChild(reload)
        return front;
    }

    getButtonReload() {
        let reload = document.createElement('div');
        reload.classList.add('reload');
        return reload;
    }

    getBackCard() {
        let back = this.back;
        let name = this.getCardNameRuTemplate();
        back.classList.add('back');
        back.setAttribute('style', `background-image: url(${this.getImageSource()})`)
        back.append(name);
        return back;
    }

}