<template>
  <button class="as-btn">{{ name }}</button>
</template>

<script>
export default {
    props:{
        name: String
    }
}
</script>

<style>
.as-btn{
    font-size: 1.4rem;
    line-height: 1.6rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.15rem;
    display: inline-block;
    color: #fff;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    border: 1px solid #E4002B;
    background-color: #E4002B;
    border-radius: 30px;
    padding: 0 6rem;
    outline: none;
    overflow: hidden;
    cursor: pointer;
}
.as-btn:hover{
    background-color: #CC0026;
}
</style>