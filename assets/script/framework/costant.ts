import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Costant
 * DateTime = Mon Mar 13 2023 14:27:55 GMT+0800 (中国标准时间)
 * Author = coderYarn
 * FileBasename = costant.ts
 * FileBasenameNoExtension = costant
 * URL = db://assets/script/framework/costant.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

@ccclass("Costant")
export class Costant {
  public static EnemyType = {
    TYPE1: 1,
    TYPE2: 2,
};

public static Combination = {
    PLAN1: 1,
    PLAN2: 2,
    PLAN3: 3,
};

public static CollisionType = {
    SELF_PLANE: 1 << 1,
    ENEMY_PLANE: 1 << 2,
    SELF_BULLET: 1 << 3,
    ENEMY_BULLET: 1 << 4,
    BULLET_PROP: 1 << 5,
};

public static BulletPropType = {
    BULLET_M: 1,
    BULLET_H: 2,
    BULLET_S: 3,
}

public static Direction = {
    LEFT: 1,
    MIDDLE: 2,
    RIGHT: 3,
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
