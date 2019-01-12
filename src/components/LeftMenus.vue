<template>
<div>
  <Menu @on-select="selectType" :active-name="listTypes[defaultType][0]">
    <MenuGroup v-for="(listItem, listKey) in listTypes" :title="listKey">
      <MenuItem v-for="(item, index) in listItem" :key="index" :name="item">
        {{item}}
      </MenuItem>
    </MenuGroup>
  </Menu>
</div>
</template>
<script>
export default {
  props: {
    listTypes: Object,
    defaultType: String
  },
  methods: {
    selectType(name) {
      this.$emit("get-type", name);
    }
  }
}
</script>
<style>
.ivu-menu-vertical.ivu-menu-light:after {
  background: #fff;
}
</style>
