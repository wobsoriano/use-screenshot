# use-screenshot

Vue composable to take screenshots of a given web page, tab, window, or the user's entire screen. Powered by [@xata.io/screenshot](https://github.com/xataio/screenshot)

## Installation

```bash
pnpm add use-screenshot
```

## Usage

```ts
import { useScreenshot } from 'use-screenshot'

const { screenshot, capture, isSupported } = useScreenshot()
```

```html
<button @click="capture">Copy</button>
<img :src="screenshot" alt="base64-encoded string" />
```

## License

[MIT](./LICENSE) License © 2022 [Robert Soriano](https://github.com/wobsoriano)
