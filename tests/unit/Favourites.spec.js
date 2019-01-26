import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Favourites from '@/views/Favourites';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter();

describe('Favourites.vue', () => {
	let getters;

	beforeEach(() => {
		getters = {
			favChibas: state => state.chibas.filter(chiba => chiba.isFav)
		};
	});

	it('shows notification if there is no chibas', () => {
		const store = new Vuex.Store({
			state: {
				chibas: [],
			},
			getters
		});

		const wrapper = shallowMount(Favourites, { localVue, store, router }),
			notification = wrapper.find('.notification');

		expect(notification).to.exist;
	});

	it("doesn't show notification if there is at least one chiba", () => {
		const store = new Vuex.Store({
			state: {
				chibas: [
					{
						index: 'asd2323',
						image: 'asd',
						isFav: true
					},
				],
			},
			getters
		});

		const wrapper = shallowMount(Favourites, { localVue, store, router }),
			notification = wrapper.find('.notification');

		return Vue.nextTick().then(function() {
			expect(notification.exists()).to.be.false;
		});
	});
});
