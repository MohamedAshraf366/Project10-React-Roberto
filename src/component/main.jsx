import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect } from 'react';
import '../App.css';
import resort1 from '../resort1.jpg';
import resort2 from '../resort2.jpg';
import resort3 from '../resort3.jpg'


let Main = ()=>{
    let data = [
        {id:1, url:resort1,},
        {id:2, url:resort2,},
        {id:3, url:resort3,},
    ]
    useEffect(() => {
        // تفعيل التولتيب عند تحميل الصفحة
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach((tooltip) => {
          new window.bootstrap.Tooltip(tooltip);
        });
      }, []);

return(
    <>

    <CardGroup className='rounded-0 '>
    {data.map((m)=>(
        <Card className="text-white border border-0 ">
                <Card.Img src={m.url} className='rounded-0' alt="Card image" />
                <Card.ImgOverlay className='cardBackGround d-flex flex-column justify-content-between'>
                    <Card.Body className='cardBody'>
                        <Card.Title className='d-flex flex-column align-items-end gap-2 fontAwsome'>
                        <i className="fa-solid fa-images" data-bs-toggle="tooltip" data-bs-placement="left"  data-bs-title="View More Pictures"></i>
                        <i className="fa-solid fa-map-location-dot" data-bs-toggle="tooltip" data-bs-placement="left"  data-bs-title="See The Location"></i>
                        <i className="fa-solid fa-circle-info" data-bs-toggle="tooltip" data-bs-placement="left"  data-bs-title="Know More Info"></i>
                        </Card.Title>
                        <Card.Text className='fs-5 card-text-container '>
                            <div className="card-text-left "></div>
                            <div className="card-text-right "></div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sunt, rem explicabo ut architecto debitis tempore doloremque dolorem dolor, quia, error pariatur dicta! Mollitia blanditiis minima ab similique unde iste.</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='border border-0 footerCard'>
                        <a className=" fw-bold fs-4 mt-auto">Discover Now <i class="fa-solid fa-arrow-right"></i></a>
                    </Card.Footer>
                </Card.ImgOverlay>
            </Card>
            ))}
        

    </CardGroup>


    </>
)
}
export default Main
