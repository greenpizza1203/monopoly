import Papa from "papaparse"
import * as Path from "path";
import * as fs from "fs";
import {ArraySchema} from "@colyseus/schema"
import {Property} from "./Property"

const propertiesFile = Path.join(__dirname, "../../constants/properties.csv");
let properties: Array<any>;

export class PropertiesHandler {

    static async init() {

        properties = await initProperties();
        // console.log(properties.length)
    }
}

function initProperties(): Promise<Array<any>> {

    let buffer = fs.readFileSync(propertiesFile, "utf8");

    return new Promise<Array<any>>((complete) => {
            Papa.parse(buffer, {
                header: true,
                dynamicTyping: true,

                complete: function (results) {

                    // properties = results.data;
                    complete(results.data)

                    // console.log("Finished:", results.data);
                }

            });
        }
    );


}

export function getProperties() {

    let propertiesMap = new ArraySchema<Property>();

    properties.forEach(function (value, i) {
        propertiesMap[i] = new Property(value);
    });
    return propertiesMap;
}

