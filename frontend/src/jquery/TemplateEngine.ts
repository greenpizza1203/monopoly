import $ from 'jquery'

const jsr = require('jsrender')();
// console.log(jsr);
let files: any = {};

async function promisify(fileUrl: string) {
    return jsr.templates(await $.ajax({
        url: fileUrl,
        type: 'get',
    }));

}

export default function (fileUrl: string): (data: any) => Promise<any> {
    if (!files[fileUrl]) files[fileUrl] = promisify(fileUrl);
    return function (data: any) {
        return new Promise((complete) => {
            files[fileUrl].then((it: any) => {
                complete(it(data))
            })
        });
    }
}
