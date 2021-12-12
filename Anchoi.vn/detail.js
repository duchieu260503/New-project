const resName = document.getElementById('restaurantName')
const resAddress = document.getElementById('restaurantAddress')
const resPrice = document.getElementById('restaurantPrice')
const resImg = document.getElementById('restaurantImg')
const resStatus = document.getElementById('restaurantStatus')
const renderRestaurantDetail = async ()=>{
    const restaurantId = localStorage.getItem('restaurantId')
    const response = await fetch(`https://60c5afa5ec8ef800175e14ec.mockapi.io/restaurants/${restaurantId}`)
const data = await response.json()
resName.innerHTML = data.name
resAddress.innerHTML = data.address
resPrice.innerHTML = data.price
resStatus.innerHTML = `• ${data.status}`
resImg.src = data.photo
}  
renderRestaurantDetail()