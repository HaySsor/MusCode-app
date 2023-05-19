<template>
    <div class ='image-box'>
        <img :src="img" :alt="name">
    </div>
</template>
<script>
export default {
    name: 'ProductTileImage',
    props:{
        img : String,
        name: String,
    }
}
</script>
<style lang="scss" scoped>
    .image-box{
        width: 100%;
        height: 210px;
        display: flex;
        justify-content: center;
        padding: 0 10px;
    
        img{
            width: 100%;
            object-fit: contain;
        }
    }
</style>