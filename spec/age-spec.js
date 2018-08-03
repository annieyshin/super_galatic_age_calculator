import { Age } from './../src/age.js';

describe('Age', function() {
  it('should return the age of a person in years by inputted birthdate', function() {
    let newAge = new Age("08/08/1990");
    expect(newAge.ageConverter()).toEqual(27);
  });

});
