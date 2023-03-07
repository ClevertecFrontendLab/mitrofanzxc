import { API } from 'constants/axios';
import { BookData } from 'constants/constants.types';
import { DataTestId } from 'constants/data-test-id';

import { FC, Fragment, useState } from 'react';
import { Sprite } from 'components';
import { SpriteId } from 'components/sprite/sprite.types';
import SwiperCore, { Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './slider.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/thumbs';
import 'swiper/scss/scrollbar';

export type SliderProps = {
  data: BookData;
};

export const Slider: FC<SliderProps> = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  return (
    <Fragment>
      {data && data.images && data.images.length > 0 && (
        <div className='book-page__img-wrapper'>
          <div className='swiper-1'>
            <Swiper
              modules={[Thumbs, Pagination]}
              loop={true}
              pagination={{ clickable: true }}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              spaceBetween={30}
              breakpoints={{
                1: {
                  spaceBetween: 50,
                },
                371: {
                  spaceBetween: 30,
                },
              }}
              data-test-id={DataTestId.SlideBig}
            >
              {data.images.map(({ url }) => (
                <SwiperSlide key={url}>
                  <img src={`${API.BaseUrl}${url}`} alt='card-img' className='card__img' />
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
                  <SwiperSlide key={url} className='thumbs__item' data-test-id={DataTestId.SlideMini}>
                    <img src={`${API.BaseUrl}${url}`} alt='card-img' className='thumbs__img' />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      )}
      {(!data || !data.images || data.images.length <= 0) && (
        <div className='placeholder book-page__img-wrapper'>
          <Sprite id={SpriteId.Cat} className='placeholder__logo' />
        </div>
      )}
    </Fragment>
  );
};
