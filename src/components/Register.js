import React from 'react'
import { Link,Redirect} from 'react-router-dom'
import { userRegister,loginWithGoogle } from './../1.actions'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import firebase from 'firebase'
import { provider } from './../support/google'
import './../support/css/product.css'



class Register extends React.Component{
    state = {error : ''}

    componentWillReceiveProps(newProps){
        if(newProps.error !== ""){
            this.setState({error : newProps.error})
        }
    }

    renderErrorMessege = () => {
        if(this.state.error !== ""){
            return <div class="alert alert-danger mt-3" role="alert">
                        {this.state.error}
                    </div>
        }
    }

    onBtnRegisterClick = () => {

        var username = this.refs.username.value
        var password = this.refs.password.value
        var email = this.refs.email.value
        var phone = this.refs.phone.value
        if(username === "" || password === ""|| email === "" || phone === ""){
            this.setState({error: ' Harus diisi semua '})
        }else{
            this.props.userRegister(username,password,email,phone)
        }
    }

    loginWithGoogle = () => {
        firebase.auth().signInWithPopup(provider)
        .then((res) => {
            console.log(res)
            this.props.loginWithGoogle(res.user.email)
        })
        .catch((err) => console.log(err))
    }

    renderLoadingOrBtn = () => {
        if(this.props.loading === true){
            return <Loader
            type="Bars"
            color="#00BFFF"
            height="50"
            width="50"
            />
        }else{
            return <button type="button"  className="btn btn-primary" style={{width:"300px"}} onClick={this.onBtnRegisterClick}><i className="fas fa-sign-in-alt" />Sign Up!</button>
        }
    }

    render(){
        if(this.props.user !== ""){
            return <Redirect to= '/'/>
        }
        return(
            <div className="br">
            <div className="container myBody " style={{minHeight:"600px"}}><br/><br/>
            <h1 style={{textAlign:'center',color:'black', fontWeight:'bold', fontFamily:'sanserif',fontSize:'50px'}}>Register Now <span style={{color:'blue'}}>For Free</span></h1>
                    <div className="row justify-content-sm-center ml-auto mr-auto mt-3">
                        
                        <form className="border mb-3" style={{padding:"20px", borderRadius:"5%",backgroundColor:"white"}} ref="formLogin">
                            <fieldset>
                                
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Username</label>
                                    <div className="col-sm-9">
                                    <input type="text" ref="username" className="form-control" id="inputUsername" placeholder="Username" required autoFocus/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Password</label>
                                    <div className="col-sm-9">
                                    <input type="password" ref="password" className="form-control" id="inputPassword" placeholder="Password" required />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                    <input type="email" ref="email" className="form-control" id="inputEmail" placeholder="Mail@gmail.com" required />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Phone</label>
                                    <div className="col-sm-9">
                                    <input type="phone" ref="phone" className="form-control" id="inputPhone" placeholder="Ex: 0821xxxxxxxx" required />
                                    </div>
                                </div>
                                
                                <div className="form-group row">
                                    <div className="col-12">
                                    {this.renderLoadingOrBtn()}

                                    <div>
                                    <button className='btn btn-success mt-2' onClick={this.loginWithGoogle} style={{width:'300px'}}><i class="fab fa-google-plus"> Login With Google</i></button>
                                    </div>
                                    {this.renderErrorMessege()}
                                    </div>
                                        
                                </div>
                                <div className="btn my-auto"><p>Already have Account? <Link to="/login" className="border-bottom">Login</Link></p></div>
                                
                            </fieldset>
                        </form>
                        
                    </div>                
                </div>
                </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        user : state.user.username,
        loading : state.user.loading,
        error : state.user.error
    }
} 

export default connect(mapStateToProps,{userRegister,loginWithGoogle})(Register)