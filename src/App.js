import React, { Component, Fragment } from "react"
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubTitle
} from "./components/Card"
import NavElement from "./components/NavElement"
import "./App.css"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends Component {
  state = {
    products: [
      {
        name: "Black Russian Tomato",
        scientificName: "Solanum lycopersicum L.",
        description:
          "This variety makes the most of the short seasons with heat absorbing black skin. We procured seeds of the charcoal-fleshed fruit and passed it through Seed Savers and then on to the rest of the world. Fruits in 11 weeks from transplant and yields 7kg per plant.",
        nonMemberPrice: 3.95,
        categories: ["vegetable", "edibles"],
        inStock: true,
        memberOnly: false,
        productImageUrl:
          "https://www.diggers.com.au/media/products/142921/m.jpg"
      },
      {
        name: "Russell Lupin",
        scientificName: "Lupinus polyphyllus ‘Russell Lupin Hybrids’",
        description:
          "Clumping perennials with dissected fan-like foliage give rise to towers of flower in every pastel shade imaginable. A must for the cottage garden, they combine perfectly with poppies, catmint and roses. They prefer a slightly acid soil, no manures, and good drainage but moist conditions. Protect from snails..",
        nonMemberPrice: 6.95,
        categories: ["flower"],
        inStock: true,
        memberOnly: false,
        productImageUrl:
          "https://www.diggers.com.au/media/products/142542/m.jpg"
      },
      {
        name: "Cucumber Mexican Sour Gherkin",
        scientificName: "Melothria scabra syn. pendula",
        description:
          "This heirloom micro-sized climbing cucumber tastes both sweet and sour, just like a gherkin without the work! Prolific fruiting and is a first rate screening plant. May self seed.",
        nonMemberPrice: 3.95,
        categories: ["edibles"],
        inStock: true,
        memberOnly: false,
        productImageUrl:
          "https://www.diggers.com.au/media/products/142714/m.jpg"
      },
      {
        name: "Black Bird Netting 10.00 X 10.00",
        scientificName: null,
        description:
          "Stop birds and possums from eating your precious fruit by covering them with this high quality netting.",
        nonMemberPrice: 89.0,
        categories: ["garden supplies"],
        inStock: true,
        memberOnly: false,
        productImageUrl:
          "https://www.diggers.com.au/media/products/147279/m.jpg"
      }
    ],
    signedIn: false,
    categories: ["garden supplies", "edibles", "flowers", "vegetables"],
    shoppingCart: {
      items: [
        {
          name: "Russell Lupin",
          quantity: 2
        }
      ]
    },
    searchQuery: null,
    searchResults: []
  }

  // componentDidMount() {
  //   this.load()
  // }

  // load() {
  //   listProducts()
  //     .then(products => {
  //       this.setState({ products });
  //     })
  //     // .catch(saveError);
  // }

  onCategorySelect = ({ searchQuery }) => {
    // const category = this.state.category
    console.log('first: ', (searchQuery))
    // console.log(this.setState({ searchQuery: searchQuery }))
    this.setState({ searchQuery: searchQuery })
  }
  
  render() {
    const { products, categories, searchQuery } = this.state
    
    const onFilterSelect = ({ searchQuery, products }) => {
      this.state.products.filter(product => product.categories.some(category => {
        return category === searchQuery
      })
    )}

    console.log(this.state.products)
    // const filteredProducts = onFilterSelect({searchQuery}, {...products})
    // console.log(filteredProducts)
      
    return (
      <Router>
        <div className="App">
          <h1>Plants 'R' Us</h1>
          <div>
            {categories.map(category => (
              <Fragment>
              <NavElement
                onCategorySelect={this.onCategorySelect}
                category={category}>
                {category}
                
              </NavElement>
              {console.log(searchQuery)}
              </Fragment>
            ))}
          </div>

          <Route path='/products' exact render={() => (
            searchQuery ? (
              <Fragment>
              <div className="myCards">
                { products &&
                   this.state.products.map(p => (
                    <Card {...p}>
                    <CardImg src={p.productImageUrl} />
                    <CardBody>
                    {console.log(this.state.products)}
                    {console.log(onFilterSelect(this.state.searchQuery, this.state.products))}
                      <CardTitle>{p.name}</CardTitle>
                      <CardSubTitle>{p.scientificName}</CardSubTitle>
                      <CardText>{p.description}</CardText>
                    </CardBody>
                  </Card>
                   ))}
              </div>
              </Fragment>
            ) : (
              <div className="myCards">
                { products &&
                  products.map(p => (
                    <Card {...p}>
                    <CardImg src={p.productImageUrl} />
                    <CardBody>
                    {/* {console.log(onFilterSelect(this.state.products))} */}
                      <CardTitle>{p.name}</CardTitle>
                      <CardSubTitle>{p.scientificName}</CardSubTitle>
                      <CardText>{p.description}</CardText>
                    </CardBody>
                  </Card>
                ))}
              </div>
              ))}
            />
        </div>
      </Router>
    )
  }
}

export default App
