import React from 'react';
import { Switch, Route, RouteComponentProps, useHistory } from 'react-router-dom';
import { Layout } from 'antd';

import { View } from 'common/const';
import { camelToCapWord } from 'common/common';
import { EventLogView, VehicleStatusView } from '@views/lazyLoad.view';
import { StatusIcon, StatusActiveIcon, LogIcon, LogActiveIcon } from '@misc/CustomIcon';
import LeftMenu from '@misc/LeftMenu';

import '@styles/layouts/main.layout.less';

const { Header, Content, Sider } = Layout;

type UrlParams = {
  view: View
}
interface MainLayoutProps extends RouteComponentProps<UrlParams> {}

export default function MainLayout(props: MainLayoutProps) {
  const activeView = props.match.params.view;
  const history = useHistory();

  const onMenuClick = (key: string) => {
    history.push(`/${key}`);
  }

  return (
    <Layout className='main-layout'>
      <Header className='main-layout-header text-regular-l'>
        {camelToCapWord(activeView)}
      </Header>
      <Content>
        <Layout className='main-layout-sub'>
          <Sider className='main-layout-sider' collapsible={false} width={80}>
            <LeftMenu items={[
              {
                key: View.vehicleStatus, title: 'Status',
                icon: <StatusIcon />, activeIcon: <StatusActiveIcon />
              },
              {
                key: View.eventLog, title: 'Log',
                icon: <LogIcon />, activeIcon: <LogActiveIcon />
              }
            ]} activeKey={activeView} onClick={onMenuClick} />
          </Sider>
          <Content className='view-content'>
            <Switch>
              <Route path={`/${View.vehicleStatus}`}
                render={(routeProps) => <VehicleStatusView {...routeProps} />} />
              <Route path={`/${View.eventLog}`}
                render={(routeProps) => <EventLogView {...routeProps} />} />
            </Switch>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}