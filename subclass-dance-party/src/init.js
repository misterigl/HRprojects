$(document).ready(function() {
  window.dancers = [];
  window.currentMousePos = { x: -1, y: -1 };
  window.movingDancers = [];
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    if (dancer instanceof window.makeMovingDancer) {
      window.movingDancers.push(dancer);
    }
  });

  $('.actionButton').on('click', function(event) {
    var actionButtonName = $(this).data('action-button-name');

    var actionFunction = window[actionButtonName];
    // we only have one action button for now, so assume actionFunction got bound to Lineup
    actionFunction(dancers);

  });


  $('body').mousemove(function(event) {
    window.currentMousePos.x = event.pageX;
    window.currentMousePos.y = event.pageY;
  });


});

