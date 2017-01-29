$(document).ready(function(){
  // Cool entrance
  //coolEntrance();
  //activeToggle();
  // Toggle Card
  toggleCard();

});// End of main


// Cool card entrance
coolEntrance = function(){
    // Grab all cards
    $('.card').each(function(i){
      // Grabs a specific card via "i"
      setTimeout(function(){
        $('.card').eq(i).addClass('animated bounce is-visible');
      }, 500 * i);
    });
};

// Navbar Link Active Toggle
activeToggle = function(){
  // click event
  $('.navbar--link').click(function(){
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
  });
};

// toggle front or back of card
toggleCard = function(){
  $('.face-toggle').click(function(e){
    e.preventDefault();
    $('#card').toggleClass('flipped');
  });
};
