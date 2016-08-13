用来预览图片、播放视频、展示幻灯片等。

## 示例
### 基本形式

灯箱默认无大小，完全由内容撑开。

<div class="m-example"></div>

```xml
<button class="u-btn u-btn-info" on-click={this.showImage()}>图片预览</button>
<button class="u-btn u-btn-success" on-click={this.showVideo()}>播放视频</button>
```

```javascript
let component = new RGUI.Component({
    template,
    showImage() {
        let modal = new RGUI.Lightbox({
            data: {
                title: '图片预览',
                contentTemplate: `<img src="http://d.lanrentuku.com/down/js/jiaodiantu-1135/images/3.jpg" />`,
            },
        });
    },
    showVideo() {
        let modal = new RGUI.Lightbox({
            data: {
                title: '播放视频',
                contentTemplate: 
`<video controls style="width: 640px; height: 360px; display: block;"
    poster="http://www.html5videoplayer.net/poster/big_buck_bunny.jpg"
    src="http://www.html5videoplayer.net/videos/big_buck_bunny.mp4"></video>`,
            },
        });
    },
});
```
