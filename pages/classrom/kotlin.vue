<template>
  <div>
    <h1
      class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
    >
      Kotlin
    </h1>

    <p style="text-align: justify" class="leading-7 [&:not(:first-child)]:mt-6">
      Kotlin é uma linguagem de programação moderna e concisa que foi
      desenvolvida pela JetBrains, uma empresa de software com sede na Rússia.
      Foi anunciada pela primeira vez em 2011, mas a primeira versão estável foi
      lançada em fevereiro de 2016.
      <br />
      <br />
      A história do Kotlin está intimamente ligada aos desafios enfrentados pela
      JetBrains ao desenvolver software de alta qualidade de forma eficiente.
      Eles buscavam uma linguagem que fosse mais segura, concisa e expressiva do
      que Java, a linguagem predominante na época para o desenvolvimento de
      aplicativos Android. Em vez de simplesmente melhorar o Java, eles
      decidiram criar uma nova linguagem do zero que pudesse interagir
      perfeitamente com o Java, pois isso facilitaria a adoção por
      desenvolvedores que já estavam familiarizados com a plataforma Java.
      <br />
      <br />
      <h3 class="scroll-m-20 text-1xl font-semibold tracking-tight">"Hello Word" em Kotlin</h3>
      <UiSeparator class="my-2" />
      <pre  class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] text-sm">
fun main(){
  print("Hello World")
}
</pre>
      <br>
      Kotlin foi projetada para ser 100% interoperável com Java, o que significa
      que os desenvolvedores podem usar as bibliotecas existentes do Java em
      seus projetos Kotlin e vice-versa. Além disso, a linguagem inclui recursos
      modernos, como inferência de tipo, suporte a funções de primeira classe,
      extensões de função e tratamento de nulos de forma segura, o que a torna
      atraente para os desenvolvedores.
      <br />
      <br />
      Uma grande virada na história do Kotlin ocorreu em 2017, quando o Google
      anunciou que o Kotlin seria uma linguagem oficialmente suportada para o
      desenvolvimento de aplicativos Android, ao lado de Java. Isso impulsionou
      ainda mais a popularidade do Kotlin, especialmente entre os
      desenvolvedores de Android, que começaram a adotá-lo rapidamente para seus
      projetos.
      <br />
      <br />
      Hoje, o Kotlin é amplamente utilizado para o desenvolvimento de
      aplicativos Android, além de ser adotado em projetos corporativos,
      servidores web e outras áreas de desenvolvimento de software. Sua
      simplicidade, segurança e interoperabilidade com Java continuam a ser
      pontos fortes que contribuem para seu sucesso na comunidade de
      desenvolvedores.
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "classrom-layout",
});
</script>

<style scoped></style>
