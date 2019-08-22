import React, { Component } from 'react';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import { Layout, Menu, Icon, Breadcrumb, Row, Button } from 'antd';
import { Link } from "react-router-dom";
import AuthService from '../../../../services/AuthService';
import { withTranslation } from "react-i18next";
import { Aux } from '../../../../hoc/index';

const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;


const auth = new AuthService();


class Navigation extends Component {

  state = {
    collapsed: false,
    site: '',
    visibleEN: true,
    visibleDE: true,
    visibleSK: true,
  };


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  logout = () => {
    auth.logout();
    window.location.assign('/');
  };

  render() {

    const style = {
      logoImg: {
        width: "40px",
        marginRight: "8px"
      },
      logoTitle: {
        verticalAlign: "text-bottom",
        fontSize: "16px",
        textTransform: "uppercase",
        display: "inline-block",
        color: "white"
      },
      body: {
        background: '#fff',
        padding: 30,
        height: "80vh",
        overflow: "scroll"
      },
    };

    return (
      <Aux>
        <div>
          <ConfigProvider locale={enUS}>
            <Layout>
              <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}

              >
                <div className="logo">

              <span style={style.logoTitle}>
                               TeachMaker
                            </span>
                </div>
                <Menu className="MenuAdmin" theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                  <Menu.Item key="App.home">
                    <Link to={{ pathname: '/admin' }} onClick={() => this.setState({ site: "Home" })}>
                      <Icon type="home"/>
                      {this.state.collapsed ? null :
                        <span className="nav-text">{this.props.t('admin.menuHome', { frameWork: "react-i18next" })}</span>}
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="App.form" onClick={() => this.setState({ site: "Generator" })}>
                    <Link to={{ pathname: '/generator' }} onClick={() => this.setState({ site: "Generator" })}>
                      <Icon type="solution"/>
                      {this.state.collapsed ? null :
                        <span className="nav-text">{this.props.t('admin.menuGenerator', { frameWork: "react-i18next" })}</span>}
                    </Link>
                  </Menu.Item>

                  <SubMenu key="sub1" title={<span><Icon type="setting"/><span>{this.props.t('admin.menuSettings', { frameWork: "react-i18next" })}</span></span>}>
                    <Menu.Item key="3" onClick={() => this.setState({ site: "Settings/Account" })}>
                      <Link to={{ pathname: '/account' }} onClick={() => this.setState({ site: "Settings/Account" })}>
                        {this.state.collapsed ? null :
                          <span className="nav-text">{this.props.t('admin.menuAccounts', { frameWork: "react-i18next" })}</span>}
                      </Link>
                    </Menu.Item>

                    <Menu.Item key="4" onClick={() => this.setState({ site: "Settings/Invitation" })}>
                      <Link to={{ pathname: '/invitation' }} onClick={() => this.setState({ site: "Settings/Invitation" })}>
                        {this.state.collapsed ? null :
                          <span className="nav-text">{this.props.t('admin.menuInvitation', { frameWork: "react-i18next" })}</span>}
                      </Link>
                    </Menu.Item>
                  </SubMenu>

                  <Menu.Item key="5" onClick={() => this.setState({ site: "About" })}>
                    <Link to={{ pathname: '/about' }} onClick={() => this.setState({ site: "About" })}>
                      <Icon type="info"/>
                      {this.state.collapsed ? null :
                        <span className="nav-text">{this.props.t('admin.menuAbout', { frameWork: "react-i18next" })}</span>}
                    </Link>
                  </Menu.Item>

                  <Menu.Item key="6">
                    <div onClick={this.logout}>
                      <Icon type="poweroff"/>
                      {this.state.collapsed ? null :
                        <span className="nav-text">{this.props.t('admin.menuLogOut', { frameWork: "react-i18next" })}</span>}
                    </div>
                  </Menu.Item>

                  <div className="Languages">
                    {this.state.visibleEN && localStorage.getItem('i18nextLng') !== 'en' ?
                      <Button onClick={() => {
                        this.setState({ visibleEN: false, visibleDE: true, visibleSK: true });
                        localStorage.setItem('i18nextLng', 'en');
                        window.location.assign(window.location.pathname)
                      }}>EN</Button>
                      : null}
                    {this.state.visibleDE && localStorage.getItem('i18nextLng') !== 'de' ?
                      <Button onClick={() => {
                        this.setState({ visibleEN: true, visibleDE: false, visibleSK: true });
                        localStorage.setItem('i18nextLng', 'de');
                        window.location.assign(window.location.pathname)
                      }
                      }> DE </Button>
                      : null}
                    {this.state.visibleSK && localStorage.getItem('i18nextLng') !== 'sk' ?
                      <Button onClick={() => {
                        this.setState({ visibleEN: true, visibleDE: true, visibleSK: false });
                        localStorage.setItem('i18nextLng', 'sk');
                        window.location.assign(window.location.pathname)
                      }}>SK</Button>
                      : null}
                  </div>
                </Menu>
              </Sider>

              <Layout style={{ height: "100vh" }}>

                <Header style={{ background: 'rgba(255, 255, 255, 0.65)', padding: 0 }}>
                  <Row>
                    {/*
                     <Col  style={{margin: '0 18px'}}>
                     <Icon
                     className="trigger"
                     type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                     onClick={this.toggle}
                     />
                     </Col>*/}

                    <div className="identity">
                     <span>
                  {localStorage.getItem('email')}
                </span>
                    </div>
                  </Row>
                </Header>

                <Content style={{ margin: '0 16px' }}>
                  <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>
                      {
                        this.state.site
                      }
                    </Breadcrumb.Item>
                  </Breadcrumb>

                  <div style={style.body}>

                    {this.props.children}

                  </div>

                </Content>

                <Footer style={{ textAlign: 'center' }}>
                  TeachMaker
                </Footer>

              </Layout>
            </Layout>
          </ConfigProvider>
        </div>
      </Aux>
    );
  }
}

export default withTranslation('common')(Navigation);