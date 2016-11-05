describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should return the size of the set', function() {
    set.add('something');
    set.add('something else');
    set.add('another one');
    expect(set.getSize()).to.equal(3);
  });

  it('should add multiple values at once', function() {
    set.add('something', 'another string', 'third string');
    expect(set.contains('something')).to.be.true;
    expect(set.contains('another string')).to.be.true;
    expect(set.contains('third string')).to.be.true;
  });

  it('should determine the type of any value', function() {
    expect(checkType('string')).to.equal('string');
    expect(checkType(0)).to.equal('number');
    expect(checkType(NaN)).to.equal('number');
    expect(checkType(Infinity)).to.equal('number');

    expect(checkType([])).to.equal('array');
    expect(checkType(null)).to.equal('null');
    expect(checkType(undefined)).to.equal('undefined');
    expect(checkType(true)).to.equal('boolean');
    expect(checkType(false)).to.equal('boolean');

    expect(checkType({})).to.equal(({}).constructor.toString());
    expect(checkType(new Date())).to.equal(Date.toString());
    expect(checkType(new Error())).to.equal(Error.toString());
  });
});
