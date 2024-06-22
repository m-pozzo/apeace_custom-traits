function active() {
    $('ul a:first').addClass('active');
    $('.traits_container').hide();
    $('.traits_container:first').show();

    $('ul.traits_list a').click(function () {
        $('ul.traits_list a').removeClass('active');
        $(this).addClass('active');
        $('.options_container .traits_container').hide();

        let option = $(this).attr('href');
        $(option).show();
        return false;
    });
}

active();
