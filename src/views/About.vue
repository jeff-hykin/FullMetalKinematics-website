<template>
    <column>
        <column max-width=50rem>
            <h1 class=my-title>
                About Us
            </h1>
            <p>
                Howdy! We are Full Metal Kinematics. We are a team of 5 that are in CSCE
                452 - Robotics and Spatial Intelligence course at Texas A&amp;M University.
            </p>
        </column>
        <!-- Members -->
        <column width=100vw margin-top=3rem>
            <h3>Members</h3>
            <ul class=member-list>
                <li>Thomas McDonald</li>
                <li>Jon Williamson</li>
                <li>Jeff Hykin</li>
                <li>Mitchell Eldridge</li>
                <li>Alejandro Londono</li>
            </ul>
        </column>
    </column>
</template>

<style lang="scss" scoped>
.my-title {
    margin-top: 4.5rem;
    margin-bottom: 4.5rem;
    font-size: 6em;
}
.about {
    width: 95%;
    max-width: 650px;
    margin: 0 auto;
    text-align: left;
}
.member-list {
    text-align: left;
}
</style>
