import React from 'react'
import { Link,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { onLogin } from './../1.actions'
import Loader from 'react-loader-spinner'
import cookie from 'universal-cookie'
import './../support/css/product.css'


const Cookie = new cookie()
class Login extends React.Component{

        componentWillReceiveProps(newProps){
            Cookie.set('userData',newProps.username,{path :'/'}) 
        }

    
    onBtnLoginClick=()=>{
        var username = this.refs.username.value
        var password = this.refs.password.value
        this.props.onLogin(username,password)
    }

    renderBtnOrLoading = () => {
        if (this.props.loading === true){
            return <Loader
            type="Bars"
            color="#00BFFF"
            height="50"
            width="50"
            />
        }else {
            return <button type="button" className="btn btn-primary" onClick={this.onBtnLoginClick} style={{width:"300px"}} ><i className="fas fa-sign-in-alt" /> Login</button>
        }
        
    }

    renderErrorMessage = () => {
    if(this.props.error !== ""){
        return <div class="alert alert-danger mt-2" role="alert">
                {this.props.error}
                </div>
    }
    }

    render(){
        if(this.props.username !== ""){
            return <Redirect to = '/'/>
        }

        return(
            <div className='bl'>
            <div className="container myBody" style={{minHeight:"600px"}}><br/><br/><br/><br/>
            <h1 style={{textAlign:'center',color:'black', fontWeight:'bold', fontFamily:'sanserif',fontSize:'50px'}}>Log In <span style={{color:'blue'}}>Brow</span></h1>
                <div className="row justify-content-sm-center ml-auto mr-auto">
                    
                    <form className="border mb-3" style={{padding:"20px", borderRadius:"5%",backgroundColor:'white'}} ref="formLogin">
                        <fieldset>
                            
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Username</label>
                                <div className="col-sm-9">
                                <input type="text" ref="username" className="form-control" id="inputEmail" placeholder="Username" required autoFocus/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Password</label>
                                <div className="col-sm-9">
                                <input type="password" ref="password" className="form-control" id="inputPassword" placeholder="Password" onKeyPress={this.renderOnKeyPress} required />
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <div className="col-12" style={{textAlign:'center'}}>
                                {this.renderBtnOrLoading()}
                                {this.renderErrorMessage()}
                                </div>
                                    
                            </div>
                            <div className="btn my-auto"><p>Don't have Account? <Link to="/register" className="border-bottom">Sign Up!</Link></p></div>
                        </fieldset>
                    </form>
                    
                </div>                
            </div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
    username : state.user.username,
    loading : state.user.loading,
    error : state.user.error
    }
}

export default connect(mapStateToProps,{onLogin})(Login)