<template>
  <div>
    <div>
      <div class="container mx-auto">
        <h1 class="text-lg font-bold">Produtos</h1>
        <NuxtLink to="/Produtos/Produto-a"></NuxtLink>
        <NuxtLink to="/Produtos/Produto-b"></NuxtLink>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
          magni molestias praesentium rem tenetur! Aliquid aperiam at dicta
          error est eum iste magni minus nihil non quisquam sit, unde voluptate.
        </p>
      </div>
    </div>
    <p v-for="product in products" :key="product.id">
      {{ product.title }}
    </p>
  </div>
</template>
  
  <script>
export default {
  name: "A-EMPRESA",

  async asyncData({ $axios }) {
    const products = await $axios.$get(
      "https://jsonplaceholder.typicode.com/posts?_limit=3"
    );
    return {
      products,
    };
  },
};
</script>
  