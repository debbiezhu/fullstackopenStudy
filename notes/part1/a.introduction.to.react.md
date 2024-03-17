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

## jsx

## multiple components

## props: passing data to components

## possible error message

## some notes

## do not render objects

## exercises 1.1.-1.2.