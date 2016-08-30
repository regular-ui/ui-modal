import { Component } from 'rgui-ui-base';
import template from './index.rgl';

/**
 * @class Modal
 * @extend Component
 * @param {object}                  options.data                     =  绑定属性
 * @param {string='提示'}           options.data.title               => 模态框标题
 * @param {string=''}               options.data.content             => 模态框内容
 * @param {string=''}               options.data.contentTemplate    @=> 模态框内容模板，用于支持复杂内容的自定义。
 * @param {string='确定'}           options.data.okButton            => 确定按钮的文字，如果为空则不显示。
 * @param {string='取消'}           options.data.cancelButton        => 取消按钮的文字，如果为空则不显示。
 * @param {boolean=false}           options.data.disabled            => 是否禁用。禁用时，确定按钮不可点。
 * @param {string=''}               options.data.class               => 补充class
 */
const Modal = Component.extend({
    name: 'modal',
    template,
    /**
     * @protected
     * @override
     */
    config() {
        this.defaults({
            title: '提示',
            content: '',
            contentTemplate: '',
            okButton: '确定',
            cancelButton: '取消',
        });
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
     * @method close() 关闭模态框
     * @public
     * @return {void}
     */
    close() {
        /**
         * @event close 关闭模态框时触发
         * @property {object} sender 事件发送对象
         */
        this.$emit('close', {
            sender: this,
        });

        this.destroy();
    },
    /**
     * @method ok() 确定模态框
     * @public
     * @return {void}
     */
    ok() {
        // 禁用时，确定按钮不可点。
        if (this.data.disabled)
            return;

        /**
         * @event ok 确定模态框时触发
         * @property {object} sender 事件发送对象
         */
        this.$emit('ok', {
            sender: this,
        });

        this.close();
    },
    /**
     * @method cancel() 取消模态框
     * @public
     * @return {void}
     */
    cancel() {
        /**
         * @event cancel 取消模态框时触发
         * @property {object} sender 事件发送对象
         */
        this.$emit('cancel', {
            sender: this,
        });

        this.close();
    },
});

/**
 * @method alert(content[,title]) 弹出一个alert模态框。关闭时始终触发确定事件。
 * @static
 * @public
 * @param  {string=''} content 模态框内容
 * @param  {string='提示'} title 模态框标题
 * @return {Modal} modal 返回该模态框
 */
Modal.alert = function (content, title = '提示', okButton = '确定') {
    const modal = new this({
        data: { content, title, okButton, cancelButton: '' },
    });

    return modal;
};

/**
 * @method confirm(content[,title]) 弹出一个confirm模态框
 * @static
 * @public
 * @param  {string=''} content 模态框内容
 * @param  {string='提示'} title 模态框标题
 * @return {Modal} modal 返回该模态框
 */
Modal.confirm = function (content, title = '提示', okButton = '确定', cancelButton = '取消') {
    const modal = new this({
        data: { content, title, okButton, cancelButton },
    });

    return modal;
};

export default Modal;
