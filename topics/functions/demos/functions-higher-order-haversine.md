

## Sorting arrays of objects

Find the closest park (use Virginia's data)
- Create an array
- Store each output from the Haversine formula in an array index
- sort (or use a minimum function)


## Comparison Functions

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
- https://javascript.info/comparison


let data = [{

}]


let searchResultsArr = [];

for(let i = 0; i < data.length; i++){
	searchResultsArr.push(returnHaversineDistance(
		userLat,
		userLng,
		data[i].lat,
		data[i].lng
	))
}
searchResultsArr.sort()






## By string property value

https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
https://jsfiddle.net/ow3n/tjsdfbq5/2/
