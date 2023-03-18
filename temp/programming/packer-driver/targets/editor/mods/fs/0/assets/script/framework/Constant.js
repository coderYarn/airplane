System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Constant, _crd, ccclass, property;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("Constant", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9ba7ak0TVBK4bJaIq49qiJK", "Constant", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Constant
       * DateTime = Mon Mar 12 2023 13:26:22 GMT+0800 (China Standard Time)
       * Author = mywayday
       * FileBasename = Constant.ts
       * FileBasenameNoExtension = Constant
       * URL = db://assets/script/framework/Constant.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Constant", Constant = class Constant {});
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


      _defineProperty(Constant, "EnemyType", {
        TYPE1: 1,
        TYPE2: 2
      });

      _defineProperty(Constant, "Combination", {
        PLAN1: 1,
        PLAN2: 2,
        PLAN3: 3
      });

      _defineProperty(Constant, "CollisionType", {
        SELF_PLANE: 1 << 1,
        ENEMY_PLANE: 1 << 2,
        SELF_BULLET: 1 << 3,
        ENEMY_BULLET: 1 << 4,
        BULLET_PROP: 1 << 5
      });

      _defineProperty(Constant, "BulletPropType", {
        BULLET_M: 1,
        BULLET_H: 2,
        BULLET_S: 3
      });

      _defineProperty(Constant, "Direction", {
        LEFT: 1,
        MIDDLE: 2,
        RIGHT: 3
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Constant.js.map