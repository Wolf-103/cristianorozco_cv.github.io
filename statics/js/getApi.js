const urlApi = "https://randomuser.me/api/"

// fetch(urlApi)
// 	.then((res) => res.json())
// 	.then((data) => console.log(data.results[0]))
//     .catch((err) => console.error(err))

export async function findUser() {
	try {
		const res = await fetch(urlApi)
		const data = await res.json()
		return data.results[0]
	} catch (error) {
		console.error(error)
	}
}
