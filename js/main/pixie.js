define(function (require) {
    var $ = require('jquery')
    var _ = require('_')
    var Bacon = require('Bacon')

    var dummyChunk = JSON.stringify([
        'https://www.google.com/images/srpr/logo3w.png',
        'https://www.google.com/intl/en_ALL/images/logos/images_logo_lg.gif',
        'https://ssl.gstatic.com/images/logos/google_logo_41.png'
    ]);
    var pictures = new Bacon.Bus()
    pictures.plug(Bacon.once(dummyChunk))

    var preLoadedImages = pictures.map(toJSON).flatMap(splitByUrl).map(preLoad)
    preLoadedImages.onValue(function (image) {
        setTimeout(function() {$(image).load(function() {$(this).appendTo("#picture")})},1)
    })

    function preLoad(imageUrl) {
        var image = new Image()
        image.src = imageUrl
        return image
    }

    function splitByUrl(urls) {
        return _.reduce(urls, function (stream, value) {return stream.concat(Bacon.once(value))}, Bacon.never())
    }

    function toJSON(message) {
        return JSON.parse(message);
    }
});