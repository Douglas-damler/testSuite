const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('announceDawn', () => {
    it('returns a rooster call', () => {
      //Setup
      const expected = 'cock-a-doodle-doo!';

      //Exercise
      const result = Rooster.announceDawn();

      //Verify
      assert.strictEqual(expected, result)
    });
  });

    describe('timeAtDawn', () => {
      it ('returns its argument as a string', () => {
        //Setup
        var expected = '1';

        //Exercise
        var returned = Rooster.timeAtDawn(1);

        //Verify
        assert.strictEqual(expected, returned);
      });

      it ('throws an error if passed a number less than 0', () => {
        assert.throws(
          () => {
            Rooster.timeAtDawn(-1);
          },
          RangeError
        );
      });

      it ('throws an error if passed a number greater than 23', () => {
        assert.throws(() => {
          Rooster.timeAtDawn(24);
        }, RangeError)
      })
    });
});
