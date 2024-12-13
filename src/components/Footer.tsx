"use client";

import Container from "@/components/ui/container";
import Link from "next/link";
import Image from "next/image";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, Pen } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Impressum from "./Impressum";
import Datenschutz from "./Datenschutz";


interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Footer = () => {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowsDatenschutz] = useState(false);

  const handleImpressumClick = () => {
    setShowImpressum(!showImpressum); // Toggle visibility
  };
  const handleDatenschutzClick = () => {
    setShowsDatenschutz(!showDatenschutz); // Toggle visibility
  };
  
  // Define the form using react-hook-form with FormData type
  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Form submission handler
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <Container>
   
      <div className="bg-pewterC  px-4 sm:px-12 md:px-24 lg:px-48 py-12  ">
        {/* Header Section */}
       <div className="relative text-center mb-12">
  <h1 className="text-2xl sm:text-3xl font-medium text-blackC z-50 relative">Kontakt</h1>
  <span
    className="absolute deco-text md:deco-text-md lg:deco-text-lg left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-scalable md:deco-text-md lg:deco-text-lg top-[-5px] md:top-[-10px]  pointer-events-none whitespace-nowrap translate=no"
  >
    Mich Erreichen
  </span>
</div>



        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 pt-4 border ">
          {/* Left Section */}
          <div className="md:w-1/2 pt-2 ">
            <p className="text-2xl mb-4">Terminabsprachen nach vereinbarung</p>
            
            <div className="text-4xl py-4">
              {/* Phone Number */}
              <div className="flex items-center  mb-2  ">
                <Phone className="w-10 h-10 p-2 mr-2  text-blackC bg-champagneC rounded-sm" />
                <p>0151-1155 30 31</p>
              </div>
              {/* Email Address */}
              <div className="flex items-center">
                <Mail className="w-10 h-10  p-2 mr-2 text-blackC rounded-sm bg-champagneC" />
                <p>info@ayhankublay.de</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-col gap-4 mt-4 ">
              <Link
                href="https://www.instagram.com/ayhan.kublay.permanent/?igsh=MWQybGhyZmtnamJvZQ%3D%3D"
                
                passHref
                className="group flex items-center w-fit hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <div className="relative flex items-center w-14 h-14 rounded-full bg-champagneC transition-all duration-300 group-hover:w-[250px] overflow-hidden ">
                  {/* Icon */}
                  <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14">
                    <Image
                      src="/images/instagram.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="pointer-events-none "
                    />
                  </div>
                  {/* Text */}
                  <span className="ml-16 text-blackC text-base opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
                    Folge mir auf Instagram
                  </span>
                </div>
              </Link>
              {/* WhatsApp Icon */}
              <Link
                href="https://wa.me/4915111553031"
                passHref
                className="group flex items-center w-fit hover:opacity-80 transition-opacity"
                aria-label="WhatsApp"
              >
                <div className="relative flex items-center w-14 h-14 rounded-full bg-champagneC transition-all duration-300 group-hover:w-[250px] overflow-hidden">
                  {/* Icon */}
                  <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14">
                    <Image
                      src="/images/whatsApp.svg"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                      className="pointer-events-none"
                    />
                  </div>
                  {/* Text */}
                  <span className="ml-12 text-black text-base opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap ">
                    Chat per WhatsApp starten
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="md:w-1/2 + ">
            <h3 className="text-xl mb-4 text-center md:text-left">
              Ich stehe für alle Fragen jeder zeit zu Verfügung!
            </h3>

            {/* Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Name Field */}
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                          <Input
                            {...field}
                            placeholder="Name"
                            className="pl-10" // Padding to make space for the icon
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                          <Input
                            {...field}
                            type="email"
                            placeholder="Email"
                            className="pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone Field */}
                <FormField
                  name="phone"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                          <Input
                            {...field}
                            type="tel"
                            placeholder="Telefonnummer"
                            className="pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  name="message"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Pen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                          <Textarea
                            {...field}
                            placeholder="Nachricht"
                            className="pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-champagneC text-blackC text-xl hover:bg-blackC hover:text-softWhiteC">
                  Jetzt Senden
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Address Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-6">
          <div className="md:w-1/2 pt-2 text-xl">
            <h3 className="pb-4 text-3xl">Adresse:</h3>
            <p>
              Frauenstr. 30a
              <br />
              86830 Schwabmünchen
              <br />
              Germany
            </p>
          </div>
          <div className="md:w-1/2 pt-2 border w-full">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.1058481539467!2d10.752353975507223!3d48.185312047837954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479c1e680b885885%3A0xe89c7fec055945c8!2sFrauenstra%C3%9Fe%2030A%2C%2086830%20Schwabm%C3%BCnchen!5e0!3m2!1sen!2sde!4v1732772802022!5m2!1sen!2sde"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>


        {/* Footer Links */}
        <div className="w-full bg-champagneC text-blackC py-4 text-center">
      <p className="text-sm">
        ©Ayhan Kublay Permanent Make up |{" "}
        <button
          onClick={handleImpressumClick}
          className="underline text-softWhiteC hover:text-softWhiteC"
        >
          Impressum
        </button>{" "}
        |{" "}
        
        <button
          onClick={handleDatenschutzClick}
          className="underline text-softWhiteC hover:text-softWhiteC"
        >
          Datenschutz
        </button>{" "}
        |{" "}
        <Link href="/cookie" className="underline">
          Cookie-Einstellung
        </Link>
      </p>

      
      {/* Conditionally Render Impressum Component */}
      {showImpressum && (
        <div className="mt-6 ">
          <Impressum />
        </div>
      )}
    </div>
    {/* Conditionally Render Datenschutz Component */}
    {showDatenschutz && (
        <div className="mt-6  p-6 border border-gray-300 rounded-lg">
          <Datenschutz />
        </div>
      )}
    </div>
     </Container> 
    
  );
};

export default Footer;


     
 