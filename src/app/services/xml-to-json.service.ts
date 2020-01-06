import { Injectable } from '@angular/core';
import { Parser, processors } from 'xml2js';

const parser = new Parser({
    ignoreAttrs: true,
    tagNameProcessors: [processors.stripPrefix, processors.firstCharLowerCase, processors.parseNumbers, processors.parseBooleans],
    explicitArray: false
});

const parserKeepCase = new Parser({
    ignoreAttrs: true,
    tagNameProcessors: [processors.stripPrefix, processors.parseNumbers, processors.parseBooleans],
    explicitArray: false
});

const parserForAlsoAttributes = new Parser({
    ignoreAttrs: false,
    tagNameProcessors: [processors.stripPrefix, processors.firstCharLowerCase, processors.parseNumbers, processors.parseBooleans],
    explicitArray: false
});

@Injectable({
    providedIn: 'root'
})
export class XMLToJSONService {
    public convertToJSON(data: string): any {
        let res: any;

        parser.parseString(data, (error: any, result: any) => {
            if (error) {
                throw new Error(error);
            } else {
                res = result;
            }
        });

        return res;
    }

    public convertToJSONkeepCase(data: string): any {
        let res: any;

        parserKeepCase.parseString(data, (error: any, result: any) => {
            if (error) {
                throw new Error(error);
            } else {
                res = result;
            }
        });

        return res;
    }

    public convertToJSONWithAttributes(data: string): any {
        let res: any;

        parserForAlsoAttributes.parseString(data, (error: any, result: any) => {
            if (error) {
                throw new Error(error);
            } else {
                res = result;
            }
        });

        return res;
    }
}
