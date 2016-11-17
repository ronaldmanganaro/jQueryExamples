$(function() {
    $('ul').before('<p>' + "Just Updated" + '</p>');
    $('li.hot').prepend('+');
    
    $('li:contains("balsamic")').after('<li>' + "gluten free soy sauce" + '</li>');
});