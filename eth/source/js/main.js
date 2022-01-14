function copyDivToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("wallet"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

$(".participate").click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: $(".participate-a").offset().top }, 'slow');
});

$(".transactions").click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: $(".table-a").offset().top }, 'slow');
});

$(".examples").click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: $(".examples-a").offset().top }, 'slow');
});

$(".rules-l").click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: $(".rules-l-a").offset().top }, 'slow');
});

$(".info-l").click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: $(".info-l-a").offset().top }, 'slow');
});



$(".copy-button").click(function () {
    $(".notiff-copy").addClass("active")
    setTimeout(function () {
        $(".notiff-copy").removeClass("active")
        clearTimeout();
    }, 3000);
})