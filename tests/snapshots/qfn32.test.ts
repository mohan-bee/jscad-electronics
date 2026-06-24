import { test, expect } from "bun:test"
import "../fixtures/png-matcher"
import { renderFootprint } from "../helpers/render-footprint"

test("QFN-32 IC package", async () => {
  const pngBuffer = await renderFootprint("qfn32")
  await expect(pngBuffer).toMatchPngSnapshot(import.meta.path)
})
