<template>
    <div>
        <h1 class="title" >Projects</h1>
        <div class="card-container" >
            <!-- Project1 Summary -->
            <b-card class="project-card" title="Forward Kinematics" sub-title="2D robot arms">
                <b-card-text></b-card-text>
                <b-card-text>
                In this project, we used Python3 and Qt canvas. We created a robot arm of 3 linkages with individual controll of each arm, and the ability to draw at the tip of the final linkage
                </b-card-text>
                <b-link href="/projects/project1" class="card-link">Open Project</b-link>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'projects',
    data () {
        return {

        }
    }
}
</script>

<style lang="css" scoped>
.title {
    margin-top: 4.5rem;
    margin-bottom: 4.5rem;
    font-size: 6em;
}
.project-card {
    max-width: 30rem;
    text-align: left;
    margin: 1.1rem 1.7rem;
}
.card-container {
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 0 10rem;
    flex-wrap: wrap;
}
</style>