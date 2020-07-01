function getPageWidth() {
    return (window.innerWidth > 0) ? window.innerWidth : screen.width;
}
window.setInterval(function (){
    // console.log(getPageWidth())
}, 100)

function removeStyling(attr) {
    let element = document.getElementById(attr);
    element.removeAttribute('style');
}

$('.page').scroll(function() {
    // if(scroll)
})

function isScrolledIntoView(elem) {
    var docViewTop = $('.page').scrollTop();
    var docViewBottom = $('.page').height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    // console.log(`${elemBottom} <= ${docViewBottom}, ${elemTop} >= ${docViewTop} = ${((elemBottom <= docViewBottom) && (elemTop <= docViewTop))}`)
    console.log(((elemBottom <= docViewBottom + 200) && (elemTop <= (docViewTop + 200))));
    return ((elemBottom <= docViewBottom + 200) && (elemTop <= (docViewTop + 200)));
}

function playOpenAnimation() {
    let tl = anime.timeline({
        duration: 750,
    })
    
    tl.add({
        targets: '.page',
        easing: 'easeInOutBack',
        top: (getPageWidth() > 600) ? "8%" : "0",
        bottom: (getPageWidth() > 600) ? "8%" : "0",
        left: (getPageWidth() > 600) ? "8%" : "0",
        right: (getPageWidth() > 600) ? "8%" : "0",
        delay: 1000,
    })
    
    tl.add({
        targets: '.divide',
        easing: 'spring',
        width: (getPageWidth() > 600) ? '50%' : "0%",
        delay: 1000
    })
    
    tl.add({
        targets: '.divide_right',
        easing: 'easeInOutBack',
        width: (getPageWidth() < 600) ? ['0%', '100%'] : '50%',
    }, '-=100')
    
    tl.add({
        targets: 'h1',
        easing: 'spring',
        top: '0px',
        bottom: '0px',
        opacity: '1',
    })
    
    tl.add({
        targets: '.dot',
        easing: 'spring',
        bottom: '0px',
        opacity: '1',
        duration: 500,
    }, '-=1000')
    
    tl.add({
        targets: '.icon',
        easing: 'spring',
        top: (getPageWidth() >= 1260) ? '0px' : '20px',
        opacity: 1,
        // delay: 1000,
        delay: anime.stagger(550),
        complete: function(anim) {
            tl.pause();
        }
    }, '-=1000')
}

function playAboutAnimation() {
    let tl = anime.timeline({
        duration: 750,
    })

    tl.add({
        targets: '.aboutMe',
        easing: 'spring',
        top: '0px',
        opacity: '1',
        duration: 500,
        delay: anime.stagger(250),
    })

    tl.add({
        targets: '.checkOut',
        // easing: 'spring',
        top: '0px',
        opacity: '1',
        duration: 500,
        delay: 500,
        delay: anime.stagger(250),
    })
}

$(document).ready(function(){
    playOpenAnimation();
    $('.page').scroll(function(){
        if(isScrolledIntoView($('.about')) === true) {
            console.log('hello');
            playAboutAnimation();
        }
    })
})