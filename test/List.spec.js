import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import Navigation from '@/components/Navigation.vue'

describe('Navigation.vue', () => {
  it('renders li for each item in props.items', () => {
    const items = ['', '']
    const wrapper = shallow(Navigation, {
      propsData: { items }
    })
    expect(wrapper.findAll('li')).toHaveLength(items.length)
  })

  it('matches snapshot', () => {
    const items = ['item 1', 'item 2']
    const renderer = createRenderer()
    const wrapper = shallow(Navigation, {
      propsData: { items }
    })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
