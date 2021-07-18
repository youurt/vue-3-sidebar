import MenuDataInterface from '@/types/MenuData.interface'
import MenuItemsInterface from '@/types/MenuItems.interface'

interface SideBarItemInterface {
  children: MenuDataInterface
  item: MenuItemsInterface
  level: number
}

export default SideBarItemInterface
