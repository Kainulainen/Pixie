define(function (require) {
    var expect = require('chai').expect

    describe('loading pictures', function () {
        it('shows loaded picture', function () {
            expectToHaveLoaded($('#picture img').eq(0));
        });
    });

    function expectToHaveLoaded(pic) {
        expect(pic.toHaveLoaded()).to.be.true;
    }

    $.fn.toHaveLoaded = function() {
        var image = this.get(0);
        if (!image.complete) return false;
        if (typeof image.naturalWidth != "undefined" && image.naturalWidth == 0) return false;
        return true;
    }
});
