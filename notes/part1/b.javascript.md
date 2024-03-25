# javascript

https://fullstackopen.com/en/part1/java_script

chrome 就是一个很棒的 javascript playground 了.

## variables

`const` 和 `let` 就能够 cover 变量声明.

## arrays

`arr.push(5)` 给 array 加数

遍历 array

```javascript
arr.forEach(value => {
    console.log(value)
})
```

`arr.concat(5)` 给 array 加数, 更推荐的方法. 它会新建一个 arr.

遍历 array, 更推荐的方法. 它会新建一个 arr.

```javascript
const m1 = arr.map(value => value * 2)
```

`const [first, second, ...rest] = arr`. 解构型赋值.

## objects

`{}` 包起来的就是 `object`.

可以动态地给 object 新增 property.

```javascript
object1.address = 'helsinki'
object1['secret number'] = 12341
```

js object 可以有自己的 method, 但是没有必要.

js 里面讨论 oop 没有太大的意义.

## functions

箭头函数有其特有的 `省略` 大法.

```javascript

// 完整版
const square = (q) => {
    console.log(q)
    return q*q
} 

// 省略入参括号版
// 入参仅一个时, 可以省略入参外的括号
const square = q => {
    console.log(q)
    return q * q
}

// 省略入参括号, 函数括号版
// 函数体仅为一个 return 语句时, 可以省略函数括号
const square = q => q * q
```

## exercises 1.3.-1.5.

## object methods and 'this'

React 不需要为 object 定义 method. 记得哦.

`this` 到底指的是谁, 要看是谁在使用当前函数. 所以, `this` 不一定是指 object.

## classes

## javascription materials