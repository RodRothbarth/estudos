import express from 'express';

const app = express();

app.get('/users',(request, response) => {
    console.log('Lista de usuários');
    response.json(['sei',
'nao',
'hein'])
});

app.listen(3333);