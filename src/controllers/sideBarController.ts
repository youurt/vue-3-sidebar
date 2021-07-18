import { ref, computed } from 'vue'
import mapCaptionsToIcons from '@/helpers/mapCaptionsToIcons'
import menuData from '@/data/menudata'
import menuIconsMap from '@/helpers/menuIconsMap'
import MouseObjectInterface from '@/types/MouseObject.interface'
import MenuDataInterface from '@/types/MenuData.interface'

const sideBarController = (data: MenuDataInterface) => {
  const collapsed = ref(true)
  const show = ref(false)
  const showSideBarHoverItem = ref(false)
  const topOfElement = ref(0)
  const selectedElement = ref('')
  const showHoverItem = ref(false)

  const collapseSidebar = computed(() => {
    return collapsed.value ? 'collapsed' : null
  })

  const handleClick = () => {
    collapsed.value = !collapsed.value
  }

  const maxwidth = computed(() => {
    return collapsed.value ? 'max-width: 50px;' : 'max-width: 350px;'
  })

  const dataWithIcons = mapCaptionsToIcons(data, menuIconsMap)

  const mouseEnterHandler = (o: MouseObjectInterface) => {
    showSideBarHoverItem.value = true
    const el = o.event.target as HTMLElement
    topOfElement.value = el.getBoundingClientRect().top
    selectedElement.value = o.pkMenuItem
  }

  const mouseLeaveHandler = (e: Event) => {
    showSideBarHoverItem.value = false
  }

  const showHover = computed(() => {
    return showSideBarHoverItem.value || showHoverItem.value
  })

  const hoverItemEnter = () => {
    showHoverItem.value = true
  }
  const hoverItemLeave = () => {
    showHoverItem.value = false
  }

  const iconSwitcher = computed(() => {
    return collapsed.value
      ? 'arrow-right-square-fill'
      : 'arrow-left-square-fill'
  })

  const cssVars = computed(() => {
    return { '--bg-color': '#efefef' }
  })

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

export default sideBarController
