// Save data to localStorage
localStorage.setItem('name', 'Irfad');
console.log('Saved name:', localStorage.getItem('name')); // "Irfad"

// Get data from localStorage
const storedName = localStorage.getItem('name');
console.log('Retrieved name:', storedName); // "Irfad"

// Remove a specific item from localStorage
localStorage.removeItem('name');
console.log('After removing name:', localStorage.getItem('name')); // null

// Clear all localStorage data
localStorage.setItem('age', '25');
localStorage.setItem('city', 'Kozhikode');
console.log('Before clearing:', localStorage); // shows all items
localStorage.clear();
console.log('After clearing:', localStorage); // empty object

