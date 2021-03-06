require.config({
    paths: {
        'jquery': ['http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min', 'lib/jquery-1.9.0.min'],
        '_': 'lib/lodash.min',
        'Bacon': 'lib/Bacon',
        'tpl': 'lib/tpl-custom'
    }
});

require(['main/pixie'], function() {
    var isTestEnv = document.location.href.match('runTests') != null
    if (isTestEnv) require(['test/runner'])
})