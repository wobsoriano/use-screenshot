import { takeScreenshot as _takeScreenshot, checkIfBrowserSupported } from '@xata.io/screenshot'
import { ref } from 'vue'

export function useScreenshot() {
  const screenshot = ref('')
  const isSupported = checkIfBrowserSupported()

  const capture = async () => {
    if (checkIfBrowserSupported())
      screenshot.value = await _takeScreenshot()
  }

  return {
    isSupported,
    capture,
    screenshot,
  }
}
