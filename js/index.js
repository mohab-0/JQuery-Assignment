// ========== Side Nav Section ==========
$(".open-icon").click(function () {
    $(".open").css("left", "0")
})

$(".close").click(function () {
    $(".open").css("left", "-250px")
})

// ========== Accordion Section ==========
$(".acc h3").click(function () {
    $(this).next().slideToggle()
    $(".acc div").not($(this).next()).slideUp()
})

// ========== CountDown Section ==========
function calculateCountdown(targetDate) {
    const targetDateTime = new Date(targetDate).getTime();

    setInterval(function () {
        const now = new Date().getTime();
        const timeDifference = (targetDateTime - now);

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        $(".days").html(`${days} D`);
        $(".hours").html(`${hours} h`);
        $(".minutes").html(`${minutes} m`);
        $(".seconds").html(`${seconds} s`)

    }, 1000);
}

calculateCountdown("2024-11-16T00:00:00");

// ========== Contact Section ==========
$("textarea").keyup(function () {
    let textLength = $(this).val().length;
    $("#remaningChars").text(100 - textLength)
})

