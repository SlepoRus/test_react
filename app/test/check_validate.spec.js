import React from 'react';
import { mount, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import { AddAdvent } from '../containers';
import configureStore from '../redux/configureStore';
import Utils from 'react-dom/test-utils';

const testStore = configureStore();

const props = {
  store:testStore
}


describe('Проверка полей', function () {
  const wrapper = mount(<AddAdvent {...props} />);
  it('Должно вернуть ошибку из за отсутсвия названия',  () => {
    wrapper.find('[name="phone"]').simulate('change', {target: {value: '123'}})
    wrapper.find('button').first().simulate('submit', 1);
    const demo = wrapper.find('TopBar');
    expect(demo.props().error).to.not.equal('');
  })

  it('Должно вернуть ошибку из за отсутсвия телефона',  () => {
    wrapper.find('[name="title"]').simulate('change', {target: {value: '123'}})
    wrapper.find('button').first().simulate('submit', 1);
    const demo = wrapper.find('TopBar');
    expect(demo.props().error).to.not.equal('');
  })

  it('Должно вернуть ошибку из за неправильного формата телефона',  () => {
    wrapper.find('[name="title"]').simulate('change', {target: {value: '123'}})
    wrapper.find('[name="phone"]').simulate('change', {target: {value: '123'}})
    wrapper.find('button').first().simulate('submit', 1);
    const demo = wrapper.find('TopBar');
    expect(demo.props().error).to.not.equal('');
  })

  it('Не должно быть ошибки',  () => {
    wrapper.find('[name="title"]').simulate('change', {target: {value: '123'}})
    wrapper.find('[name="phone"]').simulate('change', {target: {value: '89162947988'}})
    wrapper.find('button').first().simulate('submit', 1);
    const demo = wrapper.find('TopBar');
    expect(demo.props().error).to.equal('');
  })

  it('Возвращает ошибку если поле описание больше 300',  () => {
    wrapper.find('[name="text"]').simulate('change', {target: {value: '89162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988'}})
    wrapper.find('[name="phone"]').simulate('change', {target: {value: '89162947988'}})
    wrapper.find('[name="title"]').simulate('change', {target: {value: '89162947988'}})
    wrapper.find('button').first().simulate('submit', 1);
    const demo = wrapper.find('TopBar');
    expect(demo.props().error).to.not.equal('');
  })

  it('Возвращает ошибку если поле название больше 100',  () => {
    wrapper.find('[name="title"]').simulate('change', {target: {value: '89162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988891629479888916294798889162947988'}})
    wrapper.find('[name="phone"]').simulate('change', {target: {value: '89162947988'}})
    wrapper.find('button').first().simulate('submit', 1);
    const demo = wrapper.find('TopBar');
    expect(demo.props().error).to.not.equal('');
  })

  it('Возвращает ошибку есди поле телефон больше 15',  () => {
    wrapper.find('[name="title"]').simulate('change', {target: {value: '891629479888916294798889162947988'}})
    wrapper.find('[name="phone"]').simulate('change', {target: {value: '891629479888916294798889162947988'}})
    wrapper.find('button').first().simulate('submit', 1);
    const demo = wrapper.find('TopBar');
    expect(demo.props().error).to.not.equal('');
  })
});
