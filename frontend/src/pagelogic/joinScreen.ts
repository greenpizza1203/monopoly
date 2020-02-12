import buttonHandler from "../inputhandler/buttonHandler";
import colyhandler from "../colyhandler/colyhandler";

buttonHandler["onPublicJoinClicked"] = async function () {
    let roomPromise = colyhandler.join();
    let $join = $('.join-button');
    const originalText = $join.text();
    $join.attr('disabled', 'true');
    try {
        let room = await roomPromise;
        colyhandler.joined(room);

    } catch (e) {
        $join.removeAttr('disabled');
        $join.text(originalText);
        throw e;
    }
};