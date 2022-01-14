$(function () {
    const BaseWallet = "17yDW2maRsgXextEMfGrD48usGSLrKggYG";

    function randomString(len, charSet) {
        charSet =
            charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var randomString = "";
        for (var i = 0; i < len; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz, randomPoz + 1);
        }
        return randomString;
    }

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    let table = document.getElementById("table_items");

    const createTableItem = () => {
        let inputValue = randomInteger(0,5) + "." + randomString(1, "123456789");
        let outputValue = ++inputValue * 2;
        let txFIn = inputValue / 100;
        let txFOut = outputValue / 100;
        let cutWallet = BaseWallet.slice(0, 7) + "..."

        let item = document.createElement("div");
        item.className = "table_item";
        item.innerHTML = `<table>
                    <tr class="table_item-top">
                        <td>${randomString(7) + "..."}</td>
                        <td>${randomString(6, "123456789")}</td>
                        <td>${cutWallet}</td>
                        <td>OUT</td>
                        <td>${"0x" + randomString(5) + "..."}</td>
                        <td>right now</td>
                        <td>${outputValue + "  BTC"}</td>
                        <td>${txFOut.toFixed(3)}</td>
                    </tr>
                    <tr class="table_item-apply">
                        <td class="left"></td>
                        <td ><img src="img/apply.png" /></td>
                        <td class="right"></td>
                    </tr>
                    <tr class="table_item-bottom">
                    <td>${randomString(7) + "..."}</td>
                    <td>${randomString(6, "123456789")}</td>
                    <td>${"0x" + randomString(5) + "..."}</td>
                    <td>  IN</td>
                    <td>${cutWallet}</td>
                    <td>right now</td>
                    <td>${inputValue + "  BTC"}</td>
                    <td>${txFIn.toFixed(3)}</td>
                    </tr>
                    </table>`;

        var first = table.childNodes[0];
        let last = table.lastChild;

        table.insertBefore(item, first);
        let itemsCount = table.children.length;

        if (itemsCount > 3) {
            table.removeChild(last);
        }
    };
    createTableItem();
    createTableItem();
    createTableItem();

    setInterval(createTableItem, 17341);

    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 50}, 500);
        return false;
    });
});

function copy(text) {
    var input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    if (result) {
        $('.address_check').css('opacity', 1);
        setTimeout(function () {
            $('.address_check').css('opacity', 0);
        }, 1000);
    }
}