<template>
  <div>
    <h1>Tela de Login</h1>

    <h1>Student Login Form</h1>
    <div class="container">
      <label>Username : </label>
      <input v-model="login.usuario"
        type="text"
        placeholder="Usuario"
        name="username"
        required
      />
      <label>Password : </label>
      <input v-model="login.senha"
        type="password"
        placeholder="Senha"
        name="password"
        required
      />
      <button type="button" @click="logar()">Login</button>
      <input type="checkbox" checked="checked" /> Remember me
      <button type="button" class="cancelbtn">Cancel</button>
      Forgot <a href="#"> password? </a>
    </div>

    <br />
    {{ login }}

    <br />
    sessao
    <br />

    {{ sessao }}
  </div>
</template>
  
  <script setup>
const { realizarLogin } = useAuthApi();

const login = reactive({
  usuario: "00000000000",
  senha: "asd123",
});

let sessao = ref({});


const logar = async () => {
    sessao.value = {};
  const { success, status, body } = await realizarLogin(login);
  if (success) {
    //successNotify(status.message);
    console.log("body", body);
    //auth.setToken(body.token);
    //auth.setUsuario(body.usuario);
    //router.push("/");
  } else {
    //errorNotify(status.message);
    alert(status.message + " " + status.suggestion )
  }
  
  sessao.value = body;
};
</script>
  