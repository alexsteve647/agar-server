function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true,
        writable: true,
        configurable: true
    });
}

define("GUEST", 0);
define("USER", 1);
define("MODER", 2);
define("ADMIN", 4);
