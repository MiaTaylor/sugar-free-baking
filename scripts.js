
$('.btn-image').on('click', function(){
    let id = $(this).find('input')[0].value;
    hideRecipes();
    removeActive();
    $('#' + id).removeClass('hidden');
    $(this).addClass('active');
});

function hideRecipes() {
    $('.recipe').addClass('hidden');
}

function removeActive() {
    $('.btn-image').removeClass('active');
}