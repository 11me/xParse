"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RSSParser = void 0;
const xml2js_1 = require("xml2js");
const fetcher_1 = require("../fetcher");
class RSSParser {
    constructor() {
        this.fetcher = new fetcher_1.XMLFetcher();
    }
    parse(from) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fetchedText = yield this.fetcher.fetch(from);
                const result = yield (0, xml2js_1.parseStringPromise)(fetchedText);
                return result.rss.channel;
            }
            catch (err) {
                //TODO: Handle error
                console.log(`Error while parsing ${err}`);
            }
        });
    }
}
exports.RSSParser = RSSParser;
