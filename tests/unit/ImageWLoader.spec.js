import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ImageWloader from '@/components/ImageWLoader';

describe('ImageWLoader.vue', () => {
    it('has loaded data property set to true after load event on img', () => {
        const wrapper = shallowMount(ImageWloader, {
            propsData: {
                src: 'https://images.dog.ceo/breeds/shiba/shiba-3i.jpg'
            }
        });

        wrapper.find('img').trigger('load');

        expect(wrapper.vm.loaded).to.be.true;
    })
})