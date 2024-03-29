# introduction to react

https://fullstackopen.com/en/part1/introduction_to_react

**vite**: 一个 尤雨溪 的作品. 相当于 uvicron 之于 fastapi. 是一个快速启动的工具.

安装 `vite`: `npm create vite@latest part1 -- --template react`

安装 `part1`: `cd part1; npm install`

运行 `part1`: `npm run dev`

`vite` 启动默认的端口是 `5173`; 否则, 从 `5173` 递增.

## create-react-app

走 `vite` 的话, 程序入口是 `main.jsx`;
不走 `vite` 的话, 程序入口是 `index.js`

所以, 就一直走 `vite` 好了.

## component

现在 `App.jsx` 里面, 是一个 `React Component`, 名为 `App`. 被嵌在了 `root` 这个 document node 里面.

由 React 生成的页面, 看不见传统的 HTML 标签.
所以, 一切皆 Component. 如果不是 Component 则不会出现在 web page 上.

Component 就是被定义成一个 js 函数. 下面这样就是一个没有入参的函数:

```javascript
() => {
    <div>
        <p>hello world</p>
    </div>
}
```

然后, 函数再被赋值到一个变量 `App`.

```javascript
const App = ...
```

用 `箭头函数` 用在 Component 的定义上.

而且, 示例中的函数, 函数体内仅有一个 `return` statement, 则, 连 `return` 都被省略掉了.

`export default App` 要紧, 不能被忽略.

## jsx

虽然长得像 javascript, 但是 `JSX` 的内容却不是 javascript. 它会被 Babel 编译成真正的 javascript.

`JSX` 因为有一个 `X` 在里面, 意味着 `XML`. 所以, 所有的块, 都要用闭合标签包裹起来. 意味着, 在 `HTML` 可行的 `<br>`, 在 `JSX` 里就不行, 需要用正规的 `<br />` 收尾.

## multiple components

一个 Component 里面, 含有多个其他 Component, 很正常. 而且, 也是 React 倡导的.

并且, 通常情况下, `App` 就是根 Component.

## props: passing data to components

因为是 template system, 所以, 传参, 是很常见的. 默认的, 入参是 `props`, aka, properties.

## possible error message

看什么, 我又没有遇上这个错误.

## some notes

- console 总是开的
- 一点儿一点儿改的
- Component 的首字母是大写的
- return 内容是需要被包起来的

```javascript
return []
return (<> </>)
```

## do not render objects

    对象不是一个合法的 React 孩子

在 React 中, 花括号包裹的, 应该是原始类型的值.

然而, 可被渲染的元素组成的 array 是可以的.

```javascript
const App = () = {
    const friends = { 'debbie', 'thea' }
    return (
        <div>
            <p>{friends}</p>
        </div>
    )
}

## exercises 1.1.-1.2.