import React from 'react';
import cx from 'classnames';
// import styled from 'styled-components/macro';
import useForm from 'react-hook-form';
import { rEmail } from '../../utils/constants';

const Form = () => {
  const { register, handleSubmit, errors, getValues, watch } = useForm();
  const tiger = watch('tiger');

  const onSubmit = data => {
    console.log(data);
  };

  const validateAnimal = () => {
    const values = getValues();
    const theAnimals = ['bear', 'tiger', 'snake', 'donkey'];
    let animalCount = 0;
    theAnimals.forEach(animal => {
      if (values[animal]) animalCount += 1;
    });
    return animalCount >= 2;
  };
  console.log('errors: ', errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Fill out this awesome form</h1>
      <fieldset>
        <h3>Your details</h3>
        <p className={cx({ error: errors.email })}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            ref={register({ pattern: rEmail, required: true })}
            type="text"
            id="email"
            name="email"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby="error-email-required error-email-valid"
          />
          {errors.email && errors.email.type === 'required' && (
            <span role="alert" id="error-email-required">
              Please enter an email address.
            </span>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <span role="alert" id="error-email-valid">
              Please enter a valid email address.
            </span>
          )}
        </p>
        <p className={cx({ error: errors.password })}>
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            ref={register({ minLength: 8, required: true })}
            className="error"
            type="password"
            id="password"
            name="password"
            aria-invalid={errors.password ? 'true' : 'false'}
            aria-describedby="error-password-required error-password-minLength"
          />
          {errors.password && errors.password.type === 'required' && (
            <span role="alert" id="error-password-required">
              Please enter a password.
            </span>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <span role="alert" id="error-password-minLength">
              Your password must be at least 8 characters long.
            </span>
          )}
        </p>
      </fieldset>

      <fieldset>
        <h3>Your animal</h3>
        <p className={cx({ error: errors.colour })}>
          <label className="label" htmlFor="colour">
            Colour
          </label>
          <select
            ref={register({ required: true })}
            name="colour"
            id="colour"
            aria-invalid={errors.colour ? 'true' : 'false'}
            aria-describedby="error-colour-required">
            <option value="">Pick a colour</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="brown">Brown</option>
          </select>
          {errors.colour && errors.colour.type === 'required' && (
            <span role="alert" id="error-colour-required">
              Please pick a colour.
            </span>
          )}
        </p>
        <p
          className={cx({
            error: Object.keys(errors).length > 0 && !validateAnimal(),
          })}>
          <span className="label">Animal</span>

          <input
            ref={register({ validate: validateAnimal })}
            type="checkbox"
            name="bear"
            id="bear"
            aria-invalid={!validateAnimal() ? 'true' : 'false'}
            aria-describedby="error-animal-two-required"
          />
          <label htmlFor="bear">Bear</label>

          <input
            ref={register({ validate: validateAnimal })}
            type="checkbox"
            name="tiger"
            id="tiger"
            aria-invalid={!validateAnimal() ? 'true' : 'false'}
            aria-describedby="error-animal-two-required"
          />
          <label htmlFor="tiger">Tiger</label>

          <input
            ref={register({ validate: validateAnimal })}
            type="checkbox"
            name="snake"
            id="snake"
            aria-invalid={!validateAnimal() ? 'true' : 'false'}
            aria-describedby="error-animal-two-required"
          />
          <label htmlFor="snake">Snake</label>

          <input
            ref={register({ validate: validateAnimal })}
            type="checkbox"
            name="donkey"
            id="donkey"
            aria-invalid={!validateAnimal() ? 'true' : 'false'}
            aria-describedby="error-animal-two-required"
          />
          <label htmlFor="donkey">Donkey</label>
          {!validateAnimal() &&
            ((errors.bear && errors.bear.type === 'validate') ||
              (errors.snake && errors.snake.type === 'validate') ||
              (errors.donkey && errors.donkey.type === 'validate') ||
              (errors.tiger && errors.tiger.type === 'validate')) && (
              <span role="alert" id="error-colour-required">
                Please pick at least two animals.
              </span>
            )}
        </p>
        {tiger ? (
          <p className={cx({ error: errors.tiger_type })}>
            <label className="label" htmlFor="tiger_type">
              Type of tiger
            </label>
            <input
              ref={register({ required: true })}
              type="text"
              name="tiger_type"
              id="tiger_type"
              aria-invalid={errors.tiger_type ? 'true' : 'false'}
              aria-describedby="error-tiger_type-required"
            />
            {errors.tiger_type && errors.tiger_type.type === 'required' && (
              <span role="alert" id="error-tiger_type-required">
                Please enter the type of your tiger.
              </span>
            )}
          </p>
        ) : null}
      </fieldset>
      <fieldset>
        <p>
          <input type="submit" id="submit" value="Create account" />
        </p>
      </fieldset>
    </form>
  );
};

export default Form;
