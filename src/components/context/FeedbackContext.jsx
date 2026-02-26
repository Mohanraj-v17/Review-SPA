import { createContext, useEffect, useState } from "react";
import axios from "axios";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);


  const fetchFeedback = async () => {
    const response = await axios.get("http://localhost:5000/posts");
    setFeedback(response.data);
  };

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });


  const addFeedback = async (newFeedback) => {
    const response = await axios.post("http://localhost:5000/posts", newFeedback);
    setFeedback([response.data, ...feedback]);
  };


  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };


  const updateFeedback = async (id, updItem) => {
    const response = await axios.put(`http://localhost:5000/posts/${id}`, updItem)
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...response.data } : item))
    )
    setFeedbackEdit({ item: {}, edit: false })
  }


  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`http://localhost:5000/posts/${id}`);
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        updateFeedback,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;