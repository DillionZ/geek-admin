<template>
    <div :style="fontstyle">
        <div class='rate' @mouseout="mouseOut">
            <span @mouseover="mouseOver(num)" v-for='num in 5' :key="num">☆</span>
            <span class="hollow" :style="fontwidth" >
                <span @mouseover="mouseOver(num)" @click="onRate(num)" v-for="num in 5" :key="num">★</span>
            </span>
        </div>
        <!-- {{ star1 }} -->
    </div>
</template>

<script setup>
import {ref, computed, defineProps, defineEmits} from 'vue'
let star = ref('★★★★★☆☆☆☆☆')

let props = defineProps({
    modelValue: Number,
    theme: {
        type: String,
        default: 'orange'
    }
})
let star1 = computed(() => 
    star.value.slice(5- props.value, 10 - props.value)
)
let themeobj = {
    'black': '#000',
    'white': '#fff',
    'red': '#f5222d',
    'orange': '#fa541c',
    'yellow': '#fadb14',
    'green': '#73d13d',
    'blue': '#40a9ff'
}

const fontstyle = computed(() => {
    return `color: ${themeobj[props.theme]}`
})

let width = ref(props.modelValue)
function mouseOut() {
    width.value = props.modelValue
}

function mouseOver(i) {
    width.value = i
}

const fontwidth = computed(() => `width: ${width.value}em`)

let emits = defineEmits(['update:modelValue'])
function onRate(num) {
    console.log(num)
    emits('update:modelValue', num)
}
</script>

<style scoped>
    .rate {
        position: relative;
        display: inline-block;
    }
    .hollow {
        position: absolute;
        left: 0;
        top: 0;
        width: 0;
        overflow: hidden;
    }
</style>