import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const PaymentSuccess = () => {
    
    useEffect(() => {
        localStorage.clear();
        
    },[])

    return (
        <div>Payment succeeded</div>
    )
}

export default PaymentSuccess