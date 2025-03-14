import { useState } from "react";
import axios from "axios";

const useApplyJob = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const domain = process.env.NEXT_PUBLIC_SITE_URL;

  const sendMail = async (formData) => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await axios.post(
        `${domain}/wp-json/nh/v1/apply/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (response.data && response.data.success) {
        setMessage(
          "Your application has been successfully submitted. We'll get back to you soon.",
        );
      } else {
        setMessage(
          "Your application was sent, but there was an issue with processing. Please try again.",
        );
      }
      return response.data;
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message ||
        "We encountered an issue while submitting your application. Please check your internet connection or try again later.";

      if (err?.response?.status === 400) {
        setError(
          "Please make sure all required fields are filled out correctly.",
        );
      } else if (err?.response?.status === 500) {
        setError(
          "We are experiencing technical difficulties. Please try again later.",
        );
      } else {
        setError(errorMessage);
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { sendMail, loading, message, error, setMessage, setError };
};

export default useApplyJob;
