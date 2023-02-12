import { FC } from 'react';

import unauthorizedImg from '../../assets/unauthorized.png';
import { ButtonPrimary, Sprite, TextField } from '../../components';

import './profile-page.scss';

export const ProfilePage: FC = () => (
  <section className='profile-page'>
    <div className='wrapper'>
      <div className='profile-section'>
        <div className='profile-section__avatar filter-shadow'>
          <img src={unauthorizedImg} alt='unauthorized-img' className='user-avatar' />
          <input type='file' name='' id='input-file' className='input-file' />
          <label htmlFor='input-file' className='input-file__label'>
            <Sprite id='camera' className='input-file__logo' />
          </label>
        </div>
        <p className='h1 user-lastname'>Иванов</p>
        <p className='h1 user-firstname'>Иван</p>
      </div>
      <div className='credentials'>
        <h4 className='h4'>Учётные данные</h4>
        <p className='body_large'>Здесь вы можете отредактировать информацию о себе</p>
        <div className='credentials__fields'>
          <TextField type='text' id='login' placeholder='Логин' />
          <TextField type='password' id='password' placeholder='Пароль' />
          <TextField type='text' id='firstName' placeholder='Имя' />
          <TextField type='text' id='lastName' placeholder='Фамилия' />
          <TextField type='tel' id='phone' placeholder='Номер телефона' />
          <TextField type='email' id='email' placeholder='E-mail' />
        </div>
        <div className='credentials__buttons'>
          <ButtonPrimary type='secondary' title='Редактировать' className='button_large' />
          <ButtonPrimary type='primary' title='Сохранить изменения' className='button_large' disabled={true} />
        </div>
      </div>
      <div className='credentials'>
        <h4 className='h4'>Договор</h4>
        <p className='body_large'>Здесь вы можете просмотрить данные о договоре, а так же внести оплату</p>
        <div className='credentials__fields'>
          <TextField type='text' id='contractOwner' placeholder='Оформлен на' />
          <TextField type='text' id='contractNumber' placeholder='Номер договора' />
        </div>
        <div className='credentials__buttons'>
          <ButtonPrimary type='secondary' title='Посмотреть договор' className='button_large' />
        </div>
      </div>
      <div className='credentials'>
        <h4 className='h4'>Забронированная книга</h4>
        <p className='body_large'>Здесь вы можете просмотреть забронированную книгу, а так же отменить бронь</p>
      </div>
      <div className='credentials'>
        <h4 className='h4'>Книга которую взяли</h4>
        <p className='body_large'>Здесь можете просмотреть информацию о книге и узнать сроки возврата</p>
      </div>
      <div className='credentials'>
        <h4 className='h4'>История</h4>
        <p className='body_large'>Список прочитанных книг</p>
      </div>
    </div>
  </section>
);
