import { AttributesBuilder } from './AttributesBuilder'

describe('AttributesBuilder', () => {
  it('build returns the list of attributes if defined', () => {
    const attrBuilder = new AttributesBuilder()
    attrBuilder.addAdditionalAttributes('test')

    const attributes = attrBuilder.build()

    expect(attributes).toBe('attributes=test')
  })

  it('build returns undefined attributes not defined', () => {
    const attrBuilder = new AttributesBuilder()

    const attributes = attrBuilder.build()

    expect(attributes).toBeUndefined()
  })

  it('addAdditionalAttributes replaces the attributes', () => {
    const attrBuilder = new AttributesBuilder()
    attrBuilder.addAdditionalAttributes('test')
    attrBuilder.addAdditionalAttributes('replaced')

    const attributes = attrBuilder.build()

    expect(attributes).toBe('attributes=replaced')
  })
})
