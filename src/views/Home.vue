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
        <row class=card-container align-h=left :wrap=true width=100vw margin=2rem>
            <!-- Project1 Summary -->
            <column class=project-card>
                <h6>Project 1: Forward Kinematics</h6>
                <p>
                    In this project, we used Python3 and Qt canvas. We created a robot arm of 3 linkages with individual controll of each arm, and the ability to draw at the tip of the final linkage
                </p>
                <router-link to=/Projects/project1 class=card-link>
                    Open Project
                </router-link>
            </column>
            <!-- Project2 Summary -->
            <column class=project-card>
                <h6>Project 2: Inverse Kinematics</h6>
                <p>
                    In this project, we continued using Python3 and Qt canvas. We use inverse Kinematics to create a robot arm to follow a particular point.
                </p>
                <router-link to=/Projects/project2 class=card-link>
                    Open Project
                </router-link>
            </column>
            <!-- Project3 Summary -->
            <column class=project-card>
                <h6>Project 3: Braitenberg Vehicles</h6>
                <p>
                    In this project, we used Javascript and Vue.js to create a 2D simulation of Braitenberg Vehicles. These vehicles follow or avoid light sources corrisponding to an internal response matrix.
                </p>
                <router-link to=/Projects/project3 class=card-link>
                    Open Project
                </router-link>
            </column>

            <!-- Project4 Summary -->
            <column class=project-card>
                <h6>Project 4: Racecar</h6>
                <p>
                    In this project, we used Javascript and Vue.js to create a 2D simulation of driving a Porsche.
                </p>
                <router-link to=/Projects/project4 class=card-link>
                    Open Project
                </router-link>
            </column>
            
            <!-- Project5 Summary -->
            <column class=project-card>
                <h6>Project 5: Pathfinding</h6>
                <p>
                    In this project, we used Python Qt to simulate 2D pathfinding using cell decomposition.
                </p>
                <router-link to=/Projects/project5 class=card-link>
                    Open Project
                </router-link>
            </column>
        </row>
    </column>
</template>
<script>
    import Card from '../components/Card'
    import Column from '../components/Column'
    import Row from '../components/Row'
    export default {
        components: {
            Card,
            Column,
            Row
        }
    }
</script>
<style lang="scss" scoped>
.card-container {
    max-width: 68rem;
}
.project-card {
    max-width: 30rem;
    height: 15rem;
    justify-content: space-around;
    text-align: left;
    margin: 1.1rem 1.7rem;
    background: white;
    border: solid lightgray 1px;
    padding: 1rem 2rem;
    border-radius: 1rem;
    align-items: flex-start;
    h1,h2,h3,h4,h5,h6 {
        margin-bottom: 1rem;
    }
    a {
        margin-top: 1rem;
        margin-bottom: 0.2rem;
        justify-self: flex-end;
    }
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