"use client";
import React from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import * as Yup from "yup";

const ContactForm = () => {
  const fields = [
    { label: "What's your brand name and website?", name: "field1" },
    { label: "What category do you sell in?", name: "field2" },
    { label: "What's your current monthly revenue?", name: "field3" },
    { label: "What's your monthly Meta Ads budget?", name: "field4" },
    { label: "Is your current ROAS profitable?", name: "field5" },
    { label: "Who currently runs your Meta Ads?", name: "field6" },
    { label: "How would you describe your current ad strategy?", name: "field7" },
    { label: "What are your 1–3 biggest challenges right now?", name: "field8" },
    { label: "What's your goal right now?", name: "field9" },
    { label: "What's your mindset right now?", name: "field10" },
    { label: "Your Name, Email & Phone Number", name: "field11" },
  ];

  const initialValues = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  // Yup validation: min 3 characters
  const validationSchema = Yup.object(
    fields.reduce((acc, field) => {
      acc[field.name] = Yup.string()
        .min(3, "Minimum 3 characters required")
        .required("This field is required");
      return acc;
    }, {})
  );

  const mutation = useMutation({
    mutationFn: async (formDataArray) => {
      const res = await fetch("https://wizon-backend.onrender.com/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataArray),
      });
      if (!res.ok) throw new Error("Failed to send mail");
      return res.json();
    },
  });

  const handleFormSubmit = (values, { resetForm }) => {
    const formDataArray = fields.map((field) => ({
      label: field.label,
      value: values[field.name],
    }));

    const toastId = toast.loading("Sending mail...");

    mutation.mutate(formDataArray, {
      onSuccess: () => {
        toast.update(toastId, {
          render: "Mail sent successfully!",
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        resetForm();
      },
      onError: () => {
        toast.update(toastId, {
          render: "Failed to send mail!",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:px-12 border-4 rounded-lg shadow-lg">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-center md:px-6 font-[500] leading-tight"
      >
        HELP US UNDERSTAND YOUR{" "}
        <span className="text inline-block px-2 sm:px-3 border-2 border-red-500 font-[700] tracking-tight">
          BRAND
        </span>{" "}
        BEFORE THE CALL
      </motion.h2>

      <p className="text-sm sm:text-lg md:text-xl mb-6 md:px-8 text-center text-zinc-800 leading-5 tracking-tight">
        We only work with brands that are ready to scale profitably — and this quick form
        helps us understand if we're the right fit for each other.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            {fields.map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <label className="text-base sm:text-lg md:text-xl mt-4 text-zinc-700 font-medium mb-1">
                  {field.label}
                </label>
                <Field
                  type="text"
                  name={field.name}
                  className="border-b-3 text-base sm:text-lg md:text-xl text text-zinc-700 border-red-500 focus:outline-none focus:border-red-700 py-1"
                />
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </motion.div>
            ))}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting || mutation.isLoading}
              className="mt-6 bg-black w-full sm:w-[70%] md:w-[50%] mx-auto cursor-pointer text-white py-3 md:px-4 rounded-lg hover:bg-gray-900 transition-all text-base sm:text-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {mutation.isLoading ? "Sending..." : "BOOK YOUR FREE STRATEGY CALL"}
            </motion.button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
