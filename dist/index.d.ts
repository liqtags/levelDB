import { MemoryLevel } from 'memory-level';

/**
 * @author @liqtags
 */
/**
 * LevelDB Wrapper for MemoryLevel
 */

declare class LevelDB {
    db: any;
    constructor(db?: MemoryLevel<string, string>);
    get(key: any): Promise<any>;
    put(key: any, value: any): Promise<void>;
    del(key: any): Promise<void>;
    batch(ops: any): Promise<void>;
    close(): Promise<void>;
}

export { LevelDB as default };
