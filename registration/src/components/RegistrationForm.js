import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    emailError: '',
    passwordError: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    // Простое регулярное выражение для проверки формата email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    // Простое регулярное выражение для проверки минимальной длины пароля (минимум 6 символов)
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка валидности email
    if (!validateEmail(formData.email)) {
      setFormErrors({ ...formErrors, emailError: 'Invalid email format' });
      return;
    } else {
      setFormErrors({ ...formErrors, emailError: '' });
    }

    // Проверка валидности пароля
    if (!validatePassword(formData.password)) {
      setFormErrors({
        ...formErrors,
        passwordError: 'Password must be at least 6 characters long',
      });
      return;
    } else {
      setFormErrors({ ...formErrors, passwordError: '' });
    }

    // Все данные валидны, можно отправлять запрос на сервер
    // Здесь может быть ваша логика отправки данных

    alert('Form submitted successfully!');
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.emailError && <span className="error">{formErrors.emailError}</span>}
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formErrors.passwordError && <span className="error">{formErrors.passwordError}</span>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;