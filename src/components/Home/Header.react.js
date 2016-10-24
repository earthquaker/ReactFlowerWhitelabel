import React, { Component } from 'react';
import { PageHeader, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
    render() {

        let navLoader = (
            <p>Loader!!!</p>
        );

        let navComplete = (
            <Nav bsStyle="pills" activeKey={1}>
                <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
                <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
                <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
            </Nav>
        );

        let nav = !this.props.name ? navLoader : navComplete;

        return (
            <div>
                <PageHeader>{this.props.name} <small></small></PageHeader>
                { nav }
            </div>
        );
    }
}

export default Header;
