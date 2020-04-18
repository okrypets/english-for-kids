import { 
    goToCategory, 
    setMenuActive,
    getPlayMode,
    setWorkMode,
    getActiveCtegory,
    getDataChldById,
    goHome
 } from './utils'

let categoryDataSounds = [];
let nowPlayElemId = '';
let nowPlaySound = '';
let success = false;
let isStartPlay = false;
let successArr = [];


export const handleMouseEventPlay = () => {
    event.preventDefault();
    const { target: { attributes, parentNode, nodeName }, currentTarget } = event;
    let clickedElementId = attributes['data-id'] ? attributes['data-id'].nodeValue : parentNode.attributes['data-id'] ? parentNode.attributes['data-id'].nodeValue : null;
    
    
    if ( currentTarget.classList.contains('categores') ) {
        setMenuActive(clickedElementId);
        setWorkMode('category');
        goToCategory(clickedElementId, currentTarget, getPlayMode);
        setCategoryData();
        getRandomSound();
             
    }    
    
    if (nodeName === 'BUTTON') {
        if (categoryDataSounds.lenght === 0 ) {
            setCategoryData();
        }        
        resetButton();
        isStartPlay = true;
        handlePlayButtonClick();
    }

    if (event.target.classList.contains('front') && !parentNode.classList.contains('disabled') && nowPlayElemId && isStartPlay) {
        const { dataset: { id = ''}} = parentNode;
        checkSuccessElement(id);
        setStar();
    }
    
}

export const handlePlayButtonClick = () => { 
    
    let audioElement = success ? getRandomSound() : nowPlaySound;
    let cardListContainer = document.querySelector('.cards__list'); 
    cardListContainer.insertAdjacentElement('beforeend', audioElement);
    document.querySelector('.cards__list audio').play();
}

const getAudioElement = (sound, id) => {
    let audioElement = document.createElement('audio');
    audioElement.id = 'audio-player';
    audioElement.controls = 'controls';
    audioElement.setAttribute('data-id', id);
    audioElement.src = `./src/assets/${sound}`;
    audioElement.type = 'audio/mpeg';
    return audioElement;
}

export const setCategoryData = () => {
    let activeCategory = getActiveCtegory();
    let categoryData = getDataChldById(activeCategory);
    let soudsArr = activeCategory > 0 ? categoryData.map(it => {
    const { id, audioSrc } = it;
    return getAudioElement(audioSrc, id)
    }) : null
    categoryDataSounds = soudsArr
    return soudsArr;
}

export const getRandomSound = () => {  
    let randomElement = categoryDataSounds[Math.floor(Math.random() * categoryDataSounds.length)];
    const { dataset: { id = '' } } = randomElement;
    nowPlayElemId = id;
    nowPlaySound = randomElement;    
    return randomElement;
}

const removePlayedElement = (id) => {
    let removeElement = document.querySelector(`.cards__list #audio-player`);    
    removeElement.remove();
    categoryDataSounds = categoryDataSounds.reduce((acc, it) => {
        const { dataset: {id: removeId = ''}} = it;
        if (removeId !== id) {
            acc.push(it);
        }
        return acc;
    }, [])
}

const checkSuccessElement = (id) => {
    if (nowPlayElemId === id) {
        success = true;
        setElementChecked();
        removePlayedElement(id)
        if ( categoryDataSounds.length > 0 ) { 
            handlePlayButtonClick();
        }
        if ( categoryDataSounds.length  === 0 ) {
            isStartPlay = false;
            showSmile();
        }
        return success;
    }
}

const setElementChecked = () => {
    const { target: { parentNode } } = event;
    parentNode.classList.add('disabled');
}

const checkIsFailure = () => {
    let isFailure = successArr.find( it => it === false );
    if (isFailure === false) {
        return false;
    } else if (isFailure === undefined) {
        return true;
    }
    
}

const showSmile = () => {
    let containerElement = document.querySelector('.cards__list')
    containerElement.innerHTML = '';
    let smileHappy = document.createElement('img');
    smileHappy.src = './src/assets/img/success.jpg';
    let smilefailure = document.createElement('img');
    smilefailure.src = './src/assets/img/failure.jpg';    
    let isFailure = checkIsFailure();
    if (!isFailure) {
        document.querySelector(".failure").play()
        containerElement.insertAdjacentElement('beforeend', smilefailure);
    } else if (isFailure) {
        document.querySelector(".success").play()
        containerElement.insertAdjacentElement('beforeend', smileHappy);
    }
    goHome()
}

export const resetStars = () => {
    successArr = [];
    document.querySelectorAll('.star').forEach(it => it.remove());
}



export const renderServiceSound = () => {
    let errorSound = getAudioElement('audio/error.mp3', 0);
    let successSound = getAudioElement('audio/success.mp3', 0)
    let failureSound = getAudioElement('audio/failure.mp3', 0)
    let correctSound = getAudioElement('audio/correct.mp3', 0)
    errorSound.classList.add('error');
    successSound.classList.add('success');
    failureSound.classList.add('failure');
    correctSound.classList.add('correct');
    let systemSoundContainer = document.createElement('div');
    systemSoundContainer.classList.add('system_sound');    
    systemSoundContainer.append(errorSound);
    systemSoundContainer.append(successSound);
    systemSoundContainer.append(failureSound);
    systemSoundContainer.append(correctSound);
    document.querySelector(".container > div.wrapper").insertAdjacentElement('beforeend', systemSoundContainer);

}

const createFullStar = () => {
    let fullStar = document.createElement('span');
    fullStar.classList.add('star','full');
    return fullStar
}

const createEmptyStar = () => {
    let emptyStar = document.createElement('span');
    emptyStar.classList.add('star','empty');
    return emptyStar
}

const setStar = () => {
    let starsContainer = document.querySelector('div.stars');
    if (success) {
        starsContainer.insertAdjacentElement('beforeend', createFullStar());
        success = false;
        document.querySelector(".correct").play()
        successArr.push(true);

    } else if (!success) {
        document.querySelector(".error").play()
        successArr.push(false)
        starsContainer.insertAdjacentElement('beforeend', createEmptyStar());
    }
    
}

const resetButton = () => {
    let buttonElement = document.querySelector('.cards__list .play_button > button')
    buttonElement.classList.add('repeat');
    buttonElement.innerHTML = 'Start game';

}

export const resetPlay = (id) => {
    nowPlayElemId = id;
    nowPlaySound = '';
    success = false;
    isStartPlay = false;
    successArr = [];
    setCategoryData();
    getRandomSound(); 
}
