import {
    WrapperTopbar,
    TopBar,
    BlockLeft,
    SpanLogo,
    DivMenu,
    DivBarLogo,
    SpanHome,
    BlockRight,
    SpanAccount,
    SpanLogOut,
} from "./topBar.style"

import { Link } from "react-router-dom"
import { logout } from "../../auth/authentication";

interface MenuState {
    openMenu: Function
}

function TopBarMain(props: MenuState) {
    return (
        <WrapperTopbar>
            <TopBar>
                <BlockLeft>
                    <div>
                        <SpanLogo>TGL</SpanLogo>
                        <DivBarLogo></DivBarLogo>
                    </div>
                    <SpanHome>
                        <Link to="/" style={{ color: "#707070", textDecoration: "none" }}>Home</Link>
                    </SpanHome>
                </BlockLeft>
                <BlockRight>
                    <SpanAccount>
                        <Link to="/account">Account</Link>
                    </SpanAccount>
                    <SpanLogOut>
                        <span onClick={() => logout()}>Log Out </span>
                        <i className="fas fa-arrow-right"></i>
                    </SpanLogOut>
                    <DivMenu onClick={() => { props.openMenu() }}><i className="fas fa-bars"></i></DivMenu>
                </BlockRight>
            </TopBar>
        </WrapperTopbar>
    )
}

export default TopBarMain;