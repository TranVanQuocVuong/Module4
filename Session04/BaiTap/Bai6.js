"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    getLength() {
        return this.length;
    }
    set setLength(length) {
        this.length = length;
    }
}
