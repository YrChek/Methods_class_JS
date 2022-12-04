import Bowerman from '../bowerman';

const testing = new Bowerman('Bowerman');
testing.health = 50;
test('testing the "levelUp" function', () => {
  testing.levelUp();
  expect(testing).toMatchObject({
    level: 2,
    health: 100,
    attack: 30,
    defence: 30,
  });
});
