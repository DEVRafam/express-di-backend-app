"use strict";

class AbstractRepository {
    constructor(db) {
        this.db = db;
    }
    //
    count(where, options = {}) {
        return this.model.count({ ...where, ...options });
    }
    //
    create(data, options) {
        return this.model.create(data, options);
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
}
module.exports = AbstractRepository;
