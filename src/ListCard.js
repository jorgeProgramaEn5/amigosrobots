import React from 'react';
import Card from './Card';

const ListCard = ({robots})=>{
  return(
	  	<div className>
	  		{
	  			robots.map((items, i) => { 
	  				return (
	  					<Card 
	  					key={robots[i].id} 
	  					id={robots[i].id} 
	  					name={robots[i].name} 
	  					username={robots[i].username} 
	  					email={robots[i].email}
	  					/>
	  				)
	  			})
	  		}
	  	</div>
	) 
}

export default ListCard