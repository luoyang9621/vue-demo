import axios from '@/axios';
import { Toast } from "vant";

export default {
    async commitList({ commit }) {
        const load = Toast.loading();
        return new Promise((resolve) => {
            setTimeout(() => {
                commit('changeKeepAliveList', ['demo2']);
                load.close();
                resolve();
            }, 2000);
        });
    },
    actionUpdatePermission({ commit }) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const list = [
                    'home', 'my', 'addList', 'clear'
                ];
                commit('updatePermission', list);
                resolve();
            }, 20);
        })
    }
}