const map = new Map()
map.set("1", 1)
map.set("2", 2)
map.set("3", 3)
map.set("4", 4)
map.set("5", 5)
map.set("6", 6)
map.set("7", 7)
map.set("8", 8)
map.set("9", 9)
map.set("a", 10)
map.set("b", 11)
map.set("c", 12)
map.set("d", 13)
map.set("e", 14)
map.set("f", 15)

map.set("A", 10)
map.set("B", 11)
map.set("C", 12)
map.set("D", 13)
map.set("E", 14)
map.set("F", 15)

map.set(".", -1)



function convertNumberToString(number) {

    var integer_part = Math.floor(number)
    var fraction_part = number - integer_part;


}



function converStringToNumber(str, n) {


    /**
     * 支持
     * 10进制 整数，小数，e，带正负号
     * 16进制 整数 带正负号
     * 8进制  整数 带正负号
     * 2进制  整数 带正负号
     */

    let chars = str.split('')
    let len = chars.length
    let i = 0;

    //处理正负号
    let sign = 1;
    while (i < chars.length && chars[i] === '') i++;
    if (i < chars.length) {
        if (chars[i] == '-') {
            sign = -1;
            i++;
        } else if (chars[i] == '+') {
            i++;
        }
    }

    if (n != 10) {
        //验证是否是0(xXoObB)如果不是对应带符号，那么直接报错
        let valid = true;
        if (i + 1 >= len | i >= len) {
            valid = false
        } else if (chars[i] == '0') {
            if (!(n == 2 && (char[i + 1] == 'b' | char[i + 1] == 'B'))) valid = false;
            if (!(n == 8 && (char[i + 1] == 'o' | char[i + 1] == 'O'))) valid = false;
            if (!(n == 16 && (char[i + 1] == 'x' | char[i + 1] == 'X'))) valid = false;
        } else {
            valid = false;
        }
        if (valid) {
            i = i + 2;
        } else {
            throw NaN
        }

    }

    //处理整数部分
    let int_part = 0
    let has_fraction = false;
    let fraction_part = 0;
    while (i < len) {
        let c = chars[i]
        if (c == '.') {
            has_fraction = true;
            i++;
            break;
        }
        c_num = map.get(c)
        if (c_num < n) {
            int_part = int_part * n + c_num
            i++;
        } else {
            throw NaN
        }

    }

    //处理小数部分，如果是10进制的话
    if (has_fraction) {
        if (n == 10) {
            let divide_rank = 0
            while (i < len) {
                let c = char[i];
                let current = map.get(c)
                if (current < 10) {
                    fraction_part = fraction_part * n + current
                    divide_rank++;
                }
            }
            fraction_part = fraction_part / (10 ^ divide_rank)


        } else {
            throw NaN
        }

    } else {



    }

    let decimal_ret = sign * (int_part + fraction_part)

    return decimal_ret;


}