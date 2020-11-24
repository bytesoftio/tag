import { Tag } from "./types"

describe("types", () => {
  it("should compile", () => {
    type UUID = Tag<string, "uuid">

    const value: UUID = "asd" as UUID
  })
})
