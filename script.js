document.addEventListener('DOMContentLoaded', () =>{

const artistsData = [
    { name: 'Three Days Grace', image:'./img/tdg.jpg'},
    { name: 'Link Park', image:'./img/album-linkpark.jpg'},
    { name: 'Charlie Brow Junior', image:'./img/charlie-brown-jr-chorao.jpg'},
    { name: 'Pearl Jam', image:'./img/pearl-jam.jpg'},
    { name: 'Starset', image:'./img/starset.jpg'},
    { name: 'Rage against the machine', image:'./img/rage.jpg'},

];

const albumsData = [
    { name: 'Three Days Grace', image:'./img/album-tdg.jpg'},
    { name: 'Charlie Brown Junior', image:'./img/album-charlie-brow-jr.jpg'},
    { name: 'Link Park', image:'./img/album-linkpark.jpg'},
    { name: 'Starset', image:'./img/album-starset.jpg'},
    { name: 'CPM 22', image:'./img/album-cpm.jpg'},
    { name: 'Bush', image:'./img/album-bush.jpg'},
];

const artistGrid = document.querySelector('.artists-grid')
const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

    artistCard.innerHTML = `
        <img src = ${artist.image} alt="imagem do ${artist.name}">
        <div>
            <h3>${artist.name}</h3>
            <p>Banda</p>
        </div>
    `

        artistGrid.appendChild(artistCard)

    })

    albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('albums-card')

    albumCard.innerHTML = `
        <img src = ${album.image} alt="imagem do ${album.name}">
        <div>
            <h3>${album.name}</h3>
            <p>${album.name}</p>
        </div>
    `

        albumsGrid.appendChild(albumCard)

    })

})