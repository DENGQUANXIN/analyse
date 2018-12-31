<template>
  <div>
    <Card :bordered="false" :dis-hover="true" style="height:50px;padding-left:6px">
        <div>
            <h1>{{title}}</h1>
        </div>
    </Card>
  </div>
</template>
<script>
    export default {
      data(){
        return {
          title: '西藏大数据分析平台'
        }
      }
    }
</script>
