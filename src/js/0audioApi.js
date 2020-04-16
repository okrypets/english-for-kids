let context;
window.addEventListener('load', function(){
  try {
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();
  }
  catch(e) {
    alert('Opps.. Your browser do not support audio API');
  }
}, false);

// создаем аудио контекст
//let context = new window.AudioContext(); //
// переменные для буфера, источника и получателя
let buffer, source, destination; 
//let bufferLoader;

// функция для подгрузки файла в буфер
let loadSoundFile = function(url) {
  // делаем XMLHttpRequest (AJAX) на сервер
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'arraybuffer'; // важно
  xhr.onload = function(e) {
    // декодируем бинарный ответ
    context.decodeAudioData(this.response,
    function(decodedArrayBuffer) {
      // получаем декодированный буфер
      buffer = decodedArrayBuffer;
    }, function(e) {
      console.log('Error decoding file', e);
    });
  };
  xhr.send();
}



// функция начала воспроизведения
let play = function(){
  // создаем источник
  source = context.createBufferSource();
  // подключаем буфер к источнику
  source.buffer = buffer;
  // дефолтный получатель звука
  destination = context.destination;
  // подключаем источник к получателю
  source.connect(destination);
  // воспроизводим
  source.start(0);
}

// функция остановки воспроизведения
let stop = function(){
  source.stop(0);
}


function BufferLoader(context, urlList, callback) {
    this.context = context;
    this.urlList = urlList;
    this.onload = callback;
    this.bufferList = new Array();
    this.loadCount = 0;
  }
  
  BufferLoader.prototype.loadBuffer = function(url, index) {
    // Load buffer asynchronously
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";
  
    var loader = this;
  
    request.onload = function() {
      // Asynchronously decode the audio file data in request.response
      loader.context.decodeAudioData(
        request.response,
        function(buffer) {
          if (!buffer) {
            alert('error decoding file data: ' + url);
            return;
          }
          loader.bufferList[index] = buffer;
          if (++loader.loadCount == loader.urlList.length)
            loader.onload(loader.bufferList);
        },
        function(error) {
          console.error('decodeAudioData error', error);
        }
      );
    }
  
    request.onerror = function() {
      alert('BufferLoader: XHR error');
    }
  
    request.send();
  }
  
  BufferLoader.prototype.load = function() {
    for (var i = 0; i < this.urlList.length; ++i)
    this.loadBuffer(this.urlList[i], i);
  }

export { loadSoundFile, play, stop, BufferLoader } 