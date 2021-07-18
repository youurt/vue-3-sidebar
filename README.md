# vue-3-sidebar
Vue 3 Plugin for a collapsable Sidebar with childs and hover on Items!



## Using the Plugin
```
yarn add vue-3-sidebar
```

in main.js / main.ts

```javascript
import Vue3Sidebar from 'vue-3-sidebar'
```

and then import it globally like this:

```javascript
createApp(App).use(Vue3Sidebar).mount('#app')
```

Dont forget to add Bootstrap 5 to your Vu3 3 Project


```
yarn add bootstrap

```

and then in your main.js / main.ts

```javascript
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
```

If you use typescript add a vendor.d.ts file for the package:

```javascript
declare module 'vue-3-sidebar'
```


## The data structure of data object should be like this::
```javascript


setup() {
    

    const myData = [
      {
        PkMenuItem: 'Item1',
        Caption: 'DashBoard',
        _children: [{ PkMenuItem: 'Item1Child', Caption: 'DashBoard Child 1' }],
        icon: 'justify'
      },
      {
        PkMenuItem: 'Item2',
        Caption: 'Charts',
        icon: 'building',
        _children: [
          {
            PkMenuItem: 'Item2Child',
            Caption: 'Carts Child 1',
            _children: [
              { PkMenuItem: 'Child2Child', Caption: 'Childs Child 1' },
              { PkMenuItem: 'Child2Child', Caption: 'Childs Child 2' },
              { PkMenuItem: 'Child2Child', Caption: 'Childs Child 3' }
            ]
          },
          { PkMenuItem: 'Item2Child', Caption: 'Carts Child 2' },
          { PkMenuItem: 'Item2Child', Caption: 'Carts Child 3' }
        ]
      },
      {
        PkMenuItem: 'Item3',
        Caption: 'Menu',
        icon: 'hammer'
      }
    ]

    return { myData }
  }
})

```


and then in in your template feed the data as prop:

```html

 <side-bar :json-data="myData" />

```

That's it!


