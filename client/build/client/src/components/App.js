"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Home_1 = __importDefault(require("./Home"));
const Navbar_1 = __importDefault(require("./Navbar"));
const Projects_1 = __importDefault(require("./Projects"));
function App() {
    return (react_1.default.createElement("div", { className: "app" },
        react_1.default.createElement(Navbar_1.default, null),
        react_1.default.createElement(Home_1.default, null),
        react_1.default.createElement(Projects_1.default, null)));
}
exports.default = App;
//# sourceMappingURL=App.js.map