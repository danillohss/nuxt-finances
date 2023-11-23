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
    <pre>{{ services }}</pre>
  </div>
</template>
  
  <script>
export default {
  name: "Servicos",
  head() {
    return {
      title: "Servicos",
      meta: [{ hid: "services", name: "service", content: "Meu serviço" }],
    };
  },
  data() {
    return {
      services: [],
    };
  },
  async fetch() {
    this.services = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/users?_limit=3"
    );
  },
};
</script>
  