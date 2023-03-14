
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = MovingBg
 * DateTime = Mon Mar 13 2023 10:22:18 GMT+0800 (中国标准时间)
 * Author = coderYarn
 * FileBasename = moving-bg.ts
 * FileBasenameNoExtension = moving-bg
 * URL = db://assets/script/moving-bg.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('MovingBg')
export class MovingBg extends Component {
    @property(Node)
    bg01:Node = null;

    @property(Node)
    bg02:Node = null;

    private _bgSpeed = 10;
    private _bgMovingRange = 90;

    start () {
        this._init()
    }
    private _init(){
        this.bg01.setPosition(0,0,0);
        this.bg02.setPosition(0,0,-this._bgMovingRange);
    }
    update (deltaTime: number) {
        this._moveBackground(deltaTime);
    }
    private _moveBackground(deltaTime:number){
        this.bg01.setPosition(0,0,this.bg01.position.z + this._bgSpeed *deltaTime);
        this.bg02.setPosition(0,0,this.bg02.position.z + this._bgSpeed *deltaTime);
        if(this.bg01.position.z>this._bgMovingRange){
            this.bg01.setPosition(0,0,this.bg02.position.z-this._bgMovingRange)
        }else if(this.bg02.position.z>this._bgMovingRange){
            this.bg02.setPosition(0,0,this.bg01.position.z-this._bgMovingRange)
        }
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
