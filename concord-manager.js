module.exports = concord(val1, texts1)

if (!val1) throw new SyntaxError("You must specify a number!");
if (typeof(val1) != "number") throw new TypeError('The value "number" is not a number!')
if (!Array.isArray(texts1)) throw new TypeError('The value "texts" is not an Array!')

function concord (val, texts) {
    var sing = texts[0]
    , plur = texts[1]

    if (!sing || !plur) throw new SyntaxError("You must specify a singular and a plural!");
    if (typeof(sing) != "string") throw new TypeError('The value "singular" is not a string!')
    if (typeof(plur) != "string") throw new TypeError('The value "plural" is not a string!')

    if (val <= 0) throw new RangeError('The number specified is invalid!')
    if (val == 1) return sing
    if (val > 1) return plur
}