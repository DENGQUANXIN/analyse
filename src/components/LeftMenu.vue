<template>
<div>
  <Menu @on-select="selectType" :active-name="listTypes[0]">
    <MenuGroup title="类型">
      <MenuItem v-for="(item, index) in listTypes" :key="index" :name="item">
        {{item}}
      </MenuItem>
    </MenuGroup>
  </Menu>
</div>
</template>
<script>
export default {
  props: {
    listTypes: Array
  },
  methods: {
    selectType(name) {
      this.$emit("get-type",this.listTypes.indexOf(name));
    }
  }
}
</script>
<style>
.ivu-menu-vertical.ivu-menu-light:after {
  background: #fff;
}
</style>
