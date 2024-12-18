import React from "react";
import NavBar from "../../js/NavBar";
import Jumbotron from "../../js/Jumbotron";
import Footer from "../../js/Footer";
import Card from "../../js/Card";


const cards = [
	{
		image: "http://via.placeholder.com/500x325",
		title: "Card title",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
	},
	{
		image: "http://via.placeholder.com/500x325",
		title: "Card title",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
	},
	{
		image: "http://via.placeholder.com/500x325",
		title: "Card title",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
	},
	{
		image: "http://via.placeholder.com/500x325",
		title: "Card title",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
	}
];


// Crear tu componente Home
const Home = () => {
    return (
		<div container ps-0 pe-0>
			<NavBar />
			<Jumbotron />
			<div className="container ps-0 pe-0 text-center">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;