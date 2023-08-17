import react, { useState } from 'react';

const Login = () =>{ 
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit=async(e)=>{
        e.preventDefault();
        
    }
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="con-div">
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter your username/email'
                required
              />
            </div>
            <br />
            <div className="con-div">
              <input
                type="password"
                id="phone"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="con-div">
              <button type="submit">Sing in</button>
            </div>
          </form>
        </div>
      ); 
} 

export default Login;