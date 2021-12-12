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
exports.XMLFetcher = void 0;
const node_fetch_commonjs_1 = require("node-fetch-commonjs");
class XMLFetcher {
    constructor() {
        this.headers = {
            'User-Agent': 'xParse',
            'Accept': 'application/rss+xml,application/xhtml+xml,application/xml;q=0.9'
        };
    }
    fetch(source) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield (0, node_fetch_commonjs_1.default)(source, {
                headers: this.headers
            });
            return yield resp.text();
        });
    }
}
exports.XMLFetcher = XMLFetcher;
