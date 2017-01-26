
// Creates and returns a new dancer object that can step
var makeDancer = class {
  constructor(top, left, timeBetweenSteps) {
    // var dancer = {};

  // use jQuery to create an HTML <span> tag
    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.setPosition(top, left);
    this.step();
  }
  setPosition (top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left

    };
    this.$node.css(styleSettings);
  }

  step() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // ES6 Implementation using ES5's .bind function
    // setTimeout(this.step.bind(this), this.timeBetweenSteps);
    // ES6 Fat Arrow Notation
   
    // if (this.runOnce) {
    setTimeout(() => { this.step(); }, this.timeBetweenSteps);
    // this.runAway();
    // } else {
    //   this.runOnce = true;
    // }
  }

  runAway() {
    var currentPosition = this.getCurrentLocation();

    var XDistance = (currentPosition.left - currentMousePos.x);
    var YDistance = (currentPosition.top - currentMousePos.y);
    var distanceFromMouse = Math.sqrt(Math.pow(XDistance, 2) + Math.pow(YDistance, 2));

    if (distanceFromMouse < 100) {
      // if we're in range of the mouse,
      // animate/move the dancer to outside the range of the mouse's position
      // in the opposite direction

      // the new position should be (2Dx - Mx, 2Dy - My)
      this.$node.stop();
      this.$node.animate({ 'left': 2 * currentPosition.left - currentMousePos.x, 
                           'top': 2 * currentPosition.top - currentMousePos.y }, 'slow');
    }
  }
  
  getCurrentLocation() {
    var currentPosition = this.$node.css(['top', 'left']);
  
    var currentTop = parseInt(currentPosition['top'], 10);
    var currentLeft = parseInt(currentPosition['left'], 10);
    return { top: currentTop, left: currentLeft };
  }

  


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  // return dancer;
};

// export default makeDancer;