var makeFaceDancer = class extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('faceDancer');
  }
  

  step() {
  
    // this.$node.toggle();
    if (Math.random() * 1000 < 50) {
      this.$node.effect('shake');
    }
    super.step();

  }
};