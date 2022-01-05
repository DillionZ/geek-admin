
<template>
    <div>
        <h1>这是关于页面</h1>
        <CustomAni v-model="score"/>
        {{score}}
        <!-- <CustomAni :value="1" theme='red'/>
        <CustomAni :value="5" theme='green'/> -->


        <!-- 动画 -->
        <div>
            <transition name="fade">
                <h1 v-show="showTitle">klasjdflkj</h1>
            </transition>
            <button @click="showTitle = !showTitle">点击</button>
        </div>
        
    </div>
</template>

<script setup>
import CustomAni from '../components/CustomAni.vue';
import {ref, defineProps} from 'vue'
let score = ref(3)
let showTitle = ref(false)
function update(num) {
    score.value = num
}
// let props = defineProps({
//     modelValue: Number,
//     theme: {

//     }
// })
</script>


<style scoped>
    .fade-enter-active,.fade-leave-active { transition: opacity 0.5s linear;}.fade-enter-from,.fade-leave-to { opacity: 0;}
</style>