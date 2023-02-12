import { FC, Fragment, useState } from 'react';
import { Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BASE_URL_API } from '../../constants';
import { Sprite } from '..';

import { ISlider } from './slider.interface';

import './slider.scss';

export const Slider: FC<ISlider> = ({ data }) => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <Fragment>
      {data && data.images && data.images.length > 0 && (
        <div className='book-page__img-wrapper'>
          <div className='swiper-1'>
            <Swiper
              modules={[Thumbs, Pagination]}
              loop={true}
              pagination={{ clickable: true }}
              thumbs={{ swiper: thumbsSwiper }}
              spaceBetween={30}
              breakpoints={{
                1: {
                  spaceBetween: 50,
                },
                371: {
                  spaceBetween: 30,
                },
              }}
              data-test-id='slide-big'
            >
              {data.images.map(({ url }) => (
                <SwiperSlide key={url}>
                  <img src={`${BASE_URL_API}${url}`} alt='card-img' className='card__img' />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {data && data.images && data.images.length > 1 && (
            <div className='swiper-2'>
              <Swiper
                modules={[Thumbs, Navigation, Scrollbar]}
                loop={data.images.length >= 5}
                watchSlidesProgress={true}
                centeredSlides={true}
                navigation={true}
                scrollbar={{
                  hide: true,
                }}
                onSwiper={setThumbsSwiper}
                slidesPerView={data.images.length >= 5 ? 5 : data.images.length}
                spaceBetween={30}
                className='thumbs'
                breakpoints={{
                  769: {
                    slidesPerView: data.images.length >= 5 ? 4 : data.images.length,
                    spaceBetween: 20,
                    centeredSlides: false,
                  },
                  993: {
                    slidesPerView: data.images.length >= 5 ? 5 : data.images.length,
                  },
                }}
              >
                {data.images.map(({ url }) => (
                  <SwiperSlide key={url} className='thumbs__item' data-test-id='slide-mini'>
                    <img src={`${BASE_URL_API}${url}`} alt='card-img' className='thumbs__img' />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      )}
      {(!data || !data.images || data.images.length <= 0) && (
        <div className='placeholder book-page__img-wrapper'>
          <Sprite id='cat' className='placeholder__logo' />
        </div>
      )}
    </Fragment>
  );
};
