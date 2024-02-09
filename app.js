"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Ave_1 = require("./src/model/Ave");
const Reptil_1 = require("./src/model/Reptil");
const Mamifero_1 = require("./src/model/Mamifero");
const server = (0, express_1.default)();
const port = 3000;
server.use(express_1.default.json());
server.use((0, cors_1.default)());
server.get('/', (req, res) => {
    let ave = new Ave_1.Ave(10, 'Calopsita', 11, 'Masculino');
    let reptil = new Reptil_1.Reptil('placóides', 'Cobra', 15, 'Masculino');
    let mamifero = new Mamifero_1.Mamifero('canguru', 'Julia', 12, 'Feminino');
    res.json([ave, reptil, mamifero]);
});
server.post('/ave', (req, res) => {
    const { envergadura, nome, idade, genero } = req.body;
    let ave = new Ave_1.Ave(envergadura, nome, idade, genero);
    res.json(["A nova ave do zoologico é:", ave]);
});
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map