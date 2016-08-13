import { Component } from 'rgui-ui-base';
import template from './index.rgl';

/**
 * @class Lightbox
 * @extend Component
 * @param {object}                  options.data                     =  绑定属性
 * @param {string='提示'}           options.data.title               => 灯箱标题
 * @param {string=''}               options.data.contentTemplate    @=> 灯箱内容模板，用于支持复杂内容的自定义。
 * @param {string=''}               options.data.class               => 补充class
 */
const Lightbox = Component.extend({
    name: 'lightbox',
    template,
    /**
     * @protected
     * @override
     */
    config() {
        this.data = Object.assign({
            title: '标题',
            contentTemplate: '',
        }, this.data);
        this.supr();
    },
    /**
     * @protected
     * @override
     */
    init() {
        this.supr();

        // 如果不是内嵌组件，则嵌入到document.body中
        if (this.$root === this)
            this.$inject(document.body);
    },
    /**
     * @method close() 关闭灯箱
     * @public
     * @return {void}
     */
    close() {
        /**
         * @event close 关闭灯箱时触发
         * @property {object} sender 事件发送对象
         */
        this.$emit('close', {
            sender: this,
        });

        this.destroy();
    },
});

export default Lightbox;
