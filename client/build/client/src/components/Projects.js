"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const projectData_1 = __importDefault(require("../projectData"));
function Projects() {
    const renderList = (project, index) => (react_1.default.createElement("div", { key: index },
        react_1.default.createElement("span", null,
            react_1.default.createElement("p", null, project.name),
            react_1.default.createElement("p", null, project.role.join(' & ')))));
    return (react_1.default.createElement("div", null, projectData_1.default.map((project, index) => renderList(project, index))));
}
exports.default = Projects;
//# sourceMappingURL=Projects.js.map