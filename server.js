const http = require("http");

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    if (request.url === '/produto') {

        response.end(JSON.stringify({
            message: 'Sou programador do universo',
        })
        );
    }

    if (request.url === '/usuarios') {
        response.end(
            JSON.stringify({
                message: 'Rota de usuario',
            })
        );
    }

    response.end(
        JSON.stringify({
            message: 'qualquer coisa rota outra',
        })
    )
})
    .listen(4001, () => console.log("server rodando na porta 4001"));