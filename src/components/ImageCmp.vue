<template>
    <img :src="require(`../assets/imgs/cars/${name}.png`)" :width="width" :height="height"/>
</template>
<script>
export default {
    props: {
        name: {
            type: String | Number,
            required: true
        },
        width: {
            type: String | Number,
            required: false,
            default: '100%'
        },
        height: {
            type: String | Number,
            required: false,
            defualt: '100%'
        }
    }
}
</script>