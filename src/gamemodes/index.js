module.exports = {
    Mode: require('./Mode'),
    FFA: require('./FFA'),
    Teams: require('./Teams'),
    Experimental: require('./Experimental'),
    Rainbow: require('./Rainbow'),
    LMS: require('./LMS'),
    Test: require('./Test'),
    BlackHole: require('./BlackHole'),
};

var get = function (id) {
    var mode;
    switch (id) {
        case 1: // Teams
            mode = new module.exports.Teams();
            break;
        case 2: // Experimental
            mode = new module.exports.Experimental();
            break;
        case 3: // Rainbow
            mode = new module.exports.Rainbow();
            break;
        case 4: // Last Man Standing
         	mode = new module.exports.LMS();
         	break;
        case 6: // Last Man Standing
          mode = new module.exports.Test();
          break;
        case 7: // Last Man Standing
          mode = new module.exports.BlackHole();
          break;
        default: // FFA is default
            mode = new module.exports.FFA();
            break;
    }
    return mode;
};

module.exports.get = get;
