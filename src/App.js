
import './App.css';
import Navbar from './Components/Navbar';
import Bodycard from './Components/Bodycard';
import data from "./Components/sampleoutput.json";

function App() {
  
  return (
    <div>
      <Navbar/>
      <div className="info-file">
        {data.map((ele)=>{
          return <div className='mydata' key={ele.transactionId}>
            <Bodycard accname={ele.AccountName} balance={ele.BankBalance} trans={ele.transactionamount} transdate={ele.transactiondate}
                      type={ele.PaymentType.Id} typename={ele.PaymentType.Name}

                      sender={ele.senderDetails.sender} 
                      Sbank={ele.senderDetails.bank} Sifsc={ele.senderDetails.IFSC} Sacc={ele.senderDetails.accountno}
                      Stransdate={ele.senderDetails.transactiondate}

                      reciever={ele.recieverDetails.reciever}
                      wallet={ele.recieverDetails.wallet} referno={ele.recieverDetails.referenceno} Rtransdate={ele.recieverDetails.transactiondate}
                      
                      method={ele.paymentmethod} id={ele.transactionId}/>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
