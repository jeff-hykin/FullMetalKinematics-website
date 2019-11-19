<template>
    <row align-h=left align-v=top class=my-container width=100vw>
        <!-- Content -->
        <div class=my-center-spacer></div>
        <column class=my-content align-h=left flex-grow=3>
            <!-- Task Allocation -->
            <markdown id=task-allocation>
                # Task Allocation
                <br>
                <br>**Thomas McDonald:** Website development, project setup, and code development
                <br>**Jon Williamson:** Equation Derivation, code modification
                <br>**Jeff Hykin:** Code development, project setup
                <br>**Alejandro Londono:** Code development
                <br>**Mitchell Eldridge:** Code development
            </markdown>
            <div class=my-v-spacer></div>
            <!-- Meeting Log -->
            <markdown id=meeting-log>
                # Meeting Log
                
                
                #### Meeting 1
                - 1. Discuss what has been done
                  - Thomas: I began the base GUI. I thought it might be useful to be able to drag the different panels, so I built in that implementation.
                  - Jeff: I have built the base Vue app for the website.
                  - Jon: I have derived the mathematical description of the motion of the car. 

                - 2. Discuss Next Steps
                  - Thomas: I will add more implementation.
                  - Jeff: I will be able to help with the website components during the weekend.
                  - Alejandro and Mitchell: We will wait until Thomas hands off his section to begin work on the project itself. We will look at the Vue base from the last project.


                #### Meeting 2
                - 1. Discuss What Has Been Done
                  - Thomas: I built in more of the implementation. I will be able to do more if you need me to but I think we are in a good place.
                - 2. Discuss Next Steps
                  - Alejandro and Mitchell: We will begin work on the visualization and other details of the project.
                  - Jeff: I will be able to help with the website components during the weekend.

            </markdown>
            <div class=my-v-spacer></div>
            <!-- Source Code -->
            <markdown id=source-code>
                # Source Code
                <a target="_blank" :href="sourceCodeLink">View it here</a>
            </markdown>
            <div class=my-v-spacer></div>
            <!-- How to Compile and Run -->
            <markdown id=how-to-compile-and-run>
                # How to Compile and Run
                <br>
                <br>
                #### Required Technologies
                - Node.js

                #### Installing Dependencies
                `npm install`
                > In the project's directory

                #### Running the Program
                `npm run serve`
                
                <br>
                <br>
            </markdown>
            <div class=my-v-spacer></div>
            <!-- Screenshots -->
            <markdown id=screenshots>
                # Screenshots
                <br>
                <br>
                <!-- <img src="./pic1.jpeg" alt="robot-arm-picture"> -->
            </markdown>
            <div class=my-v-spacer></div>
            <!-- Report -->
            <markdown id=report>
                # Report
                <a target="_blank" :href="reportLink">View it here</a>
            </markdown>
        </column>
        <div class=my-center-spacer></div>
        <table-of-contents>
            <a href="#task-allocation">Team Task Allocation</a>
            <a href="#meeting-log">Meeting Log</a>
            <a target="_blank" :href="sourceCodeLink">Source Code</a>
            <a href="#how-to-compile-and-run">How to Compile/Run</a>
            <a href="#screenshots">Screenshots</a>
            <a target="_blank" :href="reportLink">Report</a>
        </table-of-contents>
    </row>
</template>
<script>
import TableOfContents from '../../components/TableOfContents'
export default {
    components: {TableOfContents},
    data: _=>({
        sourceCodeLink: "https://github.tamu.edu/FullMetalKinematics/Project4",
        reportLink: "https://docs.google.com/document/d/1k8rZh1vGlwd8itFnhVrYyPAhz8IPuaDtykkIN74H5eI/edit?usp=sharing"
    })
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
</style>