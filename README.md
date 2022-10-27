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
import React from 'react'
import { ReactSelectGroup } from 'react-select-group'
import 'react-select-group/dist/index.css'

const App = () => {
  const flags = [
    'https://res.cloudinary.com/duzt2dvg6/image/upload/v1665326782/flags/gmail.png',
    'https://res.cloudinary.com/duzt2dvg6/image/upload/v1665326789/flags/outlook.png',
    'https://res.cloudinary.com/duzt2dvg6/image/upload/v1665326776/flags/apple.png',
    'https://res.cloudinary.com/duzt2dvg6/image/upload/v1665326799/flags/yahoo.png'
  ]
  const labels = [
    'Gmail', 'Outlook', 'Apple Mail', 'Yahoo Mail'
  ]
  render() {
    const onChangeValue = (data) => {
      // your logic
    }
    return (
      <ReactSelectGroup 
        placeholder='Type email here'
        isError={error}
        flags={flags}
        labels={labels}
        onChange={onChangeValue} 
      />
    )
  }
}

export default App
```

## Props

| Props         |    Type    | Desription                                                                                                                        |
| ------------- | :--------: | --------------------------------------------------------------------------------------------------------------------------------- |
| `placeholder` |  `string`  | Placeholder input type on text box                                                                                                |
| `isError`     | `boolean`  | Handle custom error. Default is false                                                                                             |
| `flags`       |  `array`   | Element must image url. Because of show flags on group one or left column                                                         |
| `labels`      |  `array`   | This is optional. But, if you want describe each flag you can use it. And length of labels array should same with length of flags |
| `onChange`    | `function` | Emit every value to parent. Should print paramater to get result                                                                  |

## License

MIT © [faridho](https://github.com/faridho)
