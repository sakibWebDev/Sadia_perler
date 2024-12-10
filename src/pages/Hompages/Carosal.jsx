"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules';
import Image from 'next/image';



export default function App() {
    const reviewdata = [
        {
          "id": 1,
          "name": "Leroy Jenkins",
          "position": "CEO, Abc company",
          "timeAgo": "2 days ago",
          "rating": "5"
        },
        {
          "id": 2,
          "name": "Jane Doe",
          "position": "Marketing Manager, XYZ Ltd.",
          "timeAgo": "1 week ago",
          "rating": "4.8"
        },
        {
          "id": 3,
          "name": "John Smith",
          "position": "Software Engineer, Tech Corp.",
          "timeAgo": "3 hours ago",
          "rating": "4.2"
        }
      ]
      
  
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          reviewdata.map((review) => {
            return (
              <SwiperSlide key={review.id}>
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                  <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                      <div>
                      <Image
                            src={`/assets/images/${review.id}.png`} 
                            alt={review.name}
                            width={50} 
                            height={50} 
                            />
                      </div>
                      <div>
                        <h4 className="font-bold">{review.name}</h4>
                       <h3>{review.position}</h3>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:text-yellow-700">
                      <span className="text-xs dark:text-gray-600">{review.timeAgo}</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                    <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                  </div>
                  <div className="rating rating-lg">
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-8"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
</div>
                </div>
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </>
  );
}

