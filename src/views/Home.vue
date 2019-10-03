<template>
    <column>
        <!-- Icon/Title -->
        <row class=title-section align-v=top width=100vw padding=2rem :wrap=true>
            <img class=my-logo src="../assets/logo.png" alt="logo">
            <div style='min-width: 0.5rem; width: 3rem;'></div>
            <column align-h=left>
                <h1 class=my-title>Full Metal Kinematics</h1>
                <column class=member-section align-h=left>
                    <h4 class=member-title>Members</h4>
                    <column align-h=left>
                        <li>Thomas McDonald</li>
                        <li>Jon Williamson</li>
                        <li>Jeff Hykin</li>
                        <li>Mitchell Eldridge</li>
                        <li>Alejandro Londono</li>
                    </column>
                </column>
            </column>
        </row>
        <!-- Projects -->
        <row class=card-container align-h=space-evenly :wrap=true width=100vw margin=2rem>
            <!-- Project1 Summary -->
            <b-card class=project-card title="Project 1: Forward Kinematics" sub-title="2D robot arms">
                <b-card-text></b-card-text>
                <b-card-text>
                    In this project, we used Python3 and Qt canvas. We created a robot arm of 3 linkages with individual controll of each arm, and the ability to draw at the tip of the final linkage
                </b-card-text>
                <router-link to=/Projects/project1 class=card-link>
                    Open Project
                </router-link>
            </b-card>
            <!-- Project2 Summary -->
            <!-- <b-card class="project-card" style="align-self: flex-start" title="Forward Kinematics" sub-title="2D robot arms">
                <b-card-text></b-card-text>
                <b-card-text>
                In this project, we used Python3 and Qt canvas. We created a robot arm of 3 linkages with individual controll of each arm, and the ability to draw at the tip of the final linkage
                </b-card-text>
                <router-link to="/Projects/project1" class="card-link">Open Project</router-link>
            </b-card> -->
        </row>
    </column>
</template>
<style lang="scss" scoped>
.card-container {
    max-width: 68rem;
}
.project-card {
    max-width: 30rem;
    text-align: left;
    margin: 1.1rem 1.7rem;
}
.my-title {
    margin-top: 2rem;
    font-size: 39pt;
    font-weight: 100;
}
.my-logo {
    height: 10rem;
}
.member-section {
    color: gray;
    li {
        margin-left: 1rem;
    }
}
.member-title {
    font-style: italic;
    font-weight: 800;
    margin: 0;
}
</style>