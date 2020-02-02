import React, { useState } from 'react'
import './styles.css'
import { loadUser  } from './actions/userProfile'
  const View = () => {
    const [formData, setFormData ] = useState({
      email: '',
      message: '',
      error: false 
    })
  const { email, message } = formData;
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value })
  function useLocalState(localItem) {
    const [value, setState] = useState(localStorage.getItem(localItem));
    function setLocalStorage(newItem) {
      localStorage.setItem(localItem, newItem);
      setState(newItem);
    }
    return [value, setLocalStorage];
  }

  function validateFormdata(formData) {
    const emailValid = formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    const messsageValid = formData.message.length >= 6
    return emailValid && messsageValid
  }
  const [closeModal, setCloseModal] = useLocalState('showFeedback');
  const showModal = (closeModal !== 'true')

  const onSubmit = e => {
    e.preventDefault();
    if (validateFormdata(formData)) {
      loadUser();
      setCloseModal('true')
    } else {
      setFormData({...formData, error: true })
    }
  }

    return (
      showModal &&
      <div>
        <form className='form'>
      <div>
      <button className="x" onClick={()=>setCloseModal('true')}>X</button>
        </div>
      <div>
        <span className="greeting">How are we doing?</span>
      </div>
      <div className="form-div">
        <input name="email" type="text" placeholder="Email" value={email} 
          onChange={e => onChange(e)}/>
      </div>
      <div className="form-div">
        <textarea name="message" placeholder="Message" value={message} 
          onChange={e => onChange(e)}/>
      </div>
      <div>
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
      <div>
      {formData.error && <span>Invalid Email or Message</span>}
        </div>
    </form>
      </div>
    );
}

export default (View);