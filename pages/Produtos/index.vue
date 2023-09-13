<template>
  <div>
    <div class="bg-gray-100">
      <div class="container mx-auto flex items-center space-x-4 h-10 mb-10">
        <NuxtLink :to="{ name: 'A-empresa' }">Empresa</NuxtLink>
        <NuxtLink to="/Servicos">Serviços</NuxtLink>
        <NuxtLink to="/Produtos">Produtos</NuxtLink>
      </div>
    </div>

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
  </div>
</template>
  
  <script>
export default {
  name: "A-EMPRESA",
};
</script>
  