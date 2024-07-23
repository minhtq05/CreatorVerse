import { useLocation, useNavigate } from "react-router-dom"

export const useHandleRoot = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const quotes = [
    'Your favorite creators, one universe.',
    'Store, share, smile!',
    'Creators at your fingertips!',
    'Favorite creators, all in one place.',
    'Content heaven awaits.',
  ]
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return {
    location,
    navigate,
    quote,
  }
}