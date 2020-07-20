console.log("If you feel generous, you can donate some mBTC here: 1MCrtX7qt4fxYMoz5SoS3xyebdPUD9irWr \n I forever thank you.");
window.sr = ScrollReveal();
sr.reveal(".jesuis", { duration: 1000, distance: '30px', easing: 'ease-out' })
sr.reveal(".pres .work", {
    duration: 500, reset: true, afterReveal: function () {
        //console.log("after")
        type()
    }
})
sr.reveal(".proj article a",{duration: 1000, easing:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"})

var str = document.querySelector('.pres .work').innerHTML,
    i = 0,
    hasB,
    text;
document.querySelector('.pres .work').innerHTML = "&nbsp;";

function type() {
    text = str.slice(0, ++i);
    if (text === str) return;

    document.querySelector('.pres .work').innerHTML = text;
    var offset = 0
    var char = text.slice(-1);
    if (char === ' ') offset = 100;

    delay = offset + Math.floor(Math.random() * (120 - 50)) + 50;
    //console.log(delay)

    setTimeout(type, delay);
};


//if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
//window.onmousewheel = document.onmousewheel = wheel;
var running = 0;
var distance = 100;
var arrival = $(window).scrollTop()
var delta = 0;
var onemore=false

function wheel(event) {
    
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;
    //console.log(arrival+" "+delta)
    //console.log(running)
    if(running<30)
        handle(delta,distance);


    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle(delta, dist) {
    oldarr= arrival;
    
	arrival = Math.min($(document).height() - $(window).height(),Math.max(0,arrival - (dist * delta)))
    delta = Math.abs(arrival-oldarr)
    var time = Math.max(200,Math.min(delta*5.2, 520));
    //console.log("time:"+delta)
    if(running)
        $('html, body').stop();
    $('html, body').animate({
        scrollTop: arrival
    }, 
    {
        duration:time,
        easing: "easeOutQuad",
        start:function(){
            running++;
        },
        done:function(){
            running=0;
        }
    } );
}
let svgs = document.querySelectorAll(".thumbnail");
////console.log(svgs)
for(let i=0;i<svgs.length;i++){
    //console.log(svgs[i].style.maxWidth)
    //console.log(svgs[i].parentNode.style)
    let svgW = parseInt(svgs[i].style.maxWidth);
    let svgH = parseInt(svgs[i].viewBox.baseVal["height"]);
    let gR = 1.6180339;
    gR = Math.PI
    let g_increase = Math.min(svgH, svgW) / gR;
    console.log(g_increase)
    console.log(svgW/gR)
    svgs[i].parentNode.parentNode.parentNode.style.maxWidth = 80 + svgW + g_increase + "px"

}
document.getElementsByClassName("copy")[0].innerHTML = "&copy; "+ (new Date()).getFullYear() +" &middot;"
