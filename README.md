# efmrl
JavaScript library for efmrl.link
# main
```js
async function main(){
    const {efmrl} = require('./efmrl');
    const url= new efmrl();
    let req=await url.short_url("link")
    console.log(req)
}
main()
```
