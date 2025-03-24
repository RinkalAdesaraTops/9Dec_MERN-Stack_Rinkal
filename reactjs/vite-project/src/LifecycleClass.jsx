import { Component } from "react"

class LifecycleClass extends Component{
    constructor(){
        console.log("constructor called...");
        super()
        this.state = {
            count:0
        }
    }
    componentDidMount(){
        console.log("componentDidMount called...");
        setTimeout(()=>{
            this.setState({
                count:10
            })
        },3000)       
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps called...");
        console.log(state);
        return null
        
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate called..");      
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("getSnapshotBeforeUpdate");
        console.log(prevState);
        return null       
    }
    componentDidUpdate(){
        console.log("finally component updated...");
        
    }
    render(){
        console.log("render called...");

        return (
            <>
            <div>My Class Component Called...</div>
            <h3>Count is -- {this.state.count}</h3>
            </>
        )
    }
    
}

export default LifecycleClass