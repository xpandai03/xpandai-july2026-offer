"use client"

import { useRef, useState } from "react"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { track } from "@vercel/analytics"
import { XIcon } from "lucide-react"

import { Dialog, DialogOverlay, DialogPortal } from "@/components/ui/dialog"

/** Single video source for the hero demo. */
const LOOM_EMBED_URL = "https://www.loom.com/embed/aef73ea11aa14113a6680e24148dc701?autoplay=1"

/** Native ratio of the source embed. Preserved so the video does not letterbox. */
const ASPECT_PADDING_BOTTOM = "64.67%"

type DemoVideoButtonProps = {
  className?: string
  children: React.ReactNode
}

/**
 * Renders the hero trigger plus its video modal. The iframe mounts only while
 * the dialog is open, so nothing loads on page load and audio stops on close.
 *
 * Radix Dialog handles Escape, outside click, focus return to the trigger, and
 * body scroll lock.
 */
export function DemoVideoButton({ className, children }: DemoVideoButtonProps) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const handleOpen = () => {
    track("demo_video_open")
    setOpen(true)
  }

  return (
    <>
      <button ref={triggerRef} type="button" onClick={handleOpen} className={className}>
        {children}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogPortal>
          <DialogOverlay className="bg-foreground/60 backdrop-blur-sm duration-500 motion-reduce:animate-none motion-reduce:duration-0" />

          <DialogPrimitive.Content
            className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-[960px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md border border-border bg-card duration-500 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 motion-reduce:animate-none motion-reduce:duration-0"
            aria-describedby={undefined}
            // Restore focus to the trigger explicitly. Clicking a button does
            // not set DOM focus in every browser, notably Safari, so relying on
            // the default restore would drop focus to the body.
            onCloseAutoFocus={(event) => {
              event.preventDefault()
              triggerRef.current?.focus()
            }}
          >
            {/* Title is required by Radix for accessibility. Visually hidden. */}
            <DialogPrimitive.Title className="sr-only">Xpand AI product demo</DialogPrimitive.Title>

            {/* Close sits above the video so it stays reachable on mobile and
                is never swallowed by iframe pointer events. */}
            <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-border">
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">See how it works</span>
              <DialogPrimitive.Close
                aria-label="Close video"
                className="flex items-center justify-center w-8 h-8 rounded-full text-muted-foreground hover:text-foreground hover:bg-sand transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <XIcon className="w-4 h-4" />
              </DialogPrimitive.Close>
            </div>

            {/* Aspect box reserves height before the iframe paints, so there is
                no layout jump on a slow connection. */}
            <div className="relative bg-sand" style={{ paddingBottom: ASPECT_PADDING_BOTTOM }}>
              <span className="absolute inset-0 flex items-center justify-center text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Loading
              </span>

              {open && (
                <iframe
                  src={LOOM_EMBED_URL}
                  title="Xpand AI product demo"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              )}
            </div>
          </DialogPrimitive.Content>
        </DialogPortal>
      </Dialog>
    </>
  )
}
