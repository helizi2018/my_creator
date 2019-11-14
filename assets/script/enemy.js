// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        player: cc.Node,

        
        speed: {
            default: 3,
            type: cc.Float,
        },
        button: cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.player = cc.find("Canvas/player");
       // cc.director.getCollisionManager().enabled = true;
        //boom_anim = this.node.getComponent(cc.Animation);
        this.button = cc.find("Canvas/button");
    },

    start () {

    },
    Genzong(targetPosition) {

        var targetPoint = targetPosition;
        var point = cc.v2(this.node.x, this.node.y);
        var delta = targetPoint.sub(point);
        var distance = point.sub(targetPoint).mag();
        
        var x2 = point.x + this.speed * delta.x / distance;
        var y2 = point.y + this.speed * delta.y / distance;
        var newPosition = cc.v2(x2, y2);
        var x1 = point.x;
        var y1 = point.y;
        var deltaRotation = 90 - Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        this.node.rotation = deltaRotation;
        if (distance <= 10) {
            cc.director.pause();
            this.button.active = true;
            //console.log("��Ϸ����");
            return true;
        }
        this.node.setPosition(newPosition);

    },
    distance(a,b){
        return Math.sqrt(Math.pow((a.x-b.x),2) + Math.pow((a.y-b.y),2));

    },

    update(dt) {
       //console.log(this.distance(this.player,this.node));
       if(this.distance(this.player,this.node)<200){
        this.Genzong(this.player.position);
       }
        
    },

   

});
