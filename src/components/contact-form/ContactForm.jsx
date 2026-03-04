import { useState } from "react";
import styles from "./contact.module.css";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "ios",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Map the id to the state key (email-id -> email)
    const key = id === "email-id" ? "email" : id;
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing

    // Basic Validation Logic
    if (formData.name.length < 2) {
      alert("Please enter a valid name.");
      return;
    }

    if (!formData.message.trim()) {
      alert("Message cannot be empty.");
      return;
    }

    try {
      // 'collection' tells Firestore which folder to put the data in
      // 'addDoc' creates the document with a random ID
      const docRef = await addDoc(collection(db, "formSubmissions"), formData);
      console.log("Document written with ID: ", docRef.id);
      toast("Your Response has been submitted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setFormData({
        name: "",
        email: "",
        platform: "ios",
        message: "",
      });
    } catch (e) {
      toast.error("An Error Occurred", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error("Error adding document: ", e);
    }

    // Success!
  };

  return (
    <div className={styles.contactSection}>
      <ToastContainer />
      <h3>Contact Us</h3>
      <p>
        If you are interested in playing Masterworks of Horror or to reach out
        for a business opportunity, please fill out the form below.
      </p>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email-id">Email ID</label>
        <input
          id="email-id"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="platform">Platform</label>
        <select id="platform" value={formData.platform} onChange={handleChange}>
          <option value="ios">iOS</option>
          <option value="android">Android</option>
          <option value="pc">PC</option>
          <option value="mac">Mac</option>
        </select>

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
