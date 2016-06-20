var jobInfo = {
    hadClass: false,
    newClass: function (ele) {
        if (this.hadClass == false) {
            this.init.prototype = jobInfo;
            this.hadClass = true;
        }
        return new this.init(ele);
    },
    prevRun: function () {
        var _this = this;
        if (_this.item == 0) {
            _this.item = _this.contentBox.length-1 ;
        }
        _this.item--;
        _this.animationObj(_this.item);
    },
    nextRun: function () {
        var _this = this;
        _this.item++;
        if (_this.item == _this.contentBox.length) {
            _this.item = 0;
        }
        _this.animationObj(_this.item);
    },
    animationObj: function (setItem) {
        var _this = this;
        var setItem = setItem || 0;
        for (var i = 0; i < _this.contentBox.length; i++) {
            _this.contentBox[i].className = _this.initClass;
        }
        _this.contentBox[setItem].className = _this.initClass + ' ' + _this.animation;
    },


    touchEvent: function () {
        var _this = this;
        var page = {
            x: 0,
            y: 0
        };
        var endPage = {
            x: 0,
            y: 0
        };
        _this.wrap.addEventListener("touchstart", function (e) {

            page.x = e.targetTouches[0].pageX;
            page.y = e.targetTouches[0].pageY;

        });
        _this.wrap.addEventListener("touchend", function (e) {
            endPage.x = e.changedTouches[0].pageX;
            endPage.y = e.changedTouches[0].pageY;
            var pageNum = endPage.y - page.y;
            if (Math.abs(pageNum) > 50) {
                if (pageNum > 0) {
                    _this.prevRun();
                } else {
                    _this.nextRun();
                }
            }

        })
    },
    init: function (ele) {
        var _this = this;
        _this.item = ele.item;
        _this.initClass = ele.initClass;
        _this.animation = ele.animation;
        _this.wrap = document.getElementById(ele.wrapId);
        _this.contentBox = _this.wrap.getElementsByClassName("content");
        _this.touchEvent(ele);

    }
};
var object = {
    item: 0,
    wrapId: "wrap",
    initClass: "content",
    animation: "animate"
};
jobInfo.newClass(object);






