# nuxt-router-check

> Nuxt JS router BUG
This bug affects nuxt-router and layouts templates.

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

```

### Steps to reproduce the BUG

1. Open `http://localhost:3000`
2. Go to Sales or Shops page and check browser URL
3. Go back to INDEX page and select another City from Select.
4. Go to Sales or Shops page and check browser URL, you will see wrong URL
5. Bug confirmed

If I move navbar inside PAGE all URL's will correct.
