System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, NodePool, instantiate, _dec, _class, _class2, _temp, _crd, ccclass, property, PoolManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f490aFvLS9C/bqwLGmSZgIL", "PoolManager", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = PoolManager
       * DateTime = Mon Mar 18 2023 17:54:56 GMT+0800 (China Standard Time)
       * Author = mywayday
       * FileBasename = PoolManager.ts
       * FileBasenameNoExtension = PoolManager
       * URL = db://assets/script/framework/PoolManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("PoolManager", PoolManager = (_dec = ccclass('PoolManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function PoolManager() {
          _defineProperty(this, "_dictPool", {});

          _defineProperty(this, "_dictPrefab", {});
        }

        PoolManager.instance = function instance() {
          if (!this._instance) {
            this._instance = new PoolManager();
          }

          return this._instance;
        };

        var _proto = PoolManager.prototype;

        _proto.getNode = function getNode(prefab, parent) {
          var name = prefab.data.name; // console.log('get node   ' + name);

          var node = null;
          this._dictPrefab[name] = prefab;
          var pool = this._dictPool[name];

          if (pool) {
            if (pool.size() > 0) {
              node = pool.get();
            } else {
              node = instantiate(prefab);
            }
          } else {
            this._dictPool[name] = new NodePool();
            node = instantiate(prefab);
          }

          node.parent = parent;
          node.active = true;
          return node;
        };

        _proto.putNode = function putNode(node) {
          var name = node.name; // console.log('put node   ' + name);

          node.parent = null;

          if (!this._dictPool[name]) {
            this._dictPool[name] = new NodePool();
          }

          this._dictPool[name].put(node);
        };

        return PoolManager;
      }(), _defineProperty(_class2, "_instance", void 0), _temp)) || _class));
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
//# sourceMappingURL=PoolManager.js.map