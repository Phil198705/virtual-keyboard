let container = document.createElement('div');
document.body.appendChild(container);
container.classList.add('container');


let title = document.createElement('h1');
title.textContent = 'Virtual keyboard for Windows OS';
container.appendChild(title);


let textArea = document.createElement('textarea');
textArea.classList.add('textarea');
container.appendChild(textArea);


let keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
container.appendChild(keyboard);


let keyboardRow1 = document.createElement('div');
keyboardRow1.classList.add('row1');
keyboard.appendChild(keyboardRow1);


let keyboardRow2 = document.createElement('div');
keyboardRow2.classList.add('row2');
keyboard.appendChild(keyboardRow2);


let keyboardRow3 = document.createElement('div');
keyboardRow3.classList.add('row3');
keyboard.appendChild(keyboardRow3);


let keyboardRow4 = document.createElement('div');
keyboardRow4.classList.add('row4');
keyboard.appendChild(keyboardRow4);


let keyboardRow5 = document.createElement('div');
keyboardRow5.classList.add('row5');
keyboard.appendChild(keyboardRow5);


let keysRow1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
let codeRow1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
function addKeysRow1(){
    for( let i = 0; i < keysRow1.length; i++){
        let key = document.createElement('div');
        key.classList.add('key');
        keyboardRow1.appendChild(key);
        key.textContent = keysRow1[i];
        if(keysRow1[i] == 'Backspace'){
            key.style.flexGrow = '1';
        }
        key.setAttribute('data', codeRow1[i])
    } 
}
addKeysRow1();

let keysRow2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'];
let codeRow2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'];
function addKeysRow2(){
    for( let i = 0; i < keysRow2.length; i++){
        let key = document.createElement('div');
        key.classList.add('key');
        keyboardRow2.appendChild(key);
        key.textContent = keysRow2[i];
        if(keysRow2[i] == 'Tab'){
            key.style.flexGrow = '1';
        }
        if(keysRow2[i] == '\\'){
            key.style.flexGrow = '1';
        }
        key.setAttribute('data', codeRow2[i])
    } 
}
addKeysRow2();

let keysRow3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
let codeRow3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
function addKeysRow3(){
    for( let i = 0; i < keysRow3.length; i++){
        let key = document.createElement('div');
        key.classList.add('key');
        keyboardRow3.appendChild(key);
        key.textContent = keysRow3[i];
        if(keysRow3[i] == 'CapsLock'){
            key.style.flexGrow = '1';
        }
        if(keysRow3[i] == 'Enter'){
            key.style.flexGrow = '1';
        }
        key.setAttribute('data', codeRow3[i])
    } 
}
addKeysRow3();

let keysRow4 = ['Shift ', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift'];
let codeRow4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
function addKeysRow4(){
    for( let i = 0; i < keysRow4.length; i++){
        let key = document.createElement('div');
        key.classList.add('key');
        keyboardRow4.appendChild(key);
        key.textContent = keysRow4[i];
        if(keysRow4[i] == 'Shift '){
            key.style.flexGrow = '1';
        }
        if(keysRow4[i] == 'ArrowUp'){
            key.textContent = '\u1431';
        }
        key.setAttribute('data', codeRow4[i])
    } 
}
addKeysRow4();

let keysRow5 = ['Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
let codeRow5 = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
function addKeysRow5(){
    for( let i = 0; i < keysRow5.length; i++){
        let key = document.createElement('div');
        key.classList.add('key');
        keyboardRow5.appendChild(key);
        key.textContent = keysRow5[i];
        if(keysRow5[i] == ' '){
            key.style.flexGrow = '1';
        }
        if(keysRow5[i] == 'Meta'){
            key.textContent = 'Win';
        }
        if(keysRow5[i] == 'Control'){
            key.textContent = 'Ctrl';
        }
        if(keysRow5[i] == 'ArrowLeft'){
            key.textContent = '\u1438';
        }
        if(keysRow5[i] == 'ArrowDown'){
            key.textContent = '\u142F';
        }
        if(keysRow5[i] == 'ArrowRight'){
            key.textContent = '\u1433';
        }
        key.setAttribute('data', codeRow5[i])
    } 
}
addKeysRow5();

const keys = document.querySelectorAll('.key');
textArea.textContent = '';
keys.forEach(function(element){
    element.addEventListener('click', function(event){
       for (let i=0; i<keys.length; i++){
        keys[i].classList.remove('active');
    }
       element.classList.add('active');
       if(event.target.textContent == 'Backspace'){
                textArea.value = textArea.value.slice(0, -1)
              }else{

                  textArea.textContent += event.target.textContent;
              }
    });
})


document.onkeydown = function(event){
    keys.forEach(function (element){
        element.classList.remove('active');
    })
    document.querySelector('.key[data="'+ event.code +'"]').classList.add('active');
}

document.onkeyup = function(event){
    keys.forEach(function (element){
        element.classList.remove('active');
    })
    document.querySelector('.key[data="'+ event.code +'"]').classList.remove('active');
}



//   let codeRow5 = [];
// document.onkeydown = function(event){
//     codeRow5.push(event.code)
//     console.log(codeRow5)
// }








