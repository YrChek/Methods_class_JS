import Bowerman from '../bowerman';

const testing = new Bowerman('Bowerman');
test.each([
  [100, 25],
  [150, 0],
])('Testing the "damage" function with a point = %s', (point, expected) => {
  testing.damage(point);
  expect(testing.health).toBe(expected);
});
