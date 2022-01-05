import {ref, computed, onMounted, onUnmounted, watchEffect} from 'vue'
export function useTodos() {
    let title = ref('')
    let todos = useStorage('todos', [])

    function addTodo() {
        todos.value.push({
            title: title.value,
            done: false
        })
        title.value = ''
    }

    let all = computed(() => todos.value.length)
    let allDone = computed({
        get() {
            return active === 0
        },
        set(value) {
            todos.value.forEach(todo => {
                todo.done = value
            })
        }
    })
    let active = computed(() => {
        return todos.value.filter(v => v.done).length
    })

    function clear() {
        todos.value = todos.value.filter(v => !v.done)
    }
    return { title, all, allDone, active, clear, todos, addTodo }
}

export function useMouse() {
    const x = ref(0)
    const y = ref(0)

    function update(e) {
        x.value = e.pageX
        y.value = e.pageY
    }

    onMounted(() => {
        window.addEventListener('mousemove', update)
    })

    onUnmounted(() => {
        window.removeEventListener('mousemove', update)
    })

    return {x,y}
}

function useStorage(key, value=[]) {
    let data = ref(JSON.parse(localStorage.getItem(key) || '[]'))
    watchEffect(() => {
        localStorage.setItem(key, JSON.stringify(data.value))
    })
    return data
}