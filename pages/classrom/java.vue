<template>
  <div>
    <h1
      class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
    >
      Java
    </h1>

    <p style="text-align: justify" class="leading-7 [&:not(:first-child)]:mt-6">
      O Java é uma das linguagens de programação mais influentes e populares da
      história da computação moderna. Foi criado por James Gosling, Mike
      Sheridan e Patrick Naughton na década de 1990 enquanto trabalhavam na Sun
      Microsystems, uma empresa de tecnologia que mais tarde foi adquirida pela
      Oracle Corporation. A primeira versão pública do Java foi lançada em 1995.
      <br />
      <br />
      A história do Java está profundamente ligada à necessidade de desenvolver
      software que pudesse ser executado em diferentes plataformas de hardware
      sem a necessidade de reescrever o código-fonte. Na época do seu
      desenvolvimento, havia uma grande diversidade de dispositivos e sistemas
      operacionais, o que tornava desafiador escrever programas que pudessem ser
      executados em todos eles.
      <br />
      <br />
      O Java resolveu esse problema introduzindo o conceito de "Write Once, Run
      Anywhere" (WORA), que significa que o código escrito em Java pode ser
      executado em qualquer dispositivo ou sistema que tenha uma máquina virtual
      Java (JVM) instalada. A JVM atua como uma camada de abstração entre o
      código Java e o sistema operacional, permitindo que os programas Java
      sejam altamente portáteis.
      <br />
      <br />
      <h3 class="scroll-m-20 text-1xl font-semibold tracking-tight">"Hello Word" em Java</h3>
      <UiSeparator class="my-2" />
<pre  class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] text-sm">
public class HelloWorld {
      public static void main(String[] args) {
          System.out.println("Hello, World!");
      }
}
</pre>
      <br>

      Ao longo dos anos, o Java se tornou a escolha preferida para o
      desenvolvimento de aplicativos empresariais, aplicativos para dispositivos
      móveis (por meio da plataforma Android) e aplicativos da web. Sua sintaxe
      simples e poderosa, juntamente com sua portabilidade, ajudaram a
      impulsionar sua popularidade.
      <br />
      <br />
      Além disso, o Java também influenciou o desenvolvimento de outras
      linguagens de programação modernas, e muitos dos conceitos introduzidos
      pelo Java, como a máquina virtual e a segurança robusta, são amplamente
      utilizados em várias tecnologias e linguagens de programação hoje em dia.
      <br />
      <br />
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "classrom-layout",
});
</script>

