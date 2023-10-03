const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
            // Setup
      const expected = 'moo!';

      // Exercise
      const result = Rooster.announceDawn();

      // Verify
      assert.strictEqual(result, expected);
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      //set up 
      const hour = 7;
      const expected = '7';

      // Exercise
      const result = Rooster.timeAtDawn(hour);
      
      // Verify
      assert.strictEqual(result, expected);
    });
    it('throws an error if passed a number less than 0', () => {
      // Setup
      const hour = -1;

      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(hour);
      }, 
      RangeError
      );
    });
    it('throws an error if passed a number greater than 23', () => {
      // Setup
      const hour = 24;

      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(hour);
      }, RangeError);
    });
  });
});
