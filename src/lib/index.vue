<template>
    <div class="container" :style="{width:width+'px',height:height+'px'}">
        <div class="tabs" v-if="tabPosition.length">
            <span :key="index" v-for="(item,index) in data" :class="index==chooseIndex?'selected':''" :style="[{left:tabPosition[index][0]+ 'px',top:tabPosition[index][1]+ 'px',transform:'rotate('+circlePosition[index]+'deg)',width:tabSize+ 'px',height:tabSize+ 'px',marginLeft:-tabSize/2+ 'px'},fontStyle,index==chooseIndex?chooseStyle:'']" @click="chooseIndex = index">{{item}}{{unit}}</span>
        </div>
        <div class="circle" :style="[circleStyle,arcStyle, {transform:'rotate('+circlePosition[chooseIndex]+'deg)'}]">
            <img :style="{width:tabSize+'px',marginLeft:-tabSize/2+ 'px',top:-tabSize/2+ 'px'}" :src="bgImage"/>
        </div>
    </div>
</template>
<script>
import icon from '../assets/icon.png'
export default {
    name:'arc-tabs',
    data(){
        return{
            // 当前选中的tab索引
            chooseIndex:0,
            // tab在弧边的定位
            tabPosition:[],
            // 弧形的旋转角度
            circlePosition:[],
            circleStyle:{
                width:'',
                height:'',
                marginLeft:'',
                top:''
            }
        }
    },
    props:{
        // tab上的文字
        data:{
            type:Array,
            require:true
        },
        //组件的宽度
        width:{
            type:Number,
            default:800
        },
        //组件的高度
        height:{
            type:Number,
            default:100
        },
        // tab的尺寸
        tabSize:{
            type:Number,
            default:50
        },
        // 选中的背景图
        bgImage:{
            type:String,
            default:icon
        },
        // tab的单位
        unit:String,
        // 文字样式
        fontStyle:Object,
        // 弧边样式
        arcStyle:Object,
        // 选中tab的文字样式
        chooseStyle:Object
    },
    mounted(){
        this.initArc();
    },
    methods:{
        initArc(){
            const w = this.width;
            const h = this.height;
            const d = (w * w + h * h) / h / 2;
            const angle = 2 * Math.asin((2 * w * h) / (w * w + h * h));
            const tabsNum = this.data.length;
            const a = angle/(tabsNum+1);
            let circleStyle = this.circleStyle;
            circleStyle.width = d + 'px';
            circleStyle.height = d + 'px';
            circleStyle.marginLeft = -d / 2 + 'px';
            circleStyle.top = h / 4 + 'px';
            this.initTabs(w/2,d/2,a);
        },
        initTabs(w,r,a){
            const data = this.data;
            const midNum = (data.length-1)/2;
            data.forEach((item,index)=>{
                let rad=(index-midNum)*a;
                let x=r*Math.sin(rad)+w;
                let y=r-r*Math.cos(rad);
                this.circlePosition.push(180*rad/Math.PI);
                this.tabPosition.push([x,y])
            })
        },
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
    box-shadow:0 0 10px 4px #ac591a;
    left: 50%;
    transition-duration: 1s;
    img{
        position: absolute;
        left: 50%;
    }
}
.tabs{
    z-index: 1;
    position:absolute;
    width:100%;
    height: 50%;
    top: 25%;
    span{
        position:absolute;
        text-align: center;
        cursor: pointer;
        margin-top: -10px;
        &.selected{
            color:#ac591a;
            font-weight: bold;
        }
    }
}
</style>
