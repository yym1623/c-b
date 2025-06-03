import { defineStore } from 'pinia'

interface CounterState {
  count: number
  name: string
}

export const useCountStore = defineStore('count', {
  // 상태 - 보통 콜백으로 생성인지 그냥으로 생성해서 따로 설정이 있는건지 확인 -> 그냥과 콜백 생성때의 둘 차이도 확인하기
  state: (): CounterState => ({
    count: 0,
    name: 'Counter'
  }),

  getters: {
    // 첫번째 인자만 상태(데이터) -> 나머진 인자 상관없이 this로 접근
    doubleCount: (state) => state.count * 2,
    countWithName: (state) => `${state.name}: ${state.count}`
  },

  actions: {
    // 인자 상관없이 다 this로 접근
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    // 보통 reset메소드도 따로 없어서 만들어서 사용 -> $붙여서 전역처럼 쓰는거 등등 마음대로 사용가능
    reset() {
      this.count = 0
    },
    setCount(value: number) {
      if (typeof value !== 'number') {
        throw new Error('Value must be a number')
      }
      this.count = value
    },
    setName(newName: string) {
      this.name = newName
    }
  }
})