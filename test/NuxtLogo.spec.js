import { mount } from '@vue/test-utils'

import NuxtTestSample from '@/components/NuxtTestSample.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtTestSample)

    expect(wrapper.vm).toBeTruthy()
  })
})
