import Marquee from "react-fast-marquee";
import Card from './../Card/Card';



const CardContainer = ({data}) => {
    return (
        <div>
            <Marquee pauseOnHover={true} speed={150} className="space-x-6 rounded-2xl">
            {
                data?.map((item)=>(<Card key={item.ID} className="shadow-2xl rounded-2xl" item={item}></Card>))
            }
            </Marquee>
        </div>
    );
};

export default CardContainer;