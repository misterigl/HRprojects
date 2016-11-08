
// Creates and returns a new dancer object that can step
var makeDancer = class {
  constructor(top, left, timeBetweenSteps) {
    // var dancer = {};

  // use jQuery to create an HTML <span> tag
    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.setPosition(top, left);
    this.step();
    this.runOnce = false;
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
    // } else {
    //   this.runOnce = true;
    // }
  }


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  // return dancer;
};

// export default makeDancer;