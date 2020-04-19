import { 
    toggleMenu,
    chackboxChanger,
    handleMenuClick
 } from "./js/utils";
import { data } from './js/dataList';
import CardsList from "./js/CardsList";

window.onload = () => {
    if ( data ) {
        let cardList = new CardsList(data);
        cardList.init();
    }
}

document.querySelector("div.icon__menu_toggle").addEventListener("click", toggleMenu);
document.querySelector("#checkbox_switcher").addEventListener("change", chackboxChanger);
document.querySelector("ul.header_menu_list").addEventListener("click", handleMenuClick);