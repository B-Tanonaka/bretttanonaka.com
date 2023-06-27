"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Navbar() {
    return (react_1.default.createElement("div", { className: "navbar-container" },
        react_1.default.createElement("p", { className: "navbar-name" }, "Brett Tanonaka"),
        react_1.default.createElement("div", { className: "navbar-base" },
            react_1.default.createElement("div", { className: "navbar-sections" },
                react_1.default.createElement("p", { className: "navbar-text" }, "Home"),
                react_1.default.createElement("p", { className: "navbar-text" }, "Projects"),
                react_1.default.createElement("p", { className: "navbar-text" }, "About"),
                react_1.default.createElement("p", { className: "navbar-text" }, "Contact")))));
}
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map