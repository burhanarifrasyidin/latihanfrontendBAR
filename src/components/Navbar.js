import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import terserah from 'universal-cookie';
import {resetUser} from './../1.actions'

const objCookie = new terserah()
class HeaderKu extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    onBtnLogout = () => {
        objCookie.remove('userData')
        this.props.resetUser()
    }

    render() {
        if(this.props.bebas === ""){
            return (
                <div style = {{marginBottom: "75px"}}>
                    <Navbar color = "dark light" light expand = "md" fixed = "top" style={{height:'80px'}} >
                    <NavbarBrand className = "ml-2" style={{fontSize:'25px'}}><Link to = '/'> <img src = "http://www.logospng.com/images/6/10-reasons-why-google-optimise-is-my-favourite-split-6432.png"
                    alt = "brand" width = "30px" height='30px'/>OnOSepeda.Com</Link>
                    </NavbarBrand >
                    <NavbarToggler onClick = {this.toggle}/> <Collapse isOpen = {this.state.isOpen}navbar >
                    <Nav className = "ml-auto"navbar >
                    <NavItem >
                    <div className = "input-group border-right"
                    style = {{width: "350px"}}>
                    <input type = "text" ref = "searchBook" className = "form-control border-primary"
                    placeholder = "Masukkan kata kunci ... " />
                    <div className = "input-group-append mr-2" >
                    <button  style={{color:'white'}} className = "btn border-primary"
                    type = "button"
                    id = "button-addon2"><i className = "fas fa-search" /></button></div></div>  </NavItem>
        
                    <NavItem ><Link to = "/register"><NavLink className = "btn btn-default border-primary mr-2"
                    style = {{fontSize: "14px",color:'white'}}><i className = "fas fa-user-plus" />Daftar</NavLink></Link >
                    </NavItem> 
                    
                    <NavItem ><Link to = "/login"><NavLink className = "btn btn-default border-primary"
                    style = {{fontSize: "14px",color:'white'}}><i className = "fas fa-sign-in-alt" />Masuk</NavLink></Link>
                    </NavItem>
                     </Nav>
                      </Collapse>
                      </Navbar>
                      </div>
                )
        } else {
            return (<div style = {{marginBottom: "75px"}
            } >
            <Navbar color = "light" light expand = "md"fixed = "top" >
            <NavbarBrand className = "ml-2" > < Link to = '/' > < img src = "http://www.logospng.com/images/43/b-logo-logospikecom-famous-and-free-vector-logos-43382.png"
            alt = "brand" width = "30px" /> </Link> </NavbarBrand >
            <NavbarToggler onClick = {this.toggle}/> <Collapse isOpen = {this.state.isOpen}navbar >
            <Nav className = "ml-auto"
            navbar >
            <NavItem >
            <div className = "input-group border-right"
            style = {{width: "350px"}}>
            <input type = "text" ref = "searchBook" className = "form-control"
            placeholder = "Masukkan kata kunci ... " />
            <div className = "input-group-append mr-2" >
            <button className = "btn border-secondary" type = "button" id = "button-addon2" > < i className = "fas fa-search" /></button> </div> </div>  
            </NavItem>

            <NavItem>
                <NavLink>Hi,{this.props.bebas} Bro</NavLink>
            </NavItem>

            {/* <NavItem >
            <Link to = "/product" > < NavLink className = ".."
            style = {{fontSize: "15px"}} ><i class="fab fa-apple"></i> Product </NavLink></Link >
            </NavItem> */}

                <NavItem >
            <Link to = "/login" > < NavLink className = "btn btn-default border-primary"
            style = {
                {
                    fontSize: "14px"
                }
            } ><i class="fas fa-shopping-cart"></i> Cart </NavLink></Link >
            </NavItem> 
            <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    Menu
                    </DropdownToggle>
                    <DropdownMenu right>
                    {
                        this.props.role === 'admin' ?
                        <Link to='/manage'><DropdownItem>
                            Manage Product
                        </DropdownItem></Link>
                        : 
                        null
                    }
                    <DropdownItem>
                        History Transaksi
                    </DropdownItem>
                    <DropdownItem>
                        Edit Profile
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.onBtnLogout}>
                        Log Out
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            </Collapse>
            </Navbar>
            </div>
                )
            }
        
    }
}

const mapStateToProps =(state)=>{
    return {
        bebas : state.user.username,
        role : state.user.role
    }
}

export default connect (mapStateToProps,{resetUser})(HeaderKu);