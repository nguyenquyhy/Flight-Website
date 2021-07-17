import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

const Layout = (props: React.PropsWithChildren<any>) => (
    <div>
        <NavMenu />
        <Container>
            {props.children}
        </Container>
    </div>
)

export default Layout;