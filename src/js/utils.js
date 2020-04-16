import { data } from './dataList';
//import { renderCardsToDom }  from '../index';
import CardsList  from "./CardsList";
import { handleMouseEventPlay, renderPlayButton } from './play.utils.js'
//import { loadSoundFile, play, stop, BufferLoader } from './audioApi'
//import {img} from '../assets/'
//let cardMode = 'categores';

let PLAYMODE = false;
let WORKMODE = 'categores';

export const toggleMenu = () => {
    document.querySelector("div.icon__menu_toggle").classList.toggle("active")
    document.querySelector("nav.header_menu").classList.toggle("active")
}

export const chackboxChanger = event => {
    const { target: { checked } } = event;
    //console.log(event)
    if ( checked ) {
        PLAYMODE = true;
        setPlayMode();
        changeColorScheme("orange");
    } else {
        PLAYMODE = false;
        setTrainMode();
        changeColorScheme("green");
    }
}

const changeColorScheme = scheme => {
    let colorElements = [
        document.querySelector("nav.header_menu"),
        document.querySelector("div.cards__list")
    ]
    switch (scheme) {
        case "orange":
            colorElements.forEach(element => {
                element.classList.remove("green");
                element.classList.add(scheme);
            })
            break;

        case "green":
            colorElements.forEach(element => {
                element.classList.remove("orange");
                element.classList.add(scheme);
            })
            break;

        default:
            break;
    }

}

const setPlayMode = () => {
    let activeCategoryId = getActiveCtegory();
    let activeData = activeCategoryId !== 0 ? getDataChldById(activeCategoryId) : data;
    renderCardsToDom(activeData, WORKMODE)
    document.querySelectorAll('.card_item').forEach(it => it.classList.add('play_mode'));
    document.querySelector("div.cards__list").removeEventListener("click", handleMouseEvent);
    document.querySelector("div.cards__list").addEventListener("click", handleMouseEventPlay);
}

const setTrainMode = () => {
    let activeCategoryId = getActiveCtegory();
    let activeData = activeCategoryId !== 0 ? getDataChldById(activeCategoryId) : data;
    renderCardsToDom(activeData, WORKMODE)
    document.querySelectorAll('.card_item').forEach(it => it.classList.remove('play_mode'));
    document.querySelector("div.cards__list").removeEventListener("click", handleMouseEventPlay);
    document.querySelector("div.cards__list").addEventListener("click", handleMouseEvent);
}

export const getWorkMode = () => {
    return WORKMODE;
}

export const getPlayMode = () => {
    return PLAYMODE;
}

export const setWorkMode = (_mode) => {
    WORKMODE = _mode;
}

export const setIsPlay = (_isPlay) => {
    PLAYMODE = _isPlay;
}

export const handleMouseOutEvent = event => {
    const { target: { parentNode }, toElement } = event;

    if (toElement.classList.contains('cards__list')) {
        parentNode.classList.remove('reloaded')
    }

}

export const handleMouseEvent = event => {
    event.preventDefault();
    //console.log(event);
    const { target: { attributes, parentNode }, currentTarget } = event;
    let clickedElementId = attributes['data-id'] ? attributes['data-id'].nodeValue : parentNode.attributes['data-id'] ? parentNode.attributes['data-id'].nodeValue : null;
    //setMenuActive(clickedElementId);

    if ( currentTarget.classList.contains('categores') ) {
        WORKMODE = 'category';
        setMenuActive(clickedElementId);
        goToCategory(clickedElementId, currentTarget, PLAYMODE);
    }

    if (event.target.classList.contains('reload')) {
        parentNode.parentNode.classList.add('reloaded');
        document.querySelector('.reloaded').addEventListener("mouseout", handleMouseOutEvent);
    }

    if (event.target.classList.contains('front') || parentNode.classList.contains('front') ) {
        //console.log(event);
        const { path } = event;
        if (!event.target.classList.contains('reload')) {
            path.find(it => it.classList.contains('front')).lastChild.play();
        }

    }

}

const setCartListClass = () => {
    let cartListElement = document.querySelector('.cards__list')
    if (cartListElement.classList.length > 0 ) {
        cartListElement.classList = []
    };
    let color = PLAYMODE ? 'orange' : 'green';
    cartListElement.classList.add('cards__list', WORKMODE, color)
}

export const goToCategory = (catId, currentTarget, isPlay) => {
    let chldDataFromData = catId !== 0 ? getDataChldById(catId) : data;
    renderCardsToDom(chldDataFromData, WORKMODE);
    setCartListClass();
}

const renderCardsToDom = ( dataChild, mode ) => {
    //console.log(dataChild)
        let cardList = new CardsList( dataChild );
        cardList.setWorkMode(WORKMODE);
        cardList.setIsPlay(PLAYMODE);
        cardList.init();
}

export const getActiveCtegory = () => {
    let activeCtegory = 0;
    let menuList = document.querySelector('ul.header_menu_list').children;
    let activeMenuData = Array.from(menuList)
        .find(it => it.classList.contains('active')).dataset;
    const { id = ''} = activeMenuData;
    activeCtegory = id ? Number(id) : 0;
    return activeCtegory
}

const getelementById = id => {
    const elementById = data.find(it => it['id'] === Number(id));
    return elementById;
}

export const getDataChldById = id => {
    const elementById = data.find(it => it['id'] === Number(id));
    const chldData = elementById ? elementById['chld'] : null;
    return chldData;
}

export const handleMenuClick = event => {
    event.preventDefault();
    const { target: { attributes, parentNode }, currentTarget } = event;
    let clickedElementId = parentNode.attributes["data-id"] ? Number(parentNode.attributes["data-id"].nodeValue) : 0;
    if (clickedElementId === 0){
         WORKMODE = 'categores';
    } else {
        WORKMODE = 'category';
    }
    goToCategory(clickedElementId)
    setMenuActive(clickedElementId);
    toggleMenu();
    //console.log(currentTarget.parentNode)
}

export const setMenuActive = elementId => {    
    let menuList = document.querySelector('ul.header_menu_list').children;
    Array.from(menuList)
    .forEach(it => {
        const { classList, dataset } = it;
        if (classList.contains('active')) {
            classList.remove('active');
        }
        if (Number(dataset["id"]) === Number(elementId) ) {
            classList.add('active');
        }
    })
}
