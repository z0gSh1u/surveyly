import { Cell, Shape } from '@antv/x6'

export default class _BaseWidget extends Cell {
  constructor() {
    super({
      shape: 'rect',
    })
  }
}
