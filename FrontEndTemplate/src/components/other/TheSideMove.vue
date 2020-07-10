<template>
  <div id="TheSideMove">
    <section>
      <router-view></router-view>
    </section>
    <section>
      <VIcon @click.native="isShowSide()" icon="keyboard_arrow_right" iclass="small  yellow lighten-2 black-text pulse">
      </VIcon>
    </section>
    <transition enter-active-class="showAndHide-enter-active" leave-active-class="showAndHide-leave-active">
      <section v-if="showSide">
        <VSideNavbar @emit="isShowSide"></VSideNavbar>
        <div>
          <VIcon @click.native="isShowSide()" iclass="medium pink-text lighten-1">
          </VIcon>
        </div>
      </section>
    </transition>
  </div>
</template>
<script>
const VIcon = () => import("@c/other/VIcon.vue")
const VSideNavbar = () => import("@c/project/VSideNavbar.vue")

export default {
  name: 'TheSideMove',
  data() {
    return {
      showSide: false
    }
  },
  components: {
    VIcon,
    VSideNavbar
  },
  methods: {
    isShowSide() {
      this.showSide = !this.showSide
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/style.scss";

#TheSideMove {
  section:nth-of-type(1) {
    display: flex;
    justify-content: center;

    div {
      width: 95%;
    }
  }

  section:nth-of-type(2) {
    .VIcon {
      position: fixed;
      top: 20px;
    }
  }

  section:nth-of-type(3) {
    z-index: 99;
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    div:nth-of-type(1) {
      width: 350px;
      background-color: $color1;
    }

    div:nth-of-type(2) {
      width: 100%;
      background-color: $color7;
      padding-top: 0.5rem;
      padding-right: 0.5rem;

      .VIcon {
        float: right;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background-color: $color8;
        transition: all 0.5s;
      }
      .VIcon:hover{
        transform: rotate(450deg);
        transform-origin: 25px 25px;
      }
    }

  }
}

@media (max-width:600px) {
  #TheSideMove {
    section:nth-of-type(1) {
      div {
        width: 100%;
      }
    }
  }
}
</style>