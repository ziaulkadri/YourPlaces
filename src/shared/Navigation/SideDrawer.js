import React from 'react';
import './SideDrawer.css';

const SideDrawer = () => {
	return <aside className="side-drawer">{props.children}</aside>;
};

export default SideDrawer;
