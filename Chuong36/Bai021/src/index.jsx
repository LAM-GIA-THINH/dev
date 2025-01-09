import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  
/**
 * Thử thách: lấy mật khẩu từ biểu mẫu và ghi nó vào console
 * để đảm bảo rằng nó đã được nhập đúng.
 */
  
  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(password)
  }
  
  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <button>Submit</button>
        
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);