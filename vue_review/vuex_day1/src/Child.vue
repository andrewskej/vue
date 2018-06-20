<template>
    <div>
        <hr>
        Child counter : {{this.$store.state.counter}}<br>
        <!-- Child counter : {{passedCounter}}<br> -->
        <button>+</button>
        <button>-</button>
    </div>
</template>

<script>
export default {
    // props:['passedCounter']
}
</script>

<style>

</style>
