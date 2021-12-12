import { Canvas } from '../../canvas/canvas'
import { Loop } from '../../loop/loop'
import { Vector } from '../../vector/vector'
import { Rock } from './rock'
import { Ship } from './ship'

const width = 500
const height = 500
const canvas = new Canvas('#canvas', { width, height })
const loop = Loop.make(canvas)
loop.start()

loop.addObject(new Ship(new Vector(width / 2, height / 2)))
loop.addObject(new Rock())
