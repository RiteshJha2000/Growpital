import React from 'react'
import ".//Bodycard.css"

export default function Bodycard(props){

    let {balance,transdate,sender,Sbank,Sifsc,Sacc,Stransdate,reciever,wallet,referno,Rtransdate,method,id}=props;
  return (
    <div className='background'>
        <div className="background-img"></div>
        <div className="card mycard">
           <div className="card-body">
                <div className="balance">
                <p className='basic'>Money added to wallet</p>
                <p className='basic'>from Bank Account</p>
                <p className='total'>{balance}</p>
                <p className='basic'>{transdate}</p>
                </div>

                <div className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ebac02" className="bi bi-arrow-down-left-square-fill" viewBox="0 0 16 16">
                        <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm8.096-10.803L6 9.293V6.525a.5.5 0 0 0-1 0V10.5a.5.5 0 0 0 .5.5h3.975a.5.5 0 0 0 0-1H6.707l4.096-4.096a.5.5 0 1 0-.707-.707z"/>
                    </svg>
               </div>

            </div>
            <div className="myalert">
                <svg xmlns="http://www.w3.org/2000/svg" style={{display:'none'}}>
                <symbol id="check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </symbol>
                <symbol id="info-fill" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </symbol>
                <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </symbol>
                </svg>

                <div className="alert alert-success d-flex align-items-center" role="alert" style={{padding:'10px',backgroundColor:"#3d5a46"}}>
                <svg className="bi flex-shrink-0 me-2 alert-icon" role="img" aria-label="Success:"><use xlinkHref="#check-circle-fill"/></svg>
                <div>
                    <h2>Transaction Complete!</h2>
                    <p>Tap to view the Transaction</p>
                </div>
                </div>
            </div>

            <div className="info">
                <div className="sender">
                    <div className="send-info">
                    <h2 style={{color:'#ebac02'}}>From</h2>
                    <h2>{sender}</h2>
                    <p>{Sbank}, {Sifsc}</p>
                    <p>{Sacc}</p>
                    <p style={{color:'gray'}}>{Stransdate}</p>
                    </div>
                    <div className="send-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className= "bi bi-arrow-up-square send2" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                    </svg>
                    </div>
                    
                </div>
                <div className="receiver">
                    <div className="receiver-info">
                    <h2 style={{color:'#ebac02'}}>To</h2>
                    <h2>{reciever}</h2>
                    <p>{wallet}</p>
                    <p>{referno}</p>
                    <p style={{color:'gray'}}>{Rtransdate}</p>
                    </div>
                    <div className="receive-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-wallet send" viewBox="0 0 16 16">
                        <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"/>
                    </svg>
                    </div>
                </div>
                <div className="id">
                    <p><span>Payment method : </span>{method}</p>
                    <p><span>Transaction ID : </span>{id}</p>
                </div>
            </div>

            <div className="btns">
            <button type="button" className="btn btn-primary btn1">Help</button>
            <button type="button" className="btn btn-secondary btn2">Share</button>
            </div>
            
        </div>
    </div>
  )
}
