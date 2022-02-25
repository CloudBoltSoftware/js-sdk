import { AttributesBuilder } from './AttributesBuilder'

describe('AttributesBuilder', () => {
  it('build returns the list of attributes if defined', () => {
    const attrBuilder = new AttributesBuilder()
    attrBuilder.addAdditionalAttributes('pk')

    const attributes = attrBuilder.build()

    expect(attributes).toBe('attributes=pk')
  })

  it('build returns undefined attributes not defined', () => {
    const attrBuilder = new AttributesBuilder()

    const attributes = attrBuilder.build()

    expect(attributes).toBe('')
  })

  it('addAdditionalAttributes adds multipe attributes', () => {
    const attrBuilder = new AttributesBuilder()
    attrBuilder.addAdditionalAttributes('id')
    attrBuilder.addAdditionalAttributes('group')

    const attributes = attrBuilder.build()

    expect(attributes).toBe('attributes=id,group')
  })
})
