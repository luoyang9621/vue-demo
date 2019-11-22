export default {
    listObj(state, rootState) {
        return rootState.moduleA.list.map(e => Object.assign({}, { name: '和' }, e));
    },
}