$(document).ready(function() {
    var arrLang = "en";
    var lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
    if (!Object.keys(arrLang).includes(lang)) lang = 'en';
    console.log("Language selected: ", lang);
    $(".lang").each(function(index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
});
$(".translate").click(function() {
    var lang = $(this).attr("id");
    $(".lang").each(function(index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
});