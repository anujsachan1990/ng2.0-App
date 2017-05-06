System.register(['angular2/core', './crud.friendDataService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, crud_friendDataService_1;
    var CrudComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (crud_friendDataService_1_1) {
                crud_friendDataService_1 = crud_friendDataService_1_1;
            }],
        execute: function() {
            CrudComponent = (function () {
                function CrudComponent(friendService) {
                    this.title = "Anuj";
                    this.friendList = friendService.getFriends();
                }
                CrudComponent = __decorate([
                    core_1.Component({
                        selector: 'crud',
                        template: "<h2>Here go my friend list</h2>\n                <ul>\n                    <li *ngFor=\"#friendList of friendList\">\n                        {{friendList}}\n                    </li>\n                </ul>\n            ",
                        providers: [crud_friendDataService_1.FriendService]
                    }), 
                    __metadata('design:paramtypes', [crud_friendDataService_1.FriendService])
                ], CrudComponent);
                return CrudComponent;
            }());
            exports_1("CrudComponent", CrudComponent);
        }
    }
});
//# sourceMappingURL=crud.component.js.map