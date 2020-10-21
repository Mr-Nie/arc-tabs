<template>
    <div class="container" :style="{width:width+'px',height:height+'px'}">
        <div class="tabs" v-if="tabPosition.length">
            <span :key="index" v-for="(item,index) in data" :class="index==chooseIndex?'selected':''" :style="[{left:tabPosition[index][0]+ 'px',top:tabPosition[index][1]+ 'px',transform:'rotate('+circlePosition[index]+'deg)',width:tabSize+ 'px',height:tabSize+ 'px',lineHeight:tabSize+ 'px',marginLeft:-tabSize/2+ 'px',marginTop:-tabSize/2+ 'px'},fontStyle,index==chooseIndex?chooseStyle:'']" @click="chooseIndex = index">{{item}}{{unit}}</span>
        </div>
        <div class="circle" :style="[circleStyle,arcStyle, {transform:'rotate('+circlePosition[chooseIndex]+'deg)'}]">
            <img :style="{width:tabSize+'px',marginLeft:-tabSize/2+ 'px',top:-tabSize/2+ 'px'}" :src="bgImage"/>
        </div>
    </div>
</template>
<script>
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
            default:'data:image/png;base64,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'
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
        &.selected{
            color:#ac591a;
            font-weight: bold;
        }
    }
}
</style>
