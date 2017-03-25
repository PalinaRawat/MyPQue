import React, { Component } from 'react';
import Post from './Post'
export default class Profile extends Component {
  render() {
		//				<Post link="http://tinyurl.com/gmohwa2" title="Followers++" img={require('../Imgs/followers++.png')} description="Followers++ is a mobile Android application that discovers Twitter users that are likely to follow you back. This project utilizes the asynchronous android libraries and the Twitter api."/>
		//				<Post link="http://tinyurl.com/hwzu9hx" title="KitPvP" img={require('../Imgs/minecraft.png')} description="KitPvP is a minecraft server plugin that utilizes the bukkit api to build a structured kit based player vs player combat system inside minecraft. This project utilized my knowledge in data structures and algorithms to develop efficient server code."/>

		var data = [
			{
				'title': 'Derivative Calculator',
				'link': 'https://github.com/koochi10/Derivative-Calculator',
				'image': require('../Imgs/derivative.png'),
				'description': 'A Simple derivative Calculator that given a mathematical expression is able to compute its derivative. This is done by converting to Reverse Polish Notaion and building a Binary Expression Tree. Click me for more information and to view source code.'
			},
			{
				'title': 'Followers++',
				'link': 'http://tinyurl.com/gmohwa2',
				'image': require('../Imgs/followers++.png'),
				'description': 'Followers++ is a mobile Android application that discovers Twitter users that are likely to follow you back. This project utilizes the asynchronous android libraries and the Twitter api.'

			},
			
			
		];

		let mapped = data.map((tableItem, i) => {
			return(
				<Post key={i} link={tableItem.link} title={tableItem.title} img={tableItem.image} description={tableItem.description} />
			);
		})
		return(
			<div className="Companies">
				{mapped}
			</div>
		);
	}
}
