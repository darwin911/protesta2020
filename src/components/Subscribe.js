import React, { useState } from 'react';
import { addContact } from '../helper';

export const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const contact = await addContact({ email, telephone });

    if (contact && contact.data && contact.status === 200) {
      clearForm();
      alert(`${email} added!`);
    } else {
      setError(contact.data.error);
    }
  };

  const clearForm = () => {
    setEmail('');
    setTelephone('');
  };
  return (
    <section className='subscribe'>
      <form onSubmit={handleSubmit} className='subscribe__form'>
        <h1>Subscribe</h1>
        <p>
          Estamos recopilando una base de datos con informacion de contacto con todas las personas
          que quieren mantenerse al tanto de los que esta pasando.
        </p>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          placeholder='nombre@email.com'
          required
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor='tel'>Telefono</label>
        <input
          id='tel'
          type='tel'
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
          placeholder='809-555-5555'
          onChange={e => setTelephone(e.target.value)}
          value={telephone}
        />
        <button>Creo en ti</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </section>
  );
};
