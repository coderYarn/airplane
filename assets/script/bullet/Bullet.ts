import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Bullet
 * DateTime = Mon Mar 13 2023 11:34:11 GMT+0800 (中国标准时间)
 * Author = coderYarn
 * FileBasename = Bullet.ts
 * FileBasenameNoExtension = Bullet
 * URL = db://assets/script/bullet/Bullet.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

@ccclass("Bullet")
export class Bullet extends Component {
  public bulletSpeed = 0;

  private _isEnemyBullet = false;
  start() {
    // [3]
  }
  update(deltaTime: number) {
    const pos = this.node.position;
    let moveLength = 0;
    if (this._isEnemyBullet) {
      moveLength = pos.z + this.bulletSpeed;
      this.node.setPosition(pos.x, pos.y, moveLength);

      if (moveLength > 50) {
        this.node.destroy();
      }
    } else {
      moveLength = pos.z - this.bulletSpeed;
      this.node.setPosition(pos.x, pos.y, moveLength);

      if (moveLength < -50) {
        this.node.destroy();
      }
    }
  }
  show(speed: number, isEnemyBullet: boolean) {
    this._isEnemyBullet = isEnemyBullet;
    this.bulletSpeed = speed;
  }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
