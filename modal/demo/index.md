含有遮罩层的对话框，用于模拟浏览器的`alert`、`confirm`和`prompt`。

模态框通过遮罩层来阻止用户的其他行为。

## 示例
### 基本形式

<div class="m-example"></div>

```xml
<button class="u-btn u-btn-primary" on-click={this.show()}>Modal</button>
```

```javascript
let component = new RGUI.Component({
    template,
    show() {
        let modal = new RGUI.Modal({
            data: {
                title: 'Modal标题',
                content: 'Modal内容',
            },
        });
    },
});
```

### Alert

<div class="m-example"></div>

```xml
<button class="u-btn u-btn-error" on-click={this.show()}>Alert</button>
```

```javascript
let component = new RGUI.Component({
    template,
    show() {
        RGUI.Modal.alert('Alert内容');
    },
});
```

### Confirm

<div class="m-example"></div>

```xml
<button class="u-btn u-btn-success" on-click={this.show()}>Confirm</button>
```

```javascript
let component = new RGUI.Component({
    template,
    show() {
        RGUI.Modal.confirm('Confirm内容');
    },
});
```

### Disabled

设置`disabled`为`true`，可以禁用确定按钮。

<div class="m-example"></div>

```xml
<button class="u-btn u-btn-warning" on-click={this.show()}>Modal</button>
```

```javascript
let component = new RGUI.Component({
    template,
    show() {
        let modal = new RGUI.Modal({
            data: {
                title: 'Modal标题',
                content: 'Modal内容',
                disabled: true
            },
        });
    },
});
```

### 事件

请打开浏览器的控制台查看结果。

<div class="m-example"></div>

```xml
<button class="u-btn u-btn-primary" on-click={this.show()}>Modal</button>
```

```javascript
let component = new RGUI.Component({
    template,
    show() {
        let modal = new RGUI.Modal({
            data: {
                title: 'Modal标题',
                content: 'Modal内容',
                cancelButton: '',
            },
        }).$on('close', () => console.log('on-close'))
          .$on('ok', () => console.log('on-ok'))
          .$on('cancel', () => console.log('on-cancel'));
    },
});
```
