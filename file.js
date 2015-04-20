$('.main').load('page4.html', function() {
var n = 1, m = 1;
var oldval = parseInt ($('p').css('font-size'));
var con = Math.round(parseInt($('p').css('margin')) + parseInt($('h2').css('margin')));
var sum = $('p').height() + $('h2').height() + con;
        while (sum > $('.main').height() ) {
        $('p, h2').css('font-size', function() {
            return Math.round(oldval-n);
        });
        n++;
        sum = $('p').height() + $('h2').height() + con;
    }
});
