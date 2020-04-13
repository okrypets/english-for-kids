import { data } from './dataList';
//import { renderCardsToDom }  from '../index';
import CardsList  from "./CardsList";
//let cardMode = 'categores';

export const toggleMenu = () => {
    document.querySelector("div.icon__menu_toggle").classList.toggle("active")
    document.querySelector("nav.header_menu").classList.toggle("active")
}

export const chackboxChanger = event => {
    const { target: { checked } } = event;
    console.log(event)
    if ( checked ) {
        changeColorScheme("orange")
    } else {
        changeColorScheme("green")
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

export const handleCardClick = event => {
    event.preventDefault();
    const { target: { attributes, parentNode, classList }, currentTarget } = event;
    if (classList.contains('reload')) {
        currentTarget.classList.add('reloaded');
    }
}

// export const getWorkMode = () => {
//     //let mode = 
//     return mode;
// }

// export const setWorkMode = (mode) => {
//     cardMode = mode;
// }

export const handleMouseOutEvent = event => {
    const { target: { parentNode }, toElement } = event;
    
    if (toElement.classList.contains('cards__list')) {
        parentNode.classList.remove('reloaded')
    }
    
}

export const handleMouseEvent = event => {
    event.preventDefault();
    
    const { target: { attributes, parentNode }, currentTarget } = event;
    let clickedElementId = attributes['data-id'] ? attributes['data-id'].nodeValue : parentNode.attributes['data-id'] ? parentNode.attributes['data-id'].nodeValue : null;
    setMenuActive(clickedElementId);
    
    if ( currentTarget.classList.contains('categores') ) {
        let chldDataFromData = getDataChldById(clickedElementId);
        renderCardsToDom(chldDataFromData, 'categores');
        currentTarget.classList.remove('categores');
        currentTarget.classList.add('category');        
    }

    if (event.target.classList.contains('reload')) {
        parentNode.parentNode.classList.add('reloaded');
        document.querySelector('.reloaded').addEventListener("mouseout", handleMouseOutEvent);
    }
    
}

const renderCardsToDom = ( dataChild, mode ) => {
    //console.log(dataChild)
        let cardList = new CardsList( dataChild );

        if (mode === 'categores') {
            cardList.setWorkMode('category');
        } else if (mode === 'category') {
            cardList.setWorkMode('categores');
        }
        cardList.init();        
}

const getDataChldById = id => {
    const elementById = data.find(it => it['id'] === Number(id));
    const chldData = elementById ? elementById['chld'] : null;
    return chldData;
}

export const handleMenuClick = event => {
    event.preventDefault();
    const { target: { attributes, parentNode }, currentTarget } = event;
    let clickedElementId = parentNode.attributes["data-id"] ? Number(parentNode.attributes["data-id"].nodeValue) : null;
    let chldDataFromData = getDataChldById(clickedElementId);        
        setMenuActive(clickedElementId);
        toggleMenu();
        clickedElementId && chldDataFromData ? renderCardsToDom(chldDataFromData, 'categores') : renderCardsToDom(data, 'category');
    console.log(currentTarget.parentNode)
}

const setMenuActive = elementId => {
    let menuList = document.querySelector('ul.header_menu_list').children;
    Array.from(menuList)
    .forEach(it => {        
        if (it.classList.contains('active')) {
            it.classList.remove('active');
        } 
        let activeMenuItem = Number(it.dataset["id"]) === Number(elementId) ? it : null;
        if (activeMenuItem === it ) {
            it.classList.add('active');
        }
    })  
}
