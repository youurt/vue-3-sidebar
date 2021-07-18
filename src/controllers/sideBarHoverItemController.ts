import { computed, ref } from 'vue'
import MenuDataInterface from '@/types/MenuData.interface'
import { watchEffect, onMounted } from 'vue'
import sideBarController from '@/controllers/sideBarController'
import SideBarHoverItemInterface from '@/types/SideBarHoverItem.interface'

const sideBarHoverItemController = (
  emit: (
    event: 'hover-item-enter' | 'hover-item-leave',
    ...args: any[]
  ) => void,
  props: SideBarHoverItemInterface
) => {
  const selectedElementValue = ref<MenuDataInterface>([])
  const hoverEnter = ref(false)

  const { dataWithIcons } = sideBarController(props.jsonData!)
  watchEffect(() => {
    selectedElementValue.value = dataWithIcons.filter((menuItem) => {
      return menuItem.PkMenuItem === props.selectedElement!
    })
  })

  const hoverItemEnter = () => {
    hoverEnter.value = true
    emit('hover-item-enter', hoverEnter.value)
  }

  const hoverItemLeave = () => {
    hoverEnter.value = false
    emit('hover-item-leave', hoverEnter.value)
  }

  const data = selectedElementValue.value[0]._children!

  type Data = typeof data

  const childData = ref<Data>([])

  onMounted(() => {
    childData.value = data
  })

  const styleGenerator = computed(() => {
    return `position: absolute; top: ${
      props!.topOfElement
    }px; left: 0px; padding-left: 50px; z-index: 0; width: 876px; max-width: 350px;`
  })

  return {
    selectedElementValue,
    // hoverEnter,
    hoverItemEnter,
    hoverItemLeave,
    childData,
    styleGenerator
  }
}

export default sideBarHoverItemController
