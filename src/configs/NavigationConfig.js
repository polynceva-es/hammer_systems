import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'home',
      path: `${APP_PREFIX_PATH}/home`,
      title: 'home',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'catalog',
      path: `${APP_PREFIX_PATH}/catalog`,
      title: 'catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'orders',
      path: `${APP_PREFIX_PATH}/orders`,
      title: 'orders',
      icon: ShoppingOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'clients',
      path: `${APP_PREFIX_PATH}/clients`,
      title: 'clients',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'clients-list',
          path: `${APP_PREFIX_PATH}/clients/user-list`,
          title: 'clientList',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
      ]
    },
    {
      key: 'planer',
      path: `${APP_PREFIX_PATH}/planer`,
      title: 'planer',
      icon: ShoppingOutlined,
      breadcrumb: true,
      submenu: []
    },
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree
]



export default navigationConfig;

