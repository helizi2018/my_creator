window.__require = function t(e, n, i) {
function c(s, r) {
if (!n[s]) {
if (!e[s]) {
var a = s.split("/");
a = a[a.length - 1];
if (!e[a]) {
var h = "function" == typeof __require && __require;
if (!r && h) return h(a, !0);
if (o) return o(a, !0);
throw new Error("Cannot find module '" + s + "'");
}
}
var u = n[s] = {
exports: {}
};
e[s][0].call(u.exports, function(t) {
return c(e[s][1][t] || t);
}, u, u.exports, t, e, n, i);
}
return n[s].exports;
}
for (var o = "function" == typeof __require && __require, s = 0; s < i.length; s++) c(i[s]);
return c;
}({
enemy: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "696d5g+vRhNa7RDNdclAlvY", "enemy");
cc.Class({
extends: cc.Component,
properties: {
player: cc.Node,
speed: {
default: 3,
type: cc.Float
},
button: cc.Node
},
onLoad: function() {
this.player = cc.find("Canvas/player");
this.button = cc.find("Canvas/button");
},
start: function() {},
Genzong: function(t) {
var e = t, n = cc.v2(this.node.x, this.node.y), i = e.sub(n), c = n.sub(e).mag(), o = n.x + this.speed * i.x / c, s = n.y + this.speed * i.y / c, r = cc.v2(o, s), a = n.x, h = n.y, u = 90 - 180 * Math.atan2(s - h, o - a) / Math.PI;
this.node.rotation = u;
if (c <= 10) {
cc.director.pause();
this.button.active = !0;
console.log("��Ϸ����");
return !0;
}
this.node.setPosition(r);
},
update: function(t) {
this.Genzong(this.player.position);
}
});
cc._RF.pop();
}, {} ],
instance_enemy: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "15dcfj6/21FC5bVpgIcqwSK", "instance_enemy");
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
start: function() {
this.schedule(this.instant_enemy, 1 / (this.instant_rate * this.time / 50), cc.macro.REPEAT_FOREVER, 0);
this.window_size = cc.winSize;
this.timer = cc.find("Canvas/timer").getComponent(cc.Label);
this.schedule(this.timer_des, 1, cc.macro.REPEAT_FOREVER, 0);
},
instant_enemy: function() {
var t = cc.instantiate(this.enemy_prefab), e = Math.sqrt(Math.pow(569, 2) + Math.pow(320, 2));
console.log(e);
cc.find("Canvas/enemys").addChild(t);
t.x = this.range_int(-e, e);
console.log(t.x);
if (Math.random() > .5) {
t.y = Math.sqrt(e * e - Math.pow(t.x, 2));
console.log(t.y);
} else t.y = -Math.sqrt(e * e - Math.pow(t.x, 2));
},
restart: function() {
cc.director.resume();
cc.find("Canvas/enemys").removeAllChildren();
cc.find("Canvas/button").active = !1;
cc.find("Canvas/win").active = !1;
this.time = 100;
},
timer_des: function() {
console.log(this.time);
if (this.time <= 0) {
console.log("�����ˣ��������Ϸʤ��");
cc.find("Canvas/win").active = !0;
cc.director.pause();
} else {
this.time -= 1;
console.log(this.name);
this.timer.string = this.time.toString();
}
},
range_int: function(t, e) {
return Math.floor(Math.random() * (e - t + 1) + t);
}
});
cc._RF.pop();
}, {} ],
player: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7e128Pho7FDKr0GcJN05Taj", "player");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
var e = t.getDelta();
this.node.x += e.x;
this.node.y += e.y;
}.bind(this), this.node);
},
start: function() {}
});
cc._RF.pop();
}, {} ]
}, {}, [ "enemy", "instance_enemy", "player" ]);