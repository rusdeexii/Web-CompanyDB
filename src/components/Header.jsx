import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
        <i className="fa-solid fa-eye-dropper"></i>
          <a href='#home'>FAST</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset={65} items={[
            { href: "#home", title: "Home", key: "home" },
            { href: "#about", title: "About", key: "about" },
            { href: "#services", title: "Services", key: "services" },
            { href: "#faq", title: "FAQ", key: "faq" },
            { href: "#contact", title: "Contact", key: "contact" }
          ]}>
            
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <AiOutlineMenu/>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            open={visible}
          >
            <Anchor targetOffset={65} items={[
              { href: "#home", title: "Home", key: "home" },
              { href: "#about", title: "About", key: "about" },
              { href: "#services", title: "Services", key: "services" },
              { href: "#faq", title: "FAQ", key: "faq" },
              { href: "#contact", title: "Contact", key: "contact" }
            ]}>
              {/* Links */}
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
