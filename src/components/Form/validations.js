const validations = (userData) => {
  let errors = {};
  
  if (!userData.name.length) {
    errors.name = "*El nombre es obligatorio";
  } else if (!/^[a-zA-Z\s]+$/.test(userData.name)) {
    errors.name = "*Debe contener solo letras";
  }
  
  if (!userData.adress.length) {
    errors.adress = "*La dirección es obligatoria"
  }
  if (!userData.email.length) {
    errors.email = "*El email es obligatorio"
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.email)) {
    errors.email = "*Email inválido";
  }

  return errors
};

export default validations;
