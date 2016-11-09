var makeMovingDancer = class makeMovingDancer extends makeDancer {
  constructor(top, left) {
    super(top, left, 10);
    this.vx = (Math.random() - 0.5) * 10; //x pixels per timeBetweenSteps
    this.vy = (Math.random() - 0.5) * 10; //y pixels per timeBetweenSteps
    // this.timeBetweenSteps = 100;

  }

  step() {
    this.moverPosition();
    super.step();
  }

  moverPosition() {
    var currentPosition = super.getCurrentLocation();
  
    this.edgeBounce(currentPosition['top'] + this.vy, currentPosition['left'] + this.vx);

    super.setPosition(currentPosition['top'] + this.vy, currentPosition['left'] + this.vx);
  }

  edgeBounce(newY, newX) {
    // when hitting the right or left edge, new Y = old Y, new X = - old X
    // when hitting the bottom or top edge, new Y = - old Y, new X = old X
  
    var windowHeight = $('body').height();
    var windowWidth = $('body').width();

    if (newX > windowWidth || newX < 0 ) {
      this.vx = - this.vx;
    }

    if (newY > windowHeight || newY < 0 ) {
      this.vy = - this.vy;
    }  


  }
}; 