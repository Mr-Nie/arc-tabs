<template>
    <div class="container" :style="{width:containerStyle.width+'px',height:containerStyle.height+'px'}">
        <div class="circle" :style="circleStyle"></div>
    </div>
</template>
<script>
export default {
    name:'arc-tabs',
    data(){
        return{
            data:[1,2,3,4,5,6,7],
            containerStyle:{
                width:800,
                height:50
            },
            circleStyle:{
                width:'',
                height:'',
                marginLeft:'',
                top:''
            }
        }
    },
    mounted(){
        this.initArc();
    },
    methods:{
        initArc(){
            const containerStyle = this.containerStyle;
            const w = containerStyle.width;
            const h = containerStyle.height;
            const d = (w * w + h * h) / h / 2;
            const angle = 2 * Math.asin((2 * w * h) / (w * w + h * h))*57.3;
            let circleStyle = this.circleStyle;
            circleStyle.width = d + 'px';
            circleStyle.height = d + 'px';
            circleStyle.marginLeft = -d / 2 + 'px';
            circleStyle.top = h / 4 + 'px';
        }
    }
}
</script>
<style lang="scss">
 .container {
    overflow: hidden;
    position: relative;
}
.circle {
    position: absolute;
    border-radius: 100%;
    border: 1px solid red;
    left: 50%;
}
</style>
