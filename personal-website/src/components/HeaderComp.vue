<template>
    <b-navbar :shadow="true" :spaced="true">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/about-us' }">
                About Braveium Studios
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                    <a class="button is-primary">
                        <strong>Button</strong>
                    </a>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>