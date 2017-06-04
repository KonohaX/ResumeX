<template>
  <div class="hello">
    <h2 class="milky">{{ enPart }}</h2>
    <h2 class="milky-cn">{{ cnPart }}</h2>
    <h1 class="press">{{ name }}</h1>
    <h3 class="email"></h3>
    <h3><a href="mailto:550192389@qq.com">{{ email }}</a></h3>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      enPart: 'Enjoy coding , Enjoy life',
      cnPart: '热爱代码，热爱生活',
      name: '许家鑫',
      status: '前端开发',
      email:'550192389@qq.com'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p,h1,h2{
  color:#fff;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
}
h3{
  font-family: "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
h2{
  font-size:26px
}
.press{
  font-size: 44px;
  font-family: Lato,"Microsoft YaHei",sans-serif;
  text-shadow: 1px 2px #22c3aa,2px 4px #aee2d9;
  text-align: center;
}
.milky {
  text-transform: uppercase;
  display: block;
  font-size: 30px;
  color: #f1ebe5;
  text-shadow: 0 8px 9px #008a75, 0px -2px 1px #fff;
  text-align: center;
}
.milky-cn {
  display: block;
  font-size: 24px;
  color: #f1ebe5;
  text-align: center;
}
</style>
