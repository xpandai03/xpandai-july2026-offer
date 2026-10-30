import { track } from "@vercel/analytics"

type EventProperties = Record<string, string>

/**
 * Send a Vercel Web Analytics custom event, safely from a mount effect.
 *
 * `track()` silently drops events until `<Analytics />` has created the
 * `window.va` queue, and in the App Router a page's effects run before the
 * root layout's. So an event fired on mount (book_view on a direct visit to
 * /book) would be lost. Creating the queue first is the pattern Vercel
 * documents for plain HTML: inject() keeps an existing queue, and the script
 * drains `window.vaq` when it loads. (`window.va` and `window.vaq` are typed
 * by @vercel/analytics.)
 *
 * Keep events to 2 properties (Vercel Pro limit).
 */
export function trackEvent(name: string, properties: EventProperties) {
  if (typeof window === "undefined") return
  if (!window.va) {
    window.va = (event, payload) => {
      ;(window.vaq = window.vaq || []).push([event, payload])
    }
  }
  track(name, properties)
}
