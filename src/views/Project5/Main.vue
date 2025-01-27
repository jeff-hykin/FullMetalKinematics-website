<template>
    <row align-h=left align-v=top class=my-container width=100vw>
        <!-- Content -->
        <div class=my-center-spacer></div>
        <column class=my-content align-h=left flex-grow=3>
            <!-- Task Allocation -->
            <markdown id=task-allocation>
                # Task Allocation
                <br>
                <br>**Thomas McDonald:** Code implementation
                <br>**Jon Williamson:** Code implementation, Report
                <br>**Jeff Hykin:** Website base, code implementation
                <br>**Alejandro Londono:** Code implementation
                <br>**Mitchell Eldridge:** Code implementation
            </markdown>
            <div class=my-v-spacer></div>
            <!-- Meeting Log -->
            <markdown id=meeting-log>
                # Meeting Log
                
                
                #### Meeting 1
                - 1. Discuss what has been done
                  - Thomas: I began the base GUI. It is similar to what we used for Projects 1 and 2.
                - 2. Discuss plan
                  - Jon: I will create the obstacle object and the necessary control mechanisms.
                  - Alejandro: I will create the cell object and the necessary interface with the obstacle objects.
                  - Mitchell: I will continue with the development of the cells and the algorithm following Alejandro’s completed work.
                  - Jeff: I will update the website as necessary.

                #### Meeting 2
                - 1. Discuss what has been done
                  - Jon: I have completed the obstacle class with collision detection and GUI integration.
                  - Alejandro and Mitchell: We have completed the cell class and its integration with obstacle positions.
                  - Jeff: I have made the project more modular and worked on the website. I also colored the start and end points.
                - 2. Discuss Next Steps
                  - Alejandro and Mitchell: We will finish the algorithm using BFS.
                
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
        reportLink: "https://drive.google.com/file/d/1I-6MSchsuFEbbhSkN6FEpexHghU9pkfC/view?usp=sharing"
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