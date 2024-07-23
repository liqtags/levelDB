/**
 * @author @liqtags
 */

/**
 * LevelDB Wrapper for MemoryLevel
 */

import { MemoryLevel } from "memory-level";

const ENCODING_OPTS = { keyEncoding: "buffer", valueEncoding: "buffer" };

export default class LevelDB {
    public db: any;
    constructor(db?: MemoryLevel<string, string>) {
        this.db = db ?? new MemoryLevel(ENCODING_OPTS); 
    }
    async get(key: any): Promise<any> {
        let value = null;
        try {
            value = await this.db.get(key, ENCODING_OPTS);
        }
        catch (error: any) {
            if (error.notFound !== true) {
                throw error;
            }
        }
        return value;
    }
    async put(key: any, value: any): Promise<void> {
        await this.db.put(key, value, ENCODING_OPTS);
    }
    async del(key: any): Promise<void> {
        await this.db.del(key, ENCODING_OPTS);
    }
    async batch(ops: any): Promise<void> {
        await this.db.batch(ops, ENCODING_OPTS);
    }
    async close(): Promise<void> {
        await this.db.close();
    }
}