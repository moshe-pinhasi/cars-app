<template>
    <nav class="side-menu" :class="{'clipped': clipped}">
        <button @click="toggleMenu">click me</button>
        <slot />
    </nav>
</template>

<script>
export default {
    props: {
        clipped: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods: {
        toggleMenu() {
            this.$emit('toggle-menu')
        }
    }
}
</script>
<style lang="scss" scoped>
.side-menu {
    background-color: green;
    width: 200px;
    position: fixed;
    height: 100vh;
    display: flex;
    flex-direction: column;
    z-index: 999;

    transform: translateX(0);
    transition: 0.3s transform;
}

.clipped {
    transform: translateX(-140px)
}
</style>
