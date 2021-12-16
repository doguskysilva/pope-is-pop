import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  it('should display header text', () => {
    const msg = 'Hello Vue 3'
    const wrapper = shallowMount(HelloWorld, { props: { msg }, stubs: ['router-link'] })

    expect(wrapper.find('h1').text()).toMatch(msg)
  })
})