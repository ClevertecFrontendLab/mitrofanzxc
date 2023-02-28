import { LocalStorage } from 'constants/local-storage';
import { Path } from 'constants/path';

import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import unauthorizedImg from 'assets/unauthorized.png';
import { ButtonPrimary, Sprite, TextField } from 'components';
import { ButtonPrimaryTitle, ButtonPrimaryType } from 'components/buttons/button-primary/button-primary.types';
import { SpriteId } from 'components/sprite/sprite.types';
import { TextFieldId, TextFieldPlaceholder, TextFieldType } from 'components/text-field/text-field.types';
import { getLocalStorage } from 'utils';

import './profile-page.scss';

export const ProfilePage: FC = () => {
  const isAuth = getLocalStorage(LocalStorage.Token);

  if (!isAuth) {
    return <Navigate to={Path.Authorization} />;
  }

  return (
    <section className='profile-page'>
      <div className='wrapper'>
        <div className='profile-section'>
          <div className='profile-section__avatar filter-shadow'>
            <img src={unauthorizedImg} alt='unauthorized-img' className='user-avatar' />
            <input type='file' name='' id='input-file' className='input-file' />
            <label htmlFor='input-file' className='input-file__label'>
              <Sprite id={SpriteId.Camera} className='input-file__logo' />
            </label>
          </div>
          <p className='h1 user-lastname'>Иванов</p>
          <p className='h1 user-firstname'>Иван</p>
        </div>
        <div className='credentials'>
          <h4 className='h4'>Учётные данные</h4>
          <p className='body_large'>Здесь вы можете отредактировать информацию о себе</p>
          <div className='credentials__fields'>
            {/* <TextField type={TextFieldType.Text} id={TextFieldId.Login} placeholder={TextFieldPlaceholder.Login} />
          <TextField
            type={TextFieldType.Password}
            id={TextFieldId.Password}
            placeholder={TextFieldPlaceholder.Password}
          />
          <TextField
            type={TextFieldType.Text}
            id={TextFieldId.FirstName}
            placeholder={TextFieldPlaceholder.FirstName}
          />
          <TextField
            type={TextFieldType.Text}
            id={TextFieldId.LastName}
            placeholder={TextFieldPlaceholder.LastName}
          />
          <TextField type={TextFieldType.Tel} id={TextFieldId.Tel} placeholder={TextFieldPlaceholder.Tel} />
          <TextField type={TextFieldType.Email} id={TextFieldId.Email} placeholder={TextFieldPlaceholder.Email} /> */}
          </div>
          <div className='credentials__buttons'>
            <ButtonPrimary
              type={ButtonPrimaryType.Secondary}
              title={ButtonPrimaryTitle.Edit}
              className='button_large'
            />
            <ButtonPrimary
              type={ButtonPrimaryType.Primary}
              title={ButtonPrimaryTitle.SaveChanges}
              className='button_large'
              disabled={true}
            />
          </div>
        </div>
        <div className='credentials'>
          <h4 className='h4'>Договор</h4>
          <p className='body_large'>Здесь вы можете просмотрить данные о договоре, а так же внести оплату</p>
          <div className='credentials__fields'>
            {/* <TextField
            type={TextFieldType.Text}
            id={TextFieldId.ContractOwner}
            placeholder={TextFieldPlaceholder.ContractOwner}
          />
          <TextField
            type={TextFieldType.Text}
            id={TextFieldId.ContractNumber}
            placeholder={TextFieldPlaceholder.ContractNumber}
          /> */}
          </div>
          <div className='credentials__buttons'>
            <ButtonPrimary
              type={ButtonPrimaryType.Secondary}
              title={ButtonPrimaryTitle.ViewContract}
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
};
