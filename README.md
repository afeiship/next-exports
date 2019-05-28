# next-exports
> Exports members for next

## install:
```bash
npm install -S afeiship/next-exports --registry=https://registry.npm.taobao.org
```

## usage:
```js
//DOCS here!
```


## todo
```js
const ctx = (this.audioCtx = wx.createInnerAudioContext());
const events = ['onPlay', 'onPause', 'onEnded', 'onError', 'onTimeUpdate'];
ctx.src = inUrl;
events.forEach((item) => {
  ctx[item](() => {
    this[item]();
  });
});
```
