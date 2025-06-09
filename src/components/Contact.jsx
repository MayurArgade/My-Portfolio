import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const nameErrors = [
  ['Name is too short.', 'なまえ みじか！バカかよ'],                
  ['Please enter a valid name.', 'じぶんの なまえ いれてよ バカ〜'] 
];

const emailErrors = [
  ['Invalid email.', 'メールアドレス へんだよ バカ'],             
  ['Please enter a valid email.', 'ちゃんと メール いれてって！']    
];

const messageErrors = [
  ['Message too short.', 'メッセージ みじかすぎ〜 バカじゃん'],       
  ['Please write a longer message.', 'もっと ながく かいてよ バーカ']   
];


function getRandomError(errorsArray) {
  const [eng, jp] = errorsArray[Math.floor(Math.random() * errorsArray.length)];
  return `${eng} / ${jp}`;
}

const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const formData = new FormData(form.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const newErrors = {};
    if (!name || name.length < 2) newErrors.name = getRandomError(nameErrors);
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) newErrors.email = getRandomError(emailErrors);
    if (!message || message.length < 10) newErrors.message = getRandomError(messageErrors);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    emailjs.sendForm(
      'service_eyyxq5g',
      'template_t2fndcm',
      form.current,
      'oqTv6RpMEdwypkjzC'
    )
      .then(() => {
        setSubmitted(true);
        setLoading(false);
      })
      .catch(() => {
        alert('Failed to send. Please try again.');
        setLoading(false);
      });
  };

  return (
    <section id="contact">
      <h3>メッセージを送ってください 💌</h3>
      <h2>Send Me a Message</h2>

      {!submitted ? (
        <form ref={form} onSubmit={sendEmail} noValidate>
          <input type="text" name="name" placeholder="Your Name" required />
          {errors.name && <p className="form-error">{errors.name}</p>}

          <input type="email" name="email" placeholder="Your Email" required />
          {errors.email && <p className="form-error">{errors.email}</p>}

          <textarea name="message" placeholder="Your Message" rows="5" required />
          {errors.message && <p className="form-error">{errors.message}</p>}

          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      ) : (
        <p className="thank-you-msg">Thanks! I’ll get back to you soon. 🌸</p>
      )}
    </section>
  );
};

export default Contact;
