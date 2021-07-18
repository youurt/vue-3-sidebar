interface MenuItemsInterface {
  PkMenuItem: string
  FkParentMenuItem: string | null
  BaseOrder: number
  Caption: string
  CanEdit: boolean
  CanViewList: boolean
  CanViewDetails: boolean
  CanSave: boolean
  CanDelete: boolean
  UriProperties: string | null
  UriData: string | null
  PrimaryKey: string | null
  ApiName: string | null
  EntityName: string | null
  icon?: string
  _children?: []
}

export default MenuItemsInterface
