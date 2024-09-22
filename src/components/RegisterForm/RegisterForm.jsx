import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Form, Input, Label, Button, LoggedLink } from './RegisterPage.module';
import { Notify } from 'notiflix';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(`${originalPromiseResult.user.name} welcome!`);
        form.reset();
      })
      .catch(() => {
        Notify.failure("Sorry, something's wrong");
      });
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          placeholder="Enter name ..."
          required
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          title="Email must be in the correct format."
          placeholder="Enter email ..."
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password must contain at least one number and one letter and be at least 8 characters long."
          placeholder="Enter password ..."
          required
        />
      </Label>
      <Button type="submit">Register</Button>
      <LoggedLink to="/login">Have an account? Log In</LoggedLink>
    </Form>
  );
};

export default RegisterForm;
