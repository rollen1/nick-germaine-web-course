$(document).ready(function() {
    
    $('[data-trigger="dropdown"]').on('mouseenter', function() {
        const submenu = $(this).parent().find('.submenu');
        submenu.fadeIn(300);

        $('.profile-menu').on('mouseleave', function() {
            submenu.fadeOut(300);
        
    })


    })
    









})