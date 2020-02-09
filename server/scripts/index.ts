import http from "http";
import express from "express";
import cors from "cors";
import {Server} from "colyseus";
import {monitor} from "@colyseus/monitor";
// import socialRoutes from "@colyseus/social/express"

import {GameRoom} from "./GameRoom";
import Preinit from "./Preinit";

asyncRun().then();


async function asyncRun(): Promise<void> {
    const port = Number(process.env.PORT || 2567);
    const app = express();

    app.use(cors());
    app.use(express.json());
    const server = http.createServer(app);

    await Preinit.preinit();

    const gameServer = new Server({
        server,
    });

// register your room handlers
    gameServer.define('monopoly_room', GameRoom);


    app.use("/colyseus", monitor());

    await gameServer.listen(port);

    console.log(`Listening on ws://localhost:${port}`);
}


