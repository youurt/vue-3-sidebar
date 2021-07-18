<template>
  <div :id="'sb'" :class="[collapseSidebar]">
    <div :class="['sb--sidebar-menu']" :style="[maxwidth, cssVars]">
      <div class="sb--scroll-wrapper">
        <div class="sb--list">
          <side-bar-item
            v-for="(item, index) in jsonData"
            :key="index"
            :index-counter="item.PkMenuItem"
            :collapsed="collapsed"
            :icon="item.icon"
            :children="item._children"
            :caption="item.Caption"
            :pkMenuItem="item.PkMenuItem"
            :show="show"
            :item="item"
            @mouseenter="mouseEnterHandler"
            @mouseleave="mouseLeaveHandler"
          />

          <side-bar-hover-item
            v-if="showHover && collapsed"
            :show="show"
            :collapsed="collapsed"
            :topOfElement="topOfElement"
            :selected-element="selectedElement"
            @hover-item-enter="hoverItemEnter"
            @hover-item-leave="hoverItemLeave"
            :json-data="jsonData"
          />
        </div>
      </div>
      <side-bar-toggle-button
        :icon-switcher="iconSwitcher"
        @click="handleClick"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import sideBarController from '@/controllers/sideBarController'
import MenuDataInterface from '@/types/MenuData.interface'

export default defineComponent({
  name: 'SideBar',
  props: {
    jsonData: {
      type: Object as PropType<MenuDataInterface>,
      default: () => ({})
    }
  },
  setup(props) {
    const {
      collapsed,
      collapseSidebar,
      handleClick,
      maxwidth,
      dataWithIcons,
      show,
      mouseEnterHandler,
      mouseLeaveHandler,
      topOfElement,
      selectedElement,
      hoverItemEnter,
      hoverItemLeave,
      showHover,
      iconSwitcher,
      cssVars
    } = sideBarController(props.jsonData!)

    return {
      collapsed,
      collapseSidebar,
      handleClick,
      maxwidth,
      dataWithIcons,
      show,
      mouseEnterHandler,
      mouseLeaveHandler,
      topOfElement,
      selectedElement,
      hoverItemEnter,
      hoverItemLeave,
      showHover,
      iconSwitcher,
      cssVars
    }
  }
})
</script>

<style scoped lang="scss">
#sb {
  transition: 0.3s ease;
  padding-left: 350px;
}

#sb.collapsed {
  padding-left: 50px;
}

.sb--sidebar-menu {
  * {
    box-sizing: border-box;
  }

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 999;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  transition: 0.3s max-width ease;
  background-color: var(--bg-color);

  .sb--scroll-wrapper {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .sb--dropdown {
    > .sb--list {
      padding-left: 5px;
    }

    // & .sb--list {
    //   background-color: purple;
    // }
    // & .sb--link {
    //   color: grey;
    // }
    // & .sb--icon {
    //   color: grey;
    // }
  }

  .sb--item {
    position: relative;
    display: block;
    width: 100%;
    white-space: nowrap;
    background-color: #efefef;
    &:hover {
      background-color: darken(#efefef, 3%);
      // & .sb--icon {
      //   background-color: blue;
      // }
    }
  }

  .sb--link {
    cursor: pointer;
    position: relative;
    display: flex;
    color: #2a2a2e;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    padding: 10px;
    line-height: 30px;
    text-decoration: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 20;
    transition: 0.3s all ease;
  }

  .sb--title {
    flex-grow: 1;
  }

  .sb--icon {
    height: 30px;
    line-height: 30px;
    width: 30px;
    flex-shrink: 0;
    text-align: center;
  }

  .sb--toggle-btn {
    display: block;
    text-align: center;
    font-style: normal;
    font-weight: 900;
    height: 50px;
    cursor: pointer;
    border: none;
    width: 100%;
  }

  .sb--arrow {
    width: 30px;
    text-align: center;
    font-style: normal;
    font-weight: 900;
    transition: 0.3s transform ease;

    &_open {
      transform: rotate(90deg);
    }
  }
}
</style>
