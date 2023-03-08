$('.open').click(function(){
    if ($('nav').css('left')==0 + 'px')
    $('nav').animate({'left':'-250px'},500)
    else
    $('nav').animate({'left':'0px'},500)

})

$('.qq').eq(1).slideToggle(0)
$('.qq').eq(2).slideToggle(0)
$('.qq').eq(3).slideToggle(0)

$('h4').eq(0).click(function(){
    $('.qq').eq(0).slideToggle(500)
})
$('h4').eq(1).click(function(){
    $('.qq').eq(1).slideToggle(500)
})
$('h4').eq(2).click(function(){
    $('.qq').eq(2).slideToggle(500)
})
$('h4').eq(3).click(function(){
    $('.qq').eq(3).slideToggle(500)
})

function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
  
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

function f() {
    var x =  getTimeRemaining(new Date("2023-04-06"))
    let dayss = x.days
    let hourss = x.hours
    let minutess = x.minutes
    let seconds = x.seconds
    
    $('.one').html(dayss)
    $('.two').html(hourss)
    $('.three').html(minutess)
    $('.four').html(seconds)
}

f()

window.setInterval(f, 1000)


let charr = 100 

$('textarea').on('input', function(e){
    $('#remaining').html(`${charr - e.target.value.length} charcters remaining`)
})