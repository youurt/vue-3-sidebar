<template>
  <div
    class="sb--item"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    :id="pkMenuItem"
  >
    <div :class="['sb--link', `sb--link_level-${level}`]">
      <b-icon v-if="isFirstLevel" class="sb--icon" :icon="icon"></b-icon>

      <span
        @click="toggleArrow"
        v-b-toggle="`collapse-${String(indexCounter)}`"
        v-if="!collapsed || isHoverItem"
        class="sb--title"
      >
        {{ caption }}
      </span>

      <b-icon
        v-if="(!collapsed && hasChildren) || (hasChildren && isHoverItem)"
        @click="toggleArrow"
        :class="[arrowClass]"
        :icon="'caret-right'"
        v-b-toggle="`collapse-${String(indexCounter)}`"
      ></b-icon>
    </div>
  </div>

  <b-collapse v-if="hasChildren" :id="`collapse-${String(indexCounter)}`">
    <div class="sb--dropdown" v-if="!collapsed || isHoverItem">
      <div class="sb--list">
        <side-bar-item
          v-for="(item, index) in myChildren"
          :index-counter="item.PkMenuItem"
          :key="index"
          :collapsed="collapsed"
          :children="item._children"
          :show="show"
          :item="item"
          :level="level + 1"
          :caption="item.Caption.replace('#', '')"
          :is-hover-item="childIsUnknowm(item)"
        >
        </side-bar-item>
      </div>
    </div>
  </b-collapse>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import MenuDataInterface from '@/types/MenuData.interface'
import MenuItemsInterface from '@/types/MenuItems.interface'
import sideBarItemController from '@/controllers/sideBarItemController'
import sideBarItemSharedController from '@/controllers/sideBarItemSharedController'

export default defineComponent({
  name: 'SideBarItem',
  emits: ['mouseenter', 'mouseleave'],
  props: {
    collapsed: {
      type: Boolean,
      default: true
    },
    caption: {
      type: String
    },
    icon: {
      type: String
    },
    show: {
      type: Boolean,
      default: true
    },
    children: {
      type: Array as PropType<MenuDataInterface>,
      default: () => []
    },
    item: {
      type: Object as PropType<MenuItemsInterface>,
      default: () => ({})
    },
    level: {
      type: Number,
      default: 1
    },
    indexCounter: {
      type: String
    },
    isHoverItem: {
      type: Boolean,
      default: false
    },
    topOfElement: {
      type: Number
    },
    showSideBarHoverItem: {
      type: Boolean,
      default: false
    },
    pkMenuItem: {
      type: String
    },
    isChildItem: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const {
      arrowToggle,
      myChildren,
      mouseEnterHandler,
      mouseLeaveHandler,
      childIsUnknowm
    } = sideBarItemController(emit, props)

    const {
      toggleArrow,
      arrowClass,
      isFirstLevel,
      hasChildren
    } = sideBarItemSharedController(props.level, props!.item)

    return {
      toggleArrow,
      arrowToggle,
      arrowClass,
      myChildren,
      hasChildren,
      isFirstLevel,
      mouseEnterHandler,
      mouseLeaveHandler,
      childIsUnknowm
    }
  }
})
</script>
