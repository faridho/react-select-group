# React Select Group

> select column with double options for react js form

[![NPM](https://img.shields.io/npm/v/react-select-group.svg)](https://www.npmjs.com/package/react-select-group) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

![](https://github.com/faridho/react-select-group/blob/master/react-select-group.gif?raw=true)

## Install

```bash
npm install react-select-group
```

## Usage

```jsx
import React, { Component } from 'react'

import { ReactSelectGroup } from 'react-select-group'
import 'react-select-group/dist/index.css'

class Example extends Component {
  render() {
    return <ReactSelectGroup />
  }
}
```

## Props

| Props       |   Type   | Desription                                                                                                             |
| ----------- | :------: | ---------------------------------------------------------------------------------------------------------------------- |
| placeholder |  string  | Placeholder input type on text box                                                                                     |
| isError     | boolean  | Handle custom error. Default is false                                                                                  |
| flags       |  array   | Element must image url. Beacuse of show flags on group one column                                                      |
| labels      |  array   | This is optional. But, if you want describe each flag you can use it and length of labels array should same with flags |
| onChange    | function | Emit every value to parents. Should print paramater to get result                                                      |

## License

MIT © [faridho](https://github.com/faridho)
