---
title: "Markdown 语法指南与演示"
date: "2025-12-25"
description: "本博客 Markdown 渲染能力的全面指南，包括代码高亮、表格、引用等。"
category: "指南"
---

# 你好 Markdown! 👋

这篇文章展示了本博客的渲染能力。我们使用 **React Markdown** 配合 **Tailwind Typography** 和 **Syntax Highlighter**。

## 排版

你可以使用不同层级的标题、_斜体_、**粗体**，甚至 ~~删除线~~。

### 列表

**无序列表:**

- React
- Vue
- Svelte
- Angular

**有序列表:**

1. 初始化项目
2. 安装依赖
3. 开始编码
4. 部署上线

## 代码块 💻

这是最精彩的部分！查看不同语言的语法高亮效果。

### JavaScript / React

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={() => setCount(count + 1)}
    >
      Count is {count}
    </button>
  );
}
```

### CSS / Tailwind

```css
.card {
  @apply bg-white rounded-xl shadow-md overflow-hidden;
}

.card:hover {
  transform: translateY(-5px);
}
```

### Python

```python
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

print([fibonacci(i) for i in range(10)])
```

### Rust

```rust
fn main() {
    let name = "Zfank";
    println!("Hello, {}!", name);
}
```

## 引用块

> "代码就像幽默。当你必须解释它时，它就糟糕了。"
>
> — _Cory House_

## 表格

| 功能     | 支持情况 | 状态 |
| :------- | :------: | ---: |
| Markdown |    ✅    | 正常 |
| 语法高亮 |    ✅    | 正常 |
| 表格     |    ✅    | 正常 |
| 图片     |    ✅    | 正常 |

## 链接和图片

你可以链接到 [Google](https://google.com) 或者内部页面如 [首页](/)。

![自然风景](https://images.unsplash.com/photo-1501854140884-074bf86ee91c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)
_图片说明：来自 Unsplash 的美丽风景。_

## 任务列表

- [x] 设置 React 项目
- [x] 配置 Tailwind
- [x] 实现 Markdown 渲染
- [ ] 写第一篇真正的博客
- [ ] 分享给全世界

---

感谢阅读！
