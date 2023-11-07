<script setup>
import { ref, h } from "vue";
import { Loader2 } from 'lucide-vue-next';
//import GitHubLogo from '~icons/radix-icons/github-logo'

import { cn } from "@/lib/utils";

import { LucideGithub } from "lucide-vue-next";
//import type { Login } from "~/interfaces/ILogin";
import { ToastAction } from "radix-vue";
import { Toaster, useToast } from "./ui/toast";
import { Button } from "./ui/button";

const { toast } = useToast();
const isLoading = ref(false);
const router = useRouter();

const { realizarLogin } = useAuthApi();

const form = reactive({
  usuario: "",
  senha: "",
});


const logar = async () => {
  isLoading.value = true

  const { success, status, body } = await realizarLogin(form);

  setTimeout(() => {
      isLoading.value = false;
    }, 2000);

  if (status.success) {

    toast({
      title: status.message,
      description: "There was a problem with your request.",
      variant: "default"
    });

    router.push("/app");
  } else {
    toast({
      title: status.message,
      description: status.suggestion,
      variant: "destructive"
    });
  }

  isLoading.value = true;
};
</script>

<template>
  <div :class="cn('grid gap-6', $attrs.class ?? '')">
    <form @submit.prevent="logar()">
      <div class="grid gap-2">
        <div class="grid gap-1">
          <UiLabel class="sr-only" for="email"> Email </UiLabel>
          <UiInput
            id="email"
            placeholder="name@example.com"
            auto-capitalize="none"
            auto-complete="email"
            v-model="form.usuario"
            auto-correct="off"
            :disabled="isLoading"
          />
        </div>
        <div class="grid gap-1">
          <UiLabel class="sr-only" for="email"> Senha </UiLabel>
          <UiInput
            id="senha"
            placeholder="*********"
            type="password"
            v-model="form.senha"
            auto-correct="off"
            :disabled="isLoading"
          />
        </div>
        <Button type="submit"  :disabled="isLoading">
          <Loader2 v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
          Entrar
        </Button>
      </div>
    </form>
  </div>
  <Toaster />
</template>
