<template>
    <nav class="side-menu" :class="{'clipped': clipped}">
        <button @click="toggleMenu">click me</button>
        <div class="side-menu-content">
            <slot />
        </div>
        
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
    background-color: $color-green-light-1;
    color: $color-white-light-1;
    width: 20rem;
    position: fixed;
    height: 100vh;
    display: flex;
    flex-direction: column;
    z-index: 999;
    overflow: hidden;
    transform: translateX(0);
    transition: 0.3s transform;

    h1 {
        color: $color-grey-light-1;
    }
}

.clipped {
    transform: translateX(-13rem);

    .side-menu-content {
        transform: translateX(13rem);
    }
}

.side-menu-content {
    overflow: hidden;
    transform: translateX(0);
    transition: 0.3s transform;
}

</style>
