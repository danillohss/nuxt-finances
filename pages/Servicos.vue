<template>
  <div>
    <div>
      <div class="container mx-auto">
        <h1 class="text-lg font-bold">Serviços</h1>
        <NuxtLink to="/servicos/desenvolvimento-de-sites">
          Desenvolvimento de sites
        </NuxtLink>
        <NuxtLink to="/servicos/marketing-digital">
          Marketing digital
        </NuxtLink>
        <br /><br />
        <NuxtChild />
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Servicos",
};
</script>
  