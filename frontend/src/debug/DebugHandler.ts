import colyhandler from "../colyhandler/colyhandler";

export default class DebugHandler {
    static enabled: boolean = true;

    static async doFakeStuff() {
        let room = await colyhandler.join()
        colyhandler.joined(room);
    }
}