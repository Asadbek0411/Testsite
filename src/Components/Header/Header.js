import "./Header.css"
import React, {Component} from "react"

class Header extends Component {

    // Haderni O'zidaa Buttonda state hosil qilish!
   /* constructor(props){
        super(props)
        this.state = { soni: 0}
    }

    add = () => {
        this.setState((state) =>{
            return {soni: state.soni + 1}
        })
    }*/


    constructor(props){
        super(props)
        this.state = {
            search: "",

        }
    }


    ShowProducts = () => {
        const products = this.props.basket;
        let listProduct = " "
        products.map(v => {
            listProduct += v.title + ", \n";
            console.log(v.price);
        })

        listProduct += "All: " + products.length + " \n";

        alert(listProduct)
    }

    /*clearSearch = () => {
        this.setState({search: ""})
    }*/

    changesearch = (v) => this.setState({search: v})


    switchh = () => this.setState( state =>({dark: state.dark === "dark" ? "light" : "dark"}))


    render() {


        const products = this.props.basket;
        const n = products.length;


        return (

              <header className={`shadow ${this.props.dark}`}>
                    <div className="container-fluid py-4 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <img src="https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg" alt=""/>
                            <button className="ms-4 btn btn-katalog"
                            onClick={() => this.props.changehide(false)}>Katalog</button>
                            <div className="d-flex align-items-center searchbar ms-4">
                                <input type="text" value={this.state.search}
                                 /*onChange={(event) => {

                                     const value = event.target.value;
                                     /!*console.log(event.target.value);*!/
                                     this.setState({search: value})
                                 }}*/
                                 onChange={(event) => this.changesearch(event.target.value)}
                                />
                                {/*<button className="btn" onClick={this.clearSearch}>x</button>*/}
                                <button className="btn x-btn" onClick={() => this.changesearch("")}>x</button>
                            </div>
                        </div>




                        <div className="day-night-btn">
                            <button className="btn border-0 btn-primary nav-btn" onClick={this.switchh}>Day / Night</button>
                           <button className="btn border-0 btn-danger nav-btn" onClick={this.ShowProducts} >
                                Korzinka
                                {
                                    n != 0 &&
                                    <span className="badge badge-light">
                                 {n}
                             </span> || ""
                                }
                            </button>

                        </div>

                    </div>
                </header>


        );
    }
}

export default Header;