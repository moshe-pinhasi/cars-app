<template>
    <section class="side-menu">
        <slot />
    </section>
</template>

<style lang="scss" scoped>
.side-menu {
//   position: fixed;
//   width: 20rem;
//   height: 100vh;
    background-color: green;
    width: 200px;
    position: fixed;
    // top: 0;
    // left: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    z-index: 999;
    // box-sizing: border-box;
    // width: 100%;
    // text-align: left;
    // transition: 0.3s max-width;
}
</style>
