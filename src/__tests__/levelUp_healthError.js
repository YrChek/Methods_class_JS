import Character from '../character';

const testing = new Character('Bowerman', 'Bowman');
test('testing the "levelUp" function for an error', () => {
  testing.health = 0;
  function err() {
    testing.levelUp();
  }
  expect(err).toThrow();
});
