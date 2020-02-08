<template>
    <div class="menu-list-item">
        <router-link :to="{name: route}" >{{name}}</router-link>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            required: true
        },
        route: {
            required: true
        }
    }
}
</script>