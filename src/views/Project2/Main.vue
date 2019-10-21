<template>
    <row align-h=left align-v=top class=my-container width=100vw>
        <!-- Content -->
        <div class=my-center-spacer></div>
        <column class=my-content align-h=left flex-grow=3>
            <!-- Task Allocation -->
            <markdown id=task-allocation>
                # Task Allocation
                <br>
                <br>**Thomas McDonald:** 
                <br>**Jon Williamson:** Handle equations
                <br>**Jeff Hykin:** Website development, link code
                <br>**Alejandro Londono:** 
                <br>**Mitchell Eldridge:** 
            </markdown>
            <div class=my-v-spacer></div>
            <!-- Meeting Log -->
            <markdown id=meeting-log>
                # Meeting Log
                
                
                #### Meeting 1
                - 1. Discuss Website Choices 
                 - Thomas: The main website should be very static as it is primarily a directory. 
                
            </markdown>
            <div class=my-v-spacer></div>
            <!-- Source Code -->
            <markdown id=source-code>
                # Source Code
                <a target="_blank" href="https://github.tamu.edu/FullMetalKinematics/Project2">View it here</a>
            </markdown>
            <div class=my-v-spacer></div>
            <!-- How to Compile and Run -->
            <markdown id=how-to-compile-and-run>
                # How to Compile and Run
                <br>
                <br>
                #### Required Technologies
                - Python 3
                - Pip 3

                #### Installing Dependencies
                `pip install -r requirements.txt`
                > In the projects directory

                #### Running the Program
                `python main.py`
                
                <br>
                <br>
            </markdown>
            <div class=my-v-spacer></div>
            <!-- Screenshots -->
            <markdown id=screenshots>
                # Screenshots
                <br>
                <br>
                <!-- <img width="1362" alt="image1" src="https://user-images.githubusercontent.com/17692058/66019087-68c62c00-e4a7-11e9-90e6-c347ebdfa31f.png"> -->
            </markdown>
            <div class=my-v-spacer></div>
            <!-- Report -->
            <markdown id=report>
                # Report
                <!-- <a target="_blank" href="https://drive.google.com/open?id=0Bz6cPkDulveZdHcweGo0U2xKV1lwNUhhd09QVVM0QW42My1J">View it here</a> -->
            </markdown>
        </column>
        <div class=my-center-spacer></div>
        <!-- The Reference Card -->
        <div @mouseenter="onHover" @mouseleave="onHoverOff" style="display: flex; margin-top: 2rem;">
            <column class="hover-helper" v-bind:class="{hovered:hoverOn}" align-h=left>
                <column class=my-reference-card v-bind:class="{hovered:hoverOn}" align-h=left shadow=2 background-color=white >
                    <column align-h=left>
                        <a href="#task-allocation">Team Task Allocation</a>
                        <a href="#meeting-log">Meeting Log</a>
                        <a target="_blank" href="https://github.tamu.edu/FullMetalKinematics/Project2">Source Code</a>
                        <a href="#how-to-compile-and-run">How to Compile/Run</a>
                        <a href="#screenshots">Screenshots</a>
                        <!-- <a target="_blank" href="https://drive.google.com/open?id=0Bz6cPkDulveZdHcweGo0U2xKV1lwNUhhd09QVVM0QW42My1J">Report</a> -->
                    </column>
                    <h6 style='transform: translateX(9rem) translateY(-4.2rem) rotate(90deg);'>Table of Contents</h6>
                </column>
            </column>
        </div>
    </row>
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
<style scoped lang="css">
    .my-container {
        --page-padding: 3rem;
        --within-padding-bounds: calc(var(--page-padding) / 2);
        --hover-out-distace: 4rem;
        --reference-width: 17rem;
        --negative-reference-width: calc(var(--reference-width) * -1);
        --total-hover-out-width: calc(var(--reference-width) + var(--hover-out-distace));
        --no-hover-reference-position: calc(var(--negative-reference-width) * 0.79);
        --mobile-no-hover-reference-position: calc(var(--negative-reference-width) + var(--within-padding-bounds));
        padding: 2rem var(--page-padding);
    }
    .my-content {
        padding: 2rem 3rem;
        width: 50rem;
        flex-shrink: 0;
    }
    .my-v-spacer {
        height: 2rem;
    }
    .my-center-spacer {
        flex-grow: 2;
        flex-shrink: 2;
        width: 50vw;
        min-width: 0;
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