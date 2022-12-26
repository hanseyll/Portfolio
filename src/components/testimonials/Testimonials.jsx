import React from 'react';
import './Testimonials.css';
import Image2 from '../../assets/testimonial2.png'
import Image1 from '../../assets/testimonial1.png'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
		{
			id: 1,
			image: Image1,
			title: "Francisco Giudicatti",
			subtitle: "Backend developer",
			comment: "Javier is a programmer who is incredibly talented and hardworking. He is dedicated to producing high-quality work and always puts forth his best effort. He is patient and willing to help out when needed and is very knowledgeable when it comes to coding. He is also great at problem solving and always has creative solutions to any issues that arise",
		},
		{
			id: 2,
			image: Image2,
			title: "Ivan Garcia",
			subtitle: "Backend developer",
			comment: "He is great at communicating and is always available to answer questions or provide feedback on his work. He is a great asset to our team and is always willing to go the extra mile to make sure our projects are successful.",
		},
	];

	return (
		<section className="testimonials container section">

			<h2 className="section__title">Testimonials</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} className='imgTestimonial' alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials