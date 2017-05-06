System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FriendService;
    return {
        setters:[],
        execute: function() {
            FriendService = (function () {
                function FriendService() {
                }
                FriendService.prototype.getFriends = function () {
                    return ["Meenu", "Shorua", "Lakshay", "Akki"];
                };
                return FriendService;
            }());
            exports_1("FriendService", FriendService);
        }
    }
});
//# sourceMappingURL=crud.friendDataService.js.map