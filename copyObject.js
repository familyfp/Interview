/**
 *实现Object.assign浅拷贝
 */
function cloneShallow (source) {
    let target = {}
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = source[key]
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

let b = cloneShallow(a)
let c = a
a.name = 'meili'
a.book.price = '55'
console.debug(b)
/**
 * { name: 'muyiy',
    book: { title: 'You Don\'t Know JS', price: '55' },
    a1: undefined,
        a2: null,
    a3: 123 }
 */

console.debug(c)
/**
 * { name: 'meili',
  book: { title: 'You Don\'t Know JS', price: '55' },
  a1: undefined,
  a2: null,
  a3: 123 }
 */
