export let state;


export function managePets(state={pets: []}, action){
	switch(action.type){
		case "ADD_PET":
			return {pets: state.pets.concat(action.pet)}
		case "REMOVE_PET":
			const newPets = state.pets.filter(pet => pet.id !== action.id)
			return {pets : newPets}
		default:
			return state
	}
}

export function dispatch(action){
	state = managePets(state, action)
	render()
}

export function render(){
	const petLIs = state.pets.map(pet => `<li>${pet.name}</li>`)
	document.getElementById('container').innerHTML = `<ul>${petLIs}</ul>`
}
