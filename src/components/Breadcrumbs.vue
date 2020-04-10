<template>
  <ul class="breadcrumbs">
      <li>Astons</li>
      <li>{{ current }}</li>
  </ul>
</template>

<script>
export default {
    props:{
        current: String
    }
}
</script>

<style>
.breadcrumbs{
    padding-right: 5.5rem;
    padding-left: 5.5rem;
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
}
.breadcrumbs li:first-child::after{
    content: '';
    width: 5px;
    height: 5px;
    border-right: 1px solid #B2B2B2;
    border-top: 1px solid #B2B2B2;
    transform: translateY(calc(-50%)) rotate(45deg);
    position: absolute;
    top: 50%;
    right: 0;
}
.breadcrumbs li{
    text-decoration: none;
    transition: all 0.2s;
    color: #B2B2B2;
    font-size: 1.2rem;
    line-height: 1.6rem;
    display: inline-block;
    padding: 1.6rem 0.8rem 1.6rem 0.5rem;
    position: relative;
}
</style>