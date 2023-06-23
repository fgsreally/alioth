import { $RW } from 'alioth-dev/helper'
import HW from './components/HelloWorld.vue'
export function change() {
  console.log(true)
}

$RW('lib', 'a', HW, {})

export function change2() {
  console.log(true)
}

export const a = 300
