const express = require('express');
const router = express.Router();

const { Usuario } = require('../models');

router.post('/Cadastro', async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        if (!nome || !email || !senha) {
            return res.status(400).send('Preencha todos os campos.');
        }

        const usuarioExistente = await Usuario.findOne({ where: { email } });
        if (usuarioExistente) {
            return res.status(400).send('E-mail já cadastrado.');
        }

        // Criar novo usuário
        const novoUsuario = await Usuario.create({
            nome,
            email,
            senha
        });

        res.status(201).redirect('/TelaPrincipal');

    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).send('Erro no servidor.');
    }
});

module.exports = router;
