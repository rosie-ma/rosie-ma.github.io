window.onload = function() {
var imgTag = document.getElementsByClassName('pictures'),
    figure = document.getElementById('pictures'),
    divTag = document.getElementById('textBox'),
    headerInfo = document.getElementById('headerInfo'),
    descInfo = document.getElementById('descInfo'),
    prev = document.getElementById('leftButton'),
    next = document.getElementById('rightButton'),
    openedImg = document.getElementById('openedImg'),
    navBar = document.getElementById('navBar'),
    caption = museumInfo.headInfo,
    desc = museumInfo.description;
   
//each image shows its own information
for (let i = 0; i < imgTag.length; i++) {
imgTag[i].addEventListener('mouseover', function() {
    var imgId = this.getAttribute('id');
    var index;
    for (let j = 0; j < imgTag.length; j++) {
        if (imgId == imgTag[j].getAttribute('id')) {
            index = j;
            break;
         }            
    }
    for(let k = 0; k < imgTag.length; k++) {
        if(imgTag[index].getAttribute('id') == desc[k].name) {
            
            descInfo.innerHTML = desc[k].info;
        } 
        if(imgTag[index].getAttribute('id') == caption[k].name) {
            headerInfo.innerHTML = caption[k].infoCap;
            
        }
 }
    }, false)
//   imgTag[i].addEventListener('mouseout', function() {
//       headerInfo.innerHTML = '';
//       descInfo.innerHTML = '';
//   }, false)
}

//when click image it gets bigger;
$(function() {
    $('#pictures img').click(function() {
        var $src = $(this).attr('src');
        $('.show').fadeIn('');
        $('.show').css("display", "flex");
        $('.openedImg').attr('src', $src);
        $('.navBar').css("display", "none");
    });
    
//close button
    $('.closeButton, .overlay').click(function() {
        $('.show').fadeOut('');
        $('.navBar').css("display", "inline-block");
    });
    
//maximize button
var littleWidth = $('.imgShow').width();
var littleHeight = $('.imgShow').height();
    
$('#header #resizeButton').click(function() {
    event.preventDefault();
    if( $('.imgShow').width() != ($(document).width() - 400)) {
        $('.imgShow').width($(document).width() - 400);
        $('.imgShow').height($( document ).height() - 50);
        $('#wrapper').removeClass('.wrapper');
        $('#wrapper').addClass('.wrapperClicked');     
        $( "#resizeButton" ).addClass('resizeButtonClicked');
        $( "#resizeButton" ).removeClass('resizeButton');
    } else if($('.imgShow').width() == ($(document).width() - 400)) {
        $('.imgShow').width(littleWidth);
        $('.imgShow').height(littleHeight);
        $('#wrapper').removeClass('.wrapperClicked');
        $('#wrapper').addClass('.wrapper'); 
        $( "#resizeButton" ).addClass('resizeButton');
        $( "#resizeButton" ).removeClass('resizeButtonClicked');
    }
});
})

//make prev and next buttons work
prev.addEventListener('click', function() {  
    var currentSrc = openedImg.getAttribute('src');
    for(var i = 0; i < imgTag.length; i++) {
        if(imgTag.item(0).getAttribute('src') == currentSrc) {
                openedImg.setAttribute('src', imgTag.item(7).getAttribute('src'));
            break;
            }
        if( currentSrc == imgTag[i].getAttribute('src')) {
           openedImg.setAttribute('src', imgTag[i - 1].getAttribute('src'));
            
        }
    }
}, false)
next.addEventListener('click', function() {
    var currentSrc = openedImg.getAttribute('src');
    for(var i = 0; i < imgTag.length; i++) {
        if(imgTag.item(7).getAttribute('src') == currentSrc) {
                openedImg.setAttribute('src', imgTag.item(0).getAttribute('src'));
            break;
            }
        if( currentSrc == imgTag[i].getAttribute('src')) {
            openedImg.setAttribute('src', imgTag[i + 1].getAttribute('src'));
        }
    }
})

    
  
    
}





















