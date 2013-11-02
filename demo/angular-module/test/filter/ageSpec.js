'use strict';

describe('Filter: age', function () {

  // load the controller's module
  beforeEach(module('corporate'));

  it('should attach a list of awesomeThings to the scope', inject(function ($filter) {
    expect($filter('age')).toBeDefined();
    expect($filter('age')('2011-10-31T18:24:22.261Z')).toEqual(2);
  }));
});