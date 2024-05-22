import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { MdPayment } from "react-icons/md";
import { RiCouponLine } from "react-icons/ri";

const Mobilenav = () => {
    const Navigate = useNavigate()
    const [show, setShow] = useState(true)
    const [payment, setPayment] = useState(false)
    const [voucher, setVoucher] = useState(false)
    const [refund, setRefund] = useState(false)
    const [delivery, setDelivery] = useState(false)
    const [account, setAccount] = useState(false)
    const [agent, setAgent] = useState(false)
    const [sell, setSell] = useState(false)

    const Sell = () => {
        setSell(true)
        setAgent(false)
        setAccount(false)
        setDelivery(false)
        setRefund(false)
        setVoucher(false)
        setShow(false)
        setPayment(false)
    }
    const Agent = () => {
        setAgent(true)
        setAccount(false)
        setDelivery(false)
        setRefund(false)
        setVoucher(false)
        setShow(false)
        setPayment(false)
        setSell(false)
    }
    const Account = () => {
        setAccount(true)
        setDelivery(false)
        setRefund(false)
        setVoucher(false)
        setShow(false)
        setPayment(false)
        setAgent(false)
        setSell(false)
    }
    const Delivery = () => {
        setDelivery(true)
        setRefund(false)
        setVoucher(false)
        setShow(false)
        setPayment(false)
        setAccount(false)
        setAgent(false)
        setSell(false)
    }
    const Refund = () => {
        setRefund(true)
        setVoucher(false)
        setShow(false)
        setPayment(false)
        setDelivery(false)
        setAccount(false)
        setAgent(false)
        setSell(false)
    }
    const Voucher = () => {
        setVoucher(true)
        setShow(false)
        setPayment(false)
        setRefund(false)
        setDelivery(false)
        setAccount(false)
        setAgent(false)
        setSell(false)
    }
    const Payment = () => {
        setPayment(true)
        setShow(false)
        setVoucher(false)
        setRefund(false)
        setDelivery(false)
        setAccount(false)
        setAgent(false)
        setSell(false)
    }
    const Toggle = () => {
        setShow(true)
        setPayment(false)
        setVoucher(false)
        setRefund(false)
        setDelivery(false)
        setAccount(false)
        setAgent(false)
        setSell(false)
    }
  return (
    <>
        {show ? (
            <div className="w-[100%] flex flex-col h-[100%]">
        <div onClick={Payment} className={`w-full min-h-[50px] flex justify-between items-center mb-[5px] cursor-pointer text-[#000] `}>
           <div className="flex">
             <div className='text-[20px]  font-bold'>
              <MdPayment />
            </div>
            <div className='font-medium  text-[17px] ml-[15px] sm:text-[15px] '>Payment</div>
           </div>
           <div className="text-primary text-[20px]"><IoIosArrowForward /></div>
        </div>
        
        <div onClick={Voucher} className={`w-full min-h-[50px] flex justify-between items-center mb-[5px] cursor-pointer text-[#000] `}>
           <div className="flex">
             <div className='text-[20px]  font-bold'>
              <RiCouponLine />
            </div>
            <div className='font-medium  text-[17px] ml-[15px] '>Voucher</div>
           </div>
           <div className="text-primary text-[20px]"><IoIosArrowForward /></div>
        </div>
        
        <div onClick={Refund} className={`w-full min-h-[50px] flex justify-between items-center mb-[5px] cursor-pointer text-[red] `}>
           <div className="flex items-center">
             <div className='  font-bold'>
              <svg className="ml-[-13px]" width="48" height="48" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.4751 18.6465C35.32 18.6464 36.1331 18.9693 36.7478 19.549C37.3626 20.1286 37.7327 20.9213 37.7822 21.7648L37.7877 21.9592V33.0015C37.7878 33.8465 37.465 34.6595 36.8853 35.2743C36.3056 35.8891 35.5129 36.2591 34.6694 36.3087L34.4751 36.3142H19.0158C18.1708 36.3142 17.3578 35.9914 16.743 35.4117C16.1282 34.832 15.7582 34.0394 15.7086 33.1958L15.7031 33.0015V21.9592C15.7031 21.1142 16.0259 20.3012 16.6056 19.6864C17.1853 19.0716 17.978 18.7016 18.8215 18.652L19.0158 18.6465H34.4751ZM35.5793 25.2719H17.9116V33.0015C17.9116 33.272 18.0109 33.533 18.1906 33.7351C18.3704 33.9372 18.618 34.0663 18.8866 34.098L19.0158 34.1057H34.4751C34.7455 34.1057 35.0066 34.0064 35.2087 33.8267C35.4108 33.6469 35.5399 33.3993 35.5716 33.1307L35.5793 33.0015V25.2719ZM23.7563 26.8885C23.955 26.6904 24.2216 26.5754 24.5021 26.5669C24.7825 26.5583 25.0556 26.6568 25.2661 26.8424C25.4765 27.0279 25.6084 27.2866 25.635 27.5659C25.6616 27.8452 25.5809 28.1241 25.4093 28.3461L25.3177 28.451L25.1841 28.5846H30.0581C30.3396 28.5849 30.6103 28.6926 30.8149 28.8859C31.0196 29.0791 31.1427 29.3431 31.1592 29.6241C31.1757 29.905 31.0843 30.1817 30.9037 30.3975C30.723 30.6134 30.4668 30.7521 30.1873 30.7853L30.0581 30.793H25.1841L25.3166 30.9266C25.5167 31.1249 25.6335 31.3922 25.6431 31.6737C25.6526 31.9553 25.5542 32.2298 25.3679 32.4412C25.1817 32.6525 24.9217 32.7847 24.6412 32.8107C24.3607 32.8366 24.0808 32.7544 23.859 32.5808L23.7563 32.488L21.7366 30.4695C21.5465 30.2793 21.4323 30.0264 21.4154 29.758C21.3986 29.4897 21.4802 29.2244 21.645 29.0119L21.7366 28.9081L23.7563 26.8885ZM34.4751 20.8549H19.0158C18.723 20.8549 18.4421 20.9713 18.235 21.1784C18.0279 21.3855 17.9116 21.6663 17.9116 21.9592V23.0634H35.5793V21.9592C35.5793 21.6663 35.4629 21.3855 35.2559 21.1784C35.0488 20.9713 34.7679 20.8549 34.4751 20.8549Z" fill="black"/>
                </svg>
            </div>
            <div className='font-medium  text-[17px] '>Returns & Refunds</div>
           </div>
           <div className="text-primary text-[20px]"><IoIosArrowForward /></div>
        </div>
        
        <div onClick={Delivery} className={`w-full min-h-[50px] flex justify-between items-center mb-[5px] cursor-pointer text-[#000] `}>
           <div className="flex items-center">
             <div className='text-[20px]  font-bold'>
              <svg  className={`ml-[-13px] ${delivery ? 'fill-white' : "fill-[#000]"}`} width="46" height="46" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.7839 30.1054C21.8129 30.2102 21.8623 30.3084 21.9292 30.3941C21.9961 30.4799 22.0793 30.5516 22.1739 30.6052C22.2686 30.6589 22.3729 30.6933 22.4808 30.7067C22.5888 30.72 22.6983 30.7119 22.8031 30.6829C22.908 30.6539 23.0061 30.6045 23.0919 30.5376C23.1776 30.4707 23.2494 30.3876 23.303 30.2929C23.3566 30.1983 23.3911 30.094 23.4044 29.986C23.4177 29.8781 23.4097 29.7686 23.3807 29.6637L21.7839 30.1054ZM17.0291 18.4668C16.9239 18.4361 16.8136 18.4265 16.7046 18.4388C16.5956 18.451 16.4902 18.4847 16.3943 18.538C16.2985 18.5913 16.2142 18.6631 16.1464 18.7493C16.0785 18.8354 16.0284 18.9342 15.9991 19.0398C15.9697 19.1454 15.9615 19.2559 15.9752 19.3647C15.9888 19.4735 16.0239 19.5785 16.0784 19.6736C16.1329 19.7687 16.2058 19.8521 16.2928 19.9188C16.3798 19.9856 16.4792 20.0344 16.5852 20.0624L17.0291 18.4668ZM35.7878 30.6134C35.8956 30.5884 35.9974 30.5421 36.087 30.4772C36.1767 30.4123 36.2524 30.33 36.3097 30.2354C36.367 30.1407 36.4048 30.0355 36.4207 29.9259C36.4367 29.8164 36.4306 29.7048 36.4027 29.5977C36.3747 29.4906 36.3257 29.3902 36.2583 29.3023C36.1909 29.2145 36.1066 29.1411 36.0104 29.0864C35.9142 29.0317 35.8079 28.9969 35.698 28.984C35.5881 28.971 35.4767 28.9803 35.3704 29.0111L35.7878 30.6134ZM24.7554 32.6385C25.0977 33.8753 24.3469 35.1816 23.0174 35.5272L23.4337 37.1294C25.6167 36.563 26.9506 34.3666 26.3521 32.1968L24.7554 32.6385ZM23.0174 35.5272C21.679 35.875 20.3363 35.0976 19.9918 33.8499L18.3951 34.2915C18.9913 36.4503 21.2594 37.6948 23.4337 37.1294L23.0174 35.5272ZM19.9918 33.8499C19.6495 32.6131 20.4003 31.3068 21.7298 30.9612L21.3135 29.3601C19.1305 29.9265 17.7955 32.1217 18.3951 34.2915L19.9918 33.8499ZM21.7298 30.9612C23.0682 30.6134 24.4109 31.3907 24.7554 32.6385L26.3521 32.1968C25.7559 30.038 23.4878 28.7936 21.3135 29.3589L21.7298 30.9612ZM23.3807 29.6637L21.0044 21.0618L19.4076 21.5034L21.7839 30.1054L23.3807 29.6637ZM18.9107 18.988L17.0291 18.4668L16.5852 20.0624L18.4679 20.5847L18.9107 18.988ZM21.0044 21.0618C20.8642 20.5647 20.5978 20.1124 20.2308 19.749C19.8639 19.3855 19.4091 19.1234 18.9107 18.988L18.4701 20.5847C18.9394 20.715 19.2884 21.0717 19.4076 21.5034L21.0044 21.0618ZM25.7636 33.2193L35.7878 30.6134L35.3715 29.0111L25.3462 31.6171L25.7636 33.2193Z" fill=""/>
<path d="M24.064 22.8895C23.5284 20.9516 23.2612 19.9821 23.7162 19.2191C24.17 18.4549 25.1693 18.1954 27.168 17.6753L29.2881 17.1254C31.2868 16.6064 32.2861 16.3459 33.0734 16.7864C33.8607 17.2281 34.1291 18.1965 34.6635 20.1356L35.2322 22.1916C35.7677 24.1296 36.0361 25.0991 35.5811 25.8632C35.1262 26.6262 34.1269 26.8868 32.1282 27.4058L30.0081 27.9568C28.0094 28.4758 27.0101 28.7353 26.2228 28.2947C25.4354 27.853 25.1682 26.8846 24.6327 24.9467L24.064 22.8895Z" stroke="black" stroke-width="1.24226"/>
                    </svg>
            </div>
            <div className='font-medium  text-[17px]  '>Delivery</div>
           </div>
           <div className="text-primary text-[20px]"><IoIosArrowForward /></div>
        </div>
        
        <div onClick={Account} className={`w-full min-h-[50px] flex justify-between items-center mb-[5px] cursor-pointer text-[#000] `}>
           <div className="flex">
             <div className='text-[20px]  font-bold'>
              <FiHome />
            </div>
            <div className='font-medium  text-[17px] ml-[15px] '>Account</div>
           </div>
           <div className="text-primary text-[20px]"><IoIosArrowForward /></div>
        </div>
        
        <div onClick={Agent} className={`w-full min-h-[50px] flex justify-between items-center mb-[5px] cursor-pointer text-[#000] `}>
           <div className="flex">
             <div className='text-[20px]  font-bold'>
              <FiHome />
            </div>
            <div className='font-medium  text-[17px] ml-[15px] '>Become an agent</div>
           </div>
           <div className="text-primary text-[20px]"><IoIosArrowForward /></div>
        </div>
        
        <div onClick={Sell} className={`w-full min-h-[50px] flex justify-between items-center mb-[5px] cursor-pointer text-[#000] `}>
           <div className="flex">
             <div className='text-[20px]  font-bold'>
              <FiHome />
            </div>
            <div className='font-medium  text-[17px] ml-[15px] '>Sell on KAO</div>
           </div>
           <div className="text-primary text-[20px]"><IoIosArrowForward /></div>
        </div>
        
        <div onClick={()=>Navigate(-1)} className="w-[100%] justify-center items-center hidden sm:flex sm:mb-[20px] absolute top-[140px]">
        <div className="w-[100%] flex items-center">
          <div className="text-primary text-[20px] cursor-pointer"><IoIosArrowBack /></div>
          <h3 className="text-primary ml-[12px] text-[17px] md:text-[18px] font-[600]">Help Center</h3>
        </div>
      </div>
    </div>
        ) : null}

        {payment ? (
            <div className="flex w-[100%] h-[100%] flex-col ">
                <div onClick={Toggle} className="w-[100%] justify-center items-center sm:flex sm:mb-[20px] absolute top-[140px]">
                    <div className="w-[100%] flex items-center">
                    <div className="text-primary text-[20px] cursor-pointer"><IoIosArrowBack /></div>
                    <h3 className="text-primary ml-[12px] text-[17px] md:text-[18px] sm:text-[16px] font-[600]">Payment</h3>
                    </div>
            </div>
            
            <div className="flex flex-col">
                    <h1 className="text-[18px] font-[600]">What payment method(s) is used on KAO?</h1> 
                <p className="mt-[5px] text-[14px]">The number of ways in which merchants can collect payments from their customers, for example, credit cards, digital wallets, direct debit, offline payment, etc. In a store, perhaps you use cash, credit cards, or mobile payment options like Apple Pay.</p>
            </div> 
            
            <div className="flex flex-col mt-[40px]">
                    <h1 className="text-[18px] font-[600]">What payment method(s) is used on KAO?</h1> 
                <p className="mt-[5px] text-[14px]">The number of ways in which merchants can collect payments from their customers, for example, credit cards, digital wallets, direct debit, offline payment, etc. In a store, perhaps you use cash, credit cards, or mobile payment options like Apple Pay.</p>
            </div> 
            <div className="flex flex-col mt-[40px]">
                    <h1 className="text-[18px] font-[600]">What payment method(s) is used on KAO?</h1> 
                <p className="mt-[5px] text-[14px]">The number of ways in which merchants can collect payments from their customers, for example, credit cards, digital wallets, direct debit, offline payment, etc. In a store, perhaps you use cash, credit cards, or mobile payment options like Apple Pay.</p>
            </div> 
            <div className="flex flex-col mt-[40px]">
                    <h1 className="text-[18px] font-[600]">What payment method(s) is used on KAO?</h1> 
                <p className="mt-[5px] text-[14px]">The number of ways in which merchants can collect payments from their customers, for example, credit cards, digital wallets, direct debit, offline payment, etc. In a store, perhaps you use cash, credit cards, or mobile payment options like Apple Pay.</p>
            </div> 
            <div className="flex flex-col mt-[40px]">
                    <h1 className="text-[18px] font-[600]">What payment method(s) is used on KAO?</h1> 
                <p className="mt-[5px] text-[14px]">The number of ways in which merchants can collect payments from their customers, for example, credit cards, digital wallets, direct debit, offline payment, etc. In a store, perhaps you use cash, credit cards, or mobile payment options like Apple Pay.</p>
            </div>
            <div className="flex flex-col mt-[40px]">
                    <h1 className="text-[18px] font-[600]">What payment method(s) is used on KAO?</h1> 
                <p className="mt-[5px] text-[14px]">The number of ways in which merchants can collect payments from their customers, for example, credit cards, digital wallets, direct debit, offline payment, etc. In a store, perhaps you use cash, credit cards, or mobile payment options like Apple Pay.</p>
            </div>
            <div className="flex flex-col mt-[40px]">
                    <h1 className="text-[18px] font-[600]">What payment method(s) is used on KAO?</h1> 
                <p className="mt-[5px] text-[14px]">The number of ways in which merchants can collect payments from their customers, for example, credit cards, digital wallets, direct debit, offline payment, etc. In a store, perhaps you use cash, credit cards, or mobile payment options like Apple Pay.</p>
            </div>   
            </div>
        ) : null}
        
        {voucher ? (
            <div className="flex w-[100%] h-[100%] flex-col ">
                <div onClick={Toggle} className="w-[100%] justify-center items-center sm:flex sm:mb-[20px] absolute top-[140px]">
                    <div className="w-[100%] flex items-center">
                    <div className="text-primary text-[20px] cursor-pointer"><IoIosArrowBack /></div>
                    <h3 className="text-primary ml-[12px] text-[17px] md:text-[18px] sm:text-[16px] font-[600]">Voucher</h3>
                    </div>
            </div>
            
            Voucher
            </div>
        ) : null}
        
        {refund ? (
            <div className="flex w-[100%] h-[100%] flex-col ">
                <div onClick={Toggle} className="w-[100%] justify-center items-center sm:flex sm:mb-[20px] absolute top-[140px]">
                    <div className="w-[100%] flex items-center">
                    <div className="text-primary text-[20px] cursor-pointer"><IoIosArrowBack /></div>
                    <h3 className="text-primary ml-[12px] text-[17px] md:text-[18px] sm:text-[16px] font-[600]">Return&Refunds</h3>
                    </div>
            </div>
            
            Returns and Refunds
            </div>
        ) : null}
        
        {delivery ? (
            <div className="flex w-[100%] h-[100%] flex-col ">
                <div onClick={Toggle} className="w-[100%] justify-center items-center sm:flex sm:mb-[20px] absolute top-[140px]">
                    <div className="w-[100%] flex items-center">
                    <div className="text-primary text-[20px] cursor-pointer"><IoIosArrowBack /></div>
                    <h3 className="text-primary ml-[12px] text-[17px] md:text-[18px] sm:text-[16px] font-[600]">Delivery</h3>
                    </div>
            </div>
            
            Delivery
            </div>
        ) : null}
        
        {account ? (
            <div className="flex w-[100%] h-[100%] flex-col ">
                <div onClick={Toggle} className="w-[100%] justify-center items-center sm:flex sm:mb-[20px] absolute top-[140px]">
                    <div className="w-[100%] flex items-center">
                    <div className="text-primary text-[20px] cursor-pointer"><IoIosArrowBack /></div>
                    <h3 className="text-primary ml-[12px] text-[17px] md:text-[18px] sm:text-[16px] font-[600]">Account</h3>
                    </div>
            </div>
            
            Account
            </div>
        ) : null}
        
        {agent ? (
            <div className="flex w-[100%] h-[100%] flex-col ">
                <div onClick={Toggle} className="w-[100%] justify-center items-center sm:flex sm:mb-[20px] absolute top-[140px]">
                    <div className="w-[100%] flex items-center">
                    <div className="text-primary text-[20px] cursor-pointer"><IoIosArrowBack /></div>
                    <h3 className="text-primary ml-[12px] text-[17px] md:text-[18px] sm:text-[16px] font-[600]">Agent</h3>
                    </div>
            </div>
            
            Agent
            </div>
        ) : null}
        
        {sell ? (
            <div className="flex w-[100%] h-[100%] flex-col ">
                <div onClick={Toggle} className="w-[100%] justify-center items-center sm:flex sm:mb-[20px] absolute top-[140px]">
                    <div className="w-[100%] flex items-center">
                    <div className="text-primary text-[20px] cursor-pointer"><IoIosArrowBack /></div>
                    <h3 className="text-primary ml-[12px] text-[17px] md:text-[18px] sm:text-[16px] font-[600]">Sell</h3>
                    </div>
            </div>
            
            Sell on KAO
            </div>
        ) : null}
    </>
  )
}

export default Mobilenav