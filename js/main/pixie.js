define(function (require) {
    var $ = require('jquery')
    var _ = require('_')
    var Bacon = require('Bacon')

    var dummyChunk = JSON.stringify([
        'https://www.google.com/images/srpr/logo3w.png',
        'https://www.google.com/intl/en_ALL/images/logos/images_logo_lg.gif'
    ]);
    var pictures = new Bacon.Bus()
    pictures.plug(Bacon.once(dummyChunk))

    var preLoadedImages = pictures.map(toJSON).flatMap(splitByUrl).map(preLoad)
    preLoadedImages.onValue(function (image) {$('#picture').append(image)})

    function preLoad(imageUrl) {
        var image = new Image()
        image.src = imageUrl
        return image
    }

    function splitByUrl(array) {
        var stream = Bacon.never()
        _.each(array, function (value) {
            stream = stream.concat(Bacon.once(value))
        })
        return stream
    }

    function toJSON(message) {
        return JSON.parse(message);
    }
});