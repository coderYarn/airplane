System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Collider, Constant, PoolManager, _dec, _class, _temp, _crd, ccclass, property, Bullet;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../framework/Constant", _context.meta, extras);
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

      _cclegacy._RF.push({}, "016d0bZIrlBGY2GbVGZZg1M", "Bullet", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Bullet
       * DateTime = Mon Mar 15 2023 11:00:15 GMT+0800 (China Standard Time)
       * Author = mywayday
       * FileBasename = Bullet.ts
       * FileBasenameNoExtension = Bullet
       * URL = db://assets/script/bullet/Bullet.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Bullet", Bullet = (_dec = ccclass('Bullet'), _dec(_class = (_temp = class Bullet extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_bulletSpeed", 0);

          _defineProperty(this, "_direction", (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Direction.MIDDLE);

          _defineProperty(this, "_isEnemyBullet", false);
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
          const pos = this.node.position;
          let moveLength = 0;

          if (this._isEnemyBullet) {
            moveLength = pos.z + this._bulletSpeed;
            this.node.setPosition(pos.x, pos.y, moveLength);

            if (moveLength > 50) {
              // this.node.destroy();
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance().putNode(this.node); // console.log('bullet destroy');
            }
          } else {
            moveLength = pos.z - this._bulletSpeed;

            if (this._direction === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).Direction.LEFT) {
              this.node.setPosition(pos.x - this._bulletSpeed * 0.2, pos.y, moveLength);
            } else if (this._direction === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).Direction.RIGHT) {
              this.node.setPosition(pos.x + this._bulletSpeed * 0.2, pos.y, moveLength);
            } else {
              this.node.setPosition(pos.x, pos.y, moveLength);
            }

            if (moveLength < -50) {
              // this.node.destroy();
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance().putNode(this.node); // console.log('bullet destroy');
            }
          }
        }

        show(speed, isEnemyBullet, direction = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
          error: Error()
        }), Constant) : Constant).Direction.MIDDLE) {
          this._bulletSpeed = speed;
          this._isEnemyBullet = isEnemyBullet;
          this._direction = direction;
        }

        _onTriggerEnter(event) {
          // console.log('trigger  bullet destroy');
          // this.node.destroy();
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
//# sourceMappingURL=Bullet.js.map