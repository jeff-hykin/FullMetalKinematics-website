<template>
    <row align-h=left align-v=top class=my-container width=100vw>
        <!-- Content -->
        <div class=my-center-spacer></div>
        <column class=my-content align-h=left flex-grow=3>
            <!-- Task Allocation -->
            <markdown id=task-allocation>
                # Task Allocation
                <br>
                <br>**Thomas McDonald:** Python Development
                <br>**Jon Williamson:** Equation Derivation
                <br>**Jeff Hykin:** Website development, link code
                <br>**Alejandro Londono:** Python Development
                <br>**Mitchell Eldridge:** Python Development
            </markdown>
            <div class=my-v-spacer></div>
            <!-- Meeting Log -->
            <markdown id=meeting-log>
                # Meeting Log
                
                
                #### Meeting 1
                - 1. Discuss what has been done
                  - Jeff: I have updated the Website
                  - Jon: I have derived the equations we should use for different cases
                - 2. Discuss plan
                  - Thomas: Let's discuss breakdown of what is left
                  - Mitchell: we can base this project on the last one and add the new implementations
                  - Alejandro: We can implement equations in code tomorrow for the next meeting. Created repo for this project
                  - Thomas: Sounds good. I will go ahead and add the new buttons then before tomorrow.

                #### Meeting 2
                - 1. Discuss work plan
                  - Thomas: Added the buttons. Let's get someone to do the callback functions and the other two of us can implement the functions.
                  - Mitchell: I can do the callback functions
                - 2. Debugging and other features
                  - Mitchell: Let me try to implement smoothing for arm transitions
                
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
                <img src="./pic1.jpeg" alt="path-finding-picture">
                <img src="./pic2.png" alt="path-finding-picture">
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
        sourceCodeLink: "https://github.tamu.edu/FullMetalKinematics/Project5",
        reportLink: "https://drive.google.com/file/d/1zBTuWgYPHpoq7rfI42atSO1dsLU0g5_f/view?usp=sharing"
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