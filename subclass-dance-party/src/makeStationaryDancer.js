var makeStationaryDancer = class extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, 100);
  }
  

  step() {  
    // check if moving dancer is nearby
      //explode

    if (this.checkMovingDancer()) {
      this.explode();
      this.removeFromGlobal(); 
      // this.$node.remove();
      setTimeout(() => { this.$node.remove(); }, 1500);

    }

    super.step();
  }

  removeFromGlobal() {
    // 
    // loop through global dancers array
    var removeIndex = dancers.indexOf(this);
    console.log('before boom', dancers, dancers.length, removeIndex);
    if (removeIndex > 0) {
      dancers.splice(removeIndex, 1);
    }
    console.log('Booom!', dancers, dancers.length);

  }

  checkMovingDancer() {
  // go through movingDancer array in global scope
    // for every dancer compare the two locations
    // if within distance return true
  // else retun false
    var currentLocation = super.getCurrentLocation();
    for (var i = 0; i < movingDancers.length; i++) {
      // get dancer's position
      var checkDancer = movingDancers[i].getCurrentLocation();
      // check dancer's distance
      var XDistance = (currentLocation.left - checkDancer.left);
      var YDistance = (currentLocation.top - checkDancer.top);
      var distance = Math.sqrt(Math.pow(XDistance, 2) + Math.pow(YDistance, 2));

      if (distance < 30) {
        return true;
      }
    } 

    return false;
  }

  explode () {
    this.$node.addClass('explode');
  }
};
