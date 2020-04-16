import { 
    goToCategory, 
    setMenuActive, 
    getWorkMode, 
    getPlayMode, 
    setIsPlay, 
    setWorkMode,
    getActiveCtegory,
    getDataChldById
 } from './utils'

let categoryDataSounds = [];
let nowPlayElemId = '';

export const handleMouseEventPlay = () => {
    //console.log(event)
    event.preventDefault();
    const { target: { attributes, parentNode, nodeName }, currentTarget } = event;
    let clickedElementId = attributes['data-id'] ? attributes['data-id'].nodeValue : parentNode.attributes['data-id'] ? parentNode.attributes['data-id'].nodeValue : null;
    
    
    if ( currentTarget.classList.contains('categores') ) {
        setWorkMode('category');
        goToCategory(clickedElementId, currentTarget, getPlayMode); 
             
    }
    
    if (nodeName === 'BUTTON') {
        handlePlayButtonClick();
    }
    // if ( currentTarget.classList.contains('categores') ) {
    //     goToCategory(clickedElementId, currentTarget, true)
    //     let playButtonElem = document.createElement('button');
    //     currentTarget.insertAdjacentElement('beforeend', playButtonElem)  
    // }
}

// export const renderPlayButton = () => {
//     let playButtonElem = document.createElement('button');   

//     return playButtonElem;
// }

export const handlePlayButtonClick = () => {    
    let randomCatElem = getRandomSound();
    let sound = getRandomSound();
    let cardListContainer = document.querySelector('.cards__list');
    let audioElement = getAudioElement(sound);
    cardListContainer.insertAdjacentElement('beforeend', audioElement);
    document.querySelector('.cards__list audio').play();
}

const getAudioElement = (sound) => {
    let audioElement = document.createElement('audio');
    audioElement.id = 'audio-player';
    audioElement.controls = 'controls';
    audioElement.src = `./src/assets/${sound}`;
    audioElement.type = 'audio/mpeg';
    return audioElement;
}

const getCategoryData = () => {
    let activeCategory = getActiveCtegory();
    let categoryData = getDataChldById(activeCategory);
    // let soudsArr = categoryData.reduce((acc, it) => {
    //     const { audioSrc } = it;
    // }, [])
    categoryDataSounds = categoryData
    return categoryData;
}

const getRandomSound = () => {  
    let categoryDataSounds =   getCategoryData();
    let randomElement = categoryDataSounds[Math.floor(Math.random() * categoryDataSounds.length)];
    const { id, audioSrc } = randomElement;
    nowPlayElemId = id;
    removePlayedElement(id)
    return audioSrc;
}

const removePlayedElement = (id) => {
    categoryDataSounds = categoryDataSounds.reduce((acc, it) => {
        if (it['id'] !== id) {
            acc.push(it);
        }
        return acc;
    }, [])
}
