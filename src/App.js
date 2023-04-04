//
import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          title: "Prayer for Our Fragile World",
          img: "vyntu01.jpg",
          desc: "Is a sculpture that serves as an appeal to humanity to protect our planet. It is not limited to any particular gender, status, religion, or country, as we are all part of a fragile world. The sculpture features a stylized planet made of thick polished glass, on the verge of which the names of all countries are engraved in their native languages, as well as glass-based symbols representing the major religions of the world. The figure praying in a universal pose has no discernible sex or face, representing all of humanity. Their brain is depicted in constant circulation, and their prayer is illuminated with a noble, fascinating light of faith and hope. With their hands stretched upwards, they are asking for grace for all.",
          price: "9110",
          category: "sculpture",
          id: 1,
        },
        {
          title: "Ice & Fire",
          img: "vyntu02.jpg",
          desc: "This sculpture is titled Ice & Fire and is approximately 65cm tall, 35cm wide, and 30cm deep. It was created using a unique technique where pieces of different types of glass are glued together to create the sculpture's height and volume. The sculpture features a nude female figure with smooth curves and is colored in a palette that corresponds to the colors of ice and fire, which are combined in the work. The artwork symbolizes the emotional nature of a woman, with her coldness and fire represented through the use of the two elemental forces.",
          price: "3150",
          category: "glass-sculpture",
          id: 2,
        },
        {
          title: "The flower of war",
          img: "vyntu03.jpg",
          desc: "This sculpture is a stunning piece of art created using the Tiffany technique. It features a beautiful stained glass flower predominantly in red color. At the base of the flower, there are old cartridges from the First World War, from which the flower seems to grow out of. The sculpture also includes built-in LED lights, enhancing the beauty of the flower. This work of art is not only visually impressive, but it also carries a deeper message of transformation, growth, and hope arising from the devastation of war.",
          price: "2200",
          category: "stained-glass-sculpture",
          id: 3,
        },
        {
          title: "Big sister",
          img: "vyntu04.jpg",
          desc: "This sculpture is called Big-sister and measures approximately 105cm in height, 85cm in width, and 25cm in depth. It was created using an original technique where pieces  of different types of glass are glued together to create the sculpture's height and volume. The artwork features a curved triangle shape with a ceramic relief of delicate lips inscribed within a circle at its center. The lips appear as if they are ready to kiss you. The sculpture is meant to be an ironic and sarcastic response to the concept of Big Brother watching over us, as Big-sister represents a figure who loves and cares for us. Additionally, the sculpture is equipped with built-in LED lights.",
          price: "5230",
          category: "glass-sculpture",
          id: 4,
        },
        {
          title: "Rhino",
          img: "vyntu05.jpg",
          desc: "This sculpture is called Big-sister and measures approximately 105cm in height, 85cm in width, and 25cm in depth. It was created using an original technique where pieces  of different types of glass are glued together to create the sculpture's height and volume. The artwork features a curved triangle shape with a ceramic relief of delicate lips inscribed within a circle at its center. The lips appear as if they are ready to kiss you. The sculpture is meant to be an ironic and sarcastic response to the concept of Big Brother watching over us, as Big-sister represents a figure who loves and cares for us. Additionally, the sculpture is equipped with built-in LED lights.",
          price: "3500",
          category: "glass-sculpture",
          id: 5,
        },
        {
          title: "Bunicul",
          img: "vyntu06.jpg",
          desc: "This sculpture is called Big-sister and measures approximately 105cm in height, 85cm in width, and 25cm in depth. It was created using an original technique where pieces  of different types of glass are glued together to create the sculpture's height and volume. The artwork features a curved triangle shape with a ceramic relief of delicate lips inscribed within a circle at its center. The lips appear as if they are ready to kiss you. The sculpture is meant to be an ironic and sarcastic response to the concept of Big Brother watching over us, as Big-sister represents a figure who loves and cares for us. Additionally, the sculpture is equipped with built-in LED lights.",
          price: "6000",
          category: "stained-glass-sculpture",
          id: 6,
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Categories chooseCategory={this.chooseCategory} />
          <Items
            onShowItem={this.onShowItem}
            items={this.state.currentItems}
            onAdd={this.addToOrder}
          />

          {this.state.showFullItem && (
            <ShowFullItem
              onAdd={this.addToOrder}
              onShowItem={this.onShowItem}
              item={this.state.fullItem}
            />
          )}
          <Footer />
        </div>
      </>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
