import {Component, _} from 'rgui-base';
import template from './index.rgl';

/**
 * @class Modal
 * @extend Component
 * @param {object}                  options.data                     =  绑定属性 | Binding Properties
 * @param {string='提示'}           options.data.title               => 对话框标题 | Title of Dialog
 * @param {string=''}               options.data.content             => 对话框内容
 * @param {string=''}               options.data.contentTemplate     => 对话框内容模板，用于支持复杂内容的自定义。
 * @param {string|boolean=true}     options.data.okButton            => 是否显示确定按钮。值为`string`时显示该段文字。
 * @param {string|boolean=false}    options.data.cancelButton        => 是否显示取消按钮。值为`string`时显示该段文字。
 * @param {string=''}               options.data.class               => 补充class
 */
let Modal = Component.extend({
    name: 'modal',
    template: template,
    /**
     * @protected
     */
    config() {
        this.data = Object.assign({
            title: '提示',
            content: '',
            contentTemplate: '',
            okButton: '确定',
            cancelButton: '取消'
        }, this.data);
        this.supr();
    },
    /**
     * @protected
     */
    init() {
        this.supr();

        // 如果不是内嵌组件，则嵌入到document.body中
        if(this.$root === this)
            this.$inject(document.body);
    },
    /**
     * @method close() 关闭对话框
     * @public
     * @return {void}
     */
    close() {
        /**
         * @event close 关闭对话框时触发
         * @property {object} sender 事件发送对象
         */
        this.$emit('close', {
            sender: this
        });

        this.destroy();
    },
    /**
     * @method ok() 确定对话框
     * @public
     * @return {void}
     */
    ok() {
        /**
         * @event ok 确定对话框时触发
         * @property {object} sender 事件发送对象
         */
        this.$emit('ok', {
            sender: this
        });

        this.close();
    },
    /**
     * @method cancel() 取消对话框
     * @public
     * @return {void}
     */
    cancel() {
        /**
         * @event cancel 取消对话框时触发
         * @property {object} sender 事件发送对象
         */
        this.$emit('cancel', {
            sender: this
        });

        this.close();
    }
});

/**
 * @method alert(content[,title]) 弹出一个alert对话框。关闭时始终触发确定事件。
 * @static
 * @public
 * @param  {string=''} content 对话框内容
 * @param  {string='提示'} title 对话框标题
 * @return {Modal} modal 返回该对话框
 */
Modal.alert = function(content, title = '提示', okButton = '确定') {
    let modal = new this({
        data: {content, title, okButton, cancelButton: ''}
    });

    return modal;
}

/**
 * @method confirm(content[,title]) 弹出一个confirm对话框
 * @static
 * @public
 * @param  {string=''} content 对话框内容
 * @param  {string='提示'} title 对话框标题
 * @return {Modal} modal 返回该对话框
 */
Modal.confirm = function(content, title = '提示', okButton = '确定', cancelButton = '取消') {
    let modal = new this({
        data: {content, title, okButton, cancelButton}
    });

    return modal;
}

export default Modal;
