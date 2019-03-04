/**
 *实现深度拷贝
 */
function isObject (obj) {
    return typeof obj == 'object' && obj != null
}

function deepClone (source) {

    if (!isObject(source))
        return source
    let target = Array.isArray(source) ? [] : {}
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            if(isObject(source[key])) {
                target[key] = deepClone(source[key])
            } else {
                target[key] = source[key]
            }
        }
    }
    return target
}
// 测试用例
let a = {
    name: "muyiy",
    book: {
        title: "You Don't Know JS",
        price: "45"
    },
    a1: undefined,
    a2: null,
    a3: 123
}
let b = deepClone(a)
a.name = 'mele'
a.book.price = '55'
console.log(b)
