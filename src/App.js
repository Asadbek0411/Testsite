import {Component} from "react";
import './App.css';
import Header from "./Components/Header";
import ProductCard from './Components/ProductCard/ProductCard';
import SideBar from "./Components/SideBar"

const dataProduct = [

  /* 1-chi */
  {
    productImg:"https://olcha.uz/image/220x220/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.",
    groupName:"Smartfon",
    price:"3 390 0000",
    priceMonth:"322 000",
    title:"Xiaomi Redmi 11 4/128Gb Sea Blue",
  },

  /* 2-chi */
  {
    productImg:"https://olcha.uz/image/220x220/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.",
    groupName:"Smartfon",
    price:"4 390 0000",
    priceMonth:"522 000",
    title:"Xiaomi Redmi 12 8/128Gb Sea Blue",
  },
  /* 3-chi */
  {
    productImg:"https://olcha.uz/image/220x220/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.",
    groupName:"Smartfon",
    price:"11 244 0000",
    priceMonth: "322 000",
    title:"Xiaomi Redmi 15 32/128Gb Sea Blue",
  },
  /* 4-chi */
  {
    productImg:"https://olcha.uz/image/220x220/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.",
    groupName:"Smartfon",
    price:"5 321 0000",
    priceMonth:"142 000",
    title:"Xiaomi Redmi 13 4/128Gb Sea White",
  },
  /* 5-chi */
  {
    productImg:"https://olcha.uz/image/220x220/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.",
    groupName:"Smartfon",
    price:"7 130 0000",
    priceMonth:"232 000",
    title:"Xiaomi Redmi 9 64/128Gb Sea Red",
  },
]

class App extends Component{

  constructor(){
    super();
    this.state = {
      basket: [],
      hide: true,

    }
  }


  changehide = (v) => this.setState({hide: v});

  buy = (products) => {
    /* console.log("Mahsulot Sotib olindi")
     console.log(products)*/

    this.setState((state) => {
      let arr = [...state.basket];
      arr.push(products);
      return {basket: arr};
    })
  }


  render() {

    console.log(this.props.dark)

    return (
        <div className="App">

          {/*SideBar Qismi*/}

          <SideBar changehide={this.changehide} hide={this.state.hide} />

          {/*Header Qismi*/}
          <Header basket={this.state.basket} changehide={this.changehide}/>

          {/*Bu Joyda Mahsulotlar Ko'rsatilgan*/}
          <section id="products" className="py-5">
            <div className="container-fluid">
              <div className="row">
                {
                  dataProduct.map((v,i) =>
                      <div className="col-sm-6 col-md-4 col-lg-3 productCol">
                        <ProductCard data={v} buy={() => this.buy(v)}/>
                      </div>

                  )
                }
              </div>
            </div>
          </section>

        </div>
    );
  }
}

export default App;
