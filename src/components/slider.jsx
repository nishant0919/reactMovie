import Carousel from 'react-bootstrap/Carousel'
function Slider(){
  return(
    <div className="container">
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/Fw6_H58kuUA/maxresdefault.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Animal</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F04%2Fgot-20-1-2000.jpg&q=85"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>House of Dragon</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.hdwallpapers.in/download/the_boys_poster_4k_hd-HD.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>The Boys</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
export default Slider;