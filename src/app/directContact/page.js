'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const DirectContact = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Verificación de campos vacíos
    const { nombre, numero, email, mensaje } = e.target.elements;

    if (!nombre.value || !numero.value || !email.value || !mensaje.value) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos del formulario.',
      });
      return;
    }

    emailjs
    .sendForm(process.env.NEXT_PUBLIC_SERVICE_CODE, process.env.NEXT_PUBLIC_TEMPLATE_CODE, e.target, process.env.NEXT_PUBLIC_PUBLIC_KEY_EMAIL)
    .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          Swal.fire({
            icon: 'success',
            title: '¡Enviado!',
            text: 'Tu mensaje ha sido enviado con éxito.',
          });
          // Limpiar el formulario después de un envío exitoso
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.',
          });
        }
      );
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-screen bg-gradient-to-br from-[white] via-blue-[#1e2760] to-[#040d3e] overflow-hidden">
      <div className="container mx-auto px-4 pt-20 pb-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-2xl">
          <h1 className="text-4xl font-bold mb-5">¿Necesitas una web profesional o software a medida?</h1>
          <p className="text-lg mb-10">¡Contáctanos y te ayudaremos a hacer crecer tu negocio!</p>
          <button
            onClick={handleShowForm}
            className="bg-blue-950 hover:font-bold text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-dark transition-all"
          >
            Solicita tu presupuesto
          </button>
        </motion.div>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-md rounded-md p-10 mt-10">
            <h3 className="text-xl font-bold mb-5">Escríbenos tu propuesta y la haremos posible.</h3>
            <form onSubmit={sendEmail}>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                className="border border-gray-300 rounded-md py-2 px-4 mb-5 w-full"
                required
              />
              <input
                type="number"
                name="numero"
                placeholder="Contacto"
                className="border border-gray-300 rounded-md py-2 px-4 mb-5 w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="border border-gray-300 rounded-md py-2 px-4 mb-5 w-full"
                required
              />
              <textarea
                name="mensaje"
                placeholder="Mensaje"
                className="border border-gray-300 rounded-md py-2 px-4 mb-5 w-full"
                required
              />
              <button
                type="submit"
                className="bg-blue-950 text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-dark transition-all"
              >
                Enviar mensaje
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DirectContact;
