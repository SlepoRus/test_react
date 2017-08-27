import React from 'react';
import { TopBar } from '../../components';
import { bulletin } from '../../api/';
import { connect } from 'react-redux';
import { boardCreate } from '../../redux/actions/board';

const initialState = {
  title: '',
  phone: '',
  text: '',
  city: '',
  image: '',
  error: '',
}
class AddAvent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = ({ name, value }) => {
    let data = {};
    data[name] = value
    this.setState(data);
  }

  handleFile = ({ name, value }) => {
    if (!value) {
      this.setState({ image: '' });
    } else {
      var files = value.target.files;
      for (var i = 0, f; f = files[i]; i++) {
        if (!f.type.match('image.*')) {
          this.setState({ error: 'Файл не соответсвует формату'});
          continue;
        }
        if (f.size > 2900000) {
          this.setState({ error: 'Размер файла превышен'})
          continue;
        }
          var reader = new FileReader();
          reader.onload = ((theFile) => {
              return (e) => {
                  this.setState({ image: e.target.result })
              };
          })(f);
          reader.readAsDataURL(f);
      }
    }
  }

  handleAdd = (e) => {
    let validate = (name) => {
      document.getElementsByName(name)[0] ?
      document.getElementsByName(name)[0].style.border = "1px solid red" : null;
    },
    reset = (name) => {
      document.getElementsByName(name)[0] ?
      document.getElementsByName(name)[0].style.border = "1px solid gray" : null;
    }

    reset('title'); reset('phone'); reset('text');
    e.preventDefault();
    const { title, phone, text } = this.state;
    if (!title) {
      this.setState({ error: 'Название обязательно'})
      validate('title')
      return;
    }
    if (title.length > 100) {
      this.setState({ error: 'Название не может быть больше 100'});
      validate('title')
      return;
    }
    if (text.length > 300) {
      this.setState({ error: 'Описание не может быть больше 300'});
      validate('text')
      return;
    }
    if (!phone) {
      this.setState({ error: 'Телефон обязателен'});
      validate('phone')
      return;
    }
    if (phone.length > 15) {
      this.setState({ error: 'Телефон должен быть не больше 15'})
      validate('phone')
      return;
    }
    if (phone.length < 8) {
      this.setState({ error: 'Телефон должен быть не меньше 8'})
      validate('phone')
      return;
    }
    if (!phone.match(/(\+7|8)\d+$/ig)) {
      this.setState({ error: 'Телефон должен быть российского формата и содержать цифры'})
      validate('phone')
      return;
    }
    this.setState({ error: '' });

    this.props.dispatch(boardCreate(this.state));
    this.setState(initialState);
  }

  render() {
    const { title, phone, text, image, city, error } = this.state;
    return <TopBar handleAdd={this.handleAdd} handleFile={this.handleFile} handleChange={this.handleChange} {...this.state} />
  }
}

export default connect()(AddAvent);
