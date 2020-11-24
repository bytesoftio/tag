# @bytesoftio/tag

## Installation

`yarn add @bytesoftio/tag` or `npm install @bytesoftio/tag`

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Description](#description)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Description

Tags or Branding is a common practice in advanced TypeScript project setups. The main purpose of this approach is to make certain primitive types more predictable. 

Let's have a look at this example below:

```ts
type UUID = string

type User = {
  id: UUID
}
```

In this example we have created a type alias `UUID` that is used on the type `User`. At the moment, any `string` value is a valid uuid. For example:

```ts
const user: User = { id: "some-uuid" }
```

This is very implicit and is not very `safe` since any string fulfills the constraints of the `UUID` type. What if could make this more explicit?

```
import { Tag } from "@bytesoftio/tag"

type UUID = Tag<string, "uuid">

type User = {
    id: UUID
} 

// this will not work, string is not assignable to `UUID`
const user: User = { id: "some-uuid" }

// exlicitly cast it to `UUID` -> you know what you're ding
const user: User = { id: "some-uuid" as UUID } 
```

Now you cannot simply assign a string to `UUID`, this has to be done explicitly. 

You can go further and add some type guards, a factory function, etc. for tagged types, but this is not covered here. 
