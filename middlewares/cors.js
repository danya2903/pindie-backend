const allowedCors = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'http://localhost:3000',
    'http://localhost:3001'
];

function cors(req, res, next) {
    const { origin } = req.headers;
    if (allowedCors.includes(origin)) { // Если это наш друг
        console.log(`CORS ok for ${origin}`);
        res.header('Access-Control-Allow-Origin', origin);
    }
    else {
        console.log(`CORS denied for ${origin}`);
        res.header('Access-Control-Allow-Origin', origin); //test, потом убрать
    }
    next();
}

module.exports = {
    cors
}