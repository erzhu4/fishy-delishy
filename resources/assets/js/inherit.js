(function(){
    if (typeof Util === "undefined") {
        window.Util = {};
    }

    var inherits = Util.inherits = function (ChildClass, BaseClass) {
        function Surrogate () {};
        Surrogate.prototype = BaseClass.prototype;
        ChildClass.prototype = new Surrogate();
    };
})();