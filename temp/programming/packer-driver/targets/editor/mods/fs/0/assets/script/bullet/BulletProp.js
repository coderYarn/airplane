System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Collider, Constant, PoolManager, _dec, _class, _temp, _crd, ccclass, property, BulletProp;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../framework/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../framework/GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../framework/PoolManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider = _cc.Collider;
    }, function (_unresolved_2) {
      Constant = _unresolved_2.Constant;
    }, function (_unresolved_3) {
      PoolManager = _unresolved_3.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "83e2f0O6xJMU7LXZMbv8Q8U", "BulletProp", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = BulletProp
       * DateTime = Mon Mar 18 2023 21:24:22 GMT+0800 (China Standard Time)
       * Author = mywayday
       * FileBasename = BulletProp.ts
       * FileBasenameNoExtension = BulletProp
       * URL = db://assets/script/bullet/BulletProp.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("BulletProp", BulletProp = (_dec = ccclass('BulletProp'), _dec(_class = (_temp = class BulletProp extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_propSpeed", 0.3);

          _defineProperty(this, "_propXSpeed", 0.3);

          _defineProperty(this, "_gameManager", null);
        }

        onEnable() {
          const collider = this.getComponent(Collider);
          collider.on('onTriggerEnter', this._onTriggerEnter, this);
        }

        onDisable() {
          const collider = this.getComponent(Collider);
          collider.off('onTriggerEnter', this._onTriggerEnter, this);
        }

        update(deltaTime) {
          let pos = this.node.position;

          if (pos.x >= 15) {
            this._propXSpeed = this._propSpeed;
          } else if (pos.x <= -15) {
            this._propXSpeed = -this._propSpeed;
          }

          this.node.setPosition(pos.x + this._propXSpeed, pos.y, pos.z - this._propSpeed);
          pos = this.node.position;

          if (pos.z > 50) {
            // this.node.destroy();
            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance().putNode(this.node);
          }
        }

        show(gameManager, speed) {
          this._gameManager = gameManager;
          this._propSpeed = speed;
        }

        _onTriggerEnter(event) {
          const name = event.selfCollider.node.name;

          if (name === 'bulletH') {
            this._gameManager.changeBulletType((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BulletPropType.BULLET_H);
          } else if (name === 'bulletS') {
            this._gameManager.changeBulletType((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BulletPropType.BULLET_S);
          } else {
            this._gameManager.changeBulletType((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BulletPropType.BULLET_M);
          } // this.node.destroy();


          (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance().putNode(this.node);
        }

      }, _temp)) || _class));
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


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BulletProp.js.map