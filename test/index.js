var expect = require('chai').expect;
var is = require('../lib/is/index');

describe('is micro-checking library', function() {
  describe('is.arguments', function () {
    it('should return true if passed parameter type is arguments', function () {
      var getArguments = function () {
          return arguments;
      };
      var arguments = getArguments('test');
      expect(is.arguments(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not arguments", function () {
      var notArguments = ['test'];
      expect(is.arguments(notArguments)).to.be.false;
    });
  });
});

describe('is.array', function () {
  it('should return true if passed argument type is Array', function(){
    expect(is.array(['value1','value2'])).to.be.true;
  });
  it('should return false if passed argument type is not Array', function() {
    expect(is.array('nicolas')).to.be.false;
  });
});

describe('is.boolean', function () {
  it('should return true if passed argument type is a boolean', function(){
    expect(is.boolean(true)).to.be.true;
    expect(is.boolean(false)).to.be.true;
  });
  it('should return false if passed argument type is not a boolean', function() {
    expect(is.boolean('sf')).to.be.false;
    expect(is.boolean(2)).to.be.false;
    expect(is.boolean([])).to.be.false;
  });
});

describe('is.date', function () {
  it('should return true if passed argument type is a valid date', function(){
    var date = new Date();
    expect(is.date(date)).to.be.true;
  });
  it('should return false if passed argument type is not a valid date', function() {
    expect(is.date('sf')).to.be.false;
    expect(is.date(2)).to.be.false;
    expect(is.date([])).to.be.false;
    expect(is.date(true)).to.be.false;
    expect(is.date(false)).to.be.false;
  });
});

describe('is.error', function () {
  it('should return true if passed argument type is an error', function(){
    var error = new Error();
    expect(is.error(error)).to.be.true;
  });
  it('should return false if passed argument type is not an error', function() {
    expect(is.error('sf')).to.be.false;
    expect(is.error(2)).to.be.false;
    expect(is.error([])).to.be.false;
    expect(is.error(true)).to.be.false;
    expect(is.error(false)).to.be.false;
  });
});

describe('is.function', function () {
  it('should return true if passed argument type is a function', function(){
    var myFunction = function(){};
    expect(is.function(myFunction)).to.be.true;
  });
  it('should return false if passed argument type is not a function', function() {
    expect(is.function('sf')).to.be.false;
    expect(is.function(2)).to.be.false;
    expect(is.function([])).to.be.false;
    expect(is.function(true)).to.be.false;
    expect(is.function(false)).to.be.false;
  });
});
  
describe('is.nan', function () {
  it('should return true if passed argument type is a NaN', function(){
    expect(is.nan(NaN)).to.be.true;
  });
  it('should return false if passed argument type is not a NaN', function() {
    expect(is.nan('sf')).to.be.false;
    expect(is.nan(2)).to.be.false;
    expect(is.nan([])).to.be.false;
    expect(is.nan(true)).to.be.false;
    expect(is.nan(false)).to.be.false;
  });
}); 

describe('is.null', function () {
  it('should return true if passed argument type is a null value', function(){
    expect(is.null(null)).to.be.true;
  });
  it('should return false if passed argument type is not a null value', function() {
    expect(is.null('sf')).to.be.false;
    expect(is.null(2)).to.be.false;
    expect(is.null([])).to.be.false;
    expect(is.null(true)).to.be.false;
    expect(is.null(false)).to.be.false;
  });
}); 

describe('is.number', function () {
  it('should return true if passed argument type is a number', function(){
    expect(is.number(2)).to.be.true;
  });
  it('should return false if passed argument type is not a number', function() {
    expect(is.number('sf')).to.be.false;
    expect(is.number([])).to.be.false;
    expect(is.number(true)).to.be.false;
    expect(is.number(false)).to.be.false;    
  });
  it('should return false if passed argument type is not a NaN', function() {
    expect(is.number(NaN)).to.be.false;  
  });
}); 

describe('is.object', function () {
  it('should return true if passed argument type is an object', function(){
    var o = new Object();
    expect(is.object(o)).to.be.true;
    });
  it('should return false if passed argument type is not an object', function() {
    expect(is.object(2)).to.be.false;
    expect(is.object('bonjour')).to.be.false;
  });
}); 

describe('is.json', function () {
  it('should return true if passed argument type is a JSON', function(){
    expect(is.json({})).to.be.true;
    });
  it('should return false if passed argument type is not a JSON', function() {
    expect(is.json('sf')).to.be.false;
    expect(is.json([])).to.be.false;
    expect(is.json(true)).to.be.false;
    expect(is.json(false)).to.be.false; 
  });
}); 

describe('is.regexp', function () {
  it('should return true if passed argument type is a RegExp', function(){
    var myregexp = new RegExp();
    expect(is.regexp(myregexp)).to.be.true;
    });
  it('should return false if passed argument type is not a RegExp', function() {
    expect(is.regexp('sf')).to.be.false;
    expect(is.regexp([])).to.be.false;
    expect(is.regexp(23)).to.be.false;
    expect(is.regexp(true)).to.be.false;
    expect(is.regexp(false)).to.be.false; 
  });
}); 

describe('is.sameType', function () {
  it('should return true if value1 is the same type as value2', function(){
    expect(is.sameType('string1','string2')).to.be.true;
    expect(is.sameType(true,false)).to.be.true;
    expect(is.sameType(null,null)).to.be.true;
    expect(is.sameType(23,48)).to.be.true;
    });
  it('should return false if value1 is not the same type as value2', function() {
    expect(is.sameType('jkdfsdh',13)).to.be.false;
    expect(is.sameType(true,'bonjour je suis Olivier')).to.be.false;
  });
}); 





















