含有遮罩层的对话框，用于模拟浏览器的`alert`、`confirm`和`prompt`。

模态对话框通过遮罩层来阻止用户的其他行为。

### 示例
#### 基本形式

<div class="m-example"></div>

```xml
<button class="u-btn u-btn-primary" on-click={this.show()}>Modal</button>
```

```javascript
var component = new RGUI.Component({
    template: template,
    show: function() {
        var modal = new RGUI.Modal({
            data: {
                title: 'Modal标题',
                content: 'Modal内容'
            }
        });
    }
});
```

#### Alert

<div class="m-example"></div>

```xml
<button class="u-btn u-btn-error" on-click={this.show()}>Alert</button>
```

```javascript
var component = new RGUI.Component({
    template: template,
    show: function() {
        RGUI.Modal.alert('Alert内容');
    }
});
```

#### Confirm

<div class="m-example"></div>

```xml
<button class="u-btn u-btn-success" on-click={this.show()}>Confirm</button>
```

```javascript
var component = new RGUI.Component({
    template: template,
    show: function() {
        RGUI.Modal.confirm('Confirm内容');
    }
});
```

#### 事件

<div class="m-example"></div>

```xml
<button class="u-btn u-btn-primary" on-click={this.show()}>Modal</button>
```

```javascript
let component = new RGUI.Component({
    template: template,
    show() {
        let modal = new RGUI.Modal({
            data: {
                title: 'Modal标题',
                content: 'Modal内容',
                cancelButton: ''
            }
        }).$on('close', () => console.log('close'))
          .$on('ok', () => console.log('ok'))
          .$on('cancel', () => console.log('cancel'));
    }
});
```
