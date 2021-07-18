<template>
  <div
    class="sb--hover-item"
    @mouseenter="hoverItemEnter"
    @mouseleave="hoverItemLeave"
    :style="styleGenerator"
  >
    <div class="sb--item" :id="selectedElement">
      <div :class="['sb--link', `sb--link_level-${level}`]">
        <span
          @click="toggleArrow"
          v-b-toggle="`collapse-${String(level)}-${selectedElement}`"
          class="sb--title"
          >{{ selectedElementValue[0].Caption.replace('#', '') }}</span
        >

        <b-icon
          v-if="hasChildren"
          @click="toggleArrow"
          :class="[arrowClass]"
          :icon="'caret-right'"
          v-b-toggle="`collapse-${String(level)}-${selectedElement}`"
        />
      </div>

      <b-collapse
        v-if="hasChildren"
        :id="`collapse-${String(level)}-${selectedElement}`"
      >
        <div class="sb--dropdown">
          <div class="sb--list">
            <side-bar-item
              v-for="(item, index) in childData"
              :key="index"
              :collapsed="collapsed"
              :children="item._children"
              :index-counter="item.PkMenuItem"
              :show="show"
              :item="item"
              :level="level + 1"
              :caption="item.Caption"
              is-hover-item
            />
          </div>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import sideBarHoverItemController from '@/controllers/sideBarHoverItemController'
import sideBarItemSharedController from '@/controllers/sideBarItemSharedController'
import MenuDataInterface from '@/types/MenuData.interface'

export default defineComponent({
  name: 'SideBarHoverItem',
  emits: ['hover-item-enter', 'hover-item-leave'],
  props: {
    topOfElement: {
      type: Number
    },
    collapsed: {
      type: Boolean,
      default: true
    },
    caption: {
      type: String
    },
    selectedElement: {
      type: String
    },
    level: {
      type: Number,
      default: 1
    },
    show: {
      type: Boolean,
      default: true
    },
    jsonData: {
      type: Object as PropType<MenuDataInterface>,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    const {
      selectedElementValue,
      // hoverEnter,
      hoverItemEnter,
      hoverItemLeave,
      childData,
      styleGenerator
    } = sideBarHoverItemController(emit, props)

    const {
      myChildren,
      toggleArrow,
      arrowClass,
      isFirstLevel,
      hasChildren
    } = sideBarItemSharedController(props.level, selectedElementValue.value[0])

    return {
      hoverItemEnter,
      hoverItemLeave,
      selectedElementValue,
      isFirstLevel,
      hasChildren,
      arrowClass,
      toggleArrow,
      myChildren,
      childData,
      styleGenerator
    }
  }
})
</script>
