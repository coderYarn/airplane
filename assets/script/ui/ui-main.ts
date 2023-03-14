import {
  _decorator,
  Component,
  Node,
  systemEvent,
  SystemEvent,
  EventTouch,
} from "cc";
import { GameManager } from "../framework/game-manager";
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = UiMain
 * DateTime = Mon Mar 13 2023 11:24:48 GMT+0800 (中国标准时间)
 * Author = coderYarn
 * FileBasename = ui-main.ts
 * FileBasenameNoExtension = ui-main
 * URL = db://assets/script/ui/ui-main.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

@ccclass("UiMain")
export class UiMain extends Component {
  @property
  public planeSpeed = 1;

  @property(Node)
  public playerPlane: Node = null;

  @property(GameManager)
  public gameManager: GameManager = null;
  start() {
    // [3]
    this.node.on(SystemEvent.EventType.TOUCH_START, this._touchStart, this);
    this.node.on(SystemEvent.EventType.TOUCH_MOVE, this._touchMove, this);
    this.node.on(SystemEvent.EventType.TOUCH_MOVE, this._touchEnd, this);
  }
  _touchStart(touch: Touch, enevt: EventTouch) {
    this.gameManager.isShooting(true);
  }

  _touchMove(touch: Touch, enevt: EventTouch): void {
    const delta = (touch as any).getDelta();
    let pos = this.playerPlane.position;
    this.playerPlane.setPosition(
      pos.x + 0.01 * this.planeSpeed * delta.x,
      pos.y,
      pos.z - 0.01 * this.planeSpeed * delta.y
    );
  }
  _touchEnd(touch: Touch, enevt: EventTouch) {
    this.gameManager.isShooting(false);
  }
  // update (deltaTime: number) {
  //     // [4]
  // }
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
