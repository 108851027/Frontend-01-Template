var positive_negtive = /^[+-]?/
var decimal = /(0|([1-9]\d*))(\.\d*)?(e\d+)?$/
var oct = /0[oO][0-7][0-7]*$/
var binary = /0[bB][0-1][0-1]*$/
var hex = /0[xX][0-9a-fA-F][0-9a-fA-F]*$/

var numerical_literal = /^[+-]?(((0|([1-9]\d*))(\.\d*)?(e\d+)?$)|(0[oO][0-7][0-7]*$)|(0[bB][0-1][0-1]*$)|(0[xX][0-9a-fA-F][0-9a-fA-F]*$))/