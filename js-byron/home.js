console.clear();

var textPath = document.querySelector('#text-path');
var textPath2 = document.querySelector('#text-path2');
var textPath3 = document.querySelector('#text-path3');
var textPath4 = document.querySelector('#text-path4');
var textPath5 = document.querySelector('#text-path5');

var textContainer = document.querySelector('#text-container');
console.log(textContainer);

var path = document.querySelector( textPath.getAttribute('href') );
console.log(path);

var pathLength = path.getTotalLength();
console.log(pathLength);

function updateTextPathOffset(offset){
  textPath.setAttribute('startOffset', offset); 
  textPath2.setAttribute('startOffset', offset + 4600); 
  textPath3.setAttribute('startOffset', offset + 9100); 
  textPath4.setAttribute('startOffset', offset + 13600); 
  textPath5.setAttribute('startOffset', offset + 18100); 
}


updateTextPathOffset(4390);

function onScroll(){
  requestAnimationFrame(function(){
    var rect = textContainer.getBoundingClientRect();
    var scrollPercent = rect.y / window.innerHeight;

    updateTextPathOffset( scrollPercent * pathLength + 4340);
  });
}

window.addEventListener('scroll',onScroll);


$(document).ready(function(){
  $(window).scroll(function(){
    console.log($(this).scrollTop());
    
    if($(this).scrollTop() > 100){
      $(".scroll").css({"opacity" : "0"});
      $(".ellipse").css({"opacity" : "0"});
    }
    else {
      $(".scroll").css({"opacity" : "0.7"});
      $(".ellipse").css({"opacity" : "0.7"});
    }
  })
})