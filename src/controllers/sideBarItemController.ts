import SideBarItemInterface from '@/types/SideBarItem.interface'
import { ref, computed, onMounted } from 'vue'
import sideBarItemSharedController from '@/controllers/sideBarItemSharedController'

const sideBarItemController = (
  emit: (event: 'mouseenter' | 'mouseleave', ...args: any[]) => void,
  props: SideBarItemInterface
) => {
  onMounted(() => {
    myChildren.value = props!.children!
  })

  const arrowToggle = ref(false)

  const { myChildren } = sideBarItemSharedController(props.level)

  const toggleArrow = () => {
    arrowToggle.value = !arrowToggle.value
  }

  const mouseEnterHandler = (e: Event) => {
    const el = e.target as HTMLElement
    emit!('mouseenter', { event: e, pkMenuItem: el.id })
  }

  const mouseLeaveHandler = (e: Event) => {
    emit!('mouseleave', e)
  }

  const arrowClass = computed(() => {
    return arrowToggle.value ? 'sb--arrow sb--arrow_open' : 'sb--arrow'
  })

  const isFirstLevel = computed(() => {
    return props!.level === 1
  })

  const childIsUnknowm = (item: Record<string, unknown>) => {
    return typeof item._children !== undefined
  }

  return {
    toggleArrow,
    arrowToggle,
    arrowClass,
    myChildren,
    isFirstLevel,
    mouseEnterHandler,
    mouseLeaveHandler,
    childIsUnknowm
  }
}

export default sideBarItemController
