window.onload = function(){ 
    document.querySelector('.block').onmousemove = function(event) {
        event = event || window.event; // кроссбраузерность
        //console.log(event); // вывод в консоль
        
        
    }

document.querySelector('.block').onclick = function(event) {
    event = event || window.event;
    console.log(event.offsetX+','+event.offsetY);
 
    
  }

};
