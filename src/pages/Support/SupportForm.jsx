import React, { Component } from 'react';
import './SupportForm.scss';
import IconSuccessfull from "../../images/iconSuccessfull.png";

class SupportForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      formData: null,
      isWindowContentVisible: true,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    this.setState({ formData });
    this.setState({
      name: '',
      email: '',
      message: '',
      isWindowContentVisible: false,
    });

    localStorage.setItem('formData', JSON.stringify(formData));
  };

  handleGoBack = () => {
    this.setState({ isWindowContentVisible: true });
    window.history.back();
  }

  render() {
    return (
      <div className='supportForm'>
        <div className="supportForm__window window">
          {this.state.isWindowContentVisible ? (
            <>
              <button
                type="button"
                className="btn-close supportForm__btn-close"
                aria-label="Close"
                onClick={this.handleGoBack}
              ></button>
              <h1 className='supportForm__title'>
                Ми на зв’язку
              </h1>
              <form className='supportForm__form' onSubmit={this.handleSubmit}>
                <div className='supportForm__name'>
                  <label className='supportForm__text paragraph'>Вкажіть ваше ім’я</label>
                  <input
                    className='supportForm__input'
                    type="text"
                    name="name"
                    placeholder="Ім'я"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className='supportForm__name'>
                  <label className='supportForm__text paragraph'>Вкажіть вашу електронну пошту</label>
                  <input
                    className='supportForm__input'
                    type="email"
                    name="email"
                    placeholder="Електронна пошта"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className='supportForm__name'>
                  <label className='supportForm__text paragraph'>Опишіть проблему</label>
                  <textarea
                    className='supportForm__input'
                    name="message"
                    placeholder="Не можу відправити повідомлення"
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                </div>
                 <button
                   className={`login__button ${
                    this.state.name !== "" && this.state.email !== "" && this.state.message !== ""
                    ? "button-green"
                    : "button-green button-green_disabled"
                    }`}
                  >
                    Надіслати
                  </button>
                {/* <button className='login__button button-green'>
                  Надіслати
                </button> */}
              </form>
            </>
          ) : (
            <>
              <img className='supportForm__icon' src={IconSuccessfull} alt="IconSuccessfull" />
              <h2 className='supportForm__title'>Ваше повідомлення надіслано!</h2>
              <p className='supportForm__text paragraph' >
                Дякуємо за звернення! Наша служба підтримки найближчим часом вам відповість
              </p>
              <button className='supportForm__button button-green' onClick={this.handleGoBack}>
                Повернутися назад
              </button>
            </>
          )}
          {/* <div>
            {this.state.formData && (
              <div>
                <h2>Дані збережено:</h2>
                <pre>{JSON.stringify(this.state.formData, null, 2)}</pre>
              </div>
            )}
          </div> */}
        </div>
      </div>
    );
  }
}

export  { SupportForm };