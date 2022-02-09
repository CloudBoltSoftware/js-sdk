export class AttributesBuilder {
  attributes

  addAdditionalAttributes(attributes) {
    this.attributes = attributes
    return this
  }

  build() {
    return this.attributes ? `attributes=${this.attributes}` : undefined
  }
}
