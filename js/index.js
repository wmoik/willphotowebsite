$(window).load( function() {

   var $container = $('#container').masonry({
        itemSelector: ".item",
        columnWidth: ".grid-sizer",
     gutter: ".gutter-sizer",
     percentPosition: true

    });

   $container.imagesLoaded().progress( function() {
        $container.masonry('layout');
   });



});

$(document).ready(function() {

 $(".item").each(function() {
            var item = $(this);
            var image = item.children('img').attr('src');
            $(item).find('.description p').append('<a href="' + image + '" data-featherlight="image">View Larger</a>');

         });

});
