import express from "express";
import cors from "cors";
import { exitCode } from "process";
import { Animal } from "./model/Animal";
import { Atracao } from "./model/Atracao";
import { Ave } from "./model/Ave";
import { Habitat } from "./model/Habitat";
import { Mamifero } from "./model/Mamifero";
import { Reptil } from "./model/Reptil";
import  { Zoologico } from "./model/Zoologico";

const server = express();
const port: number = 3000;

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    let ave: Ave= new Ave(10, 'Calopsita', 11, 'Masculino');
    let reptil: Reptil= new Reptil ('placóides', 'Cobra', 15, 'Masculino');
    let mamifero: Mamifero= new Mamifero ('canguru', 'Julia', 12, 'Feminino');
 
     res.json([ave,reptil, mamifero]);
 });
 
 server.post('/ave', (req,res) => {
     const{ envergadura, nome, idade, genero} = req.body;
     let ave: Ave= new Ave(envergadura, nome, idade, genero);
     res.json(["A nova ave do zoologico é:", ave]);
 });
 
 server.post('/habitat', (req, res) => {
     const {nome, animais}= req.body;
     const habitat = new Habitat(nome, animais);
     console.log(habitat)
     res.status(200).json('Habitat criado');
 });
 
 server.post('/atracao', (req, res) => {
     const {nome, habitat}= req.body;
     const atracao = new Atracao(nome, habitat);
     console.log(atracao)
     res.status(200).json('Atrção criada');
 });
 
 server.post('/zoologico', (req, res) => {
     const {nome, atracao}= req.body;
     const zoo = new Zoologico (nome, atracao);
     console.log(zoo);
     res.status(200).json('Zoologico criado');
 });
 
 
 
 server.listen(port, () => {
     console.log(`Servidor rodando em http://localhost:${port}`);
 })