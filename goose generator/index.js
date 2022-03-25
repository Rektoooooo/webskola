function changeColor (elementId) {
  var element = document.getElementById(elementId)
    if (element.style.color == 'blue') {
        element.style.color = 'red'
    }
    else {
        element.style.color = 'blue'
    }
}

function fontWeight (elementId) {
    var element = document.getElementById(elementId)
    if (element.style.fontWeight == 'normal') {
        element.style.fontWeight = 'bold'
    }
    else {
        element.style.fontWeight = 'normal'
    }
}

const body = document.body

var husy = 0;

function x (elementId) {
    husy++;
    element = document.createElement('img')
    element.src = 'sussyhusa.jpeg'
    element.className = 'husa center'
    elm = document.getElementById(elementId)
    elm.appendChild(element)
    count = document.createElement("h1")
    count.textContent = husy;
    count.className = 'count'
    cnt = document.getElementById(elementId)
    cnt.appendChild(count)
    document.getElementById( 'bottom' ).scrollIntoView();
    window.setTimeout( function () { top(); }, 2000 );

}




