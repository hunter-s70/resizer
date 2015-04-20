$(window).resize(function () {
    var n = 1, m = 1;
    var oldval = parseInt ($('p').css('font-size')); //Присваивает переменной старое значение высоты ШРИФТА и преобразует в число
    var cont = Math.round(parseInt($('p').css('margin')) + parseInt($('h2').css('margin')));
    var sum = $('p').height() + $('h2').height() + cont; // Сумма высот элементов
    function agent () {
            while (sum > $('.main').height() ) { // Пока условие истинно - выполняем уменьшение высоты контента
            $('p, h2').css('font-size', function() {
                return Math.round(oldval-n); // Возвращаем новое значение font-size
            });
            n++;
            sum = $('p').height() + $('h2').height() + cont; // Перезапись значения высоты.
        }}
    if (sum > $('.main').height()) { agent() } // Условие 1
    else {
        while (sum <= $('.main').height() ) {
            $('p, h2').css('font-size', function() {
                return Math.round(oldval+m);
            });
            m++;
            sum = $('p').height() + $('h2').height() + cont;
        }
    }
    oldval = parseInt ($('p').css('font-size'));
    if (sum > $('.main').height()) { agent() } // Условие 2
});
