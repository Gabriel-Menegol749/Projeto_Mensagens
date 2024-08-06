//Nesse arquivo, será configurado basicamente todas os metodos CRUD, registro, edição, pesquisa e exclusão de Usuarios
//ps, toda comunicação com banco de dados é assincrona

const User = require('../models/Users');

module.exports = {
    //busca o que tem na tabela de um banco
    async index(req, res) {
        try {
            const usuarios = await User.findAll();
            if (!usuarios || usuarios.length === 0) {
                return res.status(200).send({ message: "Nenhum usuário cadastrado" });
            }
            return res.status(200).send({ usuarios });
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            return res.status(500).send({ error: 'Erro ao buscar usuários' });
        }
    },
    
    //salva algo no banco
    async store(req, res){

    },
    //atualiza
    async update(req, res){

    },
    //deleta
    async delete(req, res){

    },
}