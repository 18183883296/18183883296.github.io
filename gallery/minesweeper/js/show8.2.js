var _$_92c7 = ["getElementById", "GET", "open", "onreadystatechange", "readyState", "status", "responseText", "send", "innerHTML", "ss", "\u6210\u7ee9", "data5.php?c=", "&p=", "&w=", "0", "toString", "", "\u57fa\u7840", "\u4e2d\u7ea7", "\u4e13\u5bb6", "\u6ee1\u5c4f", "\u81ea\u5b9a\u4e49", "\x1D", "split", "length", "\x1E", "\x1F", "div", "createElement", "&middot;<span class=uid>", "</span>\u7528\u65f6", "\u79d2", "(", "*", ",", "\u96f7)", " <small>", "getHours", ":", "getMinutes", "</small>", "appendChild", "list", "page", "<a href=javascript:List(", ")>\u66f4\u591a...</a>", "#", "href", "location"];
function $(_0x11320)
{
    return document[_$_92c7[0]](_0x11320)
}
function LoadPage(_0x114E7, _0x1148C)
{
    var _0x11542 = new XMLHttpRequest();
    _0x11542[_$_92c7[2]](_$_92c7[1], _0x114E7, true);
    _0x11542[_$_92c7[3]] = function ()
    {
        if (_0x11542[_$_92c7[4]] == 4 && (_0x11542[_$_92c7[5]] == 200 || _0x11542[_$_92c7[5]] == 304))
        {
            _0x1148C(_0x11542[_$_92c7[6]])
        }
    };
    _0x11542[_$_92c7[7]](null)
}
function List(_0x113D6, _0x11431)
{
    $(_$_92c7[9])[_$_92c7[8]] = jibie[_c] + _$_92c7[10];
    LoadPage(_$_92c7[11] + _c + _$_92c7[12] + _0x113D6 + _$_92c7[13] + _0x11431, Show)
}
function sp(_0x1137B)
{
    return _0x1137B <= 9 ? _$_92c7[14] + _0x1137B : _0x1137B[_$_92c7[15]]()
}
var jibie = new Array(_$_92c7[16], _$_92c7[17], _$_92c7[18], _$_92c7[19], _$_92c7[20], _$_92c7[21]);
var _rm = _$_92c7[16];
function Show(_0x118D0)
{
    var _0x1181A = _0x118D0[_$_92c7[23]](_$_92c7[22]);
    var _0x117BF = parseInt(_0x1181A[0]);
    var _0x1192B = parseInt(_0x1181A[1]);
    var _0x115F8 = _0x1181A[2] + _rm;
    var _0x1159D = new Array();
    _0x1159D[_$_92c7[24]] = 0;
    var _0x11875 = _0x115F8[_$_92c7[23]](_$_92c7[25]);
    _rm = _0x11875[0];
    for (var _0x116AE = 1; _0x116AE < _0x11875[_$_92c7[24]]; _0x116AE++)
    {
        _0x1159D[_0x116AE] = _0x11875[_0x116AE][_$_92c7[23]](_$_92c7[26])
    };
    for (_0x116AE = _0x1159D[_$_92c7[24]] - 1; _0x116AE > 0; _0x116AE--)
    {
        var _0x11709 = document[_$_92c7[28]](_$_92c7[27]);
        var _0x11764 = _$_92c7[29] + _0x1159D[_0x116AE][1] + _$_92c7[30] + parseInt(_0x1159D[_0x116AE][2]) / 10 + _$_92c7[31];
        if (_c > 3)
        {
            _0x11764 += _$_92c7[32] + _0x1159D[_0x116AE][3] + _$_92c7[33] + _0x1159D[_0x116AE][4] + _$_92c7[34] + _0x1159D[_0x116AE][5] + _$_92c7[35]
        };
        var _0x11653 = new Date(_0x1159D[_0x116AE][0] * 1000);
        _0x11764 += _$_92c7[36] + sp(_0x11653[_$_92c7[37]]()) + _$_92c7[38] + sp(_0x11653[_$_92c7[39]]()) + _$_92c7[40];
        _0x11709[_$_92c7[8]] = _0x11764;
        $(_$_92c7[42])[_$_92c7[41]](_0x11709)
    };
    if (_0x117BF < _0x1192B)
    {
        $(_$_92c7[43])[_$_92c7[8]] = _$_92c7[44] + _0x117BF + _$_92c7[34] + _0x1192B + _$_92c7[45]
    }
    else
    {
        $(_$_92c7[43])[_$_92c7[8]] = _$_92c7[16]
    }
}
var _c = window[_$_92c7[48]][_$_92c7[47]][_$_92c7[23]](_$_92c7[46])[1];
if (_c == undefined)
{
    _c = 2
};
List(0, 0);
function _s(_0x1137B)
{
    $(_$_92c7[42])[_$_92c7[8]] = _$_92c7[16];
    $(_$_92c7[43])[_$_92c7[8]] = _$_92c7[16];
    _rm = _$_92c7[16];
    _c = _0x1137B;
    List(0, 0)
}
