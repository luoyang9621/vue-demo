import Store from './../store';

console.log('============', Store);

export const permission = {
  bind: function (el, binding, vnode) {
      console.log(el, binding);
  },
  inserted(el, binding, vnode) {
    console.log(222, Store.state.moduleB.permissionList);
    if (!Store.state.moduleB.permissionList.includes(binding.value)) {
      const comment = document.createComment('');
      el.parentNode.replaceChild(comment, el);
    }
  },
  update(el) {

  },
  componentUpdated() {

  },
  unbind() {

  },
};
