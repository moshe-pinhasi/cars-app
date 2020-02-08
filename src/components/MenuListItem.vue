<template>
    <div class="menu-list-item">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.menu-list-item:not(:last-child) {
    margin-bottom: 10px;
}
</style>