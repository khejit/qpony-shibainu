import Vue from 'vue';
import Vuex from 'vuex';
import uuid from 'uuid';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		chibas: [],
		isLoading: false,
	},
	getters: {
		favChibas: state => state.chibas.filter(chiba => chiba.isFav),
		chibaIndexById: state => id => state.chibas.findIndex(chiba => chiba.id === id),
	},
	mutations: {
		addChibas(state, payload) {
			payload.newChibas.forEach(chiba => {
				const id = uuid.v4();
				state.chibas.push({
					id,
					image: chiba,
					isFav: false
				});
			});
		},
		turnOffLoading(state) {
			state.isLoading = false;
		},
		turnOnLoading(state) {
			state.isLoading = true;
		},
		setChibaIsFav(state, payload) {
			state.chibas[payload.index].isFav = payload.val;
			// Vue.set(state.chibas, payload.index, payload.val);
		},
	},
	actions: {
		toggleChibaFav({ commit, state, getters }, id) {
			const index = getters.chibaIndexById(id);
			commit('setChibaIsFav', {
				index,
				val: !state.chibas[index].isFav,
			});
		}
	},
});
