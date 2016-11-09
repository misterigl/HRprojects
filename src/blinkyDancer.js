// import makeDancer from "./dancer" 
//var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
var makeBlinkyDancer = class extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.currentColor = 0;
  }
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = blinkyDancer.step;

  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };
  // oldStep() {
  //   this.step;
  // }

  step() {
  
    this.$node.toggle();
    this.toggleColor();
    super.runAway();
    super.step();

  }

  toggleColor() {
    var colors = ['red', 'blue', 'green', 'yellow', 'orange'];
    this.currentColor = (this.currentColor + 1) % colors.length;
    // var colorSettings = {
    //   border: 10px solid blue
    // };
    this.$node.css("border", "10px solid " + colors[this.currentColor]);
  }
};

