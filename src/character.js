export default class Character {
  constructor(name, type) {
    this.nameControl(name);
    this.typeControl(type);
    this.health = 100;
    this.level = 1;
    this.attack = 100;
    this.defence = 100;
  }

  nameControl(name) {
    if (name.length > 1 && name.length < 11) {
      this.name = name;
      return;
    }
    throw new Error('Неправильное имя');
  }

  typeControl(type) {
    const list = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];
    if (list.includes(type)) {
      this.type = type;
      return;
    }
    throw new Error('Неправильный тип');
  }

  levelUp() {
    if (Number(this.health) === 0) {
      throw new Error('нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
