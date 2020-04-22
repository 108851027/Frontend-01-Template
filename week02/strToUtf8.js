function strToUtf8Encoding(str) {
    return Array.from(str).map((c) => '\\u' + c.codePointAt(0).toString(16).padStart(4, '0'));
}