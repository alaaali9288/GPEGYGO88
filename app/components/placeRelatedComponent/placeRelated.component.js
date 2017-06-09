"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PlaceRelated = (function () {
    function PlaceRelated() {
    }
    return PlaceRelated;
}());
PlaceRelated = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "place-related",
        templateUrl: "./placeRelated.component.html",
        styles: ["\n        @import \"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css\";\n        @import \"https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css\";\n    "],
        styleUrls: ["../../assets/css/style.css",
            "../../assets/css/bootstrap.min.css",
            "../../assets/css/jquery.bxslider.min.css",
            "../../assets/css/place_style.css",
        ]
    })
], PlaceRelated);
exports.PlaceRelated = PlaceRelated;
//# sourceMappingURL=placeRelated.component.js.map