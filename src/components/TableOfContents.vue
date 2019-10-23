<template>
    <div class=wrapper @mouseenter="onHover" @mouseleave="onHoverOff">
        <column class="hover-helper" v-bind:class="{hovered:hoverOn}" align-h=left>
            <column class=my-reference-card v-bind:class="{hovered:hoverOn}" align-h=left shadow=2 background-color=white >
                <column align-h=left>
                    <slot />
                </column>
                <div class=rotate-90>Table of Contents</div>
            </column>
        </column>
    </div>
</template>

<script>
export default {
    data: ()=>({
        hoverOn: true,
    }),
    mounted() {
        // show the element as hovered for the first second
        setTimeout(()=>{
            this.hoverOn = false
        }, 1000)
    },
    methods: {
        onHover() {
            this.hoverOn = true
        },
        onHoverOff() {
            this.hoverOn = false
        }
    }
}
</script>

<style scoped>
    .wrapper {
        display: flex;
        margin-top: 2rem;
    }
    .rotate-90 {
        transform: translateX(9rem) translateY(-4.2rem) rotate(90deg);
    }
    .my-reference-card {
        border-radius: .5rem;
        width: var(--reference-width);
        padding: 1rem 2rem;
        transition-property: all;
        transition-duration: 0.5s;
        transition-timing-function: ease-out;
        position: relative;
        left: var(--no-hover-reference-position);
    }
    .my-reference-card.hovered {
        left: 0;
        margin-left: var(--hover-out-distace);
    }
    .hover-helper {
        width: var(--total-hover-out-width);
        position: fixed;
        left: 0;
    }
    @media only screen and (max-width: 768px) {
        .my-reference-card {
            left: var(--mobile-no-hover-reference-position);
        }
        .my-reference-card.hovered {
            margin-left: var(--within-padding-bounds);
        }
        .my-content {
            width: fit-content;
            padding: 0;
        }
        >>> ul {
            padding-left: 1em;
        }
        
    }
</style>