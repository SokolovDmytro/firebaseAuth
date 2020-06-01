const getAuthForm = () => {
  return `
  <form name="authForm">
    <input type="text" name="email">
    <input type="password" name="password">
    <button type="submit" data-action="signup">SignUp</button>
    <button type="submit" data-action="signin">SignIn</button>
  </form>
`
}

export default getAuthForm;
