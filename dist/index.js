"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => LevelDB
});
module.exports = __toCommonJS(src_exports);
var import_memory_level = require("memory-level");
var ENCODING_OPTS = { keyEncoding: "buffer", valueEncoding: "buffer" };
var LevelDB = class {
  db;
  constructor(db) {
    this.db = db ?? new import_memory_level.MemoryLevel(ENCODING_OPTS);
  }
  async get(key) {
    let value = null;
    try {
      value = await this.db.get(key, ENCODING_OPTS);
    } catch (error) {
      if (error.notFound !== true) {
        throw error;
      }
    }
    return value;
  }
  async put(key, value) {
    await this.db.put(key, value, ENCODING_OPTS);
  }
  async del(key) {
    await this.db.del(key, ENCODING_OPTS);
  }
  async batch(ops) {
    await this.db.batch(ops, ENCODING_OPTS);
  }
  async close() {
    await this.db.close();
  }
};
