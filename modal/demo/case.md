## 示例
### Disabled的使用

<div class="m-example"></div>

```xml
<button class="u-btn u-btn-primary" on-click={this.show()}>Modal</button>
```

```javascript
const FormModal = RGUI.Modal.extend({
    config() {
        this.data = Object.assign({
            username: '',
            password: '',
            contentTemplate:
`<input class="u-input" r-model={username} />
<input class="u-input" r-model={password} />`,
        }, this.data);
        this.supr();
        this.watch();
    },
    computed: {
        canSubmit() {
            return this.data.username && this.data.password;
        },
    },
    watch() {
        this.$watch(['username', 'password'], () => {
            this.data.disabled = !this.$get('canSubmit');
        });
    },
});

let component = new RGUI.Component({
    template,
    show() {
        let modal = new FormModal();
    }
});
```
