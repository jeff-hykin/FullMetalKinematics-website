(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["projects"],{"4b54":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("row",{staticClass:"my-container",attrs:{"align-h":"left","align-v":"top",width:"100vw"}},[n("div",{staticClass:"my-center-spacer"}),n("column",{staticClass:"my-content",attrs:{"align-h":"left","flex-grow":"3"}},[n("markdown",{attrs:{id:"task-allocation"}},[e._v("\n            # Task Allocation\n            "),n("br"),n("br"),e._v("**Thomas McDonald:** Website setup, GUI frame code\n            "),n("br"),e._v("**Jon Williamson:** Meeting minutes, final report, aesthetic updates\n            "),n("br"),e._v("**Jeff Hykin:** Website development, link code\n            "),n("br"),e._v("**Alejandro Londono:** Link code, GUI integration\n            "),n("br"),e._v("**Mitchell Eldridge:** Link code, GUI integration\n        ")]),n("div",{staticClass:"my-v-spacer"}),n("markdown",{attrs:{id:"meeting-log"}},[e._v("\n            # Meeting Log\n            \n            \n            #### Meeting 1\n            - 1. Discuss Website Choices \n             - Thomas: The main website should be very static as it is primarily a directory. \n             - Jeff: I believe that we should use Vue for the website. \n             - Thomas: I am tempted to use Vue, but the site may be simple enough to not require Javascript. For the website, each project should have its own page on the website with all of the necessary information. \n             - Jon: I found an old website for one of these projects and it had all of the information for the project displayed already. \n             - Jeff: Can we decide on Vue? I believe Thomas and I are the only ones with industry web development experience. \n             - Jon: I designed tedxtamu.com but that required very little code. \n             - Alejandro: I have done html and css for my personal website. \n            - 2. Discuss Language Choice \n             - Thomas: I was thinking we would use Python for the project. \n             - Jeff: I am not sure how hard it is to implement asynchronous things in Python. Interactive matplotlib has been a pain for me in the past. However, I think it would be fantastic for all of the matrix math. \n             - Thomas: What are we doing that requires asynchronous code? \n             - Jeff: Anything interactive, such as clicking a button. \n             - Thomas: There are event handlers that can be used for that. \n             - Jon: I see no need why we would not separate threads for this project. It seems like we are overcomplicating this project. \n             - Thomas: Then we will use Python, as we shouldn’t have to handle anything asynchronously. Javascript can be our back up. \n            - 3. Discuss Graphics Library \n             - Thomas: If we use Python for the project, we could use Pygame for the graphics. PyQt is another option. \n             - Jon: If we want to do something super simple we can use JavaFX. \n             - Jeff: I think PyQt is a good choice. There is a GUI for building PyQt applications. It is pretty fast for basic functionality. \n             - Thomas: PyQt it is then.\n            - 4. Discuss Next Steps \n             - Thomas: I will set up the website with a Vue template. If time permits I will also set up a basic structure for the projects. \n             - Jon: I will formally write up the meeting minutes. We will also plan to have our next meeting over more details of the code and assigning work.\n            \n            #### Meeting 2\n            - 1. Discuss Website\n             - Mitchell: I am a little confused, does our code need to run on our website? \n             - Jon: No, the website is just documentation. \n             - Mitchell: So who has made updates to the website so far? \n             - Thomas: Jeff and I have made updates to the website. I also began on the GUI this morning in class. \n            - 2. Overview\n             - Team: So how should we split up this project? \n             - Thomas: If anyone does not understand the project, please speak up now. First let’s look at current progress. Qt is straightforward. In Qt, a window is a widget. Every component is a widget. Widgets can be nested. Currently the GUI has the display window and the buttons. The transformation matrix is also coded in Python. The control widget is in a vertical box configuration. Are there any questions on what is written? \n             - Jeff: Is it necessary to use the full transformation matrices? \n             - Team: Yes, it will help us understand the concepts and it might be reusable in the future. \n             - Thomas: Looking at planning, I think that we should have a joint class which holds the position, the orientation, and the length of the arm. Then we have a sequence of joints which leads to the paintbrush. \n             - Jeff: If we are going to do it the matrix way, there is going to be a transformation matrix under the class joint. Updating transformation matrices would have to be sequential. \n             - Mitchell: Wouldn’t we want the paintbrush to just be a point? Why would we need an additional frame? \n             - Thomas: Doing that would require a different calculation. If we treat the paintbrush as a frame, then we do not have to write any additional code. \n            - 3. Next Steps\n             - Thomas: Jeff and I were talking and think that we could begin work on this project now and potentially finish it. \n             - Team: [Begins work] \n        ")]),n("div",{staticClass:"my-v-spacer"}),n("markdown",{attrs:{id:"source-code"}},[e._v("\n            # Source Code\n            "),n("a",{attrs:{target:"_blank",href:"https://github.tamu.edu/FullMetalKinematics/Project1"}},[e._v("View it here")])]),n("div",{staticClass:"my-v-spacer"}),n("markdown",{attrs:{id:"how-to-compile-and-run"}},[e._v("\n            # How to Compile and Run\n            "),n("br"),n("br"),e._v("\n            #### Required Technologies\n            - Python 3\n            - Pip 3\n\n            #### Installing Dependencies\n            `pip install -r requirements.txt`\n            > In the projects directory\n\n            #### Running the Program\n            `python main.py`\n            \n            "),n("br"),e._v('\n            #### Description\n            Each joint on the arm is denoted with a blue dot. The first joint, "Joint 1" is at the origin which will be in the center of the arm view, on the left side of the GUI.\n            '),n("br"),n("br")]),n("div",{staticClass:"my-v-spacer"}),n("markdown",{attrs:{id:"screenshots"}},[e._v("\n            # Screenshots\n            "),n("br"),n("br"),n("img",{attrs:{width:"1362",alt:"image1",src:"https://user-images.githubusercontent.com/17692058/66019087-68c62c00-e4a7-11e9-90e6-c347ebdfa31f.png"}}),n("img",{attrs:{width:"1362",alt:"image2",src:"https://user-images.githubusercontent.com/17692058/66019095-724f9400-e4a7-11e9-854e-a4fc9992b65f.png"}}),n("img",{attrs:{width:"1362",alt:"image3",src:"https://user-images.githubusercontent.com/17692058/66019101-7976a200-e4a7-11e9-984f-88d59eb2c036.png"}})]),n("div",{staticClass:"my-v-spacer"}),n("markdown",{attrs:{id:"report"}},[e._v("\n            # Report\n            "),n("a",{attrs:{target:"_blank",href:"https://drive.google.com/open?id=0Bz6cPkDulveZdHcweGo0U2xKV1lwNUhhd09QVVM0QW42My1J"}},[e._v("View it here")])])],1),n("div",{staticClass:"my-center-spacer"}),n("div",{staticStyle:{display:"flex","margin-top":"2rem"},on:{mouseenter:e.onHover,mouseleave:e.onHoverOff}},[n("column",{staticClass:"hover-helper",class:{hovered:e.hoverOn},attrs:{"align-h":"left"}},[n("column",{staticClass:"my-reference-card",class:{hovered:e.hoverOn},attrs:{"align-h":"left",shadow:"2","background-color":"white"}},[n("a",{attrs:{href:"#task-allocation"}},[e._v("Team Member Task Allocation")]),n("a",{attrs:{href:"#meeting-log"}},[e._v("Meeting Log")]),n("a",{attrs:{target:"_blank",href:"https://github.tamu.edu/FullMetalKinematics/Project1"}},[e._v("Source Code")]),n("a",{attrs:{href:"#how-to-compile-and-run"}},[e._v("How to Compile/Run")]),n("a",{attrs:{href:"#screenshots"}},[e._v("Screenshots")]),n("a",{attrs:{target:"_blank",href:"https://drive.google.com/open?id=0Bz6cPkDulveZdHcweGo0U2xKV1lwNUhhd09QVVM0QW42My1J"}},[e._v("Report")])])],1)],1)],1)},o=[],i={data:function(){return{hoverOn:!0}},mounted:function(){var e=this;setTimeout(function(){e.hoverOn=!1},1e3)},methods:{onHover:function(){this.hoverOn=!0},onHoverOff:function(){this.hoverOn=!1}}},s=i,r=(n("6e7e"),n("2877")),h=Object(r["a"])(s,a,o,!1,null,"6523ae2b",null);t["default"]=h.exports},"50d6":function(e,t,n){},"6e7e":function(e,t,n){"use strict";var a=n("7675"),o=n.n(a);o.a},7675:function(e,t,n){},acca:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"title"},[e._v("Projects")]),n("div",{staticClass:"card-container"},[n("b-card",{staticClass:"project-card",attrs:{title:"Forward Kinematics","sub-title":"2D robot arms"}},[n("b-card-text"),n("b-card-text",[e._v("\n            In this project, we used Python3 and Qt canvas. We created a robot arm of 3 linkages with individual controll of each arm, and the ability to draw at the tip of the final linkage\n            ")]),n("router-link",{staticClass:"card-link",attrs:{to:"/Projects/project1"}},[e._v("Open Project")])],1)],1)])},o=[],i={name:"projects",data:function(){return{}}},s=i,r=(n("dc4a"),n("2877")),h=Object(r["a"])(s,a,o,!1,null,"5eec9a96",null);t["default"]=h.exports},dc4a:function(e,t,n){"use strict";var a=n("50d6"),o=n.n(a);o.a}}]);
//# sourceMappingURL=projects.6a5e4c25.js.map