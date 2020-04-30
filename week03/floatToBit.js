/**
 * JavaScript 中的所有数据都是以 64 位浮点型数据(float) 来存储。
 */

function convert_float_to_bitarray(num) {
    const bytes = new Uint8Array(8)
    const memory = new Float64Array(bytes.buffer);
    memory[0] = num
    var num_array = new Array(64)
    for (var i = 0; i < 8; i++) {
        var b = bytes[i]
        for (var j = 0; j < 8; j++) {
            //内存中的存储是反着的
            num_array[(8 - i) * 8 - j - 1] = (b >> j) & 1
        }
    }
    return num_array
}