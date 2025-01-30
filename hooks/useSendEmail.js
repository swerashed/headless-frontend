import { useState } from 'react';
import axios from 'axios';

const useSendMail = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const domain = process.env.NEXT_PUBLIC_SITE_URL;

  const sendMail = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${domain}/wp-json/nh/v1/contact/`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setMessage('Mail sent successfully');
      return response.data;
    } catch (err) {
      setError('Error sending mail');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { sendMail, loading, message, error, setMessage, setError };
};

export default useSendMail;
