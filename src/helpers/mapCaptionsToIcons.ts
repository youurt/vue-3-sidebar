import MenuIconsInterface from '@/types/MenuIcons.interface'
import MenuDataInterface from '@/types/MenuData.interface'

const mapCaptionsToIcons = (
  items: MenuDataInterface,
  menuIcons: MenuIconsInterface
) => {
  return items.map((item) => ({
    ...menuIcons.find(
      (menuIcon) => menuIcon.PkMenuItem === item.PkMenuItem && menuIcon
    ),
    ...item
  }))
}

export default mapCaptionsToIcons
