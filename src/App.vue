<template>
  <div id="app" class="d-flex h-100">
    <side-bar :json-data="myData" />
    <div class="flex-fill overflow-auto">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import SideBar from '@/components/SideBar.vue'
import data from '@/data/menudata'
export default defineComponent({
  // components: {
  //   SideBar
  // },
  setup() {
    const show = ref(false)

    const myData = [
      {
        PkMenuItem: 'Item1',
        Caption: 'DashBoard',
        _children: [{ PkMenuItem: 'Item1Child', Caption: 'DashBoard Child 1' }],
        icon: 'justify'
      },
      {
        PkMenuItem: 'Item2',
        Caption: 'Charts',
        icon: 'building',
        _children: [
          {
            PkMenuItem: 'Item2Child',
            Caption: 'Carts Child 1',
            _children: [
              { PkMenuItem: 'Child2Child', Caption: 'Childs Child 1' },
              { PkMenuItem: 'Child2Child', Caption: 'Childs Child 2' },
              { PkMenuItem: 'Child2Child', Caption: 'Childs Child 3' }
            ]
          },
          { PkMenuItem: 'Item2Child', Caption: 'Carts Child 2' },
          { PkMenuItem: 'Item2Child', Caption: 'Carts Child 3' }
        ]
      },
      {
        PkMenuItem: 'Item3',
        Caption: 'Menu',
        icon: 'hammer'
      }
    ]

    return { show, data, myData }
  }
})
</script>

<style lang="scss">
@import '~bootstrap-icons/font/bootstrap-icons.css';
</style>
