import { takeScreenshot as _takeScreenshot, checkIfBrowserSupported } from '@xata.io/screenshot'
import { ref } from 'vue'

export interface Options {
  /**
   * The quality between 0-1 of your final image. 1 is uncompressed, 0 is lowest quality.
   * @default 0.7
   */
  quality?: number

  /**
   * What should we do when capture starts? This is usually a good time to `hideModal()` or similar.
   */
  onCaptureStart?: () => Promise<void>

  /**
   * What should we do when capture ends? This is usually a good time to clean stuff up.
   */
  onCaptureEnd?: () => Promise<void>

  /**
   * What format of image would you like?
   * @default image/jpeg
   */
  type?: 'image/jpeg' | 'image/png' | 'image/webp'

  /**
   * Why not play a little audio camera click sound effect when your screenshot is being taken?
   * @optional
   */
  soundEffectUrl?: string
}

/**
 * Reactive Screenshot API.
 *
 * @param options
 */
export function useScreenshot(options?: Options) {
  // This is a base64-encoded string representing your screenshot.
  const screenshot = ref('')

  // Checks if the current browser supports the MediaDevices API.
  const isSupported = checkIfBrowserSupported()

  /**
   * Takes a screenshot of the current page using a the native browser [`MediaDevices`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia) API.
  */
  const capture = async () => {
    if (checkIfBrowserSupported()) {
      // @ts-expect-error: Webp internal
      screenshot.value = await _takeScreenshot(options)
    }
  }

  return {
    isSupported,
    capture,
    screenshot,
  }
}
