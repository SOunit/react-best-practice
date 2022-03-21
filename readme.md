# Best practice summary

## Redux directory best practice

- re-ducks 構成
- redux way -> ducks -> re-ducks
- redux way, too separated
- ducks, one big file
- re-ducks, well separated, well connected

### url

- https://speakerdeck.com/dragontaro/reactfalseji-chu-toshe-ji-patan?slide=51
- https://github.com/SOunit/spz-react/tree/master/src/redux

## Presentation / container pattern

### why

- separation of concern (view / logic)

### how

- presentation / container approach (old approach before hook)
- hook approach

## Layered architecture

### dependency

- lower layer should be independent
- changes in upper layer has no effect to lower layer
- presentation layer changes does not effect infra layer

#### ref

https://qiita.com/kichion/items/aca19765cb16e7e65946
