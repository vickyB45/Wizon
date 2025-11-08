"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useSendMailMutation } from "../../hook/mutations/sendMailQuery";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const validationSchema = Yup.object({
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number")
    .required("Phone is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  brandname: Yup.string().required("Brand Name is required"),
  ads: Yup.string().required("Please select Meta Ads option"),
  budget: Yup.string().required("Monthly Budget is required"),
  disc: Yup.string().required("Please describe your brand and vision"),
});

const ContactSection = () => {
  const { mutateAsync: sendMail } = useSendMailMutation();
  const [loading, setLoading] = useState(false); // 👈 our local loading state

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      brandname: "",
      ads: "",
      budget: "",
      disc: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true); // start loading
        await sendMail(values);
        resetForm();
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false); // stop loading
      }
    },
  });

  return (
    <section className="text-center px-2 py-8 md:px-4 overflow-hidden">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="md:text-3xl text-3xl md:text-[45px] font-[500] tracking-tight text-black mb-10"
        style={{ textShadow: "2px 2px 0 #fffb00" }}
      >
        DROP US A LINE. LET’S BUILD SOMETHING GREAT.
      </motion.h2>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto border-3 border-black rounded-xl p-3 text"
      >
        <form
          onSubmit={formik.handleSubmit}
          className="grid md:grid-cols-2 gap-6 mt-4 text-left"
        >
          {["firstname", "lastname", "phone", "email", "brandname"].map(
            (field, idx) => (
              <div key={idx}>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[field]}
                  className="w-full border-b-[3px] inline-block focus:outline-none text-gray-800 placeholder-gray-400 md:text-3xl text-2xl"
                />
                {formik.touched[field] && formik.errors[field] && (
                  <p className="text-red-500 text-sm">{formik.errors[field]}</p>
                )}
              </div>
            )
          )}

          <div>
            <select
              name="ads"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.ads}
              className="w-full border-b-[3px] focus:outline-none text-gray-400 md:text-3xl text-2xl bg-transparent"
            >
              <option value="">Meta Ads</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            {formik.touched.ads && formik.errors.ads && (
              <p className="text-red-500 text-sm">{formik.errors.ads}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <input
              type="text"
              name="budget"
              placeholder="Monthly Budget"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.budget}
              className="w-full border-b-[3px] focus:outline-none text-gray-800 placeholder-gray-400 md:text-3xl text-2xl"
            />
            {formik.touched.budget && formik.errors.budget && (
              <p className="text-red-500 text-sm">{formik.errors.budget}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <textarea
              name="disc"
              placeholder="Describe your brand and vision"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.disc}
              className="w-full border-b-[3px] focus:outline-none text-gray-800 placeholder-gray-400 md:text-3xl text-2xl"
            />
            {formik.touched.disc && formik.errors.disc && (
              <p className="text-red-500 text-sm">{formik.errors.disc}</p>
            )}
          </div>

          <motion.div
            className="text-center my-4 md:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={!loading ? { scale: 1.03 } : {}}
              whileTap={!loading ? { scale: 0.96 } : {}}
              className={`px-6 md:px-18 py-2 rounded-2xl text-white transition-all duration-200 ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-black shadow-[4px_4px_0_#eddd1d] hover:shadow-[9px_9px_0_#fde047]"
              }`}
            >
              {loading ? "Sending..." : "Contact Now"}
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
