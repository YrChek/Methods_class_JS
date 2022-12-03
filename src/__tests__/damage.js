import Character from '../character';

const testing = new Character('Bowerman', 'Bowman');
test.each([
  [100, 25],
  [150, 0],
])('Testing the "damage" function with a point = %s', (point, expected) => {
  testing.damage(point);
  expect(testing.health).toBe(expected);
});
