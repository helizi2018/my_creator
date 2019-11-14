(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/instance_enemy.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '15dcfj6/21FC5bVpgIcqwSK', 'instance_enemy', __filename);
// script/instance_enemy.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        instant_rate: {
            default: 1,
            type: cc.Integer
        },
        enemy_prefab: {
            default: null,
            type: cc.Prefab
        },
        time: {
            default: 0,
            type: cc.Integer
        },

        timer: cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.schedule(this.instant_enemy, 1 / (this.instant_rate * this.time / 50), cc.macro.REPEAT_FOREVER, 0);
        this.window_size = cc.winSize;
        this.timer = cc.find("Canvas/timer").getComponent(cc.Label);

        this.schedule(this.timer_des, 1, cc.macro.REPEAT_FOREVER, 0);
    },
    instant_enemy: function instant_enemy() {
        var clone_enemy = cc.instantiate(this.enemy_prefab);
        var r = Math.sqrt(Math.pow(500 / 2, 2) + Math.pow(500 / 2, 2));

        console.log(r);
        cc.find("Canvas/enemys").addChild(clone_enemy);
        clone_enemy.x = this.range_int(-r, r);
        console.log(clone_enemy.x);
        if (Math.random() > 0.5) {
            clone_enemy.y = Math.sqrt(r * r - Math.pow(clone_enemy.x, 2));
            console.log(clone_enemy.y);
        } else {
            clone_enemy.y = -Math.sqrt(r * r - Math.pow(clone_enemy.x, 2));
        }
    },
    restart: function restart() {
        cc.director.resume();
        cc.find("Canvas/enemys").removeAllChildren();
        cc.find("Canvas/button").active = false;
        cc.find("Canvas/win").active = false;
        this.time = 100;
    },
    timer_des: function timer_des() {
        console.log(this.time);
        if (this.time <= 0) {
            console.log("�����ˣ��������Ϸʤ��");
            cc.find("Canvas/win").active = true;
            cc.director.pause();
            return;
        } else {
            this.time -= 1;
            console.log(this.name);
            this.timer.string = this.time.toString();
        }
    },
    range_int: function range_int(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    // update (dt) {},

});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=instance_enemy.js.map
        