<template>
    <nav class="side-menu" :class="{'clipped': clipped}">
        <MenuList>
            <MenuListItem>
                <div class="u-flex u-flex-justify-end">
                    <div class="toggle-btn-container" @click="toggleMenu">
                        <Icon name="arrow" width="30px" class="toggle-btn" />
                    </div>
                </div>
            </MenuListItem>
        </MenuList>

        <div class="side-menu-content">
            <slot />
        </div>
        
    </nav>
</template>

<script>
import Icon from './Icon'
import MenuList from './MenuList'
import MenuListItem from './MenuListItem'

export default {
    components: {
        Icon,
        MenuList,
        MenuListItem
    },
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
    width: 20rem;
    height: 100vh;
    padding: 15px 0 0 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 999;
    overflow: hidden;
    transform: translateX(0);
    transition: 0.3s transform;
    background-color: $color-green-light-1;
    color: $color-white-light-1;

    h1 {
        color: $color-grey-light-1;
    }
}

.clipped {
    transform: translateX(-13rem);

    .side-menu-content {
        transform: translateX(13rem);
    }

    .toggle-btn {
        transform: rotate(0);    
    }
}

.side-menu-content {
    overflow: hidden;
    transform: translateX(0);
    transition: 0.3s transform;
}

.toggle-btn-container {
    display: inline-block;
}

.toggle-btn {
    cursor: pointer;
    transform: rotate(-180deg);
    transition: 0.7s transform;   
}

</style>
