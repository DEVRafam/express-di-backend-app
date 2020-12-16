"use strict";

const e = require("express");

class AbstractRepository {
    constructor(db) {
        this.db = db;
    }
    //
    count(where, options = {}) {
        return this.model.count({ ...where, ...options });
    }
    //
    async create(data, options) {
        return JSON.parse(JSON.stringify(await this.model.create(data, options)));
    }
    //
    delete(where) {
        return this.model.destroy(where);
    }
    //
    updateById(id, data) {
        return this.model.update(data, {
            where: id,
        });
    }
    //
    findOne(where, options) {
        return this.model.findOne({
            ...where,
            ...options,
        });
    }
    //
    findAll(where, options) {
        return this.model.findAll({
            ...where,
            ...options,
        });
    }
    //
    findById(id, options) {
        return this.model.findOne({
            where: { id },
            ...options,
        });
    }
    //
    async findAndDestroyById(id) {
        const el = await this.model.findOne({ where: { id } });
        if (!el) return 404;
        else {
            await el.destroy();
            return 200;
        }
    }
    //
    async findAndUpdate(id, body) {
        const el = await this.model.findOne({ where: id });
        if (!el) return 404;
        else {
            await el.update(body);
            return el;
        }
    }
}
module.exports = AbstractRepository;
