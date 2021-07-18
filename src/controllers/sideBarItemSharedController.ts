import MenuDataInterface from '@/types/MenuData.interface'
import { ref, computed } from 'vue'
import MenuItemsInterface from '@/types/MenuItems.interface'

const sideBarItemSharedController = (
  level: number,
  selectedElement?: Record<string, unknown> | MenuItemsInterface
) => {
  const myChildren = ref<MenuDataInterface>([])
  const arrowToggle = ref(false)
  const toggleArrow = () => {
    arrowToggle.value = !arrowToggle.value
  }
  const arrowClass = computed(() => {
    return arrowToggle.value ? 'sb--arrow sb--arrow_open' : 'sb--arrow'
  })
  const isFirstLevel = computed(() => {
    return level === 1
  })

  const hasChildren = computed(() => {
    return Object.prototype.hasOwnProperty.call(selectedElement, '_children')
  })

  return {
    myChildren,
    arrowToggle,
    toggleArrow,
    arrowClass,
    isFirstLevel,
    hasChildren
  }
}

export default sideBarItemSharedController
