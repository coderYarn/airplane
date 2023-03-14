import { _decorator, Component, Node, Prefab, instantiate, math } from "cc";
import { Bullet } from "../bullet/Bullet";
import { EnemyPlane } from "../plane/enemy-plane";
import { Costant } from "./costant";
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = GameManager
 * DateTime = Mon Mar 13 2023 11:49:41 GMT+0800 (中国标准时间)
 * Author = coderYarn
 * FileBasename = game-manager.ts
 * FileBasenameNoExtension = game-manager
 * URL = db://assets/script/framework/game-manager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

@ccclass("GameManager")
export class GameManager extends Component {
  @property(Node)
  public playerPlane: Node = null;

  @property(Prefab)
  public enemy01: Prefab = null;
  @property(Prefab)
  public enemy02: Prefab = null;

  @property(Prefab)
  public bullet01: Prefab = null;
  @property(Prefab)
  public bullet02: Prefab = null;
  @property(Prefab)
  public bullet03: Prefab = null;
  @property(Prefab)
  public bullet04: Prefab = null;
  @property(Prefab)
  public bullet05: Prefab = null;
  @property
  public shootTime: number = 0.3;
  @property
  public bulletSpeed: number = 1;
  @property(Node)
  public bulletRoot: Node = null;
  @property
  public createEnemyTime = 1;
  @property
  public enemy1Speed = 0.5;
  @property
  public enemy2Speed = 0.7;

  private _currShootTime = 0;
  private _isShooting = false;
  private _currCreateEnemyTime = 0;
  private _combinationInterval = Costant.Combination.PLAN1;
  start() {
    this._init();
  }

  update(deltaTime: number) {
    this._currShootTime += deltaTime;
    if (this._currShootTime > this.shootTime) {
      this.createPlayerBullet();
      this._currShootTime = 0;
    }
    this._currCreateEnemyTime += deltaTime;

    if (this._combinationInterval === Costant.Combination.PLAN1) {
      if (this._currCreateEnemyTime > this.createEnemyTime) {
        this.createEnemyPlane();
        this._currCreateEnemyTime = 0;
      }
    } else if (this._combinationInterval === Costant.Combination.PLAN2) {
      if (this._currCreateEnemyTime > this.createEnemyTime * 3) {
        const randomCombination = math.randomRangeInt(1, 3);
        if (randomCombination === Costant.Combination.PLAN2) {
          this.createCombination1();
        } else {
          this.createEnemyPlane();
        }

        this._currCreateEnemyTime = 0;
      }
    } else {
      if (this._currCreateEnemyTime > this.createEnemyTime * 2) {
        const randomCombination = math.randomRangeInt(1, 4);
        if (randomCombination === Costant.Combination.PLAN2) {
          this.createCombination1();
        } else if (randomCombination === Costant.Combination.PLAN3) {
          this.createCombination2();
        } else {
          this.createEnemyPlane();
        }

        this._currCreateEnemyTime = 0;
      }
    }
  }
  public createEnemyPlane() {
    const whichEnemy = math.randomRangeInt(1, 3);

    let prefab: Prefab = null;
    let speed = 0;
    if (whichEnemy === Costant.EnemyType.TYPE1) {
      prefab = this.enemy01;
      speed = this.enemy1Speed;
    } else {
      prefab = this.enemy02;
      speed = this.enemy2Speed;
    }
    const enemy = instantiate(prefab);
    enemy.setParent(this.node);
    const enemyComp = enemy.getComponent(EnemyPlane);
    enemyComp.show(this, speed, true);

    const randomPos = math.randomRangeInt(-25, 26);
    enemy.setPosition(randomPos, 0, -50);
  }

  public createCombination1() {
    const enemyArray = new Array<Node>(5);
    for (let i = 0; i < enemyArray.length; i++) {
      enemyArray[i] = instantiate(this.enemy01);
      // enemyArray[i] = PoolManager.instance().getNode(this.enemy01,this.node );
      const element = enemyArray[i];
      // element.parent = this.node;
      element.setPosition(-10 + i * 10, 0, -50);
      const enemyComp = element.getComponent(EnemyPlane);
      enemyComp.show(this, this.enemy1Speed, false);
    }
  }
  public createCombination2() {
    const enemyArray = new Array<Node>(7);

    const combinationPos = [
      -21, 0, -60, -14, 0, -55, -7, 0, -50, 0, 0, -45, 7, 0, -50, 14, 0, -55,
      21, 0, -60,
    ];

    for (let i = 0; i < enemyArray.length; i++) {
      // enemyArray[i] = PoolManager.instance().getNode(this.enemy02, this.node);
      enemyArray[i] = instantiate(this.enemy02);
      const element = enemyArray[i];
      element.parent = this.node;
      const startIndex = i * 3;
      element.setPosition(
        combinationPos[startIndex],
        combinationPos[startIndex + 1],
        combinationPos[startIndex + 2]
      );
      const enemyComp = element.getComponent(EnemyPlane);
      enemyComp.show(this, this.enemy2Speed, false);
    }
  }
  public createPlayerBullet() {
    const bullet = instantiate(this.bullet01);
    bullet.setParent(this.bulletRoot);
    const pos = this.playerPlane.position;
    bullet.setPosition(pos.x, pos.y, pos.z - 7);
    const bulletComp = bullet.getComponent(Bullet);
    bulletComp.show(this.bulletSpeed, false);
  }
  public createEnemyBullet(targetPos) {
    const bullet = instantiate(this.bullet03);
    bullet.setParent(this.bulletRoot);
    bullet.setPosition(targetPos.x, targetPos.y, targetPos.z + 6);
    const bulletComp = bullet.getComponent(Bullet);
    bulletComp.show(1, true);
  }
  public isShooting(value: boolean) {
    this._isShooting = value;
  }
  private _init() {
    this._currShootTime = this.shootTime;
    this.changePlaneMode();
  }

  private changePlaneMode() {
    this.schedule(this._modeChanged, 10, 3);
  }
  private _modeChanged() {
    this._combinationInterval++;
  }
}
