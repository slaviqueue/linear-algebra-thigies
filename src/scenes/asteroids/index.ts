import { Canvas } from '../../engine/canvas/canvas'
import { Loop } from '../../engine/loop/loop'
import { Vector } from '../../engine/primitives/vector'
import { Rock } from './rock'
import { Ship } from './ship'

const width = 500
const height = 500
const canvas = new Canvas('#canvas', { width, height })
const loop = Loop.make(canvas)
loop.start()

window.world.instantiate(new Ship(new Vector(width / 2, height / 2)))
Array(10).fill(null).forEach(() => window.world.instantiate(new Rock()))
