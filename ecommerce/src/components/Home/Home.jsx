import './Home.css'
import Slider from "react-slick";
import CategoryList from '../CategoryList/CategoryList';
import dynamicData from '../Manager/DynamicData.json'

const slideData = dynamicData.slider

const dataE = dynamicData.electrotics

const dataF = dynamicData.fashion

const dataG = dynamicData.grocery

const listData = [
    {
        "title": "Best of Electronics",
        "data": dataE,
        "image": "https://rukminim1.flixcart.com/fk-p-flap/530/810/image/1e83363d52a41074.jpg?q=20"
    },
    {
        "title": "Top Deals on Fashion",
        "data": dataF,
        "image": "https://mir-s3-cdn-cf.behance.net/project_modules/hd/d3abbc49536773.560860e305ce9.jpg"
    },
    {
        "title": "Fresh Groceries for You",
        "data": dataG,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08ihfL4vhM5GrGO3j5TLEdQldIWw01fnGBw&usqp=CAU"
    }
]


const Home = () => {

    const settings = {
        infinite: true,
        speed: 250,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]

    };

    return (
        <>
            <div className="home">
                <Slider className='slick' {...settings}>
                    {
                        slideData.map((e, index) => {
                            return (
                                <div key={index}>
                                    <img src={e.image} alt="" />
                                </div>
                            );
                        })
                    }
                </Slider>

                {
                    listData.map((e, index) => {
                        return (
                            <CategoryList key={index} title={e.title} data={e.data} image={e.image} />
                        );
                    })
                }
            </div>
        </>
    )
}

export default Home