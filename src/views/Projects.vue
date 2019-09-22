<template>
    <div>
        <h1 class="title" >Projects</h1>
        <div class="card-container" >
            <b-card class="project-card" title="Card title" sub-title="Card subtitle">
                <b-card-text>
                Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
                content.
                </b-card-text>

                <b-card-text>A second paragraph of text in the card.</b-card-text>

                <a href="#" class="card-link">Card link</a>
                <b-link href="#" class="card-link">Another link</b-link>
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
}
.card-container {
    display: flex;
    padding: 2.5rem 10rem;
}
</style>