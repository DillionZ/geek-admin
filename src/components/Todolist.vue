<template>
    <div>
        <h1 @click="add"> {{count}}</h1>
        <h2 @click="add1">{{ count1}}</h2>
        <input type="text" v-model="title" @keydown.enter="addTodo">
        <button v-if="active < all" @click="clear">清除</button>

        <ul v-if="todos.length">
            <li v-for="item in todos" :key="item.title">
                <input type="checkbox" v-model="item.done">
                <span :class="{done: item.done}">{{ item.title }}</span>
            </li>
        </ul>
        <div v-else>
            暂无数据
        </div>

        <div>
            全选
            <input type="checkbox" v-model="allDone">
            <span>{{ active }} / {{ all }}</span>
        </div>

        <div>
            x: {{ x }}
            y: {{ y }}
        </div>
    </div>
</template>

<script setup>
import { ref , computed } from 'vue'
import { useTodos, useMouse } from '../assets/js/utils'
import { useStore } from 'vuex'

let count = ref(1)
let color = ref('red')
function add() {
    count.value++
    color.value = Math.random() > 0.5 ? 'blue': 'red'
}

// ----------vuex--------
let store = useStore()
let count1 = computed(() => store.state.count)

function add1() {
    store.commit('add')
}

let { title, all, allDone, active, clear, todos, addTodo } = useTodos()
let { x, y } = useMouse()
</script>

<style >
    h1 {
        color: v-bind(color);
    }
    .done {
        color: gray;
        text-decoration: line-through;
    }
</style>