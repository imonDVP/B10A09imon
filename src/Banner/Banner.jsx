import campingImg from '../assets/camping.jpg'
import desertImg from '../assets/desert.jpg'
import forestImg from '../assets/forest.jpg'
import mangrovImg from '../assets/mangrove.jpg'
import mountainImg from '../assets/mountain.jpg'
import riverImg from '../assets/river.jpg'
import oceanImg from '../assets/ocean.jpg'
import wildlifeImg from '../assets/wildlife.jpg'
import { NavLink } from 'react-router-dom'



const Banner = () => {
    return (
        <>
            <div className="carousel w-full h-[560px]">
            <div id="slide1" className="carousel-item w-full relative">
                <img
                src={riverImg}
                className="w-full h-full " />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <NavLink><a href="#slide8" className="btn btn-circle">❮</a></NavLink>
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <p className='absolute text-white top-10 left-10'>
                    River adventures offer a captivating blend of thrill, tranquility, and exploration, making them a perfect escape for adventurers and nature lovers. From calm paddles through meandering waterways to the heart-pounding excitement of whitewater rapids, these experiences immerse participants in the beauty and power of rivers. Along the way, adventurers encounter breathtaking landscapes, diverse wildlife, and often, untouched wilderness. Rivers also connect travelers to history and culture, unveiling the stories of the communities they sustain. Whether seeking adrenaline or peaceful reflection, river adventures promise a unique journey, combining the excitement of exploration with a deep appreciation for natures lifelines.
                </p>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                src={campingImg}
                className="w-full h-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <p className='absolute text-white top-10 left-10'>
                Camping retreats offer a chance to escape the hustle and bustle of daily life, inviting adventurers to reconnect with nature in its purest form. Whether nestled in the heart of a dense forest, beside a tranquil lake, or under the vast expanse of a starry sky, these retreats provide a perfect blend of adventure and relaxation. They cater to a range of preferences, from minimalist tent setups to luxurious glamping experiences, ensuring everyone can enjoy the great outdoors in their own way. Beyond the setting, camping fosters moments of camaraderie, self-reflection, and a deep appreciation for the natural world.
                </p>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                src={desertImg}
                className="w-full h-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <p className='absolute text-white top-10 left-10'>
                Desert exploration offers an extraordinary journey into some of the most awe-inspiring and inhospitable landscapes on Earth. With their vast, endless dunes, striking rock formations, and extreme temperatures, deserts are places of both beauty and challenge. Adventurers can experience the solitude of the desert's quiet vastness, the unique flora and fauna that survive in such harsh conditions, and the thrill of navigating shifting sands on foot, camel, or 4x4. Desert exploration also reveals the rich cultural heritage of ancient civilizations that once thrived in these arid lands, making it a truly transformative and unforgettable experience.
                </p>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                src={forestImg}
                className="w-full h-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
                <p className='absolute text-black top-10 left-10'>
                Forest expeditions offer a captivating escape into nature’s most verdant and mysterious landscapes, where towering trees, dappled sunlight, and the sounds of wildlife create an atmosphere of adventure and wonder. These journeys invite explorers to traverse trails that wind through ancient woodlands, lush rainforests, and serene groves, unveiling the rich biodiversity and hidden treasures of these ecosystems. Beyond their natural beauty, forests hold stories of resilience, history, and the delicate balance of life. Whether hiking, birdwatching, or simply soaking in the tranquility, forest expeditions promise a transformative experience, connecting adventurers to the primal essence of the wild.
                </p>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img
                src={mangrovImg}
                className="w-full h-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
                <p className='absolute text-white top-10 left-10'>
                Mangrove forest expeditions offer an extraordinary opportunity to explore one of the most vital and unique ecosystems on Earth. These coastal wonders, where land meets sea, are home to a diverse array of wildlife, from vibrant bird species to elusive marine creatures. Navigating through the dense network of mangrove roots by boat or kayak, adventurers witness the delicate balance of this habitat, known for its critical role in protecting shorelines, enhancing biodiversity, and absorbing carbon. A mangrove forest expedition is a truly immersive experience, connecting travelers with nature while highlighting the importance of conservation in preserving these vital ecosystems.
                </p>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img
                src={mountainImg}
                className="w-full h-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide5" className="btn btn-circle">❮</a>
                <a href="#slide7" className="btn btn-circle">❯</a>
                </div>
                <p className='absolute text-white top-10 left-10'>
                    Mountain treks offer an exhilarating escape into natures most majestic landscapes, blending physical challenge with breathtaking rewards. Whether ascending rugged peaks or traversing serene alpine trails, these adventures promise stunning panoramas, crisp mountain air, and a profound sense of accomplishment. Trekkers can immerse themselves in diverse terrains, from lush forests to snow-capped summits, while encountering unique flora and fauna along the way.
                    Beyond the physical journey, mountain treks inspire personal growth, fostering resilience, mindfulness, and a deep connection to the natural world. Perfect for adventure enthusiasts and nature lovers alike, trekking offers a chance to step out of the ordinary and into the extraordinary.
                </p>
            </div>
            <div id="slide7" className="carousel-item relative w-full">
                <img
                src={oceanImg}
                className="w-full h-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide6" className="btn btn-circle">❮</a>
                <a href="#slide8" className="btn btn-circle">❯</a>
                </div>
                <p className='absolute text-white top-10 left-10'>
                    Ocean dives open a window to an enchanting underwater world, offering an unparalleled experience of exploration and wonder. Beneath the waves lies a realm teeming with vibrant coral reefs, swaying kelp forests, and an array of marine life ranging from playful dolphins to elusive sharks. For divers, the ocean is both a playground and a classroom, revealing the intricate beauty and fragility of aquatic ecosystems. Whether youre gliding through a colorful coral reef in the tropics or exploring a mysterious shipwreck, ocean dives blend adventure with tranquility, inviting you to connect deeply with the planets largest and most vital ecosystem.
                </p>
            </div>
            <div id="slide8" className="carousel-item relative w-full">
                <img
                src={wildlifeImg}
                className="w-full h-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide7" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <p className='absolute text-white top-10 left-10'>
                Wildlife safaris offer an unparalleled adventure, transporting travelers into the heart of natures most majestic landscapes. From the sprawling savannas of Africa to the dense jungles of Asia and the vast wilderness of the Americas, safaris provide a front-row seat to the wonders of the animal kingdom. Witness the thrill of a lions hunt, the grace of elephants roaming free, or the spectacle of the Great Migration, as millions of creatures move across vast plains in search of survival. Beyond the excitement, safaris foster a deep connection with nature, blending conservation with exploration for an unforgettable experience.
                </p>
            </div>
            </div>
        </>
    );
};

export default Banner;