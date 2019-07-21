import {  Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import router from "../../router/index"
import { injectIntl } from "react-intl"
const { SubMenu } = Menu;
let routerarr = [];
for (let elem of router.values()) {
  routerarr.push(...elem.children)
}
function MenuList(props) {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["sub1"]}>
      {
        router.map((item, i) =>
          <SubMenu key={i} title={<span><Icon type="team" /><span>{props.intl.formatMessage({ id: item.id })}</span></span>}>
            {
              item.children.map((item, i) => {
                return item.id?<Menu.Item key={i}><NavLink to={item.path}>{props.intl.formatMessage({ id: item.id })}</NavLink></Menu.Item>:null
              }
              )
            }
          </SubMenu>
        )
      }
    </Menu>
  );
}
export default injectIntl(MenuList);
