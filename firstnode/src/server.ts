import * as dotenv from 'dotenv';
import * as http from 'http';
import url from "url";
import fs from 'fs';
import logger from "./utility/logging";


dotenv.config({path: '../config.env'});

// Part 1
const data = fs.readFileSync(`data.json`, 'utf-8');

const server = http.createServer((req, res) => {

    const {query, pathname, path, href, search} = url.parse(req.url!, true);
    // Set responds header
    res.writeHead(200, {"Content-Type": "text/html"});
    // const pathname = req.url;

    console.log(pathname)
    fs.readFile(`${__dirname}/public/homepage.html`,'utf-8', (err, data) => {
        res.end(data);
    });

    if(pathname === '/') {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile(`${__dirname}/public/homepage.html`,'utf-8', (err, data) => {
            res.end(data);
        });
    }else if (pathname === "/about") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1>About</h1>")
    } else if(pathname === "/data") {
        res.writeHead(200, {'Content-Type': 'application/json'});
        console.log(query)
        res.end(data);
    } else {
        res.writeHead(400, {"Content-Type": "text/html"});
        res.end(`Path ${pathname} does not exist.`)
        logger.error(`Path ${pathname} does not exist.`)
    }
    // res.end("Hello World!");
})


server.listen({
        host: process.env.HOSTNAME,
        port: process.env.PORT,
        exclusive: true
    }, () => {
        console.log(`Server is listening to http://localhost:${process.env.PORT}`)
    }
)