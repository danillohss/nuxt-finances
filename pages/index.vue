<template>
  <Tutorial />
</template>

<script>
export default {
  name: "IndexPage",

  mounted() {
    console.log(this.$name);
    console.log(this.$dayjs().format());
  },
};
</script>
