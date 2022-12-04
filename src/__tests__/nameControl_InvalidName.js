import Bowerman from '../bowerman';

test.each([
  ['W'],
  ['WWWWWWWWWWW'],
])('Testing for an invalid name. Name "%s"', (names) => {
  function err() {
    const testing = new Bowerman(names);
    return testing;
  }
  expect(err).toThrow();
});
