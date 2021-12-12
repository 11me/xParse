import { Parser } from "./types";
export declare class RSSParser implements Parser {
    parse(from: string): Promise<Record<string, string>[]>;
}
