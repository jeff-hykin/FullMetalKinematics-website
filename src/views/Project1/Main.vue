<template>
    <row align-h=left align-v=top class=my-container width=100vw>
        <!-- Content -->
        <div class=my-center-spacer></div>
        <column class=my-content align-h=left flex-grow=3>
            <!-- Task Allocation -->
            <markdown id=task-allocation>
                # Task Allocation
                <br>
                <br>**Thomas McDonald:** Website setup, GUI frame code
                <br>**Jon Williamson:** Meeting minutes, final report, aesthetic updates
                <br>**Jeff Hykin:** Website development, link code
                <br>**Alejandro Londono:** Link code, GUI integration
                <br>**Mitchell Eldridge:** Link code, GUI integration
            </markdown>
            <div class=my-v-spacer></div>
            <!-- Meeting Log -->
            <markdown id=meeting-log>
                # Meeting Log
                
                
                #### Meeting 1
                - 1. Discuss Website Choices 
                 - Thomas: The main website should be very static as it is primarily a directory. 
                 - Jeff: I believe that we should use Vue for the website. 
                 - Thomas: I am tempted to use Vue, but the site may be simple enough to not require Javascript. For the website, each project should have its own page on the website with all of the necessary information. 
                 - Jon: I found an old website for one of these projects and it had all of the information for the project displayed already. 
                 - Jeff: Can we decide on Vue? I believe Thomas and I are the only ones with industry web development experience. 
                 - Jon: I designed tedxtamu.com but that required very little code. 
                 - Alejandro: I have done html and css for my personal website. 
                - 2. Discuss Language Choice 
                 - Thomas: I was thinking we would use Python for the project. 
                 - Jeff: I am not sure how hard it is to implement asynchronous things in Python. Interactive matplotlib has been a pain for me in the past. However, I think it would be fantastic for all of the matrix math. 
                 - Thomas: What are we doing that requires asynchronous code? 
                 - Jeff: Anything interactive, such as clicking a button. 
                 - Thomas: There are event handlers that can be used for that. 
                 - Jon: I see no need why we would not separate threads for this project. It seems like we are overcomplicating this project. 
                 - Thomas: Then we will use Python, as we shouldn’t have to handle anything asynchronously. Javascript can be our back up. 
                - 3. Discuss Graphics Library 
                 - Thomas: If we use Python for the project, we could use Pygame for the graphics. PyQt is another option. 
                 - Jon: If we want to do something super simple we can use JavaFX. 
                 - Jeff: I think PyQt is a good choice. There is a GUI for building PyQt applications. It is pretty fast for basic functionality. 
                 - Thomas: PyQt it is then.
                - 4. Discuss Next Steps 
                 - Thomas: I will set up the website with a Vue template. If time permits I will also set up a basic structure for the projects. 
                 - Jon: I will formally write up the meeting minutes. We will also plan to have our next meeting over more details of the code and assigning work.
                
                #### Meeting 2
                - 1. Discuss Website
                 - Mitchell: I am a little confused, does our code need to run on our website? 
                 - Jon: No, the website is just documentation. 
                 - Mitchell: So who has made updates to the website so far? 
                 - Thomas: Jeff and I have made updates to the website. I also began on the GUI this morning in class. 
                - 2. Overview
                 - Team: So how should we split up this project? 
                 - Thomas: If anyone does not understand the project, please speak up now. First let’s look at current progress. Qt is straightforward. In Qt, a window is a widget. Every component is a widget. Widgets can be nested. Currently the GUI has the display window and the buttons. The transformation matrix is also coded in Python. The control widget is in a vertical box configuration. Are there any questions on what is written? 
                 - Jeff: Is it necessary to use the full transformation matrices? 
                 - Team: Yes, it will help us understand the concepts and it might be reusable in the future. 
                 - Thomas: Looking at planning, I think that we should have a joint class which holds the position, the orientation, and the length of the arm. Then we have a sequence of joints which leads to the paintbrush. 
                 - Jeff: If we are going to do it the matrix way, there is going to be a transformation matrix under the class joint. Updating transformation matrices would have to be sequential. 
                 - Mitchell: Wouldn’t we want the paintbrush to just be a point? Why would we need an additional frame? 
                 - Thomas: Doing that would require a different calculation. If we treat the paintbrush as a frame, then we do not have to write any additional code. 
                - 3. Next Steps
                 - Thomas: Jeff and I were talking and think that we could begin work on this project now and potentially finish it. 
                 - Team: [Begins work] 
            </markdown>
            <div class=my-v-spacer></div>
            <!-- Source Code -->
            <markdown id=source-code>
                # Source Code
                <a target="_blank" href="https://github.tamu.edu/FullMetalKinematics/Project1">View it here</a>
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
                #### Description
                Each joint on the arm is denoted with a blue dot. The first joint, "Joint 1" is at the origin which will be in the center of the arm view, on the left side of the GUI.
                <br>
                <br>
            </markdown>
            <div class=my-v-spacer></div>
            <!-- Screenshots -->
            <markdown id=screenshots>
                # Screenshots
                <br>
                <br>
                <img width="1362" alt="image1" src="https://user-images.githubusercontent.com/17692058/66019087-68c62c00-e4a7-11e9-90e6-c347ebdfa31f.png">
                <img width="1362" alt="image2" src="https://user-images.githubusercontent.com/17692058/66019095-724f9400-e4a7-11e9-854e-a4fc9992b65f.png">
                <img width="1362" alt="image3" src="https://user-images.githubusercontent.com/17692058/66019101-7976a200-e4a7-11e9-984f-88d59eb2c036.png">
            </markdown>
            <div class=my-v-spacer></div>
            <!-- Report -->
            <markdown id=report>
                # Report
                <a target="_blank" href="https://drive.google.com/open?id=0Bz6cPkDulveZdHcweGo0U2xKV1lwNUhhd09QVVM0QW42My1J">View it here</a>
            </markdown>
        </column>
        <div class=my-center-spacer></div>
        <table-of-contents>
            <a href="#task-allocation">Team Task Allocation</a>
            <a href="#meeting-log">Meeting Log</a>
            <a target="_blank" href="https://github.tamu.edu/FullMetalKinematics/Project1">Source Code</a>
            <a href="#how-to-compile-and-run">How to Compile/Run</a>
            <a href="#screenshots">Screenshots</a>
            <a target="_blank" href="https://drive.google.com/open?id=0Bz6cPkDulveZdHcweGo0U2xKV1lwNUhhd09QVVM0QW42My1J">Report</a>
        </table-of-contents>
    </row>
</template>
<script>
import TableOfContents from '../../components/TableOfContents'
export default {
    components: {TableOfContents}
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