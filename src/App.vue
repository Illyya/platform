<template>
  <div class="app">
    <TheHeader class="app__header" />

    <AuthorizationContent class="app__authorization" />

    <TheFooter class="app__footer" />
  </div>
</template>

<script>
import AuthorizationContent from "./components/AuthorizationContent.vue";
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  components: { TheHeader, AuthorizationContent, TheFooter },
  name: "App",
};
</script>

<style lang="scss">
// reset ------------------------------------------------
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1.2;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
  font-family: inherit;
  font-size: inherit;
}

input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a {
  color: inherit;
}
a,
a:visited,
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}
// ---------------------------------------------------------

@font-face {
  font-family: "Museo Sans Cyrl";
  src: local("☺"),
    url("~@/assets/fonts/museo_sans_cyrl_300.woff2") format("woff2"),
    url("~@/assets/fonts/museo_sans_cyrl_300.woff") format("woff");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Museo Sans Cyrl";
  src: local("☺"),
    url("~@/assets/fonts/museo_sans_cyrl_500.woff2") format("woff2"),
    url("~@/assets/fonts/museo_sans_cyrl_500.woff") format("woff");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: "Museo Sans Cyrl", Arial, sans-serif;
  font-weight: 300;
  color: #141414;
}

.app {
  padding: 29px 0 15px 0;
  background: linear-gradient(
      to top left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) calc(50% - 0.8px),
      #e1e1e1 50%,
      rgba(0, 0, 0, 0) calc(50% + 0.8px),
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(
      to top right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) calc(50% - 0.8px),
      #e1e1e1 50%,
      rgba(0, 0, 0, 0) calc(50% + 0.8px),
      rgba(0, 0, 0, 0) 100%
    ),
    #fafafa;

  &__header {
    margin-bottom: 47px;
  }

  &__authorization {
  }

  &__questions-to-an-expert {
  }

  &__footer {
  }
}

.container {
  padding: 0 10px;
  max-width: 1190px;
  margin: 0 auto;
}
</style>
