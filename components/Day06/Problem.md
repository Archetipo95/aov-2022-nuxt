## Problem description

You're tasked with building an app that will compare how many X items one can obtain for roughly the same price as a single item Y. You're already given a baseline for `ItemSelect` and `ComparisonSummary` components and a `useItemComparison` composable, but you still have to implement the following:

- Obtain products from [DummyJSON's Prodcuts API (Get All Products endpoint)](https://dummyjson.com/docs/products) and display all entries along with their names and price tags inside a select input
- Show a comparison sentence in the `ComparisonSummray` component if two items have been chosen (eg. _You can buy 10 cheaper items for about the same price as a single expensive item_)
- If two items have the same `id`s, display _These are the same items_ message

## Example solution's screenshots

https://imgur.com/a/AJmpVyC

## Author

Maciej Pędzich (Mac):

- [GitHub](https://github.com/maciejpedzich)
- [Twitter](https://twitter.com/MaciejPedzich)
- [Mastodon](https://notacult.social/@maciejpedzich)
- [My website (coming next year)](https://maciejpedzi.ch)

## Credits

[DummyJSON project](https://github.com/Ovi/DummyJSON) by Muhammad Ovi.

Based on [a Stackblitz project by tony19](https://stackblitz.com/edit/vue3-vite-starter)