// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        path: cc.Graphics,
    },
    onLoad: function () {
        // 
        //this.path = this.getComponent(cc.Graphics);

        this.path.lineWidth = 5;
        this.path.strokeColor = cc.Color.WHITE;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
        
        //this.path.moveTo(0, 0);
        //this.path.lineTo(100, 100);
        //this.path.stroke();
    },
    
    onTouchBegan: function (touch, event) {
        var touchLoc = touch.getLocation();
        touchLoc = this.node.convertToNodeSpaceAR(touchLoc);
        cc.log(touchLoc.x, touchLoc.y)
        //this.path.clear();
        this.path.moveTo(cc.Vec2(touchLoc));
    },

    onTouchMoved: function (touch, event) {
        var touchLoc = touch.getLocation();
        touchLoc = this.node.convertToNodeSpaceAR(touchLoc);

        this.path.lineTo(cc.Vec2(touchLoc));
        this.path.stroke();
    },

    ontouchEnded: function(touch, event){
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
