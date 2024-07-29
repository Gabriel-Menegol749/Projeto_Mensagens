const express = require('express');
const router = express.Router();
const { Usuario } = require('../models');

router.post('/Cadastro', async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
        }

        const novoUsuario = await Usuario.create({
            nomeUsuario: nome,
            emailUsuario: email,
            senhaUsuario: senha,
        });

        res.redirect('/TelaPrincipal');
    } catch (error) {
        console.error('Erro ao cadastrar usuário: ', error);
        res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
    }
});

module.exports = router;
