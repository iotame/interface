<template>
  <div class="">
    <div class="form">
      <form>
        <div class="inputs">
          <div class="input w-full">
            <input class="w-full focus:no-outline" type="text" placeholder="Username" autocomplete="username">
          </div>
          <div class="input w-full">
            <input class="w-full" type="password" placeholder="Password" autocomplete="current-password">
          </div>
        </div>

        <div class="buttons">
          <button type="submit" class="sign-in text-white bg-blue hover:bg-blue-dark w-full py-3 font-semibold rounded">Sign in</button>
          <a class="sign-up text-grey hover:text-grey-dark" href="#">Sign Up</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('../assets/login-background.png');
    background-repeat: no-repeat;
    background-position: 50% calc(50% - 30px);
  }

  .form {
    width: 312px;
  }

  .inputs {
    border-radius: 10px;
    border: 8px solid #E8E8E8;

    .input { position: relative; }
    .input:not(:last-of-type)::after {
      content: "";
      position: absolute;
      left: 10px;
      right: 10px;
      bottom: 0;
      border-bottom: 1px solid #C4C4C4;
    }

    input {
      display: block;
      padding: 10px 20px;
      height: 60px;

      &:focus {
        outline: none;
      }
    }
  }

  .buttons {
    margin-top: 35px;

    .sign-in {
      font-size: 21px;
      height: 50px;
      margin-bottom: 8px;
    }

    .sign-up {
      font-size: 15px;
    }
  }
</style>
