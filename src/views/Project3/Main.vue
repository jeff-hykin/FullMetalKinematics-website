<template>
    <row align-h=left align-v=top class=my-container width=100vw>
        <!-- Content -->
        <div class=my-center-spacer></div>
        <column class=my-content align-h=left flex-grow=3>
            <!-- Task Allocation -->
            <markdown id=task-allocation>
                # Task Allocation
                <br>
                <br>**Thomas McDonald:** Code Development
                <br>**Jon Williamson:** Equation Derivation
                <br>**Jeff Hykin:** Website development, link code
                <br>**Alejandro Londono:** Code Development
                <br>**Mitchell Eldridge:** Code Development
            </markdown>
            <div class=my-v-spacer></div>
            <!-- Meeting Log -->
            <markdown id=meeting-log>
                # Meeting Log
                <br><br>
                <br>
                #### Project Three, Meeting One Minutes
                <br><br>
                These minutes are a paraphrased summary of the meeting conversation.
                
                <br><br>
                ###### Discuss What Has Been Done
                - Thomas: I began the base GUI and built in the implementation of the light placement. I also built in the implementation of the adjustable K matrix.

                - Jeff: Thomas and I discussed the backend of the project and how which transformation matrices we will use in this project..
                
                <br><br>
                ###### Discuss Next Steps
                - Jeff: I am very busy for the next few days so I will not be able to help as much as I usually do. I have identified two mathematical problems for Jon to attempt to solve that will allow us to code.

                - Mitchell & Alejandro: We will begin to work on the rest of the project and update the website.

                - Jon: I will attempt to solve the math problems.
                
                <br><br>
                <br>
                #### Project Three, Meeting Two Minutes
                11/5/2019
                <br><br>
                *These minutes are a paraphrased summary of the meeting conversation.*
                
                <br><br>
                ###### Discuss What Has Been Done
                - Jon: I have solved the math problems.

                - Mitchell & Alejandro: We have added the visualization representation of the robot into the code and began to update the website. 

                - Thomas: I added a bounding mechanism.
                <br><br>
                ###### Discuss Next Steps
                - Jon: I will work on the report.

                - Mitchell & Alejandro: We will continue working on the website.
            </markdown>
            <div class=my-v-spacer></div>
            <!-- Source Code -->
            <markdown id=source-code>
                # Source Code
                <a target="_blank" :href="sourceCodeLink">View it here</a>
            </markdown>
            <div class=my-v-spacer></div>
            <!-- Source Code -->
            <markdown>
                # Live Demo!
                <router-link to=/Projects/project3/app>
                    Open App
                </router-link>
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
                > In the projects directory

                #### Running the Program
                `npm run serve`
                
                <br>
                <br>
            </markdown>
            <div class=my-v-spacer></div>
            <!-- Screenshots -->
            <markdown id=screenshots>
                # Screenshots
                <br><br>
                <img src="./pic1.jpeg" alt="Braitenberg Vehicles">
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
            <a href="#task-allocation"               >Team Task Allocation</a>
            <a href="#meeting-log"                   >Meeting Log         </a>
            <a target="_blank" :href="sourceCodeLink">Source Code         </a>
            <a href="#how-to-compile-and-run"        >How to Compile/Run  </a>
            <a href="#screenshots"                   >Screenshots         </a>
            <a target="_blank" :href="reportLink"    >Report              </a>
        </table-of-contents>
    </row>
</template>
<script>
import TableOfContents from '../../components/TableOfContents'
export default {
    components: {TableOfContents},
    data: _=>({
        sourceCodeLink: "https://github.tamu.edu/FullMetalKinematics/Project3",
        reportLink: "https://docs.google.com/document/d/1V52VxGgUyUdT3qWPG7JEzQBGscHuqFzETINFyLEwn48"
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