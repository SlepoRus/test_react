import React from 'react';
import { mount, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import { BoardList, AddAdvent } from '../containers';
import configureStore from '../redux/configureStore';
import Utils from 'react-dom/test-utils';

const testStore = configureStore();

const props = {
  store:testStore
}

describe('Проверка CRUD модели', function () {
  const wrapper_rd = mount(<BoardList {...props} />);
  const wrapper_c = mount(<AddAdvent {...props} />)
  it('Создание модели',  () => {
    const length = wrapper_c.props().store.getState().board.data.length;
    wrapper_c.find('[name="title"]').simulate('change', {target: {value: '123'}})
    wrapper_c.find('[name="phone"]').simulate('change', {target: {value: '89162947988'}})
    wrapper_c.find('button').first().simulate('submit');
    expect(wrapper_c.props().store.getState().board.data.length).not.equal(length);
  })

  it('Чтение моделей',  () => {
    const demo = wrapper_rd.find('Board');
    expect(demo.props().data).not.equal(null)
  })

  it('Удаление модели',  () => {
    const length = wrapper_rd.find('Board').props().data.length;
    const demo = wrapper_rd.find('MiniMenu');
    demo.find('[data-name="Удалить"]').first().simulate('click');
    expect(wrapper_rd.find('Board').props().data.length).not.equal(length);
  })

});
