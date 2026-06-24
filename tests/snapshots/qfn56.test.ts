import { test, expect } from "bun:test"
import "../fixtures/png-matcher"
import { renderFootprint } from "../helpers/render-footprint"

test("QFN-56 IC package", async () => {
  const pngBuffer = await renderFootprint(
    "qfn56_pw0.2_p0.4_w7.75_h7.75_thermalpad3.2mmx3.2mm",
  )
  await expect(pngBuffer).toMatchPngSnapshot(import.meta.path)
})
