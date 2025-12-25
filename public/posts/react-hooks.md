---
title: "精通 React Hooks"
date: "2025-12-26"
description: "深入解析 useState, useEffect 以及自定义 Hooks 模式。"
category: "React"
---

# 精通 React Hooks

Hooks 是 React 16.8 新增的特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

## useState

`useState` 让你在函数组件中添加 state。

```jsx
import React, { useState } from "react";

function Example() {
  // 声明一个新的叫做 "count" 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

## useEffect

`useEffect` 给函数组件增加了操作副作用的能力。它跟 class 组件中的 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 具有相同的用途，只不过被合并成了一个 API。

```jsx
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

> Hooks 是一种复用状态逻辑的方式，而不是复用 state 本身。
