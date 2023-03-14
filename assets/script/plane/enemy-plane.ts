import { _decorator, Component, Node } from "cc";
import { Costant } from "../framework/costant";
import { GameManager } from "../framework/game-manager";
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = EnemyPlane
 * DateTime = Mon Mar 13 2023 14:01:38 GMT+0800 (中国标准时间)
 * Author = coderYarn
 * FileBasename = enemy-plane.ts
 * FileBasenameNoExtension = enemy-plane
 * URL = db://assets/script/plane/enemy-plane.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

const OUTOFBOUNCE = 50;

@ccclass("EnemyPlane")
export class EnemyPlane extends Component {
  @property
  public crateBulletTime = 0.5;

  private _enemySpeed = 0;
  private _needBullet = false;
  private _currCreateBulletTime = 0;
  private _gameManager: GameManager = null;
  // public enemyType = Costant.EnemyType.TYPE1
  start() {
    // [3]
  }

  update(deltaTime: number) {
    const pos = this.node.position;
    const movePos = pos.z + this._enemySpeed;
    this.node.setPosition(pos.x, pos.y, movePos);
    if (this._needBullet) {
      this._currCreateBulletTime += deltaTime;
      if (this._currCreateBulletTime > this.crateBulletTime) {
        this._gameManager.createEnemyBullet(this.node.position);
        this._currCreateBulletTime = 0;
      }
    }
    if (movePos > OUTOFBOUNCE) {
      this.node.destroy();
    }
  }
  show(gameManager: GameManager, speed: number, needBullet: boolean) {
    this._enemySpeed = speed;
    this._needBullet = needBullet;
    this._gameManager = gameManager;
  }
}
