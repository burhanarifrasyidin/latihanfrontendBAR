import React from 'react'


class Footer extends React.Component{

    state ={number:1}
    handleState=()=>{
        this.setState({number:this.state.number+1})
    }
    render(){
        return(
            <div style={{position:'fixed',left:'0px',bottom:'0px',height:'50px',backgroundColor:'rgba(0,0,0,0.8)',width:'100%',color:'white',textAlign:'center',fontSize:'17px',fontFamily:'-apple-system, BlinkMacSystemFont',paddingTop:'20px'}}>
            &copy;BAR 2019 All Rights Reserved
            </div>
            
        )
    }
}

export default Footer
