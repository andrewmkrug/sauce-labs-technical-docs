---
title: Home
meta:
  - name: description
    content: Page description
  - name: keywords
    content: js vuejs vuepress
---

# base-vuepress

> Awesome description

<p align="center">
  <img src="./images/thumbnail-256x256.png" />
</p>

[[toc]]

##### Check out for more Markdown Extensions [here](https://vuepress.vuejs.org/guide/markdown.html#header-anchors)

## Article 1

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

## Article 2

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

## Components

Source at docs/.vuepress/components/

* <Demo/>
* <Button-Counter :start="0"/>


<CodeSwitcher :languages="{js:'JavaScript',ts:'TypeScript'}">
<template v-slot:js>
::: v-pre
<<<@/docs/.vuepress/config.js
:::
</template>
<template v-slot:ts>

```ts
export default function isString (str: string) : str is string {
    return typeof str === 'string' && str.trim() === str
}
```

</template>
</CodeSwitcher>

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |



### Emoji Codes

[Emoji Codes](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

:tada: :100:

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VuePress!')
```
:::

## Source Code of Page

::: v-pre
`{{ This will be displayed as-is }}`
<<<@/docs/README.md
:::

<<<@/docs/README.md
