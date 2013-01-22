require.config({
    paths: {
        'cs': 'test/lib/cs',
        'coffee-script': 'test/lib/coffee-script',
        'mocha':'test/lib/mocha',
        'chai':'test/lib/chai',
        'sinon-chai':'test/lib/sinon-chai'
    } ,
    shim: {
        'mocha': { exports: 'mocha' },
        'chai': { exports: 'chai' }
    },
    urlArgs: "bust" + (new Date()).getTime()
})

define(function (require, exports, module) {
    require('test/setup');

    var specs = [
        'test/spec/pixie.spec',
        'cs!test/spec/cs.spec'
    ]
    require(specs, function (module) {
        mocha.run();
    });
});