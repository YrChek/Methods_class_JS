export default class Character {
  constructor(name, type) {
    this.name = this.nameControl(name);
    this.type = this.typeControl(type);
    this.health = 100;
    this.level = 1;
    this.attack = this.attacks(type);
    this.defence = this.security(type);
  }

  classNames() {
    const names = {
      Bowman: [25, 25],
      Swordsman: [40, 10],
      Magician: [10, 40],
      Undead: [25, 25],
      Zombie: [40, 10],
      Daemon: [10, 40],
    };
    return names;
  }

  nameControl(name) {
    if (name.length > 1 && name.length < 11) {
      return name;
    }
    throw new Error('Неправильное имя');
  }

  typeControl(type) {
    const list = this.classNames();
    if (type in list) {
      return type;
    }
    throw new Error('Неправильный тип');
  }

  attacks(type) {
    const list = this.classNames();
    return list[type][0];
  }

  security(type) {
    const list = this.classNames();
    return list[type][1];
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
