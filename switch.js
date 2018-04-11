(function($) { 
    $(document).ready(function () {
        $('.squirrel').click(function () {
            $(this).hide();
            var next = $(this).next();
            console.log(next.length);
            if (next.length == 0)
                next = $(this).parent().find('.squirrel').first();
            
            next.show();
        });
    });
})(jQuery);