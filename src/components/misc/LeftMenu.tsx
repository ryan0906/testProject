import React from 'react';

import '@styles/misc/LeftMenu.less';
import { StatusActiveIcon } from './CustomIcon';

type LeftMenuItem = {
  key: string,
  title: string,
  icon: JSX.Element,
  activeIcon: JSX.Element
}

interface LeftMenuProps {
  items: LeftMenuItem[],
  activeKey: string,
  onClick: (key: string) => void
}

export default function LeftMenu(props: LeftMenuProps) {
  const onMenuItemClick = (_e: any, key: string) => {
    props.onClick(key);
  }

  return (<div className='left-menu'>
    {props.items.map((item: LeftMenuItem) => (
    <div className='left-menu-item' key={item.key} onClick={(e) => onMenuItemClick(e, item.key)}>
      <div className='icon'>
        <span className={`icon-container ${(props.activeKey == item.key) ? 'active' : ''}`}>
          {(props.activeKey == item.key) ? item.activeIcon : item.icon}
        </span>
      </div>
      <div className='text-medium-m'>{item.title}</div>
    </div>
    ))}
  </div>);
}