import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Image1 from "./images/logo1.png"

export default function WhatsappPop (){

  return (
      <FloatingWhatsApp 
      phoneNumber='+243971133807'
      accountName='Ingrid Fast Food'  
      chatMessage='Hello !'
      avatar={Image1}
      modil
      />
  )
}
