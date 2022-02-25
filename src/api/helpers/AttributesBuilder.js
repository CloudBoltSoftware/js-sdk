const ATTRIBUTES = 'attributes'
export class AttributesBuilder {
  attributes = []

  addAdditionalAttributes(attribute) {
    this.attributes.push(attribute)
    return this
  }

  build() {
    return this.attributes.length
      ? `${ATTRIBUTES}=${this.attributes.join(',')}`
      : ''
  }
}
