import Bowerman from '../bowerman';

const testing = new Bowerman('Bowerman');
test('testing the "levelUp" function for an error', () => {
  testing.health = 0;
  function err() {
    testing.levelUp();
  }
  expect(err).toThrow();
});
