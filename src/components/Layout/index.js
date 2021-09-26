import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { BrowserRouter, Link } from 'react-router-dom';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FolderOutlined,
} from '@ant-design/icons';

import AppRouter from '../../components/AppRouter';

import './style.css';

const { Header, Sider } = Layout;
const { Content } = Layout;

export default class MainLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Layout style={{height:"100vh"}}>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu
              theme="dark" 
              mode="inline"
              >
                <Menu.Item key="1">
                  <Link to="/decks"><FolderOutlined /><span>Decks</span></Link>
                </Menu.Item>
              </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
              <div style={{
                    display: 'flex',
                    float: 'right',
                    height: '64px',
                    marginLeft: 'auto',
                    overflow: 'hidden',
                    padding: '14px'
              }}>
              <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>T</Avatar>
              </div>
            </Header>
            <Content>
              <AppRouter />
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}
