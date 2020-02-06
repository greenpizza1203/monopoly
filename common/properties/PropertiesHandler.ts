import Papa from "papaparse"
import * as Path from "path";
import * as fs from "fs";
import {MapSchema} from "@colyseus/schema"
import {Property} from "./Property"

const propertiesFile = Path.join(__dirname, "../constants/normal_properties.csv");


async function initProperties(): Promise<Array<any>> {

    let buffer = fs.readFileSync(propertiesFile, "utf8");
    return new Promise<Array<any>>((complete) => {
            Papa.parse(buffer, {
                header: true,
                dynamicTyping: true,

                complete: function (results) {
                    complete(results.data);
                    // console.log("Finished:", results.data);
                }

            });
        }
    );


}

export async function getProperties() {
    let properties = await initProperties();
    let propertiesMap = new MapSchema<Property>();
    for (let prop in properties) {
        console.log(prop);
    }
}

