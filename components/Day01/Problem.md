## Problem description

You're tasked with building a debounced search bar for products from [DummyJSON's product API](https://dummyjson.com/docs/products#search). In case you're not familiar with the concept of _debouncing_, it's a technique that allows one to delay a function's execution until a specific amount of time has elapsed since the last call.

For this challenge, you'll need to add a 300-millisecond delay to the `findProducts` function. You can make use of readily available debounce implementations, or try writing one yourself.

You'll also need to display a generic loading spinner/message, and if the function executes successfully, place suggested products' names and price tags inside an unordered list. Otherwise, use native `alert()` to show a generic error message.

If the search term gets reset back to an empty string, clear the search suggestions too.

## Recording of an example solution

https://youtu.be/avf8OyNDJfo

## Author

Maciej Pędzich (Mac):

- [GitHub](https://github.com/maciejpedzich)
- [Twitter](https://twitter.com/MaciejPedzich)
- [Mastodon](https://notacult.social/@maciejpedzich)
- [My website (coming next year)](https://maciejpedzi.ch)

## Credits

[DummyJSON project](https://github.com/Ovi/DummyJSON) by Muhammad Ovi.

Based on [a Stackblitz project by tony19](https://stackblitz.com/edit/vue3-vite-starter)
