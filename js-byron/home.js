console.clear();

var textPath = document.querySelector('#text-path');
console.log(textPath);

var textContainer = document.querySelector('#text-container');
console.log(textContainer);

var path = document.querySelector( textPath.getAttribute('href') );
console.log(path);

var pathLength = path.getTotalLength();
console.log(pathLength);

function updateTextPathOffset(offset){
  textPath.setAttribute('startOffset', offset); 
}


updateTextPathOffset(960);

function onScroll(){
  requestAnimationFrame(function(){
    var rect = textContainer.getBoundingClientRect();
    var scrollPercent = rect.y / window.innerHeight;

    updateTextPathOffset( scrollPercent * pathLength + 940 );
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