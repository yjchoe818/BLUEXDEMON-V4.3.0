const express = require('express')
const app = express();
const fs = require('fs');
const https = require('https'); // Use https instead of http
const helmet = require('helmet'); // Import helmet for security headers
const rateLimit = require('express-rate-limit'); // Import rate limiting middleware

const server = https.createServer({
    key: fs.readFileSync('server.key'), // Ensure you have the key and cert files
    cert: fs.readFileSync('server.cert')
}, app);
const {
    Server
} = require("socket.io");
const io = new Server(server);
qrwa = null

// Apply helmet middleware to disable X-Powered-By header
app.use(helmet());

// Apply rate limiting middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

function connect(conn, PORT) {

    app.enable('trust proxy')
    app.set("json spaces", 2)
    app.use(express.json())
    app.use(express.urlencoded({
        extended: true
    }))
    app.get('/', (req, res) => {
        if (qrwa) return res.type('.jpg').send(qrwa)
        res.sendFile(__dirname + '/bluepage/blue.html');
    });
    app.listen(PORT, async () => {
        console.log(`BOT RUNNING ON PORT ${PORT}`)
    })


    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('chat message', (msg) => {
            console.log('message: ' + msg);
        });
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
}

module.exports = connect