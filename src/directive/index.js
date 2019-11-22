import { permission } from './permission';

export default {
    myFocus: {
        bind: function (el, binding, vnode) {
            console.log('bind', el, binding, vnode);
        },
        inserted: function (el, binding, vnode) {
            console.log('insert', 222, binding);
            // el.parentNode.removeChild(el);
            el.className = el.className ? el.className + ' v-my-focus' : 'v-my-focus';
            const comment = document.createComment('');
            el.parentNode.replaceChild(comment, el);
            document.body.appendChild(el);
        },
        update: function (el) {

        },
        componentUpdated: function () {

        },
        unbind: function () {

        },
    },
    permission,
}