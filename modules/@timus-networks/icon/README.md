## Installation:

1. First install package `npm i @timus-networks/icon`
2. Add package to `modules` property in `nuxt.config.js` file

```json
{
  "modules": [["@timus-networks/icon", { "client": false, "typescript": false }]]
}
```

- You can manually set the `client` and `typescript` support properties.
- If you render this component on the client side, set the value to `true`.
- If you prefer to use `typescript` during development, set `typescript` to `true`.
- You can also set the `namespace` to define the module path's position within the .nuxt folder.

## Icon List:

- You can find all icon styles in the `static/fonts/iconsax/style.scss` folder.
- Also you can view icons http://localhost:3000/\_icons
