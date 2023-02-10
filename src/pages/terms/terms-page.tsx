import { FC } from 'react';

import './terms-page.scss';

export interface ITermsPage {
  contentView: string;
}

export const TermsPage: FC<ITermsPage> = ({ contentView }) => (
  <section className='terms-page'>
    <h3 className='h3'>{contentView === 'terms' ? 'Правила пользования' : 'Договор оферты'}</h3>
    <ul className='terms-list'>
      <li className='terms-list__item subtitle_large'>
        1. Идейные соображения высшего порядка, а также высокое качество позиционных исследований представляет собой
        интересный эксперимент проверки экспериментов, поражающих по своей масштабности и грандиозности.
      </li>
      <li className='terms-list__item body_large nesting-lvl_1'>
        1.1. Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого
        участника как способного принимать собственные решения касаемо инновационных методов управления процессами.{' '}
      </li>
      <li className='terms-list__item body_large nesting-lvl_1'>
        1.2. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление играет важную
        роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней политики лишь
        добавляют фракционных разногласий и преданы социально-демократической анафеме.{' '}
      </li>
      <li className='terms-list__item body_large nesting-lvl_1'>
        1.3. Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся непростую
        экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали.{' '}
      </li>
      <li className='terms-list__item body_large nesting-lvl_1'>
        1.4. Но независимые государства, которые представляют собой яркий пример континентально-европейского типа
        политической культуры, будут объединены в целые кластеры себе подобных.{' '}
      </li>
    </ul>
    <ul className='terms-list'>
      <li className='terms-list__item subtitle_large'>
        2. С учётом сложившейся международной обстановки, консультация с широким активом предоставляет широкие
        возможности для приоритизации разума над эмоциями.
      </li>
      <li className='terms-list__item body_large nesting-lvl_1'>
        2.1. Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого
        участника как способного принимать собственные решения касаемо инновационных методов управления процессами.
      </li>
      <li className='terms-list__item body_large nesting-lvl_2'>
        2.1.1. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление играет
        важную роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней политики лишь
        добавляют фракционных разногласий и преданы социально-демократической анафеме.
      </li>
      <li className='terms-list__item body_large nesting-lvl_2'>
        2.1.2. Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся непростую
        экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали.
      </li>
      <li className='terms-list__item body_large nesting-lvl_1'>
        2.2. Но независимые государства, которые представляют собой яркий пример континентально-европейского типа
        политической культуры, будут объединены в целые кластеры себе подобных.
      </li>
    </ul>
    <ul className='terms-list'>
      <li className='terms-list__item subtitle_large'>
        3. Принимая во внимание показатели успешности, укрепление и развитие внутренней структуры требует от нас анализа
        приоритизации разума над эмоциями.
      </li>
      <li className='terms-list__item body_large nesting-lvl_1'>
        3.1. Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого
        участника как способного принимать собственные решения касаемо инновационных методов управления процессами.
      </li>
      <li className='terms-list__item body_large nesting-lvl_2'>
        3.1.1. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление играет
        важную роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней политики лишь
        добавляют фракционных разногласий и преданы социально-демократической анафеме.
      </li>
      <li className='terms-list__item body_large nesting-lvl_2'>
        3.1.2. Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся непростую
        экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали.
      </li>
      <li className='terms-list__item body_large nesting-lvl_1'>
        3.2. Но независимые государства, которые представляют собой яркий пример континентально-европейского типа
        политической культуры, будут объединены в целые кластеры себе подобных.
      </li>
      <li className='terms-list__item body_large nesting-lvl_1'>
        3.3. Не следует, однако, забывать, что экономическая повестка сегодняшнего дня требует анализа анализа
        существующих паттернов поведения.
      </li>
      <li className='terms-list__item body_large nesting-lvl_2'>
        3.3.1. А ещё представители современных социальных резервов набирают популярность среди определенных слоев
        населения, а значит, должны быть функционально разнесены на независимые элементы.
      </li>
      <li className='terms-list__item body_large nesting-lvl_3'>
        3.3.1.1. Стремящиеся вытеснить традиционное производство, нанотехнологии могут быть объявлены нарушающими
        общечеловеческие нормы этики и морали.
      </li>
      <li className='terms-list__item body_large nesting-lvl_3'>
        3.3.1.2. Прежде всего, разбавленное изрядной долей эмпатии, рациональное мышление однозначно фиксирует
        необходимость новых предложений. Являясь всего лишь частью общей картины, независимые государства представлены в
        исключительно положительном свете.
      </li>
      <li className='terms-list__item body_large nesting-lvl_1'>
        3.4. Повседневная практика показывает, что убеждённость некоторых оппонентов требует от нас анализа
        распределения внутренних резервов и ресурсов.
      </li>
    </ul>
  </section>
);
