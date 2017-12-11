import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    products: [
      {
        name: "Black Russian Tomato",
        scientificName: "Solanum lycopersicum L.",
        description: "This variety makes the most of the short seasons with heat absorbing black skin. We procured seeds of the charcoal-fleshed fruit and passed it through Seed Savers and then on to the rest of the world. Fruits in 11 weeks from transplant and yields 7kg per plant.",
        nonMemberPrice: 3.95,
        categories: [
          "vegetable", "edibles"
        ],
        inStock: true,
        memberOnly: false,
        productImageUrl: "https://www.diggers.com.au/media/products/142921/m.jpg",
    },
      {
        name: "Russell Lupin",
        scientificName: "Lupinus polyphyllus ‘Russell Lupin Hybrids’",
        description: "Clumping perennials with dissected fan-like foliage give rise to towers of flower in every pastel shade imaginable. A must for the cottage garden, they combine perfectly with poppies, catmint and roses. They prefer a slightly acid soil, no manures, and good drainage but moist conditions. Protect from snails..",
        nonMemberPrice: 6.95,
        categories: [
          "flower"
        ],
        inStock: true,
        memberOnly: false,
        productImageUrl: "https://www.diggers.com.au/media/products/142542/m.jpg",
    },
      {
        name: "Cucumber Mexican Sour Gherkin",
        scientificName: "Melothria scabra syn. pendula",
        description: "This heirloom micro-sized climbing cucumber tastes both sweet and sour, just like a gherkin without the work! Prolific fruiting and is a first rate screening plant. May self seed.",
        nonMemberPrice: 3.95,
        categories: [
          "edibles"
        ],
        inStock: true,
        memberOnly: false,
        productImageUrl: "https://www.diggers.com.au/media/products/142714/m.jpg",
      },
      {
        name: "BLACK BIRD NETTING 10.00 X 10.00",
        scientificName: null,
        description: "Stop birds and possums from eating your precious fruit by covering them with this high quality netting.",
        nonMemberPrice: 89.00,
        categories: [
          "garden supplies"
        ],
        inStock: true,
        memberOnly: false,
        productImageUrl: "https://www.diggers.com.au/media/products/147279/m.jpg",
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
    search: {
      searchQuery: null,
      searchResult: []
    }
  }



  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
