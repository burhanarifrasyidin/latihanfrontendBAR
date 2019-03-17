import React from 'react'
import Carousel from './carousel'
import { connect } from 'react-redux'
import Product from './productList'
import './../support/css/product.css'


class Home extends React.Component{
    render(){
        return(
            <div className="bh">
            <div className="container">
                <div className="row justify-content-center">    
                    <div className="col-lg-9">
                        <div className="my-4">
                        <h1 style={{textAlign:'center',fontFamily:'sanserif',fontSize:'50px',fontWeight:'bold'}}>Selamat Datang Di Website <span style={{color:'blue'}}>OnOSepeda.Com</span></h1>
                            <Carousel />
                        </div>
                    </div>
                </div>
                <Product/>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id : state.user.id

    }
}

export default connect(mapStateToProps)(Home)