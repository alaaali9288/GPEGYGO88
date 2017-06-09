"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TripContent = (function () {
    function TripContent() {
    }
    return TripContent;
}());
TripContent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "trip-page",
        templateUrl: "./trip.component.html",
        styles: ["\n        @import \"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css\";\n        @import \"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css\";\n    "],
        styleUrls: ["../../assets/css/style.css",
            "../../assets/css/bootstrap.min.css",
            "../../assets/font-awesome-4.7.0/css/font-awesome.min.css",
            "../../assets/css/glide.core.css",
            "../../assets/css/glide.theme.css",
            "../../assets/css/trip-style.css",
        ]
    })
], TripContent);
exports.TripContent = TripContent;
//# sourceMappingURL=trip.component.js.map