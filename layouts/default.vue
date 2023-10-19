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
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>