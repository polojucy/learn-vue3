<template>
  <div>
      <li>
        <ul><router-link to="/feature">feature</router-link></ul>
        <ul><router-link to="/getting-started">Getting Started</router-link></ul>
        <ul><router-link to="/lifecycle-hooks">Lifecycle Hooks</router-link></ul>
        <ul><router-link to="/interpolations">Interpolations</router-link></ul>
      </li>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>