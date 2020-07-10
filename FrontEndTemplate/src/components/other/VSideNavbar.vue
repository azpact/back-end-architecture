<template>
  <div class="VSideNavbar">
    <div class="row">
      <div class="col s12">
        <VCircularImg></VCircularImg>
      </div>
      <div class="col s12">
        <p>GitHub <a class="github" href="https://github.com/azpact" target="_black">azpact</a></p>
        <p>Email w53652456@gmail.com</p>
      </div>
    </div>
    <div>
      <ul>
        <li>
          <router-link to="/" @click.native="clearnLink()">
            <h5>Ben Li</h5>
          </router-link>
        </li>
        <li v-for="item in listNavBar" :key="item.id" class="liLink">
          <router-link :to="item.link" @click.native="clearnLink()">
            {{item.label}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
const VCircularImg = () => import("@c/img/VCircularImg.vue")


export default {
  name: 'VSideNavbar',
  data() {
    return {
      listNavBar: [
        { label: "首頁", link: "/" },
        { label: "關於我", link: "/AboutMe" },
        { label: "作品集", link: "/Portfolio" },
        { label: "聯絡我", link: "/ContactMe" },
        { label: "關於本站", link: "/AboutWebsite" },
        { label: "個人工具", link: "/PersonalTools" },
      ]
    }
  },
  components: {
    VCircularImg
  },
  methods: {
    clearnLink() {
      this.$emit("emit")
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/style.scss";

.VSideNavbar {
  div:nth-of-type(1) {
    background-color: $color5;

    div:nth-of-type(1) {
      margin-top: 0.5rem;
    }

    p {
      text-align: left;
      color: $color1;
      font-size: 1rem;
      font-weight: bold;
    }
  }

  ;

  div:nth-of-type(2) {
    .liLink {
      font-size: 1.25rem;
      padding-bottom: 0.5rem;

      a {
        &:hover {
          border-bottom-style: solid;
          border-bottom-color: $color4;
        }
      }
    }
  }

  .github {
    color: $color1;

    &:hover {
      border-bottom-style: solid;
      border-bottom-color: $color1;
    }
  }
}

@media (max-width:600px) {
  .VSideNavbar {
    div {
      div:nth-of-type(2) {
        display: none;
      }
    }
  }
}
</style>