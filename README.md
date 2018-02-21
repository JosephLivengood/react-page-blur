#react-page-blur

Full page blur... every time, every browser, every circumstance.


###Install

```
npm install react-page-blur --save
```

###Usage
Simple:
```
<PageBlur active/>
```
Intermediate:
```
<PageBlur
  color='blue'
  opacity='0.8'
  onActive={this.pauseVideo}
  active
>
    <PaywallPopup />
</PageBlur>
```
Advanced:
```
<PageBlur
  image='/public/img/dark-watermark.gif'
  imageRepeat='no-repeat'
  imagePosition='center left'
  onOffClick={this.playSound}
  pulse
  active
/>
```

###Props
| Property | Type | Content  | Default Value |
| --- | --- | --- | --- |
| active | `boolean` | Is the page blurred | `false`
| color | `string` | Color of blur (color/hex/rgb) | `'black'`
| opacity | `number` | Opacity of blur (0-1) | `0.5`
| pulse | `boolean` | Pulsing effect of blur | `false`
| image | `string` | background-image of blur | `undefined`
| imageRepeat | `string`* | background-repeat of blur | `repeat`
| imagePosition | `string`^ | background-position | `center`
| className | `string` | Any additional classes to add | `''`
| onOffClick | `function` | Called if user clicks the blur but not a child | `() => {}`
| onActive | `function` | Called once when activated | `() => {}`
| offActive | `function` | Called once when unactivated from active | `() => {}`

*Acceptable string inputs are `'repeat', 'repeat-x', 'repeat-y', 'no-repeat'`

^Acceptable string inputs are explained on: https://developer.mozilla.org/en-US/docs/Web/CSS/background-position

###Development
```
npm install
npm run build
npm link
npm start
```


