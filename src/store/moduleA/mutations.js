export default {
    upDateList(state, val) {
      // console.log('mutations', state, val);
      state.list = val;
    },
    changeDirection(state, val) {
        state.animateDirection = val;
    },
    changeHistory(state, val) {
      state.historyList = val;
    },
    updateP2(state, val) {
        state.p2 = val;
    }
}