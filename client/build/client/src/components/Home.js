"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Home({ text }) {
    return (react_1.default.createElement("div", { className: "home-container" },
        react_1.default.createElement("div", { className: "home-wrapper" },
            react_1.default.createElement("div", null, text),
            react_1.default.createElement("p", null,
                react_1.default.createElement("span", { style: { fontSize: '32px' } }, "Aloha \uD83E\uDD19 I\u2019m a full stack developer with experience in UX/UI design, system design, and video production."),
                react_1.default.createElement("span", { style: { fontSize: '16px', marginLeft: '1%' } }, "Yes, you read that correctly.")))));
}
exports.default = Home;
//# sourceMappingURL=Home.js.map