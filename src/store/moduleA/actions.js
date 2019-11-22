import axios from '@/axios';

export default {
    actionUpdateList({ commit }) {
        const data = {
            mobile: '13799998888',
            code: '123456',
        };
        return new Promise((resolve) => {
            // axios.post('/index/smslogon',
            //     data
            // ).then((res) => {
            //     commit('upDateList', [1, 9, 3]);
            //     resolve();
            // });
            setTimeout(() => {
                commit('upDateList', [1, 9, 3]);
                resolve();
            }, 2000);
        });
    },
    actionUpdatePermission({ commit }) {
        commit('updateP2', 'p2p2p2p');
    }
}