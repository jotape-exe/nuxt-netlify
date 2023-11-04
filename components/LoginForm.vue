<script setup lang="ts">
import { ref, h } from "vue";
//import LucideSpinner from '~icons/lucide/loader-2'
//import GitHubLogo from '~icons/radix-icons/github-logo'

import { cn } from "@/lib/utils";
import { LucideLoader2 } from "lucide-vue-next";
import { LucideGithub } from "lucide-vue-next";
import type { Login } from "~/interfaces/ILogin";
import { ToastAction } from "radix-vue";
import { useToast } from "./ui/toast";
import { Button } from "./ui/button";

const { toast } = useToast();
const isLoading = ref(false);
const router = useRouter();
const api = useAuthApi();

const login = useLogin();

const form: Login = reactive({
  usuario: "",
  senha: "",
});

async function doLogin() {
  isLoading.value = true;

  const request = await api.realizarLogin(form);

  setTimeout(() => {
    isLoading.value = false;
  }, 3000);

  toast({
    title: "request.data",
    description: "There was a problem with your request.",
    variant: "default",
    action: h(
      ToastAction,
      {
        altText: "Try again",
      },
      {
        default: () => "Try again",
      }
    ),
  });

 router.push("/");
}
</script>

<template>
  <div :class="cn('grid gap-6', $attrs.class ?? '')">
    <form @submit="doLogin">
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
            auto-capitalize="none"
            auto-complete="senha"
            v-model="form.senha"
            auto-correct="off"
            :disabled="isLoading"
          />
        </div>
        <Button :disabled="isLoading">
          <LucideLoader2 v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
          Entrar
        </Button>
      </div>
    </form>
  </div>
</template>
