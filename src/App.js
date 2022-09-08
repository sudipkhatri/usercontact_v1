import './App.css';
import {useEffect, useState} from 'react';
import ContactCard from './ContactCard';

function App() {
  //https://jsonplaceholder.typicode.com/users
  const[data, setData] = useState([]);
  const[modifyData, setModifyData] = useState([]);
  const [loading, setLoading] = useState(0);
  useEffect(() => {
    setLoading(1);
    setTimeout(() => {
      setLoading(0);
    }, 4000);
  }, []);
  const[email, setEmail] = useState('');
  useEffect(()=>{
    const getUsers = async()=>{
      await fetch(
        "https://jsonplaceholder.typicode.com/users"
      )
      .then((response) => response.json())
      .then((res) => setData(res));
    } 
    getUsers();
  },[]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    filterData(email);
    setEmail('');
  }

  const filterData = (email) =>{
    const filterData = data.filter(data=>data.email.toLowerCase() === email.toLowerCase());
    setModifyData(filterData);
  }

 // console.log(modifyData);
  return (
    <div className="App">
       {loading ? <div className='loader'><div className='spin_motion'> </div></div> :
      <>
      <div className="search_bar">
        <form onSubmit={handleSubmit}>
          <input
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Search By Email..."
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="data_body">
        <div className="side_data">
          {data.map(({ id, name, email }) => {
            return (
              <div key={id} className='action_container'>
              <button
                className="btn_primary"
                onClick={() => filterData(email)}
              >
                {name}
              </button>
              </div>
            );
          })}
        </div>
        
        {modifyData.length === 0 ? 
        <div>
          <p>Click on the list to see info.</p> 
        </div> :
          <div className="main_data">
          {modifyData.map((info) => {
            const { id, name, phone, email, website, address, company } = info;
            return (
              <ContactCard
                key={id}
                name={name}
                phone={phone}
                email={email}
                website={website}
                address={address}
                company={company}
              />
            );
          })}
        </div>
        }
      </div>
        
      <div className="footer">
        <p>Made with ❤️ By sudip Khatri.</p>
      </div>
      </>
}
    </div>
  );
}

export default App;
