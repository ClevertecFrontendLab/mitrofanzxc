import { FC } from 'react';

import unauthorizedImg from '../../assets/unauthorized.png';
import { ButtonPrimary, Sprite, TextField } from '../../components';
import { EButtonPrimaryTitle, EButtonPrimaryType } from '../../components/buttons/button-primary/button-primary.types';
import { ETextFieldId, ETextFieldPlaceholder, ETextFieldType } from '../../components/text-field/text-field.types';

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
          <TextField type={ETextFieldType.Text} id={ETextFieldId.Login} placeholder={ETextFieldPlaceholder.Login} />
          <TextField
            type={ETextFieldType.Password}
            id={ETextFieldId.Password}
            placeholder={ETextFieldPlaceholder.Password}
          />
          <TextField
            type={ETextFieldType.Text}
            id={ETextFieldId.FirstName}
            placeholder={ETextFieldPlaceholder.FirstName}
          />
          <TextField
            type={ETextFieldType.Text}
            id={ETextFieldId.LastName}
            placeholder={ETextFieldPlaceholder.LastName}
          />
          <TextField type={ETextFieldType.Tel} id={ETextFieldId.Phone} placeholder={ETextFieldPlaceholder.Tel} />
          <TextField type={ETextFieldType.Email} id={ETextFieldId.Email} placeholder={ETextFieldPlaceholder.Email} />
        </div>
        <div className='credentials__buttons'>
          <ButtonPrimary
            type={EButtonPrimaryType.Secondary}
            title={EButtonPrimaryTitle.Edit}
            className='button_large'
          />
          <ButtonPrimary
            type={EButtonPrimaryType.Primary}
            title={EButtonPrimaryTitle.SaveChanges}
            className='button_large'
            disabled={true}
          />
        </div>
      </div>
      <div className='credentials'>
        <h4 className='h4'>Договор</h4>
        <p className='body_large'>Здесь вы можете просмотрить данные о договоре, а так же внести оплату</p>
        <div className='credentials__fields'>
          <TextField
            type={ETextFieldType.Text}
            id={ETextFieldId.ContractOwner}
            placeholder={ETextFieldPlaceholder.ContractOwner}
          />
          <TextField
            type={ETextFieldType.Text}
            id={ETextFieldId.ContractNumber}
            placeholder={ETextFieldPlaceholder.ContractNumber}
          />
        </div>
        <div className='credentials__buttons'>
          <ButtonPrimary
            type={EButtonPrimaryType.Secondary}
            title={EButtonPrimaryTitle.ViewContract}
            className='button_large'
          />
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
